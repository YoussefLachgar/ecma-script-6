// let,const 

// let 

// var 

// const  

// let is a code block scope
function letTest(){
    let x = 1;

    if(true){
        let x = 2;

        console.log(x);
    }

    console.log(x);
    return "Done";
}

console.log(letTest());
//2
//1
//Done 
