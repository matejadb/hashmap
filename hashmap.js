export class HashMap {
	constructor(capacity = 50) {
		this.capacity = capacity;
		this.buckets = new Array(capacity);
	}

	hash(key) {
		let hashChode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashChode = primeNumber * hashChode + key.charCodeAt(i);
		}

		return hashChode;
	}

	set(key, value) {
		let index = this.hash(key);

		if (!this.buckets[index]) {
			this.buckets[index] = [];
		}

		this.buckets[index].push([key, value]);
	}

	get(key) {
		let index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		if (!this.buckets[index]) {
			throw new Error(`The key doesn't exist in the HashMap`);
		}

		for (let bucket of this.buckets[index]) {
			if (bucket[0] === key) {
				return bucket[1];
			}
		}
	}

	has(key) {
		let index = this.hash(key);

		if (!this.buckets[index]) {
			return false;
		}

		return true;
	}

	remove(key) {
		let index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		if (this.buckets[index]) {
			for (let bucket of this.buckets[index]) {
				if (bucket[0] === key) {
					this.buckets.splice(index, 1);
					return true;
				}
			}
		}
		return false;
	}

	length() {
		let count = 0;

		this.buckets.forEach((bucket) => {
			if (bucket) {
				count++;
			}
		});

		return count;
	}

	clear() {
		this.buckets = [];
	}
}
