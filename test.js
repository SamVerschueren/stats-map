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
	map.set('foo', {data: 'bar'});

	const ret = map.get('foo');

	t.deepEqual(map.stats, {
		hits: 0,
		misses: 1
	});

	t.deepEqual(ret.data, 'bar');

	t.deepEqual(map.stats, {
		hits: 1,
		misses: 0
	});

	map.has('foo');
	map.has('unicorn');

	t.deepEqual(map.stats, {
		hits: 1,
		misses: 1
	});
});
