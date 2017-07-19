let Chatroom=new Map();
let Music_users=new Set(['tanmay','amit']);
let Music_msg=['hi','hello'];
let Dance_msg=['namaste','namaskar'];
let Dance_users=new Set(['Ivan','tom']);
Chatroom.set('Music_Users',Music_users);
Chatroom.set('Music_msg',Music_msg);
Chatroom.set('Dance_Users',Dance_users);
Chatroom.set('Dance_msg',Dance_msg);
function getUsers(chatroom_name){
    let arr=Chatroom.get(chatroom_name);
    console.log('Users',arr);
}
function listMessagess(Chatroom_name){

}
listMessages
export function testMap_Set(){
   getUsers('Music_Users');
   getUsers('Dance_Users');
   listMessagess('Music_msg');

}