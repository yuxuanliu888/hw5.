function setup() {
  createCanvas(400, 400);
    background(220);
}
var x=190
var y=210
var i=5
function draw() {

  if(i<200){i=i+10,x=x+10,y=y-10,line(x,i,y,i)}
  if(i>=200){i=i+10,x=x-10,y=y+10,line(x,i,y,i)}

//   for(var i =0; i <= 390;i=i+10){
// x=x-10,y=y+10,line(x,i,y,i)
//   }
 // if(x>=0)(x=x-10,y=y+10)
 
  // for(var i =200; i <= 390;i=i+10)
  // {line(i,i,400,i)
   


  
}
