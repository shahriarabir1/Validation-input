let item = document.querySelector("#items");
let container = document.querySelector(".container");
let form = document.querySelector(".form-container");
item.addEventListener("change", input);

function input() {
  let sel = item.options[item.selectedIndex].value;
  switch (true) {
    case sel == "email":
      var val1 = prompt("Enter Your Email");
      break;
    case sel == "phone":
      var val2 = prompt("Enter Your Phone");
      break;
    case sel == "zip":
      var val3 = prompt("Enter Postal Code");
      break;
  }

  let email = /^([a-zA-z0-9]\.?)+[^\.]@([a-zA-z0-9]\.?)+[^\.]$/;
  let phone = /^(\+88)?01[0-9]{9}$/;
  let postal = /^[0-9]{4}$/;
  let res1 = email.test(val1);
  let res2 = phone.test(val2);
  let res3 = postal.test(val3);
  switch (true) {
    case res1:
      let div = document.createElement("div");
      div.appendChild(document.createTextNode("It is a valid Email"));
      container.insertBefore(div, form);
      setTimeout(() => {
        div.remove();
      }, 2000);

      break;
    case res2:
      let div2 = document.createElement("div");
      div2.appendChild(document.createTextNode("It is a valid Phone"));
      container.insertBefore(div2, form);
      setTimeout(() => {
        div2.remove();
      }, 2000);

      break;
    case res3:
      let div3 = document.createElement("div");
      div3.appendChild(document.createTextNode("It is a valid Postal"));
      container.insertBefore(div3, form);
      setTimeout(() => {
        div3.remove();
      }, 2000);
      break;

    default:
      let div4 = document.createElement("div");
      div4.appendChild(document.createTextNode("It is Invalid"));
      container.insertBefore(div4, form);
      setTimeout(() => {
        div4.remove();
      }, 2000);
  }
  item.selectedIndex = 0;
}
