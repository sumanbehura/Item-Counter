

let Finalcount = document.getElementById("count-pl")
let Savebtn= document.getElementById("savebt")
let count = 0


function increment() {
    count+=1
    Finalcount.textContent = count
}



function save() {
    finalSave= count+" - "
    
    Savebtn.textContent+= finalSave
    
    Finalcount.textContent= 0
    count = 0
    
 
    
}

