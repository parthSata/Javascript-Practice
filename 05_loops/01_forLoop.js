const array = [ 1, 2, 3, 4, 5];

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element)
}


for (let i =1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop : ${j}`)

        // console.log(`${i} * ${j} = ${i * j} `)
    }    
}

for (let i = 0; i <= 10; i++) {
    // if(i == 5){ 
    //     console.log("Break loop ...")
    //     break
    // }
    if(i == 5){ 
        // console.log("Continue loop ...")
        continue
    }

    // console.log(i)
}

const array2 = [ 1, 2, 3, 4, 5];

for (let i = 1; i <= array2.length ; i++) {
    const element = array2[i]
    console.log(element)
}