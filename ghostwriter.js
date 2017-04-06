function writeTweet()
{
  var randIndex;
  var sentence;
  var intro = ["What's the deal with", "Have you ever noticed", "I don't understand", "There's nothing I hate more than"];
  var body = ["airplance food.", "the weather.", "Donald Trump.", "television.", "Chico State." ];
  var end = ["It's way too hot.", "It smells weird."];
  randIndex = randomUpTo(3);
  sentence = intro[randIndex];
  randIndex = randomUpTo(4);
  sentence = sentence + " " + body[randIndex];
  randIndex = randomUpTo(1);
  sentence = sentence + " " + end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;

}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
