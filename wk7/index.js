
const quotes = ["Be yourself; everyone else is already taken.",
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"So many books, so little time.",
"A room without books is like a body without a soul"];
let quotecount = 1;

document.getElementById("newquote").addEventListener("click",buttonClicked);

function buttonClicked(){
  console.log(quotes[quotecount]);
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  if(quotecount>=6){
    quotecount = 1;
  }else{
    quotecount++;
  }
}
