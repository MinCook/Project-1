const button = document.querySelector("button")
button.addEventListener("click",()=>{
    const row = document.querySelector("[permission]").querySelectorAll("tr")
    let permission = []
    row.forEach(row=>{
        const name = row.getAttribute("name")
        const input = row.querySelectorAll("input")
        if(name =="id" && name != null){
            input.forEach(value=>{
                const id = value.getAttribute("name")
                permission.push({
                    id:id,
                    permission:[]
                })
            })
        }
        else{
            input.forEach( (value,index)=>{
                const checked = value.checked
                const name = value.getAttribute("name")
                if(checked == true){
                    permission[index].permission.push(name)
                }
            })
        }
})
    if(permission.length>0){
        const formSend = document.querySelector("[formSend]")
        const sendPermission = document.querySelector("[sendPermission]")
        sendPermission.value=JSON.stringify(permission)
        formSend.submit()
    }
})


const checked = document.querySelector(".checked").getAttribute("value")
const value = JSON.parse(checked)
 value.forEach( (record,index )=> {
    const permissions = record.permissions
    permissions.forEach(permission =>{
        const input = document.querySelectorAll("input"+`[name= ${permission}]`)[index]
        input.checked =true
    })
 })
 