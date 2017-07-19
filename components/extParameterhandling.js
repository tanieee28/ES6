function add(message='Hello',name='World!!'){
    console.log(message,name);
}
function userFriends(username,...userFriendsList){
    console.log(username,' has ',userFriendsList.length,' Friends');
    console.log('Name:',userFriendsList);
}
function printCapitalNames(name1,name2,name3,name4,name5){
    console.log(name1,name2,name3,name4,name5);
}
export function testExtParameterHandling(){
//add('hello','Tanmay');
//userFriends('tanmay','amit','abhishek','vaibhav');
let friends=['tanmay','amit','abhishek','vaibhav','You'];
printCapitalNames(...friends);
}