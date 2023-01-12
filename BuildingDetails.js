document.getElementById("container-3").onchange = function (e) {
  if (selectedValue == "2" && selectedValue) {
    document.getElementById("select_3").style.display = "block";
  } else if (selectedValue == "3") {
    document.getElementById("select_3").style.display = "block";
  } else {
    document.getElementById("select_3").style.display = "none";
  }
};

function selectButtonAp() {
  console.log("clicked ap");
}

function show_active() {
  console.log("active state");
}

function show_select_usertype() {
  document.getElementById("select_2").onchange = function () {
    var selectedValue = this.options[this.selectedIndex].value;

    if (selectedValue == "1") {
      document.getElementById("select_3").style.display = "none";
    } else {
      document.getElementById("select_3").style.display = "block";
    }
  };
}

function show() {
  document.getElementById("select_type").onchange = function () {
    var selectedValue = this.options[this.selectedIndex].value;

    if (selectedValue == "2") {
      document.getElementById("select_1").style.display = "block";
      document.getElementById("select_2").style.display = "block";
      document.getElementById("select_3").style.display = "block";
    } else {
      document.getElementById("select_1").style.display = "none";
      document.getElementById("select_2").style.display = "none";
      document.getElementById("select_3").style.display = "none";
    }
  };
}

function show_parking() {
  document.getElementById("select_1").onchange = function () {
    var selectedValue = this.options[this.selectedIndex].value; // get the selected value

    // Depending on the value selected you can show or hide other elements:

    if (selectedValue == "2") {
      document.getElementById("ap_slot").style.display = "block";
    } else {
      document.getElementById("ap_slot").style.display = "none";
    }
  };
}
