const buttonStatus = document.querySelectorAll("[status]");
buttonStatus.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
    const id =btn.getAttribute("id");
    const status =btn.getAttribute("status");
    const form = document.querySelector("#changeStatus")
    const path = form.getAttribute("path");
    const action = path + `/${id}/${status}` +`/?_method=patch`;
    form.action = action;
    form.submit();
    })
})


const buttonDelete = document.querySelectorAll("[deleted]");
buttonDelete.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
    const id =btn.getAttribute("id");
    const form = document.querySelector("#deleted");
    const path = form.getAttribute("path");
    const action = path + `/${id}` +`/?_method=patch`;
    form.action = action;
    form.submit();
    })
})

const buttonEdited = document.querySelectorAll("[edited]");
buttonEdited.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
    const id =btn.getAttribute("id");
    const form = document.querySelector("#edited");
    const path = form.getAttribute("path");
    const action = path + `/${id}` ;
    form.action = action;
    form.submit();
    })
})

const buttonViewed = document.querySelectorAll("[viewed]");
buttonViewed.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
    const id =btn.getAttribute("id");
    const form = document.querySelector("#viewed");
    const path = form.getAttribute("path");
    const action = path + `/${id}` ;
    form.action = action;
    form.submit();
    })
})

const status = document.querySelector(".form-group__radio").getAttribute("status");
const conhang = document.querySelector("#conhang");
const hethang = document.querySelector("#hethang");
status ==="còn hàng" ? conhang.checked = true : hethang.checked = true
