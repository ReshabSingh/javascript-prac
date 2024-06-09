let a = 300

// Block scope and global scope

if (true) {
    let a = 55
    // console.log(a);
}

// console.log(a);

// Nested scope

function one(){
    const username = "reshab"
    
    function two(){
        const website = "reddit"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

