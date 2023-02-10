let product = class Product{
    constructor(name, description, price, pic){
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic;
    }

    getPic(){
        return this.pic;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getName(){
        return this.name;
    }

    setPic(pic){
        this.pic = pic;
    }
    setDescription(description){
        this.description = description;
    }
    setPrice(price){
        this.price = price;
    }
    setName(name){
        this.name = name;
    }
    
}

module.exports = product;