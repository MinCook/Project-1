const buttonDeleted = document.querySelectorAll("[edited]");
buttonDeleted.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        const id =btn.getAttribute("id");
        const form = document.querySelector("#deletedForm");
        const path = form.getAttribute("path");
        const action = path + `/${id}`+ `/?_method=patch` ;
        form.action = action;
        form.submit();
        })
})

