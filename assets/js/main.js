let aName = ["mook", "koom", "okmo", "moko","ookm","oomk"];

for(let i = 0; i < aName.length; i++){
    console.log(aName[i])
}

let isMook = false;
let isKoom = false;
let isDuke = false;

for(let i = 0; i < aName.length; i++){
    if(aName[i] === "mook"){
        isMook = true;
    }
}
