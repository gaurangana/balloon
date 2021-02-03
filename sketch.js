var balloon,  balloon1, bg;
var dataBase, p ;


function preload(){
bg = loadImage("sprite/ bg.png")
balloon1= loadAnimation("sprite/1.pg","sprite/2.pg","sprite/3.pg" )

}
function setup(){
    createCanvas(500,500);
    dataBase= firebase.database()
    balloon = createSprite(400,200,50,50);
    ball.shapeColor = "red";

    var childPosition= dataBase.ref("balloon/position");
    childPosition.on("value", readPosition)
}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    
    drawSprites();
}

function writePosition(x,y){
    dataBase.ref("ball/position").set({
        'x': p.x + x ,
        'y': p.y + y
    })
    // balloon.x = balloon.x + x;
    // balloon.y = balloon.y + y;
}

function readPosition(data){
p= data.val() ;
balloon.x= p.x
balloon.y= p.y
}