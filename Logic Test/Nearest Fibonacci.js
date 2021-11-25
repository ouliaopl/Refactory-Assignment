// let arr = [15,1,3]
let num = 0
for(let i=0; i<arr.length; i++){
    num = num + arr[i]
}
let fib = [1,1]

for( let i = 1; i <= 10000; i++){
    fib.push(fib
        [i]+fib[i-1])
}
let x = null
let a1 = null
let a2 = null
for (let i=0; i<= 10000; i++){
    let a = fib[i]
    let b = fib[i+1]
    a1 = a - num
    a2 = b - num
    if(a2 > 0){break; }
}
if(a2 > Math.abs(a1)){
    x = a1
}
else{
    x = a2
}
console.log("output =", x)