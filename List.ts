import IList from "./IList";

export class List implements IList {
    private _container: any[];
    private _size: number;
    private _limit: number;

    constructor(container: any[], size: number, limit: number) {
        this._container = container;
        this._size = size;
        this._limit = limit;
    }


    get container(): any[] {
        return this._container;
    }

    set container(value: any[]) {
        this._container = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    get limit(): number {
        return this._limit;
    }

    set limit(value: number) {
        this._limit = value;
    }

    listSize(): number {
        return this._size;
    }

    clear(): void {
        this._container = [];
        this._size = 0;
    }

    getElement(index: number): any {
        return this._container[index];
    }

    insert(element: any): void {
        this._container.push(element);
        this._size++;
    }

    remove(index: number): void {
        this._container.splice(index, 1);
        this._size--;
    }

    showList(): void {
        console.table(this._container);
    }
}

