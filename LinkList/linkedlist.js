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
    pop(){
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
    unshift(value){
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;}
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;}
    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--        
        if(this.length == 0){
        this.tail = null;
        }
        return temp;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i <= index; i++){
            temp = temp.next;
        }
        return temp;                        
    }
    set(index, value){
        let temp = this.get(index);
        if(temp){
        temp.value = value;
        return true
        }
        return false;
    }
    insert(index, value){
    if(index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value);
    if(index < 0 || index > this.length) return false;
    let temp = this.get(index - 1)
    let newNode = new Node(value)
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
    }
    remove(index){
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    if(index < 0 || this.length <= index) return undefined;
    let temp = this.get(index);
    let pre = this.get(index-1)
    pre.next = temp.next;
    temp.next = null;
    this.length--
    return temp
    }
    reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    pre = null;
    let next = temp.next;
    for(let i = 0; i < this.length; i++){
    next = temp.next;
    temp.next = pre;
    pre = temp;
    temp = next;
    }
    return this
    }
}
const list = new LinkedList(5)
list.push(6)
list.push(7)
list.push(9)
console.log(list)
