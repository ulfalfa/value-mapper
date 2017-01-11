# us-value-mapper

ValueMapper is a class that maps a value to a string based on a mapping table. It supports ranges (1..3) and all kinds of values. I'm using it for translating values coming from my home automation to localized strings. (e.g. a temperature in the range -3 to 3 is "freezy", from 3 to 24 is "warm" and so on...)
value-mapper


### Installing

Install _ValueMap_-class via npm

```
npm install us-value-mapper
```

and the use it 
```
const ValueMap = require('us-value-mapper');

const mapping = ['-3.3..3=>freezy','3..24=>warm','24..99=>hot'];

var map = new ValueMap(mapping);
console.log ('0°C seemst to be '+map.map(0));

```
## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

