const form = document.querySelector('.form') ;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    //grabbing the DOM elements(values)
    const desc = document.getElementById('desc').value ;
    const display = document.querySelector(".display")
    const title = document.getElementById('title').value ;
    
    const list = document.createElement("li")
    list.className = "list"
    const h2 = document.createElement('h6')
    h2.innerText = title
    const p = document.createElement('p')
    p.innerText = desc.substr(0,25) + "..."
    const delBtn = document.createElement('span')
    delBtn.className = "delBtn"
    delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    
    //deletes the list form the DOM
    delBtn.addEventListener("click",()=>{
        display.removeChild(list)
    })
    
    //render the list elements 
    list.appendChild(h2)
    list.appendChild(p)
    list.appendChild(delBtn)

    //display the list in the dom 
    display.appendChild(list)

    //clear the both input and textarea
    document.getElementById('title').value = ""
    document.getElementById("desc").value = ""

})


