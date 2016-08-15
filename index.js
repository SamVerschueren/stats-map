'use strict';
class StatsMap extends Map {

	constructor(iterable) {
		super(iterable);

		this._stats = {
			hits: 0,
			misses: 0
		};
	}

	get stats() {
		return this._stats;
	}

	set(key, value) {
		const data = value.data;

		Object.defineProperty(value, 'data', {
			get: () => {
				this._stats.misses--;
				this._stats.hits++;
				return data;
			}
		});

		super.set(key, value);
	}

	get(key) {
		this._stats.misses++;
		return super.get(key);
	}

	has(key) {
		const has = super.has(key);

		if (!has) {
			this._stats.misses++;
		}

		return has;
	}
}

module.exports = StatsMap;
