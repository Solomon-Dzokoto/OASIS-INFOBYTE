 
  const btns = document.querySelectorAll(".btn");
  const display = document.getElementById('result')
  const sample = document.querySelector('.sample')
   
  btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      const value = btn.innerText
      if(value=== "clear"){
          display.innerText = ""
          sample.innerText = "0"
      }else if(value === "del"){
          sample.innerText = sample.innerText.slice(0, -1) || "0";  
      }else if(value==="ans"){
        sample.innerText += display.innerText
      }else if (value === "√"){
        try{
          sample.innerText = Math.sqrt(eval(sample.innerText)||parseFloat(display.innerText)).toString()
        }catch(e){
         display.innerText = "Error"
         sample.innerText = ""
        }
      }else if(value === "±"){
        try{
          display.innerText = -(eval(sample.innerText) || parseFloat(display.innerText)).toString()
        }catch(e){
          display.innerText = "Error"
         sample.innerText = ""
        }
         
      }else if(value === "%"){
        try{
          display.innerText = eval(sample.innerText)/100
        }catch(e){
          display.innerText = "Error"
          sample.innerText = ""
        }
         
      }else if(value === "Enter"){
        try{
          display.innerText = eval(sample.innerText.replaceAll("x","*").replaceAll("÷","/").toString())
          sample.innerText = display.innerText
        }catch(e){
          display.innerText = "Error"
        }       
      }else{
        if(sample.innerText === "0")sample.innerText =""
        sample.innerText += value
      }
    })
  })
