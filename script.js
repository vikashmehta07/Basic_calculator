let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
let total = 0;
let temp = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);

    if (buttonText == "AC") {
      screenValue = "";
      temp="";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = total;
      screenValue = total;
      temp=total;
    } else {
      screenValue += buttonText;

      if (buttonText == "×") {
        temp += "*";
      } 
      else if(buttonText == "÷"){
        temp += "/";
      }
      else {
        temp += buttonText;
      }
      screen.value = screenValue;
      total = eval(temp);
    }
  });
}
