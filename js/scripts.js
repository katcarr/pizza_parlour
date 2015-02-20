var Pizza = {

  slices: function(){
    var slices = 0;

    if(this.diameter <= 16){
      slices = this.diameter - 2;
    } else {
      slices = this.diameter - 5;
    }

    if(this.type !== "cheese" && this.diameter >= 6){
      slices -= 2;
    }

    return slices - (slices%2);
  }

};
