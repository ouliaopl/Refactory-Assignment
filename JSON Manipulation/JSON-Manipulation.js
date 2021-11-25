// let inv = [
//   {
//     "inventory_id": 9382,
//     "name": "Brown Chair",
//     "type": "furniture",
//     "tags": [
//       "chair",
//       "furniture",
//       "brown"
//     ],
//     "purchased_at": 1579190471,
//     "placement": {
//       "room_id": 3,
//       "name": "Meeting Room"
//     }
//   },
//   {
//     "inventory_id": 9380,
//     "name": "Big Desk",
//     "type": "furniture",
//     "tags": [
//       "desk",
//       "furniture",
//       "brown"
//     ],
//     "purchased_at": 1579190642,
//     "placement": {
//       "room_id": 3,
//       "name": "Meeting Room"
//     }
//   },
//   {
//     "inventory_id": 2932,
//     "name": "LG Monitor 50 inch",
//     "type": "electronic",
//     "tags": [
//       "monitor"
//     ],
//     "purchased_at": 1579017842,
//     "placement": {
//       "room_id": 3,
//       "name": "Lavender"
//     }
//   },
//   {
//     "inventory_id": 232,
//     "name": "Sharp Pendingin Ruangan 2PK",
//     "type": "electronic",
//     "tags": [
//       "ac"
//     ],
//     "purchased_at": 1578931442,
//     "placement": {
//       "room_id": 5,
//       "name": "Dhanapala"
//     }
//   },
//   {
//     "inventory_id": 9382,
//     "name": "Alat Makan",
//     "type": "tableware",
//     "tags": [
//       "spoon",
//       "fork",
//       "tableware"
//     ],
//     "purchased_at": 1578672242,
//     "placement": {
//       "room_id": 10,
//       "name": "Rajawali"
//     }
//   }
// ]
let ArrMR = []
function mr(x){
    if(x.placement.name === "Meeting Room"){
        ArrMR.push(x.name)
    }
}
inv.forEach(mr)
console.log("1. Items in the meeting room:"+ ArrMR)

let ArrELEC = []
function elec(x){
    if(x.type === "electronic"){
        ArrELEC.push(x.name)
    }
}
inv.forEach(elec)
console.log("2. Items of electronic type:"+ ArrELEC)

let ArrFUR = []
function fur(x){
    if(x.type === "furniture"){
        ArrFUR.push(x.name)
    }
}
inv.forEach(fur)
console.log("3. Items of furniture type:"+ ArrFUR)

let ArrDATE = []
function dat(x){
    newdate = new Date(x.purchased_at * 1000).toDateString()
    newdate = newdate.split(" ")
    newdate.shift();
    newdate = newdate.join(" ")
  
    if(newdate === "Jan 16 2020"){
        ArrDATE.push(x.name)
    }
}
inv.forEach(dat)
console.log("4. Things which were bought at 16 Jan 2020:"+ ArrDATE)


let ArrBRO = []
function bro(x){
    if(x.tags.includes("brown")){
        ArrBRO.push(x.name)
    }
}
inv.forEach(bro)
console.log("5. Items with brown tags:"+ ArrBRO)











