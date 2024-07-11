//script to run the program and give it the logic

//
function dis(val){
    document.getElementById("result").value+=val;
}

//to input the values in the text box 
function myFunction(event){
    if(event.key=='0'||event.key=='1'||event.key=='2'
       ||event.key=='3'||event.key=='4'||event.key=='5'
    ||event.key=='6'||event.key=='7'||event.key=='8'
    ||event.key=='9'||event.key=='0'||event.key=='+'
    ||event.key=='*'||event.key=='/'||event.key=='-')

    document.getElementById("result").value+=event.key;
}

let cal=document.getElementById("calc");
cal.onkeyup=function(event){
    if(event.keyCode===13){
        console.log("enter");
        let x=document.getElementById("result").value;
        console.log(x);
        solve();
    }
}

//function to evaluate the digits and then return the result
function solve(){
    let x=document.getElementById("result").value;
    let y=math.evaluate(x)
    document.getElementById("result").value=y;
}
//function to return the clear screen

function clr(){
    document.getElementById("result").value=""
}