describe("Pizza", function(){
  describe("slices", function(){
    it("returns 2 if cheese pizza and diameter is 4 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.type = "cheese";
      testPizza.diameter = 4;
      expect(testPizza.slices()).to.equal(2);
    });
    
    it("returns 2 if cheese pizza and diameter is 5 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.type = "cheese";
      testPizza.diameter = 5;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 2 if pepperoni pizza and diameter is 4 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.type = "pepperoni";
      testPizza.diameter = 4;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 4 if cheese pizza and diameter is 6 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.type = "cheese";
      testPizza.diameter = 6;
      expect(testPizza.slices()).to.equal(4);
    });

    it("returns 2 if pepperoni pizza and diameter is 6 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.type = "pepperoni";
      testPizza.diameter = 6;
      expect(testPizza.slices()).to.equal(2);
    });




  });
});
