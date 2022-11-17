window.addEventListener("load",()=>{
    getData()
})

let getData=async()=>{
    let res=await fetch("https://whispering-castle-38266.herokuapp.com/api/user",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    })
    res=await res.json();
    console.log(res)
    append(res)
}

let append=(data)=>{
    document.getElementById('container').innerHTML=null;
     data.forEach((el)=>{
        let h4=document.createElement("h4");
        let p1=document.createElement("p")
        let p2=document.createElement("p")
        let p3=document.createElement("p")
        let p4=document.createElement("p")
        let p5=document.createElement("p")
        let btn=document.createElement("button")
        let div=document.createElement("div")

        h4.innerText=el.name;
        p1.innerText=el.batch;
        p2.innerText=el.course;
        p3.innerText=el.mobile;
        p4.innerText=el.age;
        p5.innerText=el.ev;
        btn.innerText="Remove"
        btn.addEventListener("click",()=>{
            remove(el.id)
        })
        div.append(h4,p1,p2,p3,p4,p5,btn);
        document.getElementById('container').append(div);
     })
}

let remove=async(id)=>{
    let res=await fetch(`https://whispering-castle-38266.herokuapp.com/api/user/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    });
    getData();
}

let sort=async()=>{
    let res=await fetch("https://whispering-castle-38266.herokuapp.com/api/user?_sort=ev&_order=asc");
    res=await res.json();
    append(res);
}

let filter=async()=>{
    let select=document.getElementById("fil").value
    console.log(select)
    let res=await fetch(`https://whispering-castle-38266.herokuapp.com/api/user?batch=${select}`);
    res=await res.json();
    append(res);
}

