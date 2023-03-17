
let distanceInFeet;

function scuberGreetingForFeet(distanceInFeet){
  let rideMessage;

  if (distanceInFeet <= 400){
    rideMessage = "This one is on me!";
  } else if(distanceInFeet > 400 && distanceInFeet <= 2000){
    rideMessage = "That will be twenty bucks.";
  } else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
    rideMessage = "I will gladly take your thirty bucks.";
  } else if (distanceInFeet > 2500) {
    rideMessage = "No can do.";
  }
  return rideMessage;
}

function ternaryCheckCity(city){
  let cityMessage;

  city === "NYC" ? (cityMessage = 'Ok, sounds good.') : (cityMessage = "No go.");
  
  return cityMessage;
}


function switchOnCharmFromTip(tip){
  let farewell;

  switch (tip) {
    case 'generous':
      farewell = "Thank you so much.";
      break;
    case 'not as generous':
      farewell = "Thank you.";
      break;
    default:
      farewell = "Bye."
      break;
  }
  return farewell;
  
}