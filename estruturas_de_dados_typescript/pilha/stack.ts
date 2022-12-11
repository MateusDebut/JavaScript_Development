export class Stack{
    private _top!: Node;
    private _size: number = 0;

    push(id: number, name: string): void{
        let node: Node = new Node(id, name);
        if(this._size === 0){
            this._top = node;
        }else{
            node.previous = this._top;
            this._top = node;
        }
        this._size++;
    }

    pop(): Node | null{
        if(this._size === 0){
            return null;
        }
        this._size--;
        let aux = this._top;
        this._top = this._top.previous;
        return this._top;
    }

    get top(): Node | null {return this._top}
}

class Node{
    private _previous: Node

    constructor(
        private _id: number,
        private _name: string,
    ) {}

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get previous(): Node { return this._previous;}

    set id(value: number) {this._id = value; }
    set name(value: string) {this._name = value; }
    set previous(value: Node) {this._previous = value; }
}