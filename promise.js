// var promise1= new Promise(function(resolve,reject){
//     const x=10;
//     const y=10;
//     if(x==y){
//         resolve();}
//     else
//     reject();


// });
// promise1.
// then(function(){
//     console.log("equal");
// },
// function(){
//     console.log("not equal");
// });


// var promise1= new Promise(function(resolve,reject){
//     const x=10;
//     const y=1;
//     if(x==y){
//         resolve("success");
//     }
//     else{
//         reject("failed");
//     }

// });
// promise1.
// then(function(msg){
//     console.log(msg);
// }).
// catch(function(msg){
//     console.log(msg);
// });

//ASYNC AND AWAIT

async  function f()  {
   let promise=new Promise((resolve,reject)=>{
        var x=4;
        var y=6;
        setTimeout(() => {
            if(x==y){
                resolve("done!");
            
            }
            else{
                reject("rejeced") }
        },1000)
    });
    await promise.
    then (function(msg){
        console.log(msg);
    }).
    catch (function(err){
        console.log(err);
    });
}
f();