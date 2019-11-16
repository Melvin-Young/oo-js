import Vehicle from './vehicle.js';

export default class Car extends Vehicle {
	start() {
		super.start();
		console.log('Starting car');
	}
	static getCompanyName() {
		super.getCompanyName();
		console.log('My other company');
	}
}
