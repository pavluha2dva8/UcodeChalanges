class LinkedList {
    constructor(data) {
        this.data = { ...data }
        this.next = 0
    }
    add(value) {
        let item = 0
        let newObj = {}

        for (let n of this) {
            newObj[item] = n
            item++
        }
        newObj[item] = value
        return this.data = newObj
    }
    remove(value) {
        let count = 0;
        let obj = {};
        let find = false;
        for (const item of this) {
            if (item == value && find == false) {
                find = true;
                continue;
            }
            find = false
            obj[count] = item;
            count++;
        }
        this.data = obj;
    }
    contains(value) {
        for (let n of this) {
            if (n == value) {
                return true
            }
        }
        return false
    }
    clear() {
        this.data = {}
    }
    count() {
        let current = 0
        for (let n of this) {
            current++
        }
        return current
    }
    log() {
        let arr = Array.from(this)
        console.log(arr.join(', '))
    }
    [Symbol.iterator] = () => {
        return {
            current: this.next,
            data: this.data,
            next() {
                if (this.data[this.current] == undefined) {
                    return { done: true }
                } else {
                    return { done: false, value: this.data[this.current++] }
                }
            }
        }
    }
}

function createLinkedList(array) {
    return new LinkedList(array)
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100])
ll.log()
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100)); 
ll.log()
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log()
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10))
// "true"
let sum = 0
for (const n of ll) {
    sum += n
}
console.log(sum)
// "25"
ll.clear()
ll.log()
// ""