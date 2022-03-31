const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
   number.addEventListener("Click", (event) => {
    console.log(event.target.value)
   })
    
}) 
