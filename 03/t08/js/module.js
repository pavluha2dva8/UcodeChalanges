// You must run LiveServer, to see result

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

export function createLinkedList(array) {
    return new LinkedList(array)
}

// You must run LiveServer, to see result