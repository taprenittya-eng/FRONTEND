var randomNumber1 =Math.floor(Math.random()*6)+1;
var diceran="images/"+"dice"+randomNumber1+".png";
var imag1=document.querySelectorAll("img")[0];
imag1.setAttribute("src",diceran);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceran2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceran2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!"
   
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!"

}
