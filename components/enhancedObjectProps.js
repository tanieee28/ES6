var Order={
        id:100,
        title:'Laptop',
        price:40000,
        printOrder(){
        console.log("a:",Order);
        },
        getPrice(){
        console.log("Price:",this.price);
    }
}
    
export function testObjectProps(){
    //Order.printOrder();
    //Order.getPrice();
    var newOrderObject=Object.assign({},Order);
    //console.log(newOrderObject);
    console.log(Order.getPrice());
}