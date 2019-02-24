// //Function to get the mouse position
// function getMousePos(canvas, event) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
// }
// //Function to check whether a point is inside a rectangle
// function isInside(pos, rect){
//     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// }

// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// //The rectangle should have x,y,width,height properties
// context.rect(25, 425, 100, 50)
// context.font = "30px Arial";
// context.fillStyle = "gray";
// context.fill()
// context.fillStyle = "red";
// context.fillText("Back", 25, 430); 
// context.rect(375, 425, 100, 50)
// context.fillStyle = "gray";
// context.fill()
// context.fillStyle = "white";
// context.fillText("Next", 375, 450); 




// //Binding the click event on the canvas
// canvas.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(canvas, evt);

//     if (isInside(mousePos,rect)) {
//         alert('clicked inside rect');
//     }else{
//         alert('clicked outside rect');
//     }   
// }, false);

function Submit() {
    alert("Hello, we are now going on to an advanture!");
    alert("On the adventure there will come different choices of different thinks to do, if you choose wrong you might not find the solution.");
    alert("Okey, lets go");
  
      var Name = prompt("Type in your name");
      while (Name === "") {
      alert("Please type a name in the field!")
      var Name = prompt("Type in your name");
      } 
  
    alert("Hello " + Name);



}