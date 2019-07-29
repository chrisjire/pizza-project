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
  var selectedCrust = document.getElementById("crust2").value;
  return parseInt(selectedCrust);
}


function getToppings() {
  var selectedToppings = document.getElementById("toppings2").value;
  return parseInt(selectedToppings);
}

function getQuantity() {
  var selectedQuantity = document.getElementById("quan2").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount2() {
var totalAmount2 = (getSizeValue2() + getCrust2() + getToppings2()) * getQuantity2();
  alert("You ordered " + getQuantity2() + " pizza(s)." + ""+" Your bill is " + (totalAmount2));
}

//Fourth

function getSizeValue() {
  var selectedValue = document.getElementById("size3").value;
  return parseInt(selectedValue);
}

function getCrust() {
  var selectedCrust = document.getElementById("crust3").value;
  return parseInt(selectedCrust);
}


function getToppings() {
  var selectedToppings = document.getElementById("toppings3").value;
  return parseInt(selectedToppings);
}

function getQuantity() {
  var selectedQuantity = document.getElementById("quan3").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount3() {
var totalAmount3 = (getSizeValue3() + getCrust3() + getToppings3()) * getQuantity3();
  alert("You ordered " + getQuantity3() + " pizza(s)." + ""+" Your bill is " + (totalAmount3));
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

  //Third

$(document).ready(function() {
    $("#select2").click(function() {
      $("#select2").show();
      $("#hform2").hide();
    });
  });
  $(document).ready(function() {
    $("#select2").click(function() {
      $("#hform2").show();
      $("#select2").hide();
    });
  });

  //Fourth

  $(document).ready(function() {
    $("#select3").click(function() {
      $("#select3").show();
      $("#hform3").hide();
    });
  });
  $(document).ready(function() {
    $("#select3").click(function() {
      $("#hform3").show();
      $("#select3").hide();
    });
  }); 