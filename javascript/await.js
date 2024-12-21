async function test(){
    x=await 10+20;
    console.log("Inside of the function")
    return x;
}
let result=test();
result.then((data)=>{
    console.log(data)
})