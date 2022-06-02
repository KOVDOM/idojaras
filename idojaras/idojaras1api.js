var state;
var main = document.getElementById('#name');
var temp = document.getElementById('.temp');
var desc = document.getElementById('.desc');
var clouds = document.getElementById('.clouds');

function lekerdez(name) {  
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=15d17ce5384d5d7a43a97af40fc78181&units=metric&lang=hu', {
      method: 'GET'
    })
      .then(function (response) {
        console.log(response)
        if (!response.ok) {
          return Promise.reject('login error')
        }
        return response.json();
      })
      .then(data => { 
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      document.getElementById('main').innerHTML = nameValue;
      document.getElementById('desc').innerHTML = "Megjegyzés - "+descValue;
      document.getElementById('temp').innerHTML = "Hőmérséklet - "+tempValue;
        console.log(tempValue);
      console.log(nameValue);
      console.log(descValue);
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      })
  };      