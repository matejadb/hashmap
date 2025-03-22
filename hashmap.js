export class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = new Array(capacity);
		this.size = 0;
	}

	hash(key) {
		let hashChode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashChode = (primeNumber * hashChode + key.charCodeAt(i)) % this.capacity;
		}

		return hashChode;
	}

	set(key, value) {
		let index = this.hash(key);

		if (!this.buckets[index]) {
			this.buckets[index] = [];
		}

		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i][0] === key) {
				this.buckets[index][i][0] = value;
				return;
			}
		}

		this.buckets[index].push([key, value]);
		this.size++;
		if (this.size / this.capacity > this.loadFactor) {
			this.resize();
		}
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
					this.size--;
					return true;
				}
			}
		}
		return false;
	}

	length() {
		return this.size;
	}

	clear() {
		this.buckets = [];
		this.size = 0;
	}

	keys() {
		let allKeys = [];

		this.buckets.forEach((bucket) => {
			if (bucket) {
				allKeys.push(bucket[0][0]);
			}
		});

		return allKeys;
	}

	values() {
		let allValues = [];

		this.buckets.forEach((bucket) => {
			if (bucket) {
				allValues.push(bucket[0][1]);
			}
		});

		return allValues;
	}

	entries() {
		let entries = [];

		this.buckets.forEach((bucket) => {
			if (bucket) {
				let toPush = `[${bucket[0][0]}, ${bucket[0][1]}]`;
				entries.push(`[${bucket[0][0]}, ${bucket[0][1]}]`);
			}
		});

		return entries;
	}

	resize() {
		const oldBuckets = this.buckets;
		this.capacity *= 2;
		this.buckets = new Array(this.capacity);
		this.size = 0;

		for (let bucket of oldBuckets) {
			if (bucket) {
				for (let [k, v] of bucket) {
					this.set(k, v);
				}
			}
		}
	}
}
