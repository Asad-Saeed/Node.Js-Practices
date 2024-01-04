const EventEmitter=require("node:events")

// retrun a methd 
const emmitter=new EventEmitter()

// on is a method with 2 parameters {eventname,callback}
emmitter.on("order-pizza",(size,topping)=>{
    console.log(`I have order ${size} pizza with ${topping}`)
})

emmitter.on("order-pizza",(size)=>{
if(size===size){
    console.log("Serve drinks free with large pizza")
}
})

// Node js is Non blocking this console run before event
console.log("Non blocking")
// Event emit mean create
emmitter.emit("order-pizza","Large","chlees")


//////////////////////////////////////// Part 2 //////////////////////
const PizaShop =require("./events2");
const Drink =require("./event3")

const pizza =new PizaShop()
const DrinkMachine=new Drink()
// Atteced listner
pizza.on("order-pizza",(size,topping)=>{
    console.log(`I have order ${size} pizza with ${topping}`)
    DrinkMachine.servingDrink("large")
})

pizza.order("large","mushrooms")
pizza.displyaOrder()


//  All methodes available in Events module
emmitter.addListener("order-pizza",(size,topping)=>{
    console.log(`AddListener ${size} and ${topping}`)
})
console.log("eventNames",emmitter.eventNames())
console.log("getMaxListeners",emmitter.getMaxListeners())
console.log("listenerCount",emmitter.listenerCount())
console.log("listeners",emmitter.listeners("order-pizza"))
console.log("once",emmitter.once("order-pizza",(size,topping)=>{
    console.log(`AddListener ${size} and ${topping}`)
}))
// console.log("prependListener",emmitter.prependListener("order-pizza"))
// console.log("prependOnceListener",emmitter.prependOnceListener("order-pizza"))
console.log("setMaxListeners",emmitter.setMaxListeners(20))
console.log("removeListener",emmitter.removeListener("order-pizza",(size,topping)=>{
    console.log(`AddListener ${size} and ${topping}`)
}))
console.log("RemoveAllListeners",emmitter.removeAllListeners("order-pizza"))

