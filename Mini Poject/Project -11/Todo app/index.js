  let data=JSON.parse(localStorage.getItem("todo"))||[];
 
let submit=()=>{
 console.log("rohit kumar malav")
    let obj={
      name:  document.getElementById("name").value,
    }
    // console.log(obj)
     data.push(obj)
     localStorage.setItem("todo",JSON.stringify(data))  
     document.getElementById("name").value=null;
      window.location.reload();
}

let append=(data)=>{
  //  document.getElementById("container").innerHTML=null;
  data.forEach((el,index)=>{
    let tr=document.createElement("tr"); 
    let td1=document.createElement("td"); 
    
      
    let td2=document.createElement("td");  
    let td3=document.createElement("td"); 
    let mark=document.createElement("button");  
    let remove=document.createElement("button");  
    
    td1.innerText=el.name;
    mark.innerText="complete";
    mark.addEventListener("click",()=>{
      mark.innerText="completed";
      mark.style.border="3px solid green"
      
    })
    td2.append(mark);

    remove.innerText="remove"
    remove.addEventListener("click",()=>{
      removes(el,index)
    })
    td3.append(remove)
    tr.append(td1,td2,td3)
    document.getElementById("container").append(tr)
  
  })

  

// div.append(p,btn1,btn2)
  // document.querySelector("#container").append(p,btn1,btn2)
}



let remove=(el,index)=>{
    data.slice(index,1);
    localStorage.setItem("todo",JSON.stringify(data));
}
let removes=(el,index)=>{
  console.log("rohit ji")
  data.splice(index,1);
  console.log(data)
  localStorage.setItem("todo",JSON.stringify(data));
  window.location.reload();
  
}




  append(data)




