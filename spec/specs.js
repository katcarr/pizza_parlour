describe("Pizza", function(){
  describe("slices", function(){
    it("returns 2 if cheese pizza and diameter is 4 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "cheese";
      testPizza.diameter = 4;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 2 if cheese pizza and diameter is 5 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "cheese";
      testPizza.diameter = 5;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 2 if pepperoni pizza and diameter is 4 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "pepperoni";
      testPizza.diameter = 4;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 4 if cheese pizza and diameter is 6 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "cheese";
      testPizza.diameter = 6;
      expect(testPizza.slices()).to.equal(4);
    });

    it("returns 2 if pepperoni pizza and diameter is 6 inches", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "pepperoni";
      testPizza.diameter = 6;
      expect(testPizza.slices()).to.equal(2);
    });

    it("returns 5 less than the diameter when diameter is greater than 16", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "cheese";
      testPizza.diameter = 17;
      expect(testPizza.slices()).to.equal(12);
    });

    it("if  5 less than the diameter is odd returns 6 less when diameter is greater than 16", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "cheese";
      testPizza.diameter = 18;
      expect(testPizza.slices()).to.equal(12);
    });

    it("returns 7 less than the diameter when diameter is greater than 16 and is pepporoni", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "pepporoni";
      testPizza.diameter = 17;
      expect(testPizza.slices()).to.equal(10);
    });

    it("if  7 less than the diameter is odd returns 8 less when diameter is greater than 16", function(){
      var  testPizza = Object.create(Pizza);
      testPizza.kind = "pepporoni";
      testPizza.diameter = 18;
      expect(testPizza.slices()).to.equal(10);
    });




  });
});
