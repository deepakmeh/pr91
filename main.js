canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Create an array "nasa_mars_images_array" and store all the image file names.


//Generate random number and store it in variable "random_number"



rover_width = 100;
rover_height = 90;

/*Pass this random_number as the index to the array and update the background_image variable 
with the following*/


//console this background_image variable to see when images come, everytime we refresh the page.
nasa = ["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg","nasa5.jpg"];
r = Math.floor(Math.random()*4);
background_image = nasa[r];
console.log("background_image = " + background_image);


rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

//Add the code for up() function:
function up(){
	if (rover_y >= 0 )
	{
		rover_y = rover_y - 10;
		console.log ("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();

	}
}








//Add the code for down() function:

function down(){
	if (rover_y <= 500)
	{
		rover_y = rover_y + 10;
		console.log ("When down arrow is pressed, x = " +rover_x + " | y = "+ rover_y);
		uploadBackground();
		uploadrover();

		
	}
}

function left(){
	if (rover_y <= 500)
	{
		rover_x = rover_x - 10;
		console.log ("When down arrow is pressed, x = " +rover_x + " | y = "+ rover_y);
		uploadBackground();
		uploadrover();

		
	}
}








//Add the code for right() function:

function right(){
	if (rover_y <= 700)
	{
		rover_x = rover_x + 10;
		console.log ("When right arrow is pressed, x = " +rover_x + " | y = "+ rover_y);
		uploadBackground();
		uploadrover();

		
	}
}









//Additional Activity
//Add the code for up() function:








	