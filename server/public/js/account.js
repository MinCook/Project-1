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
    const action = path + `/${id}` +`/?_method=patch`;
    form.action = action;
    form.submit();
    })
})


const btnLogout = document.querySelector("span")
// btnLogout.addEventListener("click",(e)=>{
//     window.location.href ="/admin/logout"
// })



