export function testArrowFunc()
{
    var names=["tanmay","sharma","hingoli"];
    var output= [];
    output = names.map(
        (name)=>{
            var a={myname:name,string_length:name.length};
            return a;
        }
    );
    console.log(output);
}