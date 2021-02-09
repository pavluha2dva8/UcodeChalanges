class Access{
    #mark_LXXXV = 'undefined';
    constructor(mark_LXXXV) {
        this.#mark_LXXXV = mark_LXXXV;
    }

    get mark_LXXXV(){
        return this.#mark_LXXXV;
    }
    
    set mark_LXXXV(mark_LXXXV){
        if(mark_LXXXV === undefined){
            return 'undefined';
        } else if(mark_LXXXV === null){
            return 'null';
        }
        this.#mark_LXXXV = mark_LXXXV;
    }
}

module.exports = Access;