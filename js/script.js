//business logic
function getSizeValue() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}


function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}

function getQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    return parseInt(selectedQuantity);
}

function getTotalAmount() {
  var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You ordered " + getQuantity() + " pizza(s)." + ""+" Your bill is " + (totalAmount));
}

// second

function getSizeValue() {
  var selectedValue = document.getElementById("size1").value;
  return parseInt(selectedValue);
}

function getCrust() {
  var selectedCrust = document.getElementById("crust1").value;
  return parseInt(selectedCrust);
}


function getToppings() {
  var selectedToppings = document.getElementById("toppings1").value;
  return parseInt(selectedToppings);
}

function getQuantity() {
  var selectedQuantity = document.getElementById("quan1").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount1() {
var totalAmount1 = (getSizeValue1() + getCrust1() + getToppings1()) * getQuantity1();
  alert("You ordered " + getQuantity1() + " pizza(s)." + ""+" Your bill is " + (totalAmount1));
}

//third

function getSizeValue() {
  var selectedValue = document.getElementById("size2").value;
  return parseInt(selectedValue);
}

function getCrust() {
  var selectedCrust = document.getElementById("crust1").value;
  return parseInt(selectedCrust);
}


function getToppings() {
  var selectedToppings = document.getElementById("toppings1").value;
  return parseInt(selectedToppings);
}

function getQuantity() {
  var selectedQuantity = document.getElementById("quan1").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount1() {
var totalAmount1 = (getSizeValue1() + getCrust1() + getToppings1()) * getQuantity1();
  alert("You ordered " + getQuantity1() + " pizza(s)." + ""+" Your bill is " + (totalAmount1));
}

//UI interface
$(document).ready(function() {
    $("#select").click(function() {
      $("#select").show();
      $("#hform").hide();
    });
  });
  $(document).ready(function() {
    $("#select").click(function() {
      $("#hform").show();
      $("#select").hide();
    });
  });

  //second
  $(document).ready(function() {
    $("#select1").click(function() {
      $("#select1").show();
      $("#hform1").hide();
    });
  });
  $(document).ready(function() {
    $("#select1").click(function() {
      $("#hform1").show();
      $("#select1").hide();
    });
  });