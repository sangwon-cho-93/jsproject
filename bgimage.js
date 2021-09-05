const images=["0.jpg", "1.jpg", "2.jpg"];

const chosenBgImage = images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage=`url("bgimage/${chosenBgImage}")`;
