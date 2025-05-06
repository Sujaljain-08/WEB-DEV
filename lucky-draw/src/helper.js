function tic_num(){
     return Math.floor(Math.random()*10);
}

function genTicket(n){
    console.log("fuc");
    let arr=[];
    for(let i=0;i<n;i++){
        arr[i]=tic_num();
    }
    return arr;
}
function sum_arr(arr){
    console.log("sum called");
    let sum=0;
   for(let i=0;i<arr.length;i++){
    sum+=arr[i];
   }
   return sum;
}
 
export {genTicket,sum_arr};