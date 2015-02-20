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

    return slices - (slices%2);
  }

};


// $(function(){
//
//   $("pizza-order").submit(function(event){
//
//     var size = parseInt($("#size").val());
//     var  = $("#type").val();
//
//     var pizza = Object.create(Pizza);
//     pizza.diameter = size;
//     pizza. = type
//
//     var slices =
//
//     event.preventDefault();
//   });
//
//
// });
