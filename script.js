document.write("From External file")

document.write("<br>")

// var raining=true;
// if(raining==true){
// 	document.write("stay at home");
// }
// else{
// 	document.write("visit a friend");
// }

// for (var i=0; i<1001; i++){
// 	if(i % 2 !=0){
// 		document.write(i + "<br>")
// 	}
// 	// document.write(i*10 + "<br>");
// }
// document.write("<br");

// for(var i=1; i<1001; i++){
// 	if (i%2==0){
// 		document.write("Even:"+ i + "<br>");
// 	}
// }


// var i=0;
// while(i<11){
// 	document.write(i);
// 	i++;
// }
	
// 	document.write("<br>");

// var i=200;
// while(i<3001){
// 	document.write(i + "<br>");
// 	i++;
// }

// if(i % 5 ==0){
// 	document.write("multiples of five:" +i + "<br>");
// }
// document.write("<br>");
// var i=1000;
// do{
// 	document.write(i +"<br>");
// 	i++;
// }
// while(i<=10000);


// document.write("<br>");

// function showGreeting(){
// 	var Greeting= "welcome";
// 	document.write(Greeting);
// }
// showGreeting();
// document.write("<br>");
// function Actors(){
// 	var name=["olu", "johnson","ahmed","bisi"];
// 	for (var i=0; i<4; i++){
// 		document.write(name[i] + "<br>");
// 	}
// }
// Actors();

// function Perimeter(){
// 	var length=20, breadth=15;
// 	document.write(perimeter=2*(length+breadth));
// }
// Perimeter();
// document.write("<br>");
// function showName(){
// 	document.write("ahmed" +"<br>");
// }
// function age(){
// 	document.write(20 + "<br>");
// }

// age();
// showName();

// document.write("<br>");

// function showName(firstName, lastName){
// 	document.write("name:" + firstName + "<br>");
// 	document.write("surname:" + lastName + "<br>");
// }
// showName("ibukun","johnson");
	
// 	document.write("<br>");

// function area(base, height){
// 	document.write("the area of the triangle:" + (base*height)/2);
	
// }
// area(14,12);

// document.write("<br>");

// function bio(name,food,color,sport,month){
// 	document.write("Name:" + name +" <br>");
// 	document.write("Best food:" + food +"<br>");
// 	document.write("Nice color:" + color +"<br>");
// 	document.write("favorite sport:" + sport + "<br>");
// 	document.write("birth month:" + month + "<br>");
// }
// bio("Ibukun","rice","blue","football","september");

// document.write("<br>");



function Discount(){
	var item="schoolbag", prize=1000;
	alert(prize);
	alert(discounted= 1000-(10/100)*1000);

}
Discount();

document.write("<br>");

var prize=2500000, confirm=confirm("Do you want a 20% discount?");

function Discount(){
		
		if(confirm==false){
			document.write(prize - (0.20 * prize));
			document.write("<br>"+"use discounted prize");

		}
		else{
			document.write(prize);
		}
}
Discount();

document.write("<br>")

var a=100, b=25;
function multiply(){
	document.write(a*b + "<br>");
}
function add(multiply){
	document.write(a+b + "<br>");
	multiply;
}

add(multiply());
document.write("<br>");

var shopItem = {
	'name': 'Laptop',
	'prize': 60000,
	'color': 'black',
	'quantity': 2,
	'totalPrize':function(){
		return this.prize*this.quantity;
	}
};
// document.write(shopItem.totalPrize());


// console.log(shopItem);
// document.write("<br>")
// document.write(shopItem.name +"<br>");
// document.write(shopItem.prize +"<br>");
// document.write(shopItem.color +"<br>");
// document.write(shopItem.quantity);

// shopItem.name= 'Peter';
// document.write(shopItem.name);
// document.write("<br>");

// var bankInfo=[
// {'bankName': 'firstBank',
//  'accountName': 'Ibukun Abi',
//  'accountBalance': 2000000,},
//  {'bankName': 'UnionBank',
//  'accountName': 'Ibukun Abi',
//  'accountBalance': 5000000,},
//  {'bankName': 'GtBank',
//  'accountName': 'Ibukun Abi',
//  'accountBalance': 2000000, },
// ];

// document.write(bankInfo[0].bankName + "<br>");
// document.write(bankInfo[1].bankName + "<br>");
// document.write(bankInfo[2].bankName)

// var myDate= new Date(2005,3,15,14.30, 40, 10);
// document.write(myDate);

// var randomNumber= Math.floor(Math.random()*50) + 1;
// document.write("Random Number:" +randomNumber + "<br>");
 
//  document.write("<br>");

//  var student=[
//   {'Name': 'Blessing',
//  'course': 'medicine',
// 'level':500,
// 'grade':100}, 
//   {'Name': 'John',
//  'course': 'chemistry',
// 'firstSemester':300,
// 'secondSemester':100},
//   {'Name': 'mary',
//  'course': 'dentistry',
// 'firstSemester':300,
// 'secondSemester':100},];

// student[3]="peter";
// student[3]="biology";
// student[3]=200;
// student[3]=50;

// console.log(student);
// document.write("<br>");
// // var firstSemester
// function average(firstSemester, secondSemester){
// 	document.write((firstSemester+secondSemester)/2);

// }
// average(students[2].firstSemester, students[2].secondSemester);

document.write("<br>");

// var text = document.getElementById("welcome_text").innerHTML;
// var lorem= document.getElementById("story").style.color="blue";
// alert(lorem);
// alert(text);

// var input= document.getElementById("enter_name").value="ibk";
// var email= document.getElementById("enter_email").value="bnkn@gmail.com";
// var pass= document.getElementById("enter_password").value="0909";
// alert(input);
// alert(email);
// alert(pass);
// document.write("<br>");
// if(name !="ibk"){
// 	alert("wrong user");
// }
// else{
// 	alert("valid user");
// }
// if (pass !="0909"){
// 	alert("invalid password");
// }
// else if(pass=="0909"){
// 	alert(pass);
// }
// else{
// 	alert("not applicable");
// }

// var input= document.getElementsByTagName("input");
// input[0].value="ibk";
// var email= document.getElementsByTagName("input");
// email[1].value="ola@yahoo.com";
// var pass= document.getElementsByTagName("input");
// pass[2].value="901";

document.write("<br>");

function mouseOver(){
	alert("hi");
}

function changeColor(){
	document.getElementById("square").style.backgroundColor="blue";
}

function reverseColor(){
	document.getElementById("square").style.backgroundColor="red";

}

function onClick(){
	document.getElementById("square").style.backgroundColor="red";
}

	var inputTag= document.getElementsByTagName("input");
	function validateFields(){
		if(inputTag[0].value ==""){
			alert("Please Enter a Name");
		}
		else if(inputTag[1].value ==""){
			alert("please enter password");
		}
		else if(input[1].value !="12345678"){
			alert("wrong password");
		}
		else{
			alert("welcome");
		}
		
	}
//  var inputTag= document.getElementsByTagName("input");
//  alert(inputTag[1].value);

// var firstName="ibk"
//  function showName(){

//  	document.write("ibk")

//  }
//  setTimeout(showName, 5000);

//  var timer=0;
//  function countUp(){
//  	document.write(timer + "<br>");
//  	timer++;

//  	if(timer!=5){

//  	}
//  }

 // setInterval (countUp, 1000);

 var currentTime = document.getElementById("display_current_time");

 function showDate(){
 	var date = new Date();
 	currentTime.innerHTML=date;
 }
 setInterval (showDate,1000);