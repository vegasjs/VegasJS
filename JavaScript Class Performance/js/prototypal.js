var Person = {
  name : 'John Doe',
  
  initialize: function (name) {
    this.name = name;
  },
  
  setGender : function (gender) {
    this.gender = gender;
  },
  
  sayHello : function (noun) {
    this.message = "Hello, my name is " + this.name + " and I'm a " + noun;
  }
}