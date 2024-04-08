/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const INTRO = 1;
const PROGRES = 2;
const SPONSORS = 3;

var pos = 0;
var logoSize = 95;
var circleSize = 21;
var loadingVar = false;

var EEN;
var MAIS;
var TenadaFont;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */


/**
 * Tekent spelscherm
 */
var loading = function() {
  if(circleSize < 70) {
    circleSize += 6;
  }else{
    loadingVar = false;
    circleSize = 21;
  }
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(windowWidth, windowHeight);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(161, 201, 66);
  angleMode(DEGREES);

  // loadFont('Teneda.ttf', Tenada => {
  //   fill('white');
  //   textFont(Tenada);
  //   textSize(36);
  // });
}

function preload() {
  EEN = loadImage('images/EEN.jpg');
  MAIS = loadImage ('images/skibidi.png');
  TenadaFont = loadFont('Tenada.ttf');
  // TenedaFont = loadFont('Taneda.ttf');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if(loadingVar === true) {
    loading();
  }

  background(161, 201, 66);

  image(EEN, 0, 0+pos, windowWidth, windowWidth/1.33333333333);
  push();
  translate(45, 45);
  stroke(205, 172, 65);
  fill(225, 192, 85);
  circle(0, 0, circleSize, circleSize)
  image(MAIS, -logoSize/2, -logoSize/2, logoSize, logoSize);
  pop();

  fill('white');
  textFont(TenadaFont);
  textSize(200);
  text('M-Mais', (windowWidth-800)/2, windowHeight/2);

  if(pos > 0) {
    pos = 0;
  }

  if(mouseX > 25 && mouseX < 65 && mouseY > 25 && mouseY < 65) {
    if(logoSize < 105) {
      logoSize++;
    }
    if(mouseIsPressed) {
      loadingVar = true;
    }
  }else{
    if(logoSize > 95) {
      logoSize--;
    }
  }
}

function mouseWheel(event) {
  pos -= event.delta/7;
}
