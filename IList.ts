interface IList {
    listSize(): number;
    clear(): void;
    getElement(index: number): any;
    insert(element: any): void;
    remove(index: number): void;
    showList(): void;
}

export default IList;