//This is Week 8 Object Oriented Programming assignment




//Menu Cars

//Class car
	//make
	//model
	class Car{
		constructor(make, model) {
			this.make = make;
			this.model = model;
		}
	}

//Class Menu
class Menu {
	constructor(){
		//cars array
		this.cars =[];
	}
	
	//add cars
	//prompt for a make
	//prompt for a model
	//create new car and push into an array
	addCar() {
		let carMake = prompt("Enter car make: ");
		let carModel = prompt("Enter the car model: ");
		this.cars.push(new Car(carMake, carModel));
	}

	
	//delete cars
	deleteCar(){
		let carIndex = prompt("Enter car index to DELETE: ");
		this.cars.splice(carIndex, 1);
	}
		//view cars
		viewCars() {
			let displayCars = '';
			for (let i=0; i < this.cars.length; i++) {

				displayCars += `
				${i}) ${this.cars[i].make} ${this.cars[i].model}`
			}


			alert(`
				Car Inventory:
				-------------------
				
				${displayCars}
				`);
		}
		

		//see a menu. this is just a visual for the users
	showMainMenu() {
		return prompt(`
		Main Menu: 
		------------------
		0) Exit Menu
		1) Add car
		2) Delete Car
		3) View All Cars
		`	);
	}	

		//start the menu
	start() {
		let selection = this.showMainMenu();

		while(selection != 0){

			switch(selection) {

				case "1": this.addCar();
				break;

				case "2": this.deleteCar();
				break;

				case "3": this.viewCars();
				break;

				default: selection = 0;
			}
			selection = this.showMainMenu();
		}
		alert("Exiting Menu... Goodbye!");
	}
}


//instantiate the menu and invoke the start method

let menu = new Menu();


menu.start();



