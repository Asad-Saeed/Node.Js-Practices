const EventEmitter=require("node:events")

class PizaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNumer=0
    }
    order(size,topping){
        this.orderNumer++
        this.emit("order-pizza",size,topping)
    }
    displyaOrder(){
        console.log(`Current order number = ${this.orderNumer}`)
    }
}
module.exports= PizaShop;



