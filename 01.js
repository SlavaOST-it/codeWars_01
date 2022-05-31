// task 1
function helloWorld() {
    let str = "Hello World!";
  console.log(str);
};


// task 2
function makeNegative(num) {
  if (num > 0) {
    return (num * (-1));
  } else if (num === 0) {
    return (0);
  } else if (num < 0) {
    return (num);
  }
};


// task 3
function week(day) {
    if (day == 1) {
        alert("Понедельник");
    } else if (day == 2) {
        alert("Вторник");
    } else if (day == 3) {
        alert("Среда");
    } else if (day == 4) {
        alert("Четверг");
    } else if (day == 5) {
        alert("Пятница");
    } else if (day == 6) {
        alert("Суббота");
    } else if (day == 7) {
        alert("Воскресенье");
    }    
};

<<<<<<< HEAD
=======

>>>>>>> 3158c61692748301b99853cbdf0c4e844c8b79a7
// task 4
function century(year) {
  return Math.ceil(year / 100);
};


// task 5
function multiply(a, b){
  return a * b
}

// task 6
function makeUpperCase(str) {
  return str.toUpperCase();
};


// task 7
function bmi(weight, height) {
  let i = weight / (height * height);
  if (i <= 18.5) {
    return("Underweight");
  } else if(i <= 25.0){
    return("Normal");
  } else if(i <= 30.0){
    return("Overweight");
  } else if (i > 30) {
    return("Obese");
  }   
};


// task 8
function check(a, x) {
  for (var i = 0; i < a.length; i++){
    if (a[i] === x) {
      return true;
    }
  }
  return false;
};


// task 9
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return (number * 8);
  } else {
    return (number * 9);
  }
}