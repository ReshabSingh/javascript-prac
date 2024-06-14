const myarr = [1,2,3,4,5,6]

// myarr.forEach( function (item){
//     console.log(item);
// } )

// myarr.forEach((Value) => {

//     console.log(Value);
// } )

// function Printme(item){
//     console.log(item);
// }

// myarr.forEach(Printme)

// myarr.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })
 

// Iteration on Array of objects

const myarray = [
    {
        languange:"Javascript",
        lngfile:"js"
    },
    {
        languange:"C++",
        lngfile:'cpp'

    },
    {

        languange:'python',
        lngfile:"py"
    }
]

myarray.forEach( (item)=>{
    console.log(item.languange);
})