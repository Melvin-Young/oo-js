import Vehicle from './vehicle.js';

export default class Drone extends Vehicle {
	constructor(license, model, latlon) {
		super(license, model, latlon);
		this.airTimeHours = null;
		this.base = null;
	}
}
