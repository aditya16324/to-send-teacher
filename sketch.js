

var database;
var gameStatefreezer;
var playercountfreezer;
var form1;
var player;

function setup(){
  createCanvas(1200,600);
 database = firebase.database();
form1=new Form();
player=new Player();
}


function draw(){
form1.displayer()


}
