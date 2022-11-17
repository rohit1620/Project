
window.addEventListener("load",()=>{
    getData()
})
// Get url
let getData=async()=>{
    let res=await fetch("https://pure-sea-17526.herokuapp.com/api/todo");
    let data=await res.json();
    console.log(data)
    append(data)
}



let append=(data)=>{
    document.getElementById("cont").innerHTML=null;
   data.forEach((el,index)=>{
    let name=document.createElement("h3");
    let p=document.createElement("p")
    let toggle=document.createElement("button")
    let remove=document.createElement("button")

    name.innerText=el.title;
    p.innerText=el.status;
    toggle.innerText="work"
    toggle.addEventListener("click",()=>{
        myStatus(el.id)
    })
    remove.innerText="remove"
    remove.addEventListener("click",()=>{
        myRemo(el.id)
    })
    document.getElementById("cont").append(name,p,toggle,remove)
   })
}

// add todo

let addTodo=async()=>{
    let value=document.getElementById("todo").value
    let data={
        id:Date.now(),
        title:value,
        status:"complete"
    }
    document.getElementById("todo").value=null;
    let res=await fetch("https://pure-sea-17526.herokuapp.com/api/todo",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        }
    })
   
    let datas=await res.json();
    console.log(datas)
      getData();
}

// Updata{PUT and PATCH}

let myStatus=async(id)=>{

    let todo=await fetch(`https://pure-sea-17526.herokuapp.com/api/todo/${id}`)
    let data=await todo.json()
    let item={status:"completed"}
    
    let res=await fetch(`https://pure-sea-17526.herokuapp.com/api/todo/${id}`,{
        method:"PATCH",
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
        }
    })
    let datas=await res.json();
    console.log(datas)
    getData();
}

let myRemo=async(id)=>{
     let res =await fetch(`https://pure-sea-17526.herokuapp.com/api/todo/${id}`,{
     method:"DELETE",
     headers:{
        "Content-Type":"application/json",
    }
});
 
    getData();
}

let complete=async()=>{
     let res=await fetch("https://pure-sea-17526.herokuapp.com/api/todo?status=completed");
     res=await res.json()
     append(res);
}