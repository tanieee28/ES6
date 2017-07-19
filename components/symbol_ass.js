var curr_no=Symbol();
 var prev_no=Symbol();
class Fibonacci
{
    constructor(){
    
        this[curr_no]=0
        this[prev_no]=1;
    }
    next()
    {
        var add=0;
        add=this[prev_no]+this[curr_no];
        this[prev_no]=this[curr_no];
        this[curr_no]=add;
        return add;
    }        
}
export function testSymbol(){
    let next_fibonacci=new Fibonacci();
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
    console.log(next_fibonacci.next());
}