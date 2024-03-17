// let,const 

// let 

// var 

// const  

// var is a function scope
function varTest(){
    var x = 1;

    if(true){
        var x = 2;

        console.log(x);
    }

    console.log(x);
    return "Done";
}

console.log(varTest());
//2
//2
//Done 
