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

// task 4
function century(year) {
  return Math.ceil(year / 100);
};


