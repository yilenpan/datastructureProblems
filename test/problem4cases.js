var fs = require('fs');

module.exports.dict = fs.readFileSync(__dirname + '/dict.txt', 'utf8')
                   .split('\n')
                   .map(function (word) {
                     return word.replace('\d', '');
                   });

module.exports.prefixes = [
  'ap',
  'de',
  'th',
  'a',
  'bat'
];
