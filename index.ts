import { v4 as uuidv4 } from 'uuid'


abstract class InventoryItem {
    private id: string = uuidv4()
    private name: string
    private price: number
    private description: string

    constructor(name: string, price: number, description: string) {
        this.id = uuidv4()
        this.name = name
        this.price = price
        this.description = description
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }

    getDescription(): string {
        return this.description
    }
}

//Weapon child class that extends InventoryItem
class Weapon extends InventoryItem {
    private damage: number //damage value of the weapon
    private range: number

    constructor(name: string, price: number, description: string, damage: number, range: number) {
        super(name, price, description)
        this.damage = damage
        this.range = range
    }

    getDamage(): number {
        return this.damage
    }

    setDamage(damage: number) {
        this.damage = damage
    }

    getRange(): number {
        return this.range
    }

    setRange(range: number) {
        this.range = range
    }

}

//Armor child class that extends InventoryItem
class Armor extends InventoryItem {
    private defense: number

    constructor(name: string, price: number, description: string, defense: number) {
        super(name, price, description)
        this.defense = defense
    }

    getDefense(): number {
        return this.defense
    }

    setDefense(defense: number) {
        this.defense = defense
    }
}

class Character {
    private id: string = uuidv4()
    private name: string
    private archtype: string
    private fightingStyle: 'melee' | 'ranged'
    private inventory: InventoryItem[] = []

    constructor(name: string, archtype: string, fightingStyle: 'melee' | 'ranged') {
        this.id = uuidv4()
        this.name = name
        this.archtype = archtype
        this.fightingStyle = fightingStyle
        this.inventory = []
    }

    getName(): string {
        return this.name
    }

    getArchtype(): string {
        return this.archtype
    }

    getFightingStyle(): 'melee' | 'ranged' {
        return this.fightingStyle
    }

    getInventory(): InventoryItem[] {
        return this.inventory
    }

    setName(name: string) {
        this.name = name
    }

    setArchtype(archtype: string) {
        this.archtype = archtype
    }

    setFightingStyle(fightingStyle: 'melee' | 'ranged') {
        this.fightingStyle = fightingStyle
    }

    setInventory(inventory: InventoryItem[]) {
        this.inventory = inventory
    }

    ///////////////// character class methods:

    //take an object of InventoryItem Type and add the item to the character's inventory
    addToInventory(item: InventoryItem) {
        this.inventory.push(item)
    }

    // take an object of InventoryItem Type and remove all instances of the item from the character's inventory
    removeFromInventory(item: InventoryItem) {
        this.inventory = this.inventory.filter((i) => i !== item)
    }

    //take an object of InventoryItem Type and a quantity of the item to remove
    removeQuantityFromInventory(item: InventoryItem, quantity: number) {
        const index = this.inventory.indexOf(item)
        if (index !== -1) {
            for (let i = 0; i < quantity; i++) {
                this.inventory.splice(index, 1)
            }
        }
    }

    //calculate the total value of all items in the character's inventory and return that value
    inventoryValue(): number {
        return this.inventory.reduce((total, item) => total + item.getPrice(), 0)
    }

    //console log the items in the character's inventory
    printInventory() {
        this.inventory.forEach((item) => {
            console.log(`
            Name: ${item.getName()}, 
            Price: ${item.getPrice()}, 
            Description: ${item.getDescription()}`)
        })
    }
}


class Inventory {
    private items: InventoryItem[] = []

    constructor() {
        this.items = []
    }

    getItems(): InventoryItem[] {
        return this.items
    }

    setItems(items: InventoryItem[]) {
        this.items = items
    }
}

class Shop {
    private items: InventoryItem[] = []

    constructor() {
        this.items = []
    }

    getItems(): InventoryItem[] {
        return this.items;
    }

    setItems(items: InventoryItem[]) {
        this.items = items
    }
    
}

///////// shop (initial shop items)
    //create three (3) Items and add them to the list of items in the shop
const shop = new Shop()
const shop1 = new Weapon('sword', 100, 'iron sword', 75, 10)
const shop2 = new Weapon('bow and arrow', 75, 'carved wood', 50, 25)
const shop3 = new Armor('hauberk', 50, 'full body', 0)

    //test

const character = new Character("Geralt", "Witcher", "melee")
character.addToInventory(shop1)
character.addToInventory(shop2)
character.addToInventory(shop3)

console.log(character.printInventory())
const removed = character.removeFromInventory(shop2)
console.log(character.printInventory())




