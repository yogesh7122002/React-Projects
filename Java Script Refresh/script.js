// console.log("Yogesh");
// const arr = [1, 2, 3, 4, 5]
// const temp = arr.forEach((item) => {
//     // console.log(item);
//     if (item === 1) {
//         // console.log("This is one")
//         return item

//     }
// })
// console.log(temp)



// Filter Method

// const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const values = ar.filter((num) => {
// //     if (num > 4) {
// //         return num
// //     }
// // })

// const values = ar.filter((item) => item > 4)
// console.log(values)


const arr = [12, 3, 4, 5, 3, 2, 432]

let temp = arr
            .map((num) => num+10)
            .filter((num)=> num>13)
console.log(temp)