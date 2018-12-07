// Iskeliu visas kintamas 
let menesiai = document.querySelector('#month');
let dienos = document.querySelector('#day');
let savDiena = document.querySelector('.weekDay');
let minutes = document.querySelector('.minute');
let sekundes = document.querySelector('.second');
let time = document.querySelector('.hoursMain');

// Aprasau intervala sekunkem
let laikas = () => {

  let laikasEina = Date.parse(new Date());
  let sekundes1 = Math.floor((laikasEina / 1000) % 60);
  let minutes1 = Math.floor((laikasEina / 1000 / 60) % 60);

    sekundes.style.transform = 'rotate(' +6 * sekundes1+ 'deg)';
    
 // canvas
 let canvas = document.querySelector('canvas');
 let context = canvas.getContext("2d");
 let centerX = canvas.width / 2;
 let centerY = canvas.height / 2;
 let radius = centerX / 2.5;
 console.log(centerX, centerY)
  context.beginPath();
  context.arc(centerX, centerY, radius, 4.71, 2 / 60 *sekundes1  * Math.PI, );
 //  context.fillStyle = 'green';
 //  context.fill();
  context.lineWidth = 10;
  context.strokeStyle = 'yellow';
  context.stroke();
    console.log(6* sekundes1);

}
setInterval(() => {laikas()}, 1000 );
 
//  Isvedu i ekrana laika, menesi, diena
  let myClock = () => {

    let nowTime = new Date();
    let timeWithSeconds = nowTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    time.innerHTML = timeWithSeconds;

    dienos.innerHTML = nowTime.getDate();

    let locale = "en-us";
    menesiai.innerHTML = nowTime.toLocaleString(locale, {month: "long"});
    
    savDiena.innerHTML = nowTime.toLocaleString(locale, {weekday: 'long'});


  }
  setInterval(myClock, 1000);

 