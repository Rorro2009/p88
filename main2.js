var canvas = new fabric.Canvas("myCanvas");
ball_y = 0;
ball_x = 0;
hole_y = 285;
hole_x = 710;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img)
    {
        hole_obj = Img;
        hole_obj.scaleToWidth(75);
        hole_obj.scaleToHeight(75);
        hole_obj.set({
            top:hole_y, 
            left:hole_x
        });
     canvas.add(hole_obj);
        })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)
    {
        ball_obj = Img;
        ball_obj.scaleToWidth(75);
        ball_obj.scaleToHeight(75);
        ball_obj.set({
            top:ball_y, 
            left:ball_x
        });
     canvas.add(ball_obj);
        })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_y == hole_y))
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "¡Lo Lograste!";
		document.getElementById("myCanvas").style.borderColor="yellow";
        window.location = "index3.html";
	}
	
	else
	{
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
	
	function up()
	{
		if(ball_y >0)
		{
			ball_y = ball_y - block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presiona la flecha hacia abajo, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=575)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presiona la flecha hacia abajo, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >0)
		{
			ball_x = ball_x - block_image_width;
			console.log("ancho de la imagen = " + block_image_width);
			console.log("Cuando se presiona la flecha hacia izquierda, Y = " + ball_y + " , X = " + ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1445)
		{
			ball_x = ball_x + block_image_width;
			console.log("ancho de la imagen = " + block_image_width);
			console.log("Cuando se presiona la flecha hacia derecha, Y = " + ball_y + " , X = " + ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}