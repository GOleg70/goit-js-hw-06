class Storage {
    #items;
    constructor(items) {
        this.#items = items;
}
// — повертає масив поточних товарів у приватній властивості items.
    getItems() { 
        return this.#items;
    }
//— приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
    addItem(newItem) {
        this.#items.push(newItem);
     }
// — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
    removeItem(itemToRemove) { 
        const index = this.#items.indexOf(itemToRemove)
        if (index >= 0) {
            this.#items.splice(index,1) ;
        };

    }
   

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
