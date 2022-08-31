
function rollFunction(){
  var randomNumber1 = Math.floor(Math.random() * 6 )+ 1;
  console.log(randomNumber1);
  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
  var winner = 0;
  if (randomNumber1 > randomNumber2)
  {
    winner = 1;
  }
  else if (randomNumber1 === randomNumber2)
  {
    winner = 0
  }
  else
  {
    winner = 2;
  }
  if (winner === 0)
  {
    document.querySelector("h1").innerHTML = "It is a Tie";
  }
  else
  {
    document.querySelector("h1").innerHTML = "The winner is player "+winner;
  }
}
