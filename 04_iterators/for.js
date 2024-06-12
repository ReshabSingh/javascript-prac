
// const array = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i <=  10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

// break and continue are used to break the control flow of the execution of the iterators
// break --> control is shifted from the exisiting to the next part
// continue --> skips the current value and resumes execution


for (let i = 0; i < 10; i++) {
    // const element = array[i];

    if (i == 5) {
        // continue
        break
    }
    console.log(`Value of i is ${i}`);
    
}