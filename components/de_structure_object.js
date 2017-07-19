var friends=['tanmay','amit','abhishek','vaibhav','You'];
var org={
    name:'Xoriant',
    address:{
        street:'baner rd',
        pin:123456,
    }
};
export function testDeStructuringObjects(){
    let[c]=friends;
    console.log('third value is',c);
    /*let {address:{pin}}=org;
    console.log('Pin Address is',pin);*/

}