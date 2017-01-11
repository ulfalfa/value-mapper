function generateMapFunction(mapString) {

	const SPLITTER = /^(.*?)=>(.*)$/;
	const RANGE_SPLIT = /^([-+]?[0-9]*\.?[0-9]+)..([-+]?[0-9]*\.?[0-9]+)$/

	let funcMatch = mapString.match(SPLITTER);

	if (funcMatch) {
		let rangeMatch = funcMatch[1].match(RANGE_SPLIT);
		if (rangeMatch) {
			let from = parseFloat(rangeMatch[1]);
			let to = parseFloat(rangeMatch[2]);
			if (to < from) {
				throw (new Error('weird range detected! ' + mapString));
			}
			return (value) => {
				let floatValue = parseInt(value);
				if (floatValue !== NaN && floatValue >= from && floatValue < to) {
					return funcMatch[2];
				} else {
					return false;
				}
			};
		}

		return (value) => {
			if (value.toString() === funcMatch[1]) {
				return funcMatch[2];
			} else {
				return false;
			}
		}


	} else {
		return (value) => (mapString);
	}
}


class ValueMapper {
	constructor(map) {
		this.set(map);
	}

	set(map) {
		if (typeof map === 'string') {
			map = map.split('|');
		}
		this._mappingFunctions = map.map((mapperString) => (generateMapFunction(mapperString)));
	}

	map(value) {
		let resultValue = false;
		this._mappingFunctions.find(func => {
			resultValue = func(value);
			return (resultValue);
		});
		return resultValue ? resultValue : undefined;
	}
}

module.exports = ValueMapper;