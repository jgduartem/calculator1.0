let value1;
let value2;
let choice;

let screen=document.querySelector("#screen").value;

function addOne(){
	screen=screen + "1";
	document.querySelector("#screen").value=screen;
	console.log(screen);
}

function addTwo(){
	screen=screen + "2";
	document.querySelector("#screen").value=screen;
	console.log(screen);
}

function addThree(){
	screen=screen + "3";
	document.querySelector("#screen").value=screen;
}

function addFour(){
	screen=screen + "4";
	document.querySelector("#screen").value=screen;
}

function addFive(){
	screen=screen + "5";
	document.querySelector("#screen").value=screen;
}

function addSix(){
	screen=screen + "6";
	document.querySelector("#screen").value=screen;
}

function addSeven(){
	screen=screen + "7";
	document.querySelector("#screen").value=screen;
}

function addEight(){
	screen=screen + "8";
	document.querySelector("#screen").value=screen;
}

function addNine(){
	screen=screen + "9";
	document.querySelector("#screen").value=screen;
}

function addZero(){
	screen=screen + "0";
	document.querySelector("#screen").value=screen;
}

function del(){
	screen=screen.substring(0, screen.length-1);
	document.querySelector("#screen").value=screen;
	console.log(screen);

}

function delAll(){
	screen="";
	document.querySelector("#screen").value=screen;
	value1=0;
	value2=0;
}

function dot(){
	if(screen.indexOf(".")!=-1){

	}
	else{
		screen=screen+".";
		document.querySelector("#screen").value=screen;
		console.log(screen);
	}
}

function add(){
	choice="add";
	value1=document.querySelector("#screen").value;
	screen="";
	document.querySelector("#screen").value=0;
	console.log(value1 + " valor almacenado ");
	console.log(screen + " pantalla vacia");
}

function subtract(){
	choice="subtract";
	value1=document.querySelector("#screen").value;
	screen="";
	document.querySelector("#screen").value=0;
}

function multiply(){
	choice="multiply";
	value1=document.querySelector("#screen").value;
	screen="";
	document.querySelector("#screen").value=0;
}

function divide(){
	choice="divide";
	value1=document.querySelector("#screen").value;
	screen="";
	document.querySelector("#screen").value=0;
}

function result(){
	switch(value1!=0){
		case (choice=="add"):
		value2=document.querySelector("#screen").value;
		screen=parseFloat(value1)+parseFloat(value2);
		document.querySelector("#screen").value=screen;
		break;

		case(choice=="subtract"):
		value2=document.querySelector("#screen").value;
		screen=parseFloat(value1)-parseFloat(value2);
		document.querySelector("#screen").value=screen;
		break;

		case(choice=="multiply"):
		value2=document.querySelector("#screen").value;
		screen=parseFloat(value1)*parseFloat(value2);
		document.querySelector("#screen").value=screen;
		break;

		case (choice=="divide"):
		value2=document.querySelector("#screen").value;
		if (value2!=0){
			screen=parseFloat(value1)/parseFloat(value2);
			document.querySelector("#screen").value=screen;
		}
		else{
			value2="";
		}
		break;
	}
}

const button1=document.querySelector("#oneButton");
button1.addEventListener("click", addOne);

const button2=document.querySelector("#twoButton");
button2.addEventListener("click", addTwo);

const button3=document.querySelector("#threeButton");
button3.addEventListener("click", addThree);

const button4=document.querySelector("#fourButton");
button4.addEventListener("click", addFour);

const button5=document.querySelector("#fiveButton");
button5.addEventListener("click", addFive);

const button6=document.querySelector("#sixButton");
button6.addEventListener("click", addSix);

const button7=document.querySelector("#sevenButton");
button7.addEventListener("click", addSeven);

const button8=document.querySelector("#eightButton");
button8.addEventListener("click", addEight);

const button9=document.querySelector("#nineButton");
button9.addEventListener("click", addNine);

const button0=document.querySelector("#zeroButton");
button0.addEventListener("click", addZero);

const buttonDel=document.querySelector("#backButton");
buttonDel.addEventListener("click", del);

const buttonCE=document.querySelector("#eraseButton");
buttonCE.addEventListener("click", delAll);

const buttonDot=document.querySelector("#dotButton");
buttonDot.addEventListener("click", dot);

const buttonAdd=document.querySelector("#plusButton");
buttonAdd.addEventListener("click", add);

const buttonSubtract=document.querySelector("#subtractButton");
buttonSubtract.addEventListener("click", subtract);

const buttonMultiply=document.querySelector("#multiplyButton");
buttonMultiply.addEventListener("click", multiply);

const buttonDivide=document.querySelector("#divideButton");
buttonDivide.addEventListener("click", divide);

const buttonEqual=document.querySelector("#equalButton");
buttonEqual.addEventListener("click", result);


