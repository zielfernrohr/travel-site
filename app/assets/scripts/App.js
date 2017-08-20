var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes §0 in taxes.");
  }
}

// alert("ABC 321");

var john = new Person("John Doe", "orange");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();

// $("h1").remove();
