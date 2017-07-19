function* armstrong(){
    let num=1;
        while(true){
            let temp=num;
            let result=0;
            while(temp>0){
                result+=parseInt(Math.pow(temp%10,3));     
                temp=parseInt(temp/10);     
            }
            if(num===result){ 
                 temp=num;
                num++;
                let flag=yield temp;  
                if(flag==="reset")
                    num=0;
            }
            num++;                   
        }
}
export function testGenerator(){
    let arm_gen=armstrong();
    console.log('NEXT Armstrong',arm_gen.next());
    console.log('NEXT Armstrong',arm_gen.next());
    console.log('NEXT Armstrong',arm_gen.next("reset"));
     if((arm_gen.next().value)===100)
    {
        arm_gen.throw(new Error("Error Generated"));
    }
    console.log('NEXT Armstrong',arm_gen.next());
   
}