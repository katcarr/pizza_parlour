var Pizza = {

  slices: function(){
    var slices = 0;

    if(this.diameter <= 16){
      slices = this.diameter - 2;
    } else {
      slices = this.diameter - 5;
    }

    if(this.kind !== "cheese" && this.diameter >= 6){
      slices -= 2;
    }
debugger;
    return slices - (slices%2);
  }

};


$(function(){

  $("#pizza-order").submit(function(event){

    var pizza = Object.create(Pizza);
    pizza.diameter = parseInt($("#size").val());
    pizza.kind = $("#type").val();

    if(pizza.diameter > 4){
      $("#error").hide();
      $("#pizza-type").text(pizza.kind);
      $("#slices").text(pizza.slices());

      $("#order-results").show();
    } else {
      $("#error").show();
    }

    event.preventDefault();
  });


});
