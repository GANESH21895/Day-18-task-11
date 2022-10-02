//To create a Title 
let heading = document.createElement("h1");
heading.setAttribute("id","title");
heading.setAttribute("class","text-center");
heading.innerHTML = "REST COUNTRIES AND WEATHER USING FETCH API";
document.body.append(heading);
//To create a CONTAINER
const Container1 = document.createElement("div");
Container1.setAttribute("class","container");
Container1.setAttribute("id","hidden")
document.body.append(Container1);
//To create ROW
const Row1 = document.createElement("div");
Row1.classList.add("row");
Container1.append(Row1);

//To get all country details from REST COUNTRIES API by using async/await and fetch()
async function getCountries(){
   const all = await fetch("https://restcountries.com/v3.1/all");
   const data = await all.json();
   //console.log(data);        //Output is Array of Object
   data.forEach(country => { //To Loop all country
    //console.log(country); //Output is 250 objects
//To create a COLUMN
   const Column1 = document.createElement("div");
   Column1.setAttribute("class","col-4 col-sm-6 col-md-4 col-lg-4 col-xl-4 g-5");
//To create a CARD
   const card1 =document.createElement("div");
   card1.setAttribute("class","card h-100 ");
   card1.setAttribute("style","width: 18rem;");
   card1.innerHTML = ` 
       <div class="card-header">
           <h4 class="card-text">${country.name.common}</h4>
       </div>
       <img class="card-img-top" src="${country.flags.png}" alt="">
       <div class="card-body">
         <div class="card-text">
           <h6>Region : ${country.region}</h6>
           <h6>Native Name: ${country.name.official}</h6>
           <h6>Population: ${country.population}</h6>
           <h6>Capital: ${country.capital}</h6>
           <h6>Country Code: ${country.cca3}</h6>
           <h6>Latlng: ${country.latlng}</h6>
         </div>
       </div>`;
//To create a BUTTON inside the card
   const button = document.createElement("button");
   button.classList.add("btn", "btn-primary");
   button.textContent = "Click for Weather";
   card1.append(button);
   Column1.append(card1);
   Row1.append(Column1);
// Button ONCLICK Function to get WEATHER REPORT
 button.addEventListener("click", weatherReport); 
//To get all country WEATHER REPORT details from OPENWEATHERMAP API by using async/await and fetch()
 async function weatherReport(){
   const weather = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=ca112fd8ff007a6940a08407c211d787`);
   const weatherData = await weather.json();
 //console.log(weatherData);
   document.getElementById("hidden").innerHTML = ""; // to hidden the above container1 
// To create a CONTAINER
   const Container2 = document.createElement("div");
   Container2.setAttribute("class","container");
   document.body.append(Container2);
//To create a ROW
   let Row2 = document.createElement("div");
   Row2.classList.add("row","g-3","container");
   Container2.append(Row2);
//To create COLUMN
   let Column2 = document.createElement("div");
   Column2.setAttribute("class","col col-lg-4 col-sm-12");
   Row2.append(Column2);
//To create CARD
   let card2 =document.createElement("div");
   card2.setAttribute("class","card h-100");
   card2.setAttribute("style","width: 18rem;");
   card2.innerHTML = ` <div class="card-header">
     <h4 class="card-text">${country.name.common}</h4>
     </div>
        <img src="${country.flags.svg}" alt="">
       <div class="card-body">
       <h6 class="card-text">Temperature: ${weatherData.main.temp}</h6>
       <h6 class="card-text">Ground-Level: ${weatherData.main.grnd_level}</h6>
       <h6 class="card-text">Humidity: ${weatherData.main.humidity}</h6>
       <h6 class="card-text">Pressure: ${weatherData.main.pressure}</h6>
       <h6 class="card-text">Sea-Level: ${weatherData.main.sea_level}</h6>
       <h6 class="card-text">Temp-Max: ${weatherData.main.temp_max}</h6>
       <h6 class="card-text">Temp-Min: ${weatherData.main.temp_min}</h6>
      </div>`;
   Column2.append(card2);
//To create reset button inside the card
   let button1 = document.createElement("button");
   button1.setAttribute("class","btn btn-primary");
   button1.innerText = "Reset";
   card2.append(button1);
//Location reload 
   button1.addEventListener("click",()=>{
     location.reload()
   })
}//Weather Report async function
});//loop all contry
}//getcountries async function
getCountries()//function invoke