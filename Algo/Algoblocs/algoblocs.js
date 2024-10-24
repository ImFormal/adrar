"use strict";

setLineWidth(10);

/*
// Niveau A-1

//Initialisation
setPos(300,300);
changeColor(color.red);

//Réalisation
faceDown();
forward(200);
faceRight();
forward(100);


// Niveau A-2

//Initialisation
setPos(300,300);
changeColor(color.yellow);

//Réalisation
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


// Niveau A-3

//Initialisation
setPos(300,300);
changeColor(color.orange);

//Réalisation
faceLeft();
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


// Niveau A-4

//Initialisation
setPos(150,500);
changeColor(color.green);

//Réalisation
faceRight();
forward(200);
arcLeft(100, 180);
faceLeft();
forward(100);
arcRight(100, 180);
forward(200);


// Niveau A-5

//Initialisation
setPos(300,200);
changeColor(color.fuchsia);

//Réalisation
faceRight();
arcRight(50, 180);
arcLeft(50, 180);
arcLeft(100, 360);


// Niveau A-6

//Initialisation
setPos(300,350);
changeColor(color.cyan);

//Réalisation
faceUp();
forward(50);
up();
forward(50);
down();
forward(100);


// Niveau A-7

//Initialisation
setPos(250,300);
changeColor(color.green);

//Réalisation
faceDown();
forward(100);
arcLeft(50, 180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50, 180);
forward(50);


// Niveau A-8

//Initialisation
setPos(250,300);
changeColor(color.fuchsia);

//Réalisation
faceUp();
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);


// Niveau A-9

//Initialisation
setPos(150,450);
changeColor(color.cyan);

//Réalisation
faceRight();
arcLeft(75, 180);
arcRight(75, 180);
forward(300);
arcRight(75, 180);
arcLeft(75, 180);
faceLeft();
forward(300);


// Niveau A-10

//Initialisation
setPos(300,350);
changeColor(color.red);

//Réalisation
faceRight();
arcLeft(50, 180);
changeColor(color.green);
arcLeft(100, 180);
changeColor(color.yellow);
arcLeft(200, 180);


// Niveau A-11

//Initialisation
setPos(175,250);
changeColor(color.blue);

//Réalisation
faceUp();
arcRight(50, 180);
up();
faceRight();
forward(50);
faceUp();
down();
arcRight(50, 180);
up();
forward(50);
faceLeft();
forward(25);
faceDown();
changeColor(color.fuchsia);
down();
arcRight(100, 180);


// Niveau A-12

//Initialisation
setPos(75,250);
changeColor(color.green);

//Réalisation
faceUp();
arcRight(50, 180);
forward(100);
arcLeft(50, 180);
faceRight();
up();
forward(50);
changeColor(color.orange);
faceDown();
down();
arcLeft(50, 180);
forward(100);
arcRight(50, 180);
faceRight();




// Niveau B-1

//Initialisation
setPos(200,200);
changeColor(color.green);

//Réalisation
for(let i = 0; i<4; i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
} 


// Niveau B-2

//Initialisation
setPos(100,300);
changeColor(color.red);

//Réalisation
for(let i = 0; i<4; i++){
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
} 


// Niveau B-3

//Initialisation
setPos(250,250);
changeColor(color.purple);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    forward(100);
    right(90);
} 


// Niveau B-4

//Initialisation
setPos(250,320);
changeColor(color.cyan);
faceRight();

//Réalisation
for(let i = 0; i<3; i++){
    forward(100);
    left(120);
} 


// Niveau B-5

//Initialisation
setPos(290,370);
changeColor(color.orange);
faceUp();

//Réalisation
forward(100);
changeColor(color.red);
for(let i = 0; i<3; i++){
    forward(50);
    right(120);
}


// Niveau B-6

//Initialisation
setPos(180,350);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i<2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}

changeColor(color.green);
for(let i = 0; i<3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}


// Niveau B-7

//Initialisation
setPos(260,320);
changeColor(color.orange);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    forward(100);
    right(90);
} 

for(let i = 0; i<3; i++){
    forward(100);
    left(120);
} 


// Niveau B-8

//Initialisation
setPos(200,280);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    forward(200);
    right(135);
}



// Niveau B-9

//Initialisation
setPos(200,280);
changeColor(color.fuchsia);
faceRight();

//Réalisation
forward(50);
up();
forward(50);
down();
for(let i = 0; i<3; i++){
    forward(100);
    right(120);
}


// Niveau B-10

//Initialisation
setPos(100,280);
changeColor(color.cyan);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    forward(100);
    right(135);
}

up();
forward(200);
changeColor(color.yellow);
down();

for(let i = 0; i<8; i++){
    forward(200);
    left(135);
}

up();
right(90);
forward(100);
changeColor(color.fuchsia);
down();

for(let i = 0; i<8; i++){
    forward(100);
    right(135);
}


// Niveau B-11

//Initialisation
setPos(225,280);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}


// Niveau B-12

//Initialisation
setPos(270,300);
changeColor(color.purple);
faceDown();

//Réalisation
for(let i = 0; i<3; i++){
    forward(50);
    left(90);
}

faceUp();
up();
changeColor(color.green);
forward(50);
down();

for(let i = 0; i<3; i++){
    forward(50);
    left(90);
}


// Niveau B-13

//Initialisation
setPos(230,250);
changeColor(color.green);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    forward(50);
    left(135);
    forward(25);
    right(90);
    forward(25);
    right(90);
}


// Niveau B-14

//Initialisation
setPos(100,100);
changeColor(color.yellow);
faceRight();

//Réalisation
forward(50);
for(let i = 0; i<5; i++){
    right(120);
    forward(100);
    left(120);
    forward(100);
}


// Niveau B-15

//Initialisation
setPos(250,380);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i<5; i++){
    forward(100);
    arcLeft(50, 90);
}


// Niveau B-16

//Initialisation
setPos(200,380);
changeColor(color.green);
faceRight();

//Réalisation
arcLeft(200, 90);
faceLeft();
for(let i = 0; i<4; i++){
    arcLeft(25, 90);
    arcRight(25, 90);
}


// Niveau B-17

//Initialisation
setPos(220,350);
changeColor(color.blue);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    arcLeft(50, 180);
    left(120);
}


// Niveau B-18

//Initialisation
setPos(220,350);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    forward(200);
    left(90);
    forward(50);
    left(45);
}

// Niveau B-19

//Initialisation
setPos(300,500);
changeColor(color.cyan);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    arcLeft(50, 180);
    faceRight();
}

faceUp();
up();
forward(50);
down();
faceLeft();

for(let i = 0; i<4; i++){
    arcLeft(50, 180);
    faceLeft();
}


// Niveau B-20

//Initialisation
setPos(200,300);
changeColor(color.cyan);
faceDown();

//Réalisation
for(let i = 0; i<2; i++){
    forward(100);
    arcLeft(50, 90);
}

forward(100);

for(let i = 0; i<2; i++){
    forward(50);
    arcLeft(50, 90);
    forward(50);
}

faceRight();
forward(200);
faceDown();
forward(25);
faceLeft();
up();
forward(100);
down();

for(let i = 0; i<4; i++){
    arcLeft(50, 90);
}


// Niveau B-21

//Initialisation
setPos(350,230);
shiftColor(1/2);
faceRight();

//Réalisation
for(let i = 0; i<6; i++){
    forward(100);
    left(120);
    forward(50);
    left(120);
    forward(100);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);
    up();
    forward(100);
    shiftColor(0.12);
    down();
}


// Niveau B-22

//Initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
left(30);

//Réalisation
for(let i = 0; i<6; i++){
    forward(100);
    left(60);
}

right(90);
forward(100);
right(120);
changeColor(color.red);
forward(100);
changeColor(color.green);
right(30);

for(let i = 0; i<2; i++){
    for(let j = 0; j<4; j++){
        forward(100);
        right(90);
    }
    right(90);
    forward(100);
    right(30);
}


// Niveau B-23

//Initialisation
setPos(210,300);
changeColor(color.fuchsia);
faceRight();
left(45);

//Réalisation
for(let i = 0; i<2; i++){
    for(let j = 0; j<3; j++){
            forward(50);
            right(90);
            forward(50);
            left(90); 
    }
    right(135);
    forward(50);
    right(45);
}


// Niveau B-24

//Initialisation
setPos(250,250);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    forward(100);
    left(135);
}

forward(50);
changeColor(color.green);

for(let i = 0; i<3; i++){
    right(135);
    forward(100);
    left(135);
    forward(50);
}

forward(50);
right(90);
forward(25);

for(let i = 0; i<2; i++){
    left(90);
    forward(25);
}

right(90);
forward(50);

for(let i = 0; i<3; i++){
    forward(50);
    left(135);
    forward(100);
    right(135);
}


// Niveau C-1

//Initialisation
setPos(100,250);
changeColor(color.cyan);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    for(let j = 0; j<3; j++){
        forward(100);
        right(120);
    }
    forward(100);
}


// Niveau C-2

//Initialisation
setPos(270,500);
changeColor(color.fuchsia);
faceUp();

//Réalisation
for(let i = 0; i<5; i++){
    for(let j = 0; j<4; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


// Niveau C-3

//Initialisation
setPos(75,350);
shiftColor(1/3+0.1);
faceRight();

//Réalisation
for(let i = 0; i<3; i++){
    for(let j = 0; j<8; j++){
        forward(100);
        left(135);
    }
    up();
    shiftColor(0.1)
    forward(200);
    down();
}


// Niveau C-4

//Initialisation
setPos(75,350);
faceRight();

//Réalisation
for(let i = 0; i<5; i++){
    changeColor(color.red);
    for(let j = 0; j<3; j++){
        forward(50);
        left(120);
    }
    changeColor(color.orange);
    for(let j = 0; j<4; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


// Niveau C-5

//Initialisation
setPos(300,300);
shiftColor(1/6)
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    for(let j = 0; j<8; j++){
        forward(200);
        left(135);
    }
    right(90);
    shiftColor(1/4);
}


// Niveau C-6

//Initialisation
setPos(300,400);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i = 0; i<3; i++){
    for(let j = 0; j<5; j++){
        forward(100);
        left(120);
    }
    right(120);
}


// Niveau C-7

//Initialisation
setPos(280,350);
changeColor(color.orange);
faceRight();

//Réalisation
for(let i = 0; i<8; i++){
    for(let j = 0; j<3; j++){
        forward(50);
        right(120);
    }
    forward(50);
    left(45);
}


// Niveau C-8

//Initialisation
setPos(300,500);
changeColor(color.green);
faceUp();

//Réalisation
forward(200);
right(45);

for(let i = 0; i<4; i++){
    for(let j = 0; j<3; j++){
        changeColor(color.red);
        forward(100);
        right(120);
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}


// Niveau C-9

//Initialisation
setPos(400,400);
changeColor(color.green);
faceRight();

//Réalisation
for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        forward(50);
        right(120);
        for(let k = 0; k<4; k++){
            right(90);
            forward(50);
        }
    }
    left(120);
    forward(200);
}


// Niveau C-10

//Initialisation
setPos(320,100);
changeColor(color.red);
faceDown();

//Réalisation
for(let i = 0; i<4; i++){
    for(let j = 0; j<4; j++){
        forward(50);
        for(let k = 0; k<4; k++){
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);
}


// Niveau C-11

//Initialisation
setPos(250,200);
shiftColor(1/2+0.1);
faceRight();

//Réalisation
for(let i = 0; i<6; i++){
    for(let j = 0; j<6; j++){
        forward(50);
        left(60);
        for(let k = 0; k<3; k++){
            forward(50);
            left(120);
        }
    }
    up();
    shiftColor(0.1);
    forward(100);
    down();
    right(60);
}

// Niveau C-12

//Initialisation
setPos(300,250);
changeColor(color.yellow);
faceRight();

//Réalisation
for(let i = 0; i<4; i++){
    for(let j = 0; j<2; j++){
        arcLeft(50, 90);
        forward(50);
        left(90);
    }
    arcRight(50, 45);
}

changeColor(color.blue);
arcRight(50, 180);
left(120);
arcLeft(100, 300);

*/

let repetition, repetition2, pixels, angle, angle2, angle3, longueur, rayon;  
/*// Niveau D-1

//Initialisation
setPos(250,200);
changeColor(color.red);
faceRight();
repetition = 8;
pixels = 100;
angle = 45;

//Réalisation
for(let i = 0; i<repetition; i++){
    forward(pixels);
    right(angle);
}

// Niveau D-2

//Initialisation
setPos(200,250);
changeColor(color.green);
faceRight();

//Réalisation
pixels = 50;
forward(pixels);
faceDown();
pixels = 100;
forward(pixels);
faceRight();
pixels = 150;
forward(pixels);
faceUp();
pixels = 50;
forward(pixels);
faceLeft();
pixels = 100;
forward(pixels);


// Niveau D-3

//Initialisation
setPos(250,250);
changeColor(color.purple);
faceRight();
angle = 135;

//Réalisation
pixels = 100;
forward(pixels);
right(angle);
pixels = 150;
forward(pixels);
left(angle);
pixels = 100;
forward(pixels);


// Niveau D-4

//Initialisation
setPos(200,600);
changeColor(color.blue);
faceRight();
repetition = 6;
pixels = 100;

//Réalisation
for(let i = 0; i < repetition; i++){
    faceUp();
    forward(pixels);
    faceLeft();
    forward(pixels);
    faceUp();
    forward(pixels/2);
    faceRight();
    forward(pixels*2);
}


// Niveau D-5

//Initialisation
setPos(300,300);
changeColor(color.orange);
faceDown();
repetition = 4;
pixels = 100;
angle = 90;

//Réalisation
forward(pixels*1.5);
faceRight();
forward(pixels/2);
faceUp();
forward(pixels*1.5);
changeColor(color.yellow);
for(let i = 0; i<repetition; i++){
    forward(pixels/2);
    left(angle);
}


// Niveau D-6

//Initialisation
setPos(200,300);
changeColor(color.cyan);
faceRight();
longueur = 50;

//Réalisation
forward(longueur);
faceDown();
longueur = 100;
forward(longueur);
faceRight();
longueur = 150;
forward(longueur);


// Niveau D-7

//Initialisation
setPos(300,350);
changeColor(color.pink);
faceUp();
longueur = 50;

//Réalisation
forward(longueur);
faceRight();
forward(longueur);
faceUp();
longueur = 100;
forward(longueur);
faceLeft();
forward(longueur);
longueur = 50;
faceDown();
forward(longueur);


// Niveau D-8

//Initialisation
setPos(250,250);
changeColor(color.orange);
faceRight();
longueur = 100;
repetition = 2;

//Réalisation
for(let i = 0; i < repetition; i++){
    forward(longueur);
    faceDown();
}

longueur = 50;

for(let i = 0; i < repetition; i++){
    faceLeft();
    forward(longueur);
    faceUp();
    forward(longueur);
}


// Niveau D-9

//Initialisation
setPos(300,250);
changeColor(color.blue);
faceRight();
longueur = 50;
repetition = 6;
angle = 120;

//Réalisation
for(let i = 0; i < repetition; i++){
    forward(longueur);
    right(angle);
    longueur += 50;
}


// Niveau D-10

//Initialisation
setPos(280,250);
changeColor(color.yellow);
faceRight();
longueur = 50;
repetition = 10;
angle = 90;

//Réalisation
for(let i = 0; i < repetition; i++){
    forward(longueur);
    right(angle);
    longueur += 25;
}


// Niveau D-11

//Initialisation
setPos(100,350);
changeColor(color.white);
faceRight();
longueur = 125;
repetition = 5;
repetition2 = 3;
angle = 120;

//Réalisation
for(let i = 0; i < repetition; i++){
    for(let j = 0; j < repetition2; j++){
        forward(longueur);
        left(angle);
    }
    forward(longueur);
    longueur -= 25;
}


// Niveau D-12

//Initialisation
setPos(325,350);
changeColor(color.cyan);
faceRight();
longueur = 50;
repetition = 6;
repetition2 = 3;
angle = 120;
angle2 = 60;

//Réalisation
for(let i = 0; i < repetition; i++){
    for(let j = 0; j < repetition2; j++){
        forward(longueur);
        left(angle);
    }
    forward(longueur);
    longueur += 25;
    left(angle2);
}


// Niveau D-13

//Initialisation
setPos(350,250);
changeColor(color.pink);
faceRight();
rayon = 50
longueur = 50;
repetition = 8;
angle = 180;

//Réalisation
for(let i = 0; i < repetition; i++){
    arcRight(rayon, angle);
    up();
    forward(longueur);
    down();
    rayon += 25;
}


// Niveau D-14

//Initialisation
setPos(125,300);
changeColor(color.green);
faceRight();
left(45);
repetition = 2;
repetition2 = 4;
angle = 90;

//Réalisation
for(let i = 0; i < repetition; i++){
    longueur = 25;
    for(let j = 0; j < repetition2; j++){
        for(let k = 0; k < repetition; k++){
            forward(longueur);
            right(angle);
        }
        right(angle*2);
        longueur += 25;
    }
    right(angle*2);
}


// Niveau D-15

//Initialisation
setPos(280,300);
changeColor(color.red);
faceDown();
repetition = 10;
longueur = 50;
angle = 90;

//Réalisation
for(let i = 0; i < repetition; i++){
    forward(longueur);
    left(angle);
    angle -= 5;
    longueur += 10;
}


// Niveau D-16

//Initialisation
setPos(280,280);
changeColor(color.green);
faceDown();
repetition = 3;
rayon = 50;
pixels = 100
angle = 180;
angle2 = 120;
angle3 = 90;

//Réalisation
forward(pixels);
right(angle2);
forward(pixels/2);
left(angle2);
right(angle3);

for(let i = 0; i < repetition; i++){
    forward(pixels/2);
    right(angle3);
}

left(angle2);
forward(pixels/2);
faceRight();
changeColor(color.orange);
up();
forward(pixels/2);

for(let i = 0; i < repetition; i++){
    down();
    arcRight(rayon, angle);
    up();
    arcRight(rayon+25, angle);
    rayon += 50;
}


// Niveau E-1

//Initialisation
setPos(150,280);
changeColor(color.orange);
faceRight();
repetition = 5;

function drawStar(){
    for(let i = 0; i<repetition; i++){
        forward(75);
        right(144);
    }
}

//Réalisation
drawStar();
forward(100);
drawStar();
forward(150);
changeColor(color.green);
drawStar();


// Niveau E-2

//Initialisation
setPos(300,280);
changeColor(color.blue);
faceRight();
repetition = 2;

function drawFlag(){
    forward(200);
    for(let i = 0; i<repetition; i++){
        right(120);
        forward(100);
    }
    left(60);
    forward(100);
}

//Réalisation
for(let i = 0; i < 2; i++)
    drawFlag();

left(90);
changeColor(color.red);

for(let i = 0; i < 2; i++)
    drawFlag();


// Niveau E-3

//Initialisation
setPos(250,400);
changeColor(color.yellow);
faceRight();
repetition = 6;
repetition2 = 4;

function drawCarre(){
    for(let i = 0; i < repetition2; i++){
        forward(50);
        left(90);
    }
}

//Réalisation
for(let i = 0; i < repetition; i++){
    drawCarre();
    forward(100);
    left(60);
}


// Niveau E-4

//Initialisation
setPos(75,500);
changeColor(color.red);
faceRight();
repetition = 2;

function draw2Steps(){
    for(let i = 0; i<repetition; i++){
        forward(50);
        left(90);
        forward(50);
        right(90);
    }
}

//Réalisation
draw2Steps();
changeColor(color.yellow);
forward(100);
changeColor(color.blue);
draw2Steps();
changeColor(color.green);
draw2Steps();
forward(100);


// Niveau E-5

//Initialisation
setPos(250,350);
changeColor(color.cyan);
faceDown();
repetition = 2;

function drawL(){
    forward(100);
    left(90);
    forward(50);
}

//Réalisation
drawL();
changeColor(color.green);
drawL();
changeColor(color.orange);
drawL();
right(90);
changeColor(color.fuchsia);
drawL();


// Niveau E-6

//Initialisation
setPos(150,250);
changeColor(color.green);
faceRight();
repetition = 3;

function drawTriangle(){
    for(let i = 0; i<repetition; i++){
        forward(100);
        right(120);
    }
}

//Réalisation
drawTriangle();
forward(100);
changeColor(color.purple);
drawTriangle();
up();
forward(200);
down();
right(90);
changeColor(color.orange);
drawTriangle();


// Niveau E-7

//Initialisation
setPos(100,350);
changeColor(color.red);
faceRight();
repetition = 2;

function drawMotif(){
    down();
    for(let i = 0; i<repetition; i++){
        forward(50);
        left(45);
        forward(100);
        left(135);
    }
    up();
}

//Réalisation
for(let i = 0; i < repetition; i++){
    drawMotif();
    forward(100);
}

changeColor(color.cyan);
for(let i = 0; i < repetition+1; i++){
    drawMotif();
    forward(50);
}


// Niveau E-8

//Initialisation
setPos(150,350);
changeColor(color.red);
faceRight();
repetition = 3;

function draw2Triangles(){
    for(let i = 0; i < repetition; i++){
        forward(100);
        left(120);
    }
    left(180);
    for(let i = 0; i < repetition; i++){
        left(120);
        forward(50);
    }
    left(180);
    forward(100);
}

//Réalisation
draw2Triangles();
changeColor(color.cyan);
draw2Triangles();
right(90);
changeColor(color.yellow);
draw2Triangles();


// Niveau E-9

//Initialisation
setPos(50,350);
changeColor(color.fuchsia);
faceRight();
repetition = 2;

function drawHouse(){
    left(90);
    forward(100);
    right(45);
    forward(50);
    right(90);
    forward(50);
    right(45);
    forward(100);
    left(90);
    forward(50);
}

//Réalisation
forward(50);
drawHouse();
forward(50);
drawHouse();
changeColor(color.green);
drawHouse();
forward(50);


// Niveau E-10

//Initialisation
setPos(150,350);
shiftColor(0);
faceRight();
repetition = 4;
repetition2 = 2;

function drawCross(){
    down();
    for(let i = 0; i < repetition; i++){
        for(let j = 0; j < repetition2; j++){
            forward(25);
            right(90);
        }
        forward(25);
        left(90);
    }
    up();
}

//Réalisation
for(let i = 0; i < 3; i++){
    drawCross();
    forward(100);
    faceUp();
    drawCross();
    forward(100);
    shiftColor(0.3);
    faceRight();
}


// Niveau E-11

//Initialisation
setPos(300,300);
shiftColor(5/6-0.1);
faceRight();
repetition = 3;
repetition2 = 2;

function drawShape(){
    forward(100);
    for(let i = 0; i < repetition2; i++){
        right(60);
        forward(50);
    }
}

//Réalisation
for(let i = 0; i<repetition; i++){
    drawShape();
    up();
    shiftColor(-0.1);
    forward(50);
    down();
}
up();
faceUp();
forward(100);
down();
for(let i = 0; i < repetition; i++)
    drawShape();


// Niveau E-12

//Initialisation
setPos(150,300);
shiftColor(5/8);
faceRight();

function draw3Squares(){
    longueur = 50;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            forward(longueur);
            arcLeft(50, 90);
        }
        longueur += 25;
    }
}

//Réalisation
for(let i = 0; i < 2; i++){
    
    draw3Squares();
    up();
    shiftColor(0.25);
    faceDown();
    forward(50*2);
    down();
}

up();
arcRight(100, 270);
forward(50*7);
down();
draw3Squares();


// Défi : 800 traits

//Initialisation
setPos(150,300);
shiftColor(0);
setPos(50, 50);
faceRight();

//Réalisation
for(let i = 0; i < 400; i++){
    forward(400);
    shiftColor(1/400);
    backward(400);
    faceDown();
    forward(1);
    faceRight();
}


//Défi : Etoile 1

//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i < 6; i++){
    forward(100);
    backward(100);
    left(60);
}


//Défi : Etoile 2

//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i < 36; i++){
    forward(100);
    backward(100);
    left(10);
}


//Défi : Etoile 3

//Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();

//Réalisation
for(let i = 0; i < 360; i++){
    forward(100);
    backward(100);
    left(1);
}


//Défi : Huit v1

//Initialisation
setPos(300,300);
shiftColor(0);
faceRight();
let epaisseur = 100;

//Réalisation
for(let i = 0; i < 3; i++){
    setLineWidth(epaisseur);
    arcLeft(100, 360);
    arcRight(100, 360);
    shiftColor(0.1);
    epaisseur -= 33;
}


//Défi : Huit v2

//Initialisation
setPos(300,300);
shiftColor(0);
faceRight();
let epaisseur = 100;

//Réalisation
for(let i = 0; i < 30; i++){
    setLineWidth(epaisseur);
    arcLeft(100, 360);
    arcRight(100, 360);
    epaisseur -= 10/3;
    shiftColor(0.1);
}



//Défi : Disque

//Initialisation
setPos(300,300);
shiftColor(0);
faceRight();
setLineWidth(3.1);

//Réalisation
for(let i = 0; i < 360; i++){
    forward(200);
    backward(200);
    left(1);
    shiftColor(0.01);
}


//Défi : Polygones

//Initialisation
setPos(280,400);
shiftColor(0);
faceRight();
let cote = 3

//Réalisation
for(let i = 0; i < 10; i++){
    for(let j = 0; j < cote; j++){
        forward(50);
        left(360/cote);
    }
    cote++;
    shiftColor(0.1);
}

*/
//Défi : Dragon

//Initialisation
turtle.setPos(200,350);
turtle.changeColor(color.red);
turtle.setLineWidth(1);
turtle.angleInRadians=Math.PI/2;

function dragon(n){
    if(n==0)
        turtle.forward(7.5);
    
    else{
        turtle.left(45);
        dragon(n-1);
        turtle.right(90);
        dragonInverse(n-1);
        turtle.left(45);
    }
}

function dragonInverse(n){
    if(n==0)
        turtle.forward(7.5);
    
    else{
        turtle.right(45);
        dragon(n-1);
        turtle.left(90);
        dragonInverse(n-1);
        turtle.right(45);
    }
}

//Réalisation
dragon(10);