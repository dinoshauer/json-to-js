#!/usr/bin/env node
var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));

var jsStringify = require('javascript-stringify');

var args = process.argv.slice(2, process.argv.length);
var spaces = 2;
var options = {}

for (var i = args.length - 1; i >= 0; i--) {
  if (args[i] === '--help' || args[i] === '-h') {
    console.log(pkg.name + ' ' + 'v' + pkg.version);
    console.log(pkg.description);
    console.log('');
    console.log('Author:' + ' ' + pkg.author.name + ' <' + pkg.author.email + '>');
    console.log('');
    console.log('Options:');
    console.log('');
    console.log('\t--help/-h\t\tDisplay this message');
    console.log('\t--spaces=2\t\tProvide the indentation in spaces');
    console.log('\t--maxValues=100000\t\tmaximum number of values to parse');
    process.exit(0);
  } else if (args[i].indexOf('--spaces') !== -1) {
    spaces = parseInt(args[i].split('=')[1], 10);
  } else if (args[i].indexOf('--maxValues') !== -1) {
    options.maxValues = parseInt(args[i].split('=')[1], 10);
  }
}

var stdin = process.openStdin();
var data = '';

stdin.on('data', function (chunk) {
  data += chunk;
});

stdin.on('end', function () {
  var text = jsStringify(JSON.parse(data), null, spaces, options);
  console.log(text);
  process.exit(0);
});
