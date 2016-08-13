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

	get(key) {
		const ret = super.get(key);

		if (ret) {
			this.stats.hits++;
		} else {
			this.stats.misses++;
		}

		return ret;
	}
}

module.exports = StatsMap;
