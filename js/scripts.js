
//Business Logic

function Pizza(size, toppings) {
  this.diameter = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function() {
  var sizePriceMod = [0.00, 3.00, 6.00, 9.00];
  var toppingPrice = 0.89;
  var basePrice = 8.00;
  var price = 0.00;

  if(this.diameter === "Personal") {
    price = basePrice + (this.toppings.length + toppingPrice);
    return price;
  } else if(this.diameter === "Medium") {
    price = sizePriceMod[1] + basePrice + (this.toppings.length * toppingPrice);
    return price;
  } else if(this.diameter === "Large") {
    price = sizePriceMod[2] + basePrice + (this.toppings.length * toppingPrice);
    return price;
  } else if(this.diameter === "Gigantic") {
    price = sizePriceMod[3] + basePrice + (this.toppings.length * toppingPrice);
    return price;
  }
};


//UI Logic

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    function getCheckboxInput(checkboxName){
      var inputs = [];

      $("input:checkbox[name=" + checkboxName + "]:checked").each(function(){
        var selection = $(this).val();
        inputs.push(selection);
      });
      return inputs;
    };

    var toppings = [];
    var size;
    var price = 0.00;

    size = $("#size").val();
    toppings = getCheckboxInput("toppings");
    $("#pizza-size").text(size);
    $("#pizza-toppings").text(toppings);
    yourPizza = new Pizza(size, toppings);
    price = yourPizza.cost();
    $("#pizza-price").text(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
    $("#order-status").fadeIn();
    console.log(price);
    console.log(size);
    console.log(toppings);
  });
});
