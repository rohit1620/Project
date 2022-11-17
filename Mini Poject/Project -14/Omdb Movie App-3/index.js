function search(){
    let moviessearch=document.getElementById("seacrh-box").value
    getdata(moviessearch); 
    console.log(moviessearch)
}
 async function getdata(moviessearch){
    let url=`https://www.omdbapi.com/?t=${moviessearch}&apikey=60ac6740`;
    
    let res= await fetch(url);
    let movies=await res.json();
     
 
    let title=movies.Title;
    // console.log(title)

    if(title){
        displaymovies(movies);
    }else{
        moviesNot(moviessearch);
    }
}

function moviesNot(ele){
       if(ele==""){
            document.querySelector("#notfound").innerHTML=null;
            document.querySelector("#display1").innerHTML=null;
            document.querySelector("#display2").innerHTML=null;

            document.querySelector("#notfound").innerHTML="<h3>Please Enter Movie Name<h3>";
            
            //  document.querySelector("#notfound").innerHTML=null;
       }
      else {
        // document.querySelector("#notfound").innerHTML=null;
        // document.querySelector("#display1").innerHTML=null;
        // document.querySelector("#display2").innerHTML=null;

         document.querySelector("#notfound").innerHTML="<h3>Movie Not Found<h3>";
        //  document.querySelector("#notfound").innerHTML=null;
      }  
}
// response is persents true 

function displaymovies(ele){
    document.querySelector("#notfound").innerHTML=null;
    document.querySelector("#display1").innerHTML=null;
    document.querySelector('#display2').innerHTML=null;
    let img_box=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.Poster;
    img_box.append(img)

    let title_box=document.createElement("div")
    let titletxt=document.createElement('h4')
    titletxt.innerText="Title"+ele.Title;
    title_box.append(img_box)

    let acctors_box=document.createElement("div")
    let actore_txt=document.createElement("h4")
    actore_txt.innerText="Actors : "+ele.Actors;
    acctors_box.append(actore_txt)

    
    let Genre_box=document.createElement("div")
    let Genre_txt=document.createElement('h4')
    Genre_txt.innerText=ele.Genre;
    Genre_box.append(Genre_txt)

    let Language_box=document.createElement("div")
    let Language_txt=document.createElement('h4')
    Language_txt.innerText="Language : "+ele.Language;
    Language_box.append(Language_txt)
    
    let run_box=document.createElement("div")
    let run_txt=document.createElement("h4")
    run_txt.innerText="Runtime : "+ele.Runtime;
    run_box.append(run_txt)

    let relas_box=document.createElement("div")
    let relas_txt=document.createElement("h4")
    relas_txt.innerText="Released : "+ele.Released;
    relas_box.append(relas_txt)

    let Director_box=document.createElement("div")
    let Director_txt=document.createElement("h4")
    Director_txt.innerText="Director : "+ele.Director;
    Director_box.append(Director_txt)

    let Writer_box=document.createElement("div")
    let Writer_txt=document.createElement("h4")
    Writer_txt.innerText="Writer : "+ele.Writer;
    Writer_box.append(Writer_txt)

    let Country_box=document.createElement("div")
    let Country_txt=document.createElement("h4")
    Country_txt.innerText="Country : "+ele.Country;
    Country_box.append(Country_txt)

    let Awards_box=document.createElement("div")
    let Awards_txt=document.createElement("h4")
    Awards_txt.innerText="Awards : "+ele.Awards;
    Awards_box.append(Awards_txt)

    let imdbRating_box=document.createElement("div")
    let imdbRating_txt=document.createElement("p")
    if(ele.imdbRating>8.5){
    imdbRating_txt.innerHTML="Rating : "+"  Recommended";
    imdbRating_txt.style.color="red";
    imdbRating_box.append(imdbRating_txt)
    }else{
        imdbRating_txt.innerText="Rating : "+ele.imdbRating;
    imdbRating_box.append(imdbRating_txt)
    }
    
    document.querySelector("#display1").append(img_box)
    document.querySelector('#display2').append(title_box,Genre_box,acctors_box,Language_box,Country_box,run_box,relas_box,Director_box,Writer_box,Awards_box,imdbRating_box)
}
