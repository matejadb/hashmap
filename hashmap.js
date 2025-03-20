export class HashMap {
	constructor(loadFactor, capacity = null) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
	}

	hash(key) {
		let hashChode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashChode = primeNumber * hashChode + key.charCodeAt(i);
		}

		return hashChode;
	}

	set(key, value) {}
}
