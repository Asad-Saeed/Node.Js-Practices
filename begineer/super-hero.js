class SuperHero{
constructor(name){
    this.name=name;
}
getName(){
    return this.name;
}
setName(name){
    this.name=name;
}
}
// Instance export
// module.exports=new SuperHero("Batman");
// class export
module.exports=SuperHero;
