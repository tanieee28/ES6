var LaptopDetails={
    model:'Lenovo-Z 50-70',
    emp_id:100,
    name:'tanmay'
}
export function testTempLiterals(){
    let ticket=`Hello Sysnet,
    My name is '${LaptopDetails.name}'
    My Employee ID is ${LaptopDetails.emp_id}
    laptop model number is '${LaptopDetails.model}'
    I got a problem in using internet`;
    console.log(ticket);
}