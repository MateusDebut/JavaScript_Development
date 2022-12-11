"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this._size = 0;
    }
    Stack.prototype.push = function (id, name) {
        var node = new Node(id, name);
        if (this._size === 0) {
            this._top = node;
        }
        else {
            node.previous = this._top;
            this._top = node;
        }
        this._size++;
    };
    Stack.prototype.pop = function () {
        if (this._size === 0) {
            return null;
        }
        this._size--;
        var aux = this._top;
        this._top = this._top.previous;
        return this._top;
    };
    Object.defineProperty(Stack.prototype, "top", {
        get: function () { return this._top; },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
exports.Stack = Stack;
var Node = /** @class */ (function () {
    function Node(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Node.prototype, "id", {
        get: function () { return this._id; },
        set: function (value) { this._id = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previous", {
        get: function () { return this._previous; },
        set: function (value) { this._previous = value; },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
