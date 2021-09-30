function calc(id) {
  let val1 = parseFloat(document.getElementById("value1").value);
  let val2 = parseFloat(document.getElementById("value2").value);
  if (isNaN(val1) || isNaN(val2)) {
    if (id == "reset") {
      alert("Values are already empty.");
    } else {
      alert("Enter valid numbers");
    }
  } else {
    add_res = val1 + val2;
    sub_res = val1 - val2;
    mul_res = val1 * val2;
    div_res = val1 / val2;
    switch (id) {
      case "add":
        document.getElementById(
          "result"
        ).innerHTML = `Result <h3>${add_res}</h3>`;
        break;
      case "subtract":
        document.getElementById(
          "result"
        ).innerHTML = `Result <h3>${sub_res}</h3>`;
        break;
      case "multiply":
        document.getElementById(
          "result"
        ).innerHTML = `Result <h3>${mul_res}</h3>`;
        break;
      case "divide":
        document.getElementById(
          "result"
        ).innerHTML = `Result <h3>${div_res}</h3>`;
        break;
      case "reset":
        value1.value = "";
        value2.value = "";
        document.getElementById("result").innerHTML =
          "Your result will be displayed here.";
    }
  }
}
