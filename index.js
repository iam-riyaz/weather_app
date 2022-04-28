var api_key="8f395615346fe163fa4b7b41fe94b153"
// api.openweathermap.org/data/2.5/weather?id=2172797&appid={API key}
let Iframe=document.querySelector("#gmap_canvas")

 const getWeatherData = async()=> {
    let inputdata=document.querySelector("#city").value
    console.log(inputdata)
    try{
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&appid=${api_key}&units=metric`)

            let data= await res.json()
            console.log(data)
            appendData(data)
    }
    catch(err){
        console.log(err)
    }

    for7days()
    
}


const appendData= (data)=>{
    document.querySelector("#container").innerHTML=null
let cityName=document.createElement("h4")
cityName.textContent=`City: ${data.name}`

let windSpeed=document.createElement("p")
windSpeed.textContent=`Wind-Speed: ${data.wind.speed} km/h`

let clouds=document.createElement("p")
clouds.textContent=`Clouds: ${data.clouds.all}`

        const {main:{temp_max,temp_min}}=data
        const{sys:{sunrise,sunset}}=data
        
let max_temp=document.createElement("p")
max_temp.textContent=`Max-Temp: ${temp_max}°C`

let min_temp=document.createElement("p")
min_temp.textContent=`Min-Temp: ${(temp_min-9.23).toFixed(2)}°C`

let sunRise=document.createElement("p")
sunRise.textContent=`sunrise: ${sunrise}`

let sunSet=document.createElement("p")
sunSet.textContent=`sunset:${sunset}`

let forecast_div=document.createElement("div")
forecast_div.style.width="80%"
forecast_div.style.height="140px"
forecast_div.style.border="5px solid black"
forecast_div.style.marginTop="30px"
forecast_div.style.display="flex"
forecast_div.style.backgroundColor="offwhite"

var d=["mon","tue","wed","thu","fri","sat","sun"]
for(var i=0; i<7; i++){
    
  let x=document.createElement("div")
  x.style.margin="12px"
  x.style.textAlign="center"
  let day=document.createElement("p")
  day.style.margin="3px"
  day.textContent=d[i]
  let pic=document.createElement("img")
  pic.src="https://cdn-icons-png.flaticon.com/512/2698/2698213.png"
  pic.style.width="40px"
  pic.style.margin="0px"
 let data=document.createElement("h4")
 data.textContent=temp_max+i
 data.style.margin="0px"
 x.append(day,pic,data)
 forecast_div.append(x)
}


document.querySelector("#container").append(cityName,windSpeed,clouds,max_temp,min_temp,sunRise,sunSet,forecast_div)

        Iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


}

