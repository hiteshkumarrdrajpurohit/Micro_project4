    
    for(let index=0; index<document.querySelectorAll(".number").length; index++){
        
        document.querySelectorAll(".number")[index].addEventListener('click',(e)=>{
            const num=e.target.innerHTML;
            document.querySelector(".container1").innerHTML+=num;
            // console.log(num);
        })
    }
    document.querySelector("#Reset").addEventListener('click',(e)=>{
        document.querySelector(".container1").innerHTML="0";
    })
    document.querySelector("#Evaluation").addEventListener('click',(e)=>{
        let Evaluation=document.querySelector(".container1").innerHTML;
        const SignCheck=Evaluation.charAt(Evaluation.length-1);
        if(SignCheck=="*"||SignCheck=="-"||SignCheck== "/" || SignCheck=="+" ){
            document.querySelector(".container1").innerHTML="Invalid Input";
        }
        else{
            document.querySelector(".container1").innerHTML=eval(Evaluation);
        }
       
    })
    document.querySelector("#Delete").addEventListener('click',(e)=>{
       
        Evaluation=document.querySelector(".container1").innerHTML;
         Evaluation=Evaluation.substring(0,Evaluation.length-1);
         document.querySelector(".container1").innerHTML=Evaluation;
       
    })
    for(let index=0; index<document.querySelectorAll(".Operator").length; index++){
        
        document.querySelectorAll(".Operator")[index].addEventListener('click',(e)=>{
           let str=document.querySelector(".container1").innerHTML;
            const last_op=str.charAt(str.length-1);
            console.log(document.querySelector(".container1").innerHTML.charAt(1));
            if(last_op=="+" ||last_op =="-" || last_op=="/" || last_op=="*"  ){
                document.querySelector(".container1").innerHTML=str.substring(0,str.length-1);
                console.log("Hi");

            }
            document.querySelector(".container1").innerHTML+=e.target.innerHTML;
            
        })
    }
