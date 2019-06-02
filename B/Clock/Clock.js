function initLocalClocks() {
    // Get the local time using JS
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    
    // Create an object with each hand and it's angle in degrees
    var hands = [
      {
        hand: 'hour-hand',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'min-hand',
        angle: (minutes * 6)
      },
      {
        hand: 'sec-hand',
        angle: (seconds * 6)
      }
    ];
    //we have the time details and now we have to move the hands
    //transform: rotateZ(50deg);
    
    $("[id=hour-hand]").css("transform","rotateZ("+hands[0].angle+"deg)");
    $("[id=min-hand]").css("transform","rotateZ("+hands[1].angle+"deg)");
    $("[id=sec-hand]").css("transform","rotateZ("+hands[2].angle+"deg)");
    
  }
  initLocalClocks();