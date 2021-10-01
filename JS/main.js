


const results=document.getElementById('results');

function getGeocode(str){
    let link="https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q="+str;
    fetch(link, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
		"x-rapidapi-key": "4d7167a4b2mshf694bb2caa25410p12f058jsne7a35302a70a"
	}
})
.then(response => {
	return response.json();
}).then(data =>{
    console.log(data[0])
    if(data[0]===undefined){
        let output=`
        <div class="carder">
         <div class="header">No Records Found <span class="smaller">(-)<span></div>
         <div class="flexing">
         <div class="smaller"><i>Latitude : NA</i></div>
         <div class="smaller"><i>Longitude : NA</i></div>
         </div>
        </div>
    `
    results.innerHTML=output;

    }else{
    let placeName=data[0].display_name;
    let long=data[0].lon;
    let lat=data[0].lat;
    let type=data[0].type;

    let output=`
        <div class="carder">
         <div class="header">${placeName} <span class="smaller">(${type})<span></div>
         <div class="flexing">
         <div class="smaller"><i>Latitude : ${lat}<i></div>
         <div class="smaller" ><i>Longitude : ${long}</i></div>
         </div>
        </div>
    `
    results.innerHTML=output;
    }



})

}
const search=document.getElementById('search');

document.getElementById('btn-1').addEventListener('click',(e)=>{
    console.log('press')
    e.preventDefault();
    if(search.value!=""){
        getGeocode(search.value);
    }else{
        let output=`
        <div class="carder">
         <div class="header">Please Enter the fields <span class="smaller">(-)<span></div>
         <div class="flexing">
         <div class="smaller"><i>Latitude : NA</i></div>
         <div class="smaller"><i>Longitude : NA</i></div>
         </div>
        </div>
    `
    results.innerHTML=output;

    }

})