// class Countryname {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new Countryname("india", "uae");
// console.log(obj); 

// class Dog{
//     constructor(dogName,weight,color,bread){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.bread=bread;
//     }
// }
// let dog=new Dog("Javascript",2.4,"brwon","shaphered");
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.color);

// """there can only be one constructor in the class"""

// class Person{
//     constructor(fistName,lastName){
//         this.fistName=fistName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("Lakshay","Anand");
// console.log(p.fistName);
// console.log(p.lastName);

//------> METHODS 
// functions on a class are called methods when defining these methods we dont use the function keyword we start directly with name.

// class Person{
//     constructor(Lakshay,Anand){
//         this.firstname=Lakshay;
//         this.lastname=Anand;

//     }
//     greet(){
//         console.log("Hi I'am ", this.firstname , this.lastname);
//     }
// }
// let x= new Person("Lakshay ", "Anand");
// x.greet();

// -------> to initialise the object automatically is the purpose of constructor
// -------> Properties: 
// class Person{
//     constructor(Fisrtname,Lastname){
//         this.Fisrtname=Fisrtname;
//         this.Lastname=Lastname;
//     }
// }
// let p=new Person("lakshay","rohit");
// console.log("hi",p.Fisrtname);

// -------> to initialise the object automatically is the purpose of constructor
// -------> Properties: 
// class Person {
//     #Firstname;
//     #Lastname;

//     constructor(Firstname, Lastname) {
//         this.#Firstname = Firstname;
//         this.#Lastname = Lastname;
//     }

//     getFullName() {
//         return `${this.#Firstname} ${this.#Lastname}`;
//     }
// }

// let p = new Person("Lakshay", "Rohit");
// console.log("Hi", p.getFullName());

// class Person {
//     #firstname; 
//     #lastname;  

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }
// }
// let p=new Person("kay","Moon");
// console.log(p.firstname)


// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }

//     get lastname() {
//         return this.#lastname;
//     }
// }
// let p = new Person("Lakshay", "Rohit");
// console.log(p.firstname);  // Output: Lakshay

// p.lastname = "Sharma";     // Using setter
// console.log(p.lastname);   // Output: Sharma

// class Vehicle{
//     constructor(color,currentSpeed, maxSpeed){
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
// }

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("moving at", this.currentSpeed);
//     }

//     accelerate(amount) {
//         this.currentSpeed +=amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);  
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let myBike = new Motorcycle("black", 60, 200, "petrol");

// console.log("Color:", myBike.color);
// console.log("Current Speed:", myBike.currentSpeed);
// console.log("Max Speed:", myBike.maxSpeed);
// console.log("Fuel:", myBike.fuel);

// myBike.move();
// myBike.accelerate(40);
// myBike.move();
// myBike.doWheelie();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
//     introduce() {
//         console.log("Hi, I'm", this.firstname);
//     }
// }

// Person.prototype.favoriteColor = "green";

// let p = new Person("Krishan Kant", "Jha");
// console.log(p.favoriteColor);
// p.introduce();