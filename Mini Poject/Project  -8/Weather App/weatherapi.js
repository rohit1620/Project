//finding temperature using live server (weather app)

document.querySelector("#search").addEventListener("click", serchweatherFun);


function serchweatherFun(){

    getData();
    
    


}

async function getData(){
    const api_key = "b5bbd1e985dbc95f67f2fc21e5c90c3e";
    
    let city = document.querySelector("#cityname").value;
// destination
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key;
    document.querySelector("#cityname").value=null;

    // let url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';
    let res = await fetch(url);
    let data = await res.json();
    let long = data.coord.lon;
    let lat = data.coord.lat;
    append(data);
    console.log(data);
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api_key}`
        // console.log(url);
    // // destination
        let res1 = await fetch(url);
        let data1 = await res1.json();
        append1(data1);
        // console.log(data1.daily);
       
}



function append(data){
    document.querySelector("#container").innerHTML = null;
let H1 = document.createElement("h1");
H1.innerText = data.name;
let H3 = document.createElement("p");
H3.innerText = 'current temperature: ' + Math.floor(+data.main.temp-273) + "C";
let H4 = document.createElement("p");
H4.innerText = 'maximum temperature: ' + Math.floor(+data.main.temp_max - 273) + "C";
let H5 = document.createElement("p");
H5.innerText = 'minium temperature: ' + Math.floor(+data.main.temp_min -273) + "C";
let H6 = document.createElement("p");
H6.innerText = 'wind-speed: ' + data.wind.speed;
let H7 = document.createElement("p");
H7.innerText = 'clouds: ' + data.clouds.all;
let img1 = document.createElement("img");
img1.src = "data:image/jpeg;base64,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";
let H8 = document.createElement("p");
H8.innerText = 'sunrise: ' + data.sys.sunrise;
let img2 = document.createElement("img");
img2.src = "data:image/png;base64,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";
let H9 = document.createElement("p");
H9.innerText = 'sunset: ' + data.sys.sunset ;
let H10 = document.createElement("p");
H10.innerText = 'humidity: ' + data.main.humidity;


document.querySelector("#container").append(H1, H3, H4, H5, H5, H6, H7,img1, H8,img2, H9, H10);
let iframe = document.querySelector("#gmap_canvas");
iframe.src="https://maps.google.com/maps?q=" + data.name+ "&t=&z=13&ie=UTF8&iwloc=&output=embed" ;
}

function append1(data1){
    document.querySelector("#sevendaysdata").innerHTML = null;
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
    for(let i=0; i<data1.daily.length; i++){
        let DIV1 = document.createElement("div");
        let img1 = document.createElement("img");
        let P1 = document.createElement("p");
        let P3 = document.createElement("p");
        P3.innerText = days[i];
        let P4 = document.createElement("p");
      P4.innerText = data1.daily[i].weather[0].main;
        P1.innerText = Math.floor(+data1.daily[i].temp.day -273) + "C";
       
        if(P4.innerText ==="Clear"){
        img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-5fhh3Kd9QhGW51dk8NEUUKzT01XvX2dlQ&usqp=CAU";
        }
        else if(P4.innerText ==="Clouds"){
            img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRyTK0nK4AuhKixrEy3dxB_8Lal-6y6bJYg&usqp=CAU";
        }
        else{
            img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJRiBYNtqbZxW51h1jWbZK9AS4Sga31PWrQ&usqp=CAU";
        }
        
        let P2 = document.createElement("p");
        P2.innerText = Math.floor(+data1.daily[i].temp.day - 273) + "C";
       
        DIV1.append(P3,P4,img1, P1, P2);
        document.querySelector("#sevendaysdata").append(DIV1);
    }



}






