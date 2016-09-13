$(document).ready(function() {
 
  console.log("document loaded"); //process check

  $("#magic-eight-ball").submit(function(event) { //form click
    console.log("inside click function"); //process check
    event.preventDefault();
    $('.bottom').show();
    $('.top').hide();
    var answers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful'
    ];

    //math.floor rounds down to make a whole number
    var randomResponse = answers[Math.floor(Math.random() * 20)]; //random number between 0-19

    console.log(randomResponse); //process check

    $("#answer").text(randomResponse); //display random answer to document
    
  }); //close form click

  $("#reset-btn").click(function() { //reset the app
    $('.bottom').hide();
    $('.top').show();
  });

});