class Drone {
	constructor(id, name) {
		this._id = id;
		this.name = name;
	}
	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}
	static getCompany() {
		console.log('Dreadhead flyers');
	}

	fly() {
		console.log(`Drone ${this._id} is flying.`);
	}
}

const drone = new Drone('Yeetboy');
console.log(drone.id);
