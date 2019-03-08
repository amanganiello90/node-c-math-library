var ffi = require('ffi');
var ref = require('ref');
var int = ref.types.int;
var path= require('path');
var libName= path.join(__dirname,'build','release','math');

var platform = process.platform;
var mathlibLoc = null;

if (platform === 'win32'){
    mathlibLoc = libName+'.dll';
}else if(platform === 'linux'){
    mathlibLoc = libName+'.so';
}else if(platform === 'darwin'){
    mathlibLoc = libName+'.dylib';
}else{
    throw new Error('unsupported platform for mathlibLoc')
}

var math = ffi.Library(mathlibLoc, {
    "add": [int, [int, int]],
    "minus": [int, [int, int]],
    "multiply": [int, [int, int]]
});

module.exports = math;