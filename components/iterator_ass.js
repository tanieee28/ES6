let Armstrong={
    [Symbol.iterator](){
        let num=1;
        return{
        nextArmstrong(){
            while(true){
                let temp=num;
                let result=0;
                while(temp>0)
                    {
                        result+=parseInt(Math.pow(temp%10,3));     
                        temp=parseInt(temp/10);     
                    }
                if(num===result){ 
                    temp=num;
                    num++;
                    return{done:false,number:temp};  
                     
                }
                num++;                   
            }
 
        }
    }
    }
}
export function testIterator(){
    let itr=Armstrong[Symbol.iterator]();
    console.log('NEXT Armstrong',itr.nextArmstrong());
    console.log('NEXT Armstrong',itr.nextArmstrong());
    console.log('NEXT Armstrong',itr.nextArmstrong());
}