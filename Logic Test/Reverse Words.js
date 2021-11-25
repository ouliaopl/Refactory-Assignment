// let str = "I am A Great human"
let sl = str.length
let array = []
for(let i=0; i<sl; i++){
    if(str.charAt(i)===str.charAt(i).toUpperCase()){
        array.push(1)
    }
    else{
        array.push(0)
    }
}

let splitstr = str.toLowerCase().split(" ")
let array2 = []

for(let i=0; i<splitstr.length; i++){
    let rev = splitstr[i].split("").reverse()
    rev = rev.join("")
    array2.push(rev)
}
let str2 = array2.join(" ")
let strFinal = ""

for(let i=0; i<sl; i++){
    if(array[i]===1){
        strFinal = strFinal + str2.charAt(i).toUpperCase() 
    }
    else{
        strFinal = strFinal + str2.charAt(i)
    }
}
console.log(strFinal)