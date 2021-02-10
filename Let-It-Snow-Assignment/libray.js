//Snow


function newSnowflake(intX, intY, intR, intColour) {
    return {
        x: intX,
        y: intY,
        r: intR,
        colour: intColour
    };
}

function newRandomSnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(2, 7),
        colour: randomRGB()
    }
}

function drawSnow(aSnow) {
    fill(aSnow.colour);
    circle(aSnow.x, aSnow.y, aSnow.r, "fill");
}

function moveSnow(aSnow) {
    aSnow.y -= ranDec(-0.5, -0.3);
    aSnow.x -= ranDec(-0.03, 0.03);
if(aSnow.y > cnv.height){
    aSnow.y = randomInt(-30,-35)
    aSnow.x = randomInt(0, cnv.width); 
}

}


function snowUser() {
  return  prompt("How much snow do you want to fall Ullr (Norse god of snow I just thought It would be cool to use his name");
    }
    




//Graphics

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function ranDec(low, high) {
    return Math.random() * (high - low) + low;
}

function randomRGB() {
    let r = randomInt(240, 256);
    let g = randomInt(240, 256);
    let b = randomInt(240, 256);
    return `rgb(${r},${g},${b})`;
}

function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}


function background(colour){
    fill("pink");
    rect(0,0,cnv.width, cnv.height, "fill");
}

function rect(x, y, w, h, mode) {
    if (mode == "fill") {
        ctx.fillRect(x, y, w, h)
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }

}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, + 2*Math.PI)
    if (mode == 'fill') {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }
}