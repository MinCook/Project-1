const input=document.querySelector("[input-img]")
const image = document.querySelector("[image]")
const btnX =document.querySelector(".X")
input.addEventListener("change",(e)=>{
    image.classList.add("image--show")
    const [file] = input.files
    if (file) {
        btnX.classList.add("O")
        image.src = URL.createObjectURL(file)
    }
    
})

btnX.addEventListener("click",()=>{
   image.src=""
   input.value=""
    image.classList.remove("image--show")
    btnX.classList.remove("O")
})