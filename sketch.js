// var Student={
// name:"Vaibhavi",
// class: 9,
// roll_number: 37,
// favourite_subject: "english",
// marks_scored: [30,50,35,80]
// }
var Ball={
  x:20,
  y:30,
  r:70,
  xspeed:0,
  yspeed:0,
  color:["blue","purple","green","pink"]
}
function setup() {
  createCanvas(400, 400);
  // console.log(Student.roll_number)
  // console.log(Student.favourite_subject)
  // console.log(Student.marks_scored)
  // Student.roll_number=38
  // console.log(Student.roll_number)
  // console.log("My roll number is:"+ Student.roll_number)
}

function draw() {
  background(220);
  circle(Ball.x,Ball.y,Ball.r);
  fill(Ball.color[1])
  Ball.xspeed=-1
  Ball.x=Ball.x+Ball.xspeed

}