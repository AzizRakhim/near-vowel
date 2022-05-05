// Problem #1

/*
let letters = "abcdefghijklmnopqrstuvwxyz";
letters = letters.split("");

let letter = "z";

let resultOne = "";
let resultTwo = "";
let count = 0;
let countTwo = 0;
let countThree = 0;

if(letter == "a"){
  console.log(letter); 
} else if (letter == "e"){
  console.log(letter); 
} else if (letter == "i"){
  console.log(letter); 
} else if (letter == "o"){
  console.log(letter); 
} else if (letter == "u"){
  console.log(letter); 
} else if(letter == "y"){
  console.log(letter); 
} else if(letter == "z"){
  console.log("y"); 
} else {
  for(let i = 0; i < letters.length; i++){
    count++;
    if(letter == letters[i]){
      count--;
      break;
    }
  }
  for(let i = count; i < letters.length; i++){
    countTwo++;
    if(letters[i].match(/["aeiouy"]/)){
      resultOne = letters[i];
      break;
    }
  }
  for(let i = count; i >= 0; i--){
    countThree++;
    if(letters[i].match(/["aeiouy"]/)){
      resultTwo = letters[i];
      break;
    }
  }
  if(countTwo < countThree){
    console.log(resultOne);
  } else {
    console.log(resultTwo);
  }
}
*/

// Problem #2

/*
let letters = "hostess";
let num = 5;
let border = 0;
let result = "";

for(let i = 0; i < letters.length; i++){
  if(letters[i].match(/["aeiouy]/) && border < num){
    border++;
    result += letters[i];
  }
}

if(border < num){
  console.log("Invalid");
}else {
  console.log(result);
}
*/
