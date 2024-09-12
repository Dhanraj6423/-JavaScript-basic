//dates

let myDate = new Date()
// console.log(myDate.toString ());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

let myCretedDate = new Date(2024, 0, 4)
console.log(myCretedDate.toDateString());


let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekdays: "long",
})