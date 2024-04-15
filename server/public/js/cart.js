const table = document.querySelector("table")
const th = table.querySelectorAll("th[price]")
const total = document.querySelector("[total]")
var sum =0
th.forEach(item =>{
   const price = parseInt(item.getAttribute("value"))
   sum+= price
})
total.innerHTML += `$`+sum

const deleteBtn = document.querySelectorAll("[delete]")
const h2 = document.querySelector("h2")
const userValue=btn.getAttribute("user")
deleteBtn.forEach(btn =>{
    btn.addEventListener("click", (e) =>{
        const id = btn.getAttribute("id");
        if(userValue){
            window.location.href =`/user/cart/${id}`
        }
        else{
            window.location.href =`/cart/${id}`
        }
        
    })
})
const btnOrder = document.querySelector("button[order]")
const formOrder = document.querySelector("form[order]")
btnOrder.addEventListener("click", (e) =>{
    formOrder.submit()
})

const updateBtn = document.querySelectorAll("input[quantity]")
updateBtn.forEach(btn=>{
    btn.addEventListener("change",()=>{
        // const product_id = btn.getAttribute("product_id")
        // console.log(product_id)
        const value = btn.getAttribute("value")
    })
})

