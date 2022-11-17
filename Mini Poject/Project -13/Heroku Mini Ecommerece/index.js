
let submit=async()=>{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let batch=document.getElementById("batch").value;
    let course=document.getElementById("course").value;
    let mobile=document.getElementById("mobile").value;
    let ev=document.getElementById("ev").value;
    let id=Date.now();
console.log(id)
     let data={name,age,batch,course,mobile,ev,id}
    // let data={name:name}
    let res=await fetch("https://whispering-castle-38266.herokuapp.com/api/user",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        }
    })
    console.log(res)
    // let datas=await res.json()
    // console.log(datas)
    document.getElementById("name").value=null;
    document.getElementById("age").value=null;
    document.getElementById("batch").value=null;
    document.getElementById("course").value=null;
    document.getElementById("mobile").value=null;
    document.getElementById("ev").value=null;
}

document.querySelector("form").addEventListener("submit",submit)