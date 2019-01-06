$(document).ready(function(){
	
var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
$head = $("#head");
$eye = $("#eyes");
$nose = $("#nose");
$mouth = $("#mouth");
		lightning_one();//function called
		lightning_two();
		lightning_three();
		

	function face(partcount,part){//select the div head and when clicked do the following:	
	    
		if (partcount < 9){//headclix assigned a value of 0, if headclix is less then 9, do the following(include the 0 it's 9 clicks)
						 //you have 9 because the strip has 9 images inside it.
	$(part).animate({left:"-=367px"},500);//animation which goes left by 367px and a speed of 500 sec
		partcount+=1;//everytime you click, add one to whatever the headclix var was before(value gets put in the headclix which is within the if statement).
		console.log(partcount);
		}else{//if it goes above 9 do the following: 
			debugger;
			$(part).animate({left:"0px"},500);//revert the strip back to 0px at a speed of 500 millisecond 

			//headclix = 0;//make sure the number of clicks goes to 0 as well.
		}

	};


		
	$("#head").click(function(){
	face(headclix,$head);
	});
	
	
	
	$("#eyes").click(function(){
	face(eyeclix,$eye);
	});
	
	
	$("#nose").click(function(){
	face(noseclix,$nose);
	});//end click
	 $("#mouth").click(function(){
face(mouthclix,$mouth);
	});
	


});//end doc.onready function

function lightning_one(){
	$("#container #lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()",4000);
};

function lightning_two(){
	$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout("lightning_two()",5000);
};

function lightning_three(){//create a function and delcare is lightning_three.when it is called do the following:
	$("#container #lightning3").fadeIn("slow").fadeOut("slow");//select the container and lightening div and fadein and fadeout the pictures within the divs
	setTimeout("lightning_three()",3000);// make it 7000 millisecond time
};