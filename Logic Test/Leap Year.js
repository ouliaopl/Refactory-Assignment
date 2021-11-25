// let arr = [1900,2020]

let array = []
let start = arr[0]
let end = arr[1]
for( let i = start; i <= end; i++){
    array.push(i)
}
// console.log(array)
// console.log(array.length)
let array2 = []
for (let i = 0; i <= array.length; i++){
    if((array[i]%100 === 0 && array[i]%400===0)||
    (array[i]%100 !== 0 && array[i]%4===0) ){
        array2.push(array[i])
    }
}
console.log(array2)