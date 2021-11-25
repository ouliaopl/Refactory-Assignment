// const word = "Radar"
    
let y = word.toLowerCase()
let x = y.split("")
x = x.reverse()
x=x.join("")
if(x === y){
    console.log(word+"     # --> palindrome")
    }
else{
    console.log(word+"     # --> not palindrome")
    }

