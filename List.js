"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function () {
    function List(container, size, limit) {
        this._container = container;
        this._size = size;
        this._limit = limit;
    }
    Object.defineProperty(List.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (value) {
            this._container = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.listSize = function () {
        return this._size;
    };
    List.prototype.clear = function () {
        this._container = [];
        this._size = 0;
    };
    List.prototype.getElement = function (index) {
        return this._container[index];
    };
    List.prototype.insert = function (element) {
        this._container.push(element);
        this._size++;
    };
    List.prototype.remove = function (index) {
        this._container.splice(index, 1);
        this._size--;
    };
    List.prototype.showList = function () {
        console.table(this._container);
    };
    return List;
}());
exports.List = List;
