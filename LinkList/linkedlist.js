console.clear()

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++;
        return this
    }
    pop(value){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre =  temp;
        while(temp.next){
            pre = temp;
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.leagth === 0){
        this.head = null;
        this.tail = null;
        }
        return temp;
    }
}
const list = new LinkedList(5)
list.push(6)
list.push(7)
list.push(9)
console.log(list)
