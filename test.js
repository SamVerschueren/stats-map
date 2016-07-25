import test from 'ava';
import StatsMap from './';

test('initial stats', t => {
	const map = new StatsMap();

	t.deepEqual(map.stats, {
		hits: 0,
		misses: 0
	});
});

test('stats', t => {
	const map = new StatsMap();
	map.set('foo', 'bar');

	t.is(map.get('foo'), 'bar');
	t.falsy(map.get('unicorn'));

	t.deepEqual(map.stats, {
		hits: 1,
		misses: 1
	});
});
