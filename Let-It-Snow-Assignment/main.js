//Snowfall by Ryan Kermit
requestAnimationFrame(draw);

//html elements
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//event listners and prompt for snow

document.addEventListener("keydown", keydownHandler);
var usersnow = snowUser();


//Create array
let snow = [];
for (let n = 1; n <= usersnow; n++) {
    snow.push(newRandomSnow());
}
//draw function
function draw() {    
    
    //clear cnv
    background("pink");

    //move and draw all snow
    for (let i = 0; i < snow.length; i++) {
        moveSnow(snow[i]);
        drawSnow(snow[i]);
    }

    requestAnimationFrame(draw);
}

//+ || - snowflakes
function keydownHandler(event) {
    if (event.keyCode === 69) {
        snow.push(newRandomSnow())

    } else if (event.keyCode === 81) {
        let randomSnowFlake = randomInt(0, snow.length);
        snow.splice(randomSnowFlake, 1);
    }
}



//Start it after all loads
