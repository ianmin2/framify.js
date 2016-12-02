(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("Cy01W+"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/base64-js/lib")
},{"Cy01W+":4,"buffer":2}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("Cy01W+"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/buffer/index.js","/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/buffer")
},{"Cy01W+":4,"base64-js":1,"buffer":2,"ieee754":3}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("Cy01W+"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/ieee754/index.js","/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/ieee754")
},{"Cy01W+":4,"buffer":2}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("Cy01W+"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/process/browser.js","/../../../home/ian/npm-global/lib/node_modules/gulp-browserify/node_modules/process")
},{"Cy01W+":4,"buffer":2}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
angular.module('framify.js', [
    'ui.router'
    ,'framify-paginate'
    ,'ngStorage'
    ,'jsonFormatter'
    ,'chart.js'
])

.service("app"
,['$http'
,function($http) {

        //!SETUP THE APPLICATION BASICS
        var url = window.location.href.split('/').filter(function(urlPortion) { return (urlPortion != '' && urlPortion != 'http:' && urlPortion != 'https:') });

        //! APP CONFIGURATIONS
        this.ip = url[0].split(':')[0];
        this.port = url[0].split(':')[1];
        this.hlink = "http://" + this.ip + ":" + this.port;

        var hlink = this.hlink;

        this.nav = [];

        //@ FETCH THE PRE-DEFINED APPLICATION URL
        $http.get('config/app-routes.json')
        .then(function(response) {
            // console.dir(response)
            if (response.status == 200) {
                this.url = response.data;
            } else {
                this.notify("Failed to set routes" ,"danger")
            }
        });

        //!APPLICATION URL
        //this.url = "http://41.89.162.4:3000";
        this.url = this.hlink;

        //@ THE OFFICIAL FILE UPLOAD SERVICE
        this.upload = (data, destination) => {

            return new Promise( (resolve ,reject) => {
                 //* create a formdata object
                const fd = new FormData();

                //* add the defined keys to the formdata object
                for (var key in data) {
                    fd.append(key, data[key]);
                };

                //* post the data to the /upload route of the running server
                $http.post(`${hlink}/upload/${destination}`, fd, {

                    transformRequest: angular.identity,

                    //* ensure automatic content-type settng
                    headers: { 'Content-Type': undefined }

                }).then(d=>resolve(d));
            });

        };

        //@ CREATE A COPY OF AN OBJECT
        this.clone = (obj) => {

            //* ensure that the object is defined
            if (null == obj || "object" != typeof obj) return obj;

            //* call the object constructor prototype
            var copy = obj.constructor();

            //* clone all attributes of the parent object into a new object
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
            }

            //* return the newly created object
            return copy;

        };


        //! PARSE AN INTEGER
        this.parseInt = str => parseInt(str);

        //! EMPTY CALLBACK
        this.doNothing = () => {
            return Promise.resolve();
        };

        //! SET A NOTIFICATION 
        this.notify = (notificationContent ,notificationClass ,notificationTimeout) => {

            UIkit.notify({
                message : notificationContent|| 'A blank notification was triggered.',
                status  : notificationClass || 'info',
                timeout : notificationTimeout || 6000,
                pos     : 'top-center'
            });

            return Promise.resolve(true);
            
        };

        var notify = this.notify;

        this.countries = [{ name: "Afghanistan", value: "1" }, { name: "Albania", value: "2" }, { name: "Algeria", value: "3" }, { name: "American Samoa", value: "4" }, { name: "Andorra", value: "5" }, { name: "Angola", value: "6" }, { name: "Anguilla", value: "7" }, { name: "Antarctica", value: "8" }, { name: "Antigua and Barbuda", value: "9" }, { name: "Argentina", value: "10" }, { name: "Armenia", value: "11" }, { name: "Aruba", value: "12" }, { name: "Australia", value: "13" }, { name: "Austria", value: "14" }, { name: "Azerbaijan", value: "15" }, { name: "Bahamas", value: "16" }, { name: "Bahrain", value: "17" }, { name: "Bangladesh", value: "18" }, { name: "Barbados", value: "19" }, { name: "Belarus", value: "20" }, { name: "Belgium", value: "21" }, { name: "Belize", value: "22" }, { name: "Benin", value: "23" }, { name: "Bermuda", value: "24" }, { name: "Bhutan", value: "25" }, { name: "Bolivia", value: "26" }, { name: "Bosnia and Herzegowina", value: "27" }, { name: "Botswana", value: "28" }, { name: "Bouvet Island", value: "29" }, { name: "Brazil", value: "30" }, { name: "British Indian Ocean Territory", value: "31" }, { name: "Brunei Darussalam", value: "32" }, { name: "Bulgaria", value: "33" }, { name: "Burkina Faso", value: "34" }, { name: "Burundi", value: "35" }, { name: "Cambodia", value: "36" }, { name: "Cameroon", value: "37" }, { name: "Canada", value: "38" }, { name: "Cape Verde", value: "39" }, { name: "Cayman Islands", value: "40" }, { name: "Central African Republic", value: "41" }, { name: "Chad", value: "42" }, { name: "Chile", value: "43" }, { name: "China", value: "44" }, { name: "Christmas Island", value: "45" }, { name: "Cocos (Keeling) Islands", value: "46" }, { name: "Colombia", value: "47" }, { name: "Comoros", value: "48" }, { name: "Congo", value: "49" }, { name: "Congo, the Democratic Republic of the", value: "50" }, { name: "Cook Islands", value: "51" }, { name: "Costa Rica", value: "52" }, { name: "Cote d\'Ivoire", value: "53" }, { name: "Croatia (Hrvatska)", value: "54" }, { name: "Cuba", value: "55" }, { name: "Cyprus", value: "56" }, { name: "Czech Republic", value: "57" }, { name: "Denmark", value: "58" }, { name: "Djibouti", value: "59" }, { name: "Dominica", value: "60" }, { name: "Dominican Republic", value: "61" }, { name: "East Timor", value: "62" }, { name: "Ecuador", value: "63" }, { name: "Egypt", value: "64" }, { name: "El Salvador", value: "65" }, { name: "Equatorial Guinea", value: "66" }, { name: "Eritrea", value: "67" }, { name: "Estonia", value: "68" }, { name: "Ethiopia", value: "69" }, { name: "Falkland Islands (Malvinas)", value: "70" }, { name: "Faroe Islands", value: "71" }, { name: "Fiji", value: "72" }, { name: "Finland", value: "73" }, { name: "France", value: "74" }, { name: "France Metropolitan", value: "75" }, { name: "French Guiana", value: "76" }, { name: "French Polynesia", value: "77" }, { name: "French Southern Territories", value: "78" }, { name: "Gabon", value: "79" }, { name: "Gambia", value: "80" }, { name: "Georgia", value: "81" }, { name: "Germany", value: "82" }, { name: "Ghana", value: "83" }, { name: "Gibraltar", value: "84" }, { name: "Greece", value: "85" }, { name: "Greenland", value: "86" }, { name: "Grenada", value: "87" }, { name: "Guadeloupe", value: "88" }, { name: "Guam", value: "89" }, { name: "Guatemala", value: "90" }, { name: "Guinea", value: "91" }, { name: "Guinea-Bissau", value: "92" }, { name: "Guyana", value: "93" }, { name: "Haiti", value: "94" }, { name: "Heard and Mc Donald Islands", value: "95" }, { name: "Holy See (Vatican City State)", value: "96" }, { name: "Honduras", value: "97" }, { name: "Hong Kong", value: "98" }, { name: "Hungary", value: "99" }, { name: "Iceland", value: "100" }, { name: "India", value: "101" }, { name: "Indonesia", value: "102" }, { name: "Iran (Islamic Republic of)", value: "103" }, { name: "Iraq", value: "104" }, { name: "Ireland", value: "105" }, { name: "Israel", value: "106" }, { name: "Italy", value: "107" }, { name: "Jamaica", value: "108" }, { name: "Japan", value: "109" }, { name: "Jordan", value: "110" }, { name: "Kazakhstan", value: "111" }, { name: "Kenya", value: "112" }, { name: "Kiribati", value: "113" }, { name: "Korea, Democratic People\'s Republic of", value: "114" }, { name: "Korea, Republic of", value: "115" }, { name: "Kuwait", value: "116" }, { name: "Kyrgyzstan", value: "117" }, { name: "Lao, People\'s Democratic Republic", value: "118" }, { name: "Latvia", value: "119" }, { name: "Lebanon", value: "120" }, { name: "Lesotho", value: "121" }, { name: "Liberia", value: "122" }, { name: "Libyan Arab Jamahiriya", value: "123" }, { name: "Liechtenstein", value: "124" }, { name: "Lithuania", value: "125" }, { name: "Luxembourg", value: "126" }, { name: "Macau", value: "127" }, { name: "Macedonia, The Former Yugoslav Republic of", value: "128" }, { name: "Madagascar", value: "129" }, { name: "Malawi", value: "130" }, { name: "Malaysia", value: "131" }, { name: "Maldives", value: "132" }, { name: "Mali", value: "133" }, { name: "Malta", value: "134" }, { name: "Marshall Islands", value: "135" }, { name: "Martinique", value: "136" }, { name: "Mauritania", value: "137" }, { name: "Mauritius", value: "138" }, { name: "Mayotte", value: "139" }, { name: "Mexico", value: "140" }, { name: "Micronesia, Federated States of", value: "141" }, { name: "Moldova, Republic of", value: "142" }, { name: "Monaco", value: "143" }, { name: "Mongolia", value: "144" }, { name: "Montserrat", value: "145" }, { name: "Morocco", value: "146" }, { name: "Mozambique", value: "147" }, { name: "Myanmar", value: "148" }, { name: "Namibia", value: "149" }, { name: "Nauru", value: "150" }, { name: "Nepal", value: "151" }, { name: "Netherlands", value: "152" }, { name: "Netherlands Antilles", value: "153" }, { name: "New Caledonia", value: "154" }, { name: "New Zealand", value: "155" }, { name: "Nicaragua", value: "156" }, { name: "Niger", value: "157" }, { name: "Nigeria", value: "158" }, { name: "Niue", value: "159" }, { name: "Norfolk Island", value: "160" }, { name: "Northern Mariana Islands", value: "161" }, { name: "Norway", value: "162" }, { name: "Oman", value: "163" }, { name: "Pakistan", value: "164" }, { name: "Palau", value: "165" }, { name: "Panama", value: "166" }, { name: "Papua New Guinea", value: "167" }, { name: "Paraguay", value: "168" }, { name: "Peru", value: "169" }, { name: "Philippines", value: "170" }, { name: "Pitcairn", value: "171" }, { name: "Poland", value: "172" }, { name: "Portugal", value: "173" }, { name: "Puerto Rico", value: "174" }, { name: "Qatar", value: "175" }, { name: "Reunion", value: "176" }, { name: "Romania", value: "177" }, { name: "Russian Federation", value: "178" }, { name: "Rwanda", value: "179" }, { name: "Saint Kitts and Nevis", value: "180" }, { name: "Saint Lucia", value: "181" }, { name: "Saint Vincent and the Grenadines", value: "182" }, { name: "Samoa", value: "183" }, { name: "San Marino", value: "184" }, { name: "Sao Tome and Principe", value: "185" }, { name: "Saudi Arabia", value: "186" }, { name: "Senegal", value: "187" }, { name: "Seychelles", value: "188" }, { name: "Sierra Leone", value: "189" }, { name: "Singapore", value: "190" }, { name: "Slovakia (Slovak Republic)", value: "191" }, { name: "Slovenia", value: "192" }, { name: "Solomon Islands", value: "193" }, { name: "Somalia", value: "194" }, { name: "South Africa", value: "195" }, { name: "South Georgia and the South Sandwich Islands", value: "196" }, { name: "South Sudan", value: "197" }, { name: "Spain", value: "198" }, { name: "Sri Lanka", value: "199" }, { name: "St. Helena", value: "200" }, { name: "St. Pierre and Miquelon", value: "201" }, { name: "Sudan", value: "202" }, { name: "Suriname", value: "203" }, { name: "Svalbard and Jan Mayen Islands", value: "204" }, { name: "Swaziland", value: "205" }, { name: "Sweden", value: "206" }, { name: "Switzerland", value: "207" }, { name: "Syrian Arab Republic", value: "208" }, { name: "Taiwan, Province of China", value: "209" }, { name: "Tajikistan", value: "210" }, { name: "Tanzania, United Republic of", value: "211" }, { name: "Thailand", value: "212" }, { name: "Togo", value: "213" }, { name: "Tokelau", value: "214" }, { name: "Tonga", value: "215" }, { name: "Trinidad and Tobago", value: "216" }, { name: "Tunisia", value: "217" }, { name: "Turkey", value: "218" }, { name: "Turkmenistan", value: "219" }, { name: "Turks and Caicos Islands", value: "220" }, { name: "Tuvalu", value: "221" }, { name: "Uganda", value: "222" }, { name: "Ukraine", value: "223" }, { name: "United Arab Emirates", value: "224" }, { name: "United Kingdom", value: "225" }, { name: "United States", value: "226" }, { name: "United States Minor Outlying Islands", value: "227" }, { name: "Uruguay", value: "228" }, { name: "Uzbekistan", value: "229" }, { name: "Vanuatu", value: "230" }, { name: "Venezuela", value: "231" }, { name: "Vietnam", value: "232" }, { name: "Virgin Islands (British)", value: "233" }, { name: "Virgin Islands (U.S.)", value: "234" }, { name: "Wallis and Futuna Islands", value: "235" }, { name: "Western Sahara", value: "236" }, { name: "Yemen", value: "237" }, { name: "Yugoslavia", value: "238" }, { name: "Zambia", value: "239" }, { name: "Zimbabwe", value: "240" }];


        //! BASIC FRAMIFY FORMAT RESPONSE FORMATTER
        this.makeResponse = (response ,message ,command) => {

            return {
                response: response,
                data: {
                    message: message,
                    command: command
                }
            };

        };

        //!DATE FORMATERS
        //* simple date
        this.newDate        = () => new Date().toDateString();
        //* isodate
        this.isoDate        = () => new Date().format('isoDate');
        //* get the isoDate of the specified date
        this.getIsoDate     = (d) => new Date(d).format('isoDate');
        //* get the isoDate of a date object
        this.toIsoDate      = dObj => dObj.format('isoDate');
        //* custom datetime
        this.dateTime       = () => new Date().format('dateTime');
        //* month number
        this.monthNum       = () => new Date().format('monthNum');
        //* get month number of the specified date
        this.getMonthNum    = d => new Date(d).format('monthNum');
        //* get date objects' month number
        this.toMonthNum     = dObj => dObj.format('monthNum');

        //* MONTHS ARRAY
        var $month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month_array = $month_array;
        this.month_o_array = [
            { id: 0, name: "January" }
            ,{ id: 1, name: "February" }
            ,{ id: 2, name: "March" }
            ,{ id: 3, name: "April" }
            ,{ id: 4, name: "May" }
            ,{ id: 5, name: "June" }
            ,{ id: 6, name: "July" }
            ,{ id: 7, name: "August" }
            ,{ id: 8, name: "September" }
            ,{ id: 9, name: "October" }
            ,{ id: 10, name: "November" }
            ,{ id: 11, name: "December" }
        ];

        // this.printMonths = () =>  $month_o_array
        //                     .reduce((mobj,m)=>{
        //                         mobj[m] = m   
        //                     },{})
        //                     .filter(m=>m)

        //! HANDLE APPLICATION SERVICE REQUESTS
        this.ajax = (method ,target ,data) => {

            return $.ajax({
                method: method || "POST",
                url: target,
                data: data
            });
           
        };

        //!HANDLE JSON REQUESTS 
        this.getJSON = (target) => {

            return $.getJSON(target);

        };

        //! HANDLE CORS CALLS WITH jsonp ENABLED
        this.cgi = (method ,url ,data) => {

            return $.ajax({
                method: method || "GET",
                url: url,
                data: data,
                dataType: 'jsonp',
            });

        };

        //!HANDLE THE DISPLAY OF DIALOG BOXES

        //* SHOW A "LOADING" ELEMENT
        this.loadify = (duration, message) => {

            return new Promise( (resolve,reject) => {
                let modal = UIkit.modal.blockUI('<center><i style="color:blue;" class="fa fa fa-spinner fa-pulse fa-5x fa-fw"></i></center>'+( (message)?`<center><br>${message}</center>`:"" ) );
                if( duration && !isNaN(duration)){
                    setTimeout(()=>{
                         modal.hide();
                         resolve(true); 
                    }, duration ) ;
                }else{
                    resolve(modal);
                }
                
            });

        };
        
        //*GENERATE A CUSTOM ALERT DIALOG
        this.alert = (title ,message ,cb) => {

            UIkit.modal.alert(`<font color="#1976D2" style="font-weight:bold;text-transform:uppercase;">${title||'Notice'}</font>
            <hr>
            <center>${message||'</center><font color=red font-weight=bold; font-size=2em>Oops!</font><br>False alarm!<center>'}</center>`);

            if( cb && typeof(cb) == "function" ){
                return Promise.resolve(cb());
            }else{
                return Promise.resolve(true);
            }

        };
            
        //*GENERATE A CUSTOM CONFIRM DIALOG
        this.confirm = ( title ,message ,cb ) => {
            
            return new Promise( (resolve) => {

                UIkit.modal.confirm(`<font color="#1976D2" style="font-weight:bold;text-transform:uppercase;">${title||'Confirmation required.'}</font>
                <hr>
                <center>${message}</center>`,()=>{
                    if(cb && typeof(cb) == "function"){
                        resolve(cb());
                    }else{
                        resolve(true);
                    }
                });

            });           
            
        };    
            
        //*GENERATE A CUSTOM PROMPT DIALOG
        this.prompt = function( title ,label ,placeholder ,cb){
          
          return new Promise( (resolve) => {

            UIkit.modal.prompt(`<font color="#1976D2" style="font-weight:bold;text-transform:uppercase;">${title||'Info required'}</font>
            <hr>
            ${label||'email'} :`, (placeholder||''), (userValue) => { 
                if(cb && typeof(cb) == "function"){
                    resolve(cb()) 
                }else{
                    resolve(true);
                }
            });

          }); 
                      
        };


        //!BASIC VALIDATION METHODS

        //*VALIDATE EMAIL ADDRESSES
        this.isemail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
        this.isEmail = prospective_email => this.isemail.test(prospective_email);

        //*VALIDATE USERNAMES
        this.isusername = /^[a-z0-9_-]{4,16}$/;
        this.isUsername = prospective_username => this.isusername.test(prospective_username);

        //*VALIDATE PASSWORDS
        this.ispassword = /^[-@./\!\$\%\^|#&,+\w\s]{6,50}$/;
        this.isPassword = prospective_password => this.ispassword.test(prospective_password);

        //* VALIDATE NUMBERS
        this.isnumber = /^-{0,1}\d*\.{0,1}\d+$/;
        this.isNumber = prospective_number => this.isnumber.test(prospective_number);

        //*VALIDATE TELEPHONE NUMBERS
        this.istelephone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        this.isTelephone = prospective_telephone => this.istelephone.test(prospective_telephone);

        //*VALIDATE DATETIME VALUES IN THE FORMAT  DD-MM-YYYY HH:MM e.g 29-02-2013 22:16
        this.isdateTime = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)[0-9]{2} (2[0-3]|[0-1][0-9]):[0-5][0-9]$/;
        this.isDateTime = prospective_date=>this.isdate.test( prospective_date );

        //*VALIDATE WHETHER TWO GIVEN VALUES MATCH
        this.matches = (val1, val2) => (val1 === val2);

        //*TRANFORM NUMBER TO MONTH
        this.num2month = (month_number) => (!isNaN(month_number) && (month_number <= 11) )?$month_array[month_number]:"Invalid Month";

        //*REMOVE DUPLICATES FROM ARRAY
        this.unique = (array_) => {

           if( !Array.isArray(array_) ){
               notify('Could not remove duplicates from a non array object','danger');
               return array_;
           }else{

               //* create a new array
                var ret_array = new Array();

                //* loop through the entire length of the provided array
                for (var a = array_.length - 1; a >= 0; a--) {
                    
                    //* loop through the array once more (for re-verification)
                    for (var b = array_.length - 1; b >= 0; b--) {
                        //* de-populate duplicates in the array
                        if (array_[a] == array_[b] && a != b) {
                            delete array_[b];
                        }
                    };
                    
                    //* store the relevant values
                    if (array_[a] != undefined){
                        ret_array.push(array_[a]);
                    }                    

                };
                //* return the reversed array (to avoid distortion from the initial)
                return ret_array.reverse();

           }
        };

        this.removeDuplicates = this.unique;

        //* COUNT OCCURANCES IN AN ARRAY
        this.count = (searchParam ,arrayObject) => {

            var cnt = 0;

            for(v in arrayObject) {
                if (searchParam === arrayObject[v]) {
                    cnt += 1;
                }
            }
            return cnt;

        };

        //* CONDITIONALLY TRANSFORM TO STRING
        this.str    = (obj) => (typeof(obj) === "object") ? JSON.stringify(obj) : obj;

        //* CONDITIONALLY TRANSFORM TO JSON
        this.json   = (obj) => (typeof(obj) === "object") ? obj : JSON.parse(obj);

        //* CONDITIONALLY RETURN AN MD5 HASH
        this.md5    = (str) => (/^[a-f0-9]{32}$/gm.test(str)) ? str : CryptoJS.MD5(str).toString();

}])

//The BASIC sms sending application service
.service("sms" 
,['app'
,function(app) {

        /**
         * This angular service allows for you to easily send SMS messages conveniently using bixbyte's default SMS server
         * 
         * It allows the use of your *Framify SMS* android phone application to send simple SMS messages. 
         * 
         * You can easily extend it as you will since the socket connection to the server can be hooked to as "sms.socket"
         */

        //@ BASIC APPLICATION INITIALIZATION
        this.server = {};
        this.server.host = '41.89.162.252:3000';
        this.socket = io.connect(`http://${this.server.host}`);
        const socket = this.socket;

        //@ SEND EXPRESS SMS'
        this.SMS = (smsData) => {
            socket.emit("sendSMS" ,smsData);
            return Promise.resolve(true)            
        };

        //@ SEND A SINGLE SMS
        this.oneSMS = (tel ,mess ,apiKey) => {

            var obj;
            if (Array.isArray(tel)) {
                obj = tel;
            } else {
                obj = {
                    telephone: tel,
                    message: mess,
                    password: apiKey
                };
            }

            socket.emit("sendSMS" ,obj);
            return Promise.resolve(true);

        };

        //@ SEND BULK SMS MESSAGES
        this.bulkSMS = (contacts ,data ,apiKey) => {

            return new Promise( (resolve ,reject) => {

                let obj = [];

                //* Ensure that the API key has been set
                if (!apiKey) {
                    $scope.app.alert("<font style='weight:bold;color:red;'>ERROR</font>",'<center>Failed to instantiate the SMS sending service before api Key definition.</center>');
                } else if (Array.isArray(contacts)) {

                    //* handle an array of contacts
                    contacts.forEach( (element) => {

                        if (app.isTelephone(element)) {

                            obj.push({
                                telephone: element,
                                message: data,
                                apiKey: apiKey
                            });

                        } else {

                            $scope.app.alert("<font style='weight:bold;color:red;'>Invalid telephone number encountered</font>",'<center>Could not send an SMS message to the invalid number ' + element + '.</center>');

                        }

                    }, this);

                    socket.emit("sendSMS", obj);
                    resolve(true);

                } else {
                    $scope.app.alert("<font style='weight:bold;color:red;'>Bulk SMS error.</font>" ,'<center>You can only use the bulk SMS service with an array of telephone contacts</center>');
                }

            });       
           
        };

        // //@ SAMPLE SUCCESSFUL SMS SENDING INFORMATION HANDLER
        // this.socket.on("trueSMS", (data) => {
        //     $scope.app.notify("The message has been conveyed.");
        // });

}])

.service("cgi" 
,[
function() {

    //Handle background calls to the web server for database integration
    this.ajax = function(data) {
        return $.ajax({
            method: "GET",
            url: "/php/index.php",
            data: data
        });
    };

}])

.run(
["app" ,"cgi" ,"$rootScope" ,"$state" ,"$localStorage" ,"sms"
,function(app ,cgi ,$rootScope ,$state ,$localStorage ,sms) {

        //! INJECT THE LOCATION SOURCE TO THE ROOT SCOPE
        $rootScope.location     = $state;

        //! INJECT THE $localStorage instance into the root scope
        $rootScope.storage      = $localStorage;

        //! INJECT THE APPLICATION'S MAIN SERVICE TO THE ROOT SCOPE SUCH THAT ALL SCOPES MAY INHERIT IT
        $rootScope.app          = app;

        //! INJECT THE APP BASICS SERVICE
        $rootScope.cgi          = cgi;

        //! SIMPLE APPLICATION BEHAVIOR SETUP
        $rootScope.frame        = {};

        //#! INJECT THE SMS INSTANCE INTO THE MAIN SCOPE
        $rootScope.sms          = sms;

        //! IDENTIFY THE CURRENT PATH
        $rootScope.frame.path   = () => $state.absUrl().split("/#/")[0] + "/#/" + $state.absUrl().split("/#/")[1].split("#")[0];
        //p.split("/#/")[0]+"/#/"+p.split("/#/")[1].split("#")[0]

        //! RELOCATION HANDLING
        $rootScope.frame.relocate = (loc) => {
            console.log(`Relocating to: #${loc}`)
            $rootScope.location.go(loc);
        };

        //! ADMIN HANDLING  
        $rootScope.frame.is_admin = false;

        //! ADMIN STATUS CHECKER 
        $rootScope.frame.isAdmin = () => ($rootScope.frame.is_admin) ? true : false;

        //! ROOT USER STATUS CHECKER
        $rootScope.frame.isRoot = () => ($rootScope.storage.admin.access == 0) ? true : false;

        //! ADMIN STATUS SWITCH
        $rootScope.frame.changeAdmin = (bool) => {
            $rootScope.frame.is_admin = bool;
            //  $rootScope.$apply();
        };

        //! RESET THE ADMIN STATUS
        $rootScope.frame.reset = () => {
            delete $rootScope.storage.admin;
            delete $rootScope.storage.user;
            $rootScope.frame.changeAdmin(false);
            window.location = "/#/";
        };


    }])
.controller("framifyController"
,['$scope' ,'$state' ,'$rootScope' 
,function($scope ,$state ,$rootScope) {

        //!APPLICATION GLOBAL SCOPE COMPONENTS
        $scope.current = {};
        $scope.ui = {};

        // $scope.urlParams = $stateParams;

        $rootScope.nav = [];
        //$rootScope.nav.search; 
        $rootScope.links = [];

        $scope.nav.hasFilters = false;


        //** MANAGE THE NAVIGATION SEARCH STATUS
        $scope.openFilters = (hasFilters) => {
            if (hasFilters === true) { $scope.nav.hasFilters = false; } else { $scope.nav.hasFilters = true; }
        };

        //!RE-INITIALIZE APPLICATION DATA
        $rootScope.app.reinit = () => {
            $scope.location.path("/framify");
        };


        //@ FUNCTION EXECUTOR
        $rootScope.exec = f => f();

        /**
         * SECURE THE PARENTAL CONTROLLED URLS
         */
        $rootScope.secure = (securityFunc) => {

            var parts = window.location.href.split('/');

            var part = parts[(parts.length - 1)];

            if ($scope.links.indexOf(part) >= 0) {

                $rootScope.exec(securityFunc);

            }

        };


        /**
         * DATABASE CENTRIC ADDITION AND DELETION
         */

        //Define the main application objects
        $scope.add = {};
        $scope.fetch = {};
        $scope.fetched = {};
        $scope.counted = {};
        $scope.data = {};

        $scope.data.login = {};
        $scope.data.admin = {};

        $rootScope.frame.changeAdmin(false);
        $scope.logedin = false;

        //! BASIC ADDITION
        $scope.add = (table ,data ,cryptFields ,cb) => {

            return new Promise( (resolve ,reject) => {

                //* populate the data object 
                data                = (data) ? $scope.app.json(data) : {};
                data.command        = "add";
                data.table          = (table != undefined) ? table.toString().replace(/vw_/ig, '') : "";
                data.token          = data.token || $scope.storage.admin._;
                data.extras         = (data) ? ((data.extras) ? data.extras.replace(/LIMIT 1/ig, '') : undefined) : undefined;

                //* Encrypt the specified cryptFields
                 if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                //* Perform the actual addition
                $scope.cgi.ajax(data)
                .then((r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        $scope.app.notify(`<center> ${r.data.message}</center>` ,"success" );

                        $scope.fetch(table, { specifics: data.specifics });

                        $scope.data[table.toString().replace(/vw_/ig, '')] = {};

                        if ( cb && typeof(cb) == "function") {
                            resolve( cb(r) );
                        } else {
                            resolve(true);
                        }

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/);

                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }

                        }


                        $scope.app.notify(`<center>${ r.data.message }</center>` ,'danger');
                        reject( $scope.app.makeResponse(500 ,v[1]) )
                        
                    }

                    $scope.$apply();

                });

            });

        
            
        };

        //! BASIC UPDATING
        $scope.update = (table ,data ,cryptFields ,cb) => {

            return new Promise( (resolve ,reject) => {

                //* pack the relevant info into the data object
                data                = (data) ? $scope.app.json(data) : {};
                data.command        = "update";
                data.table          = (table != undefined) ? table.toString().replace(/vw_/ig, '') : "";
                data.token          = data.token || $scope.storage.admin._;
                data.extras         = (data) ? ((data.extras) ? data.extras.replace(/LIMIT 1/ig, '') : undefined) : undefined;

                //* Encrypt the specified cryptFields
                if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                //* perform the actual update
                $scope.cgi.ajax(data)
                .then( (r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        $scope.app.notify(`<center> ${r.data.message}</center>`, "success");

                        $scope.fetch(table, { specifics: data.specifics });

                        $scope.data[table.toString().replace(/vw_/ig, '')] = {};

                        $scope.$apply();

                        if (typeof(cb) == 'function') {
                            resolve( cb( r ) );                            
                        }else{
                            resolve(true);
                        }

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/)

                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }
                           
                        }

                        $scope.app.notify(`<center>${ r.data.message }</center>`,"danger");
                        reject( $scope.app.makeResponse(500 ,r.data.message)  );

                    }
                    
                })

            });
  
        };


        //! BASIC DATA FETCHING
        var do_fetch = (table ,data ,cryptFields) => {

            return new Promise( (resolve ,reject) => {

                //* populate the "data" object
                data               = (data) ? $scope.app.json(data) : {};
                data.command       = "get";
                data.table         = table;

                console.log("\nprocessing the fetching of table " + table + "\n")

                //* Encrypt the specified cryptFields
                if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                 //* perform the actual data fetching
                 $scope.cgi.ajax(data)
                 .then( (r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {
                        $scope.fetched[table] = r.data.message;
                        $scope.$apply();
                        resolve(r);
                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/)

                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }

                        }
                        $scope.app.notify(`<center>${ r.data.message }</center>`,"danger");
                        reject( $scope.app.makeResponse(500 ,r.data.message) );

                    }
                    
                })

            });

        };

        $scope.fetch = (table ,data ,cryptFields ,cb) => {

            if (Array.isArray(table)) {

                let promiseArr = new Array();

                table
                .filter(e=>typeof(e[0])!='undefined' )
                .forEach( (tData ,tkey) => {
                    promiseArr.push( do_fetch(tData[0] ,(tData[1] || {}) ) ,cryptFields)
                });
                
                promiseArr = promiseArr.filter(e=>typeof(e)!='undefined');

                return Promise.all( promiseArr );

            } else {
               return Promise.resolve( do_fetch(table, data, cryptFields) );
            }

        };

        //! BASIC DELETION  
        $scope.del = (table ,data ,cryptFields ,cb) => {

            return new Promise( (reject ,resolve) => {

                //* populate the data object
                data            = (data) ? $scope.app.json(data) : {};
                data.command    = "del";
                data.table      = (table != undefined) ? table.toString().replace(/vw_/ig, '') : "";
                data.token      = data.token || $scope.storage.admin._;

                //* Encrypt the specified cryptFields
                if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                $scope.cgi.ajax(data)
                .then( (r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {
                        // $scope.fetched[table].splice(delID, 1);
                        $scope.app.notify(`<center>${r.data.message}</center>`, "success");
                        resolve(r);
                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/)

                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }
                        }
                        $scope.app.notify(`<center>${ r.data.message }</center>`,"danger");
                        reject( $scope.app.makeResponse(500 ,r.data.message) );

                    }
                    $scope.$apply();

                })

            })
            
        };

        //Basic User Login
        $scope.login = (cryptField) => {

            return new Promise( (resolve ,reject) => {

                if (cryptField) {
                    $scope.data.login[cryptField] = $scope.app.md5($scope.data.login[cryptField])
                }

                $scope.data.login.command   = "get";
                $scope.data.login.table     = "users";
                $scope.data.login.extras    = " AND active is true LIMIT 1";

                //* perform the actual login validation
                $scope.cgi.ajax($scope.data.login)
                .then((r) => {

                    $scope.data.admin.extras = "";

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        if (r.data.message.length > 0 && typeof(r.data.message[0]) == "object") {

                            if (r.data.message[0]['username'] == $scope.data.login.username) {
                                $scope.storage.user = r.data.message[0];
                                $scope.logedin = true;
                            } else {
                                delete $scope.storage.user;
                                window.location = "/#/";
                            }

                             resolve();

                        } else {
                            delete $scope.storage.user;
                            $scope.app.notify(`<center>You have entered the wrong login credentials.</center>` ,"danger");
                        }

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/);

                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }
                        }

                        delete $scope.storage.user;
                        $scope.app.notify(`<center>${ r.data.message }</center>`,"danger");
                        reject( $scope.app.makeResponse(500 ,r.data.message) );

                    }
                    $scope.$apply();

                });

            });

        };

        //Basic admin login
        $scope.adminLogin = (cryptField) => {

            return new Promise( () =>{

                if (cryptField) {
                    $scope.data.admin[cryptField] = $scope.app.md5($scope.data.admin[cryptField])
                }

                $scope.data.admin.command   = "get";
                $scope.data.admin.table     = "admins";
                $scope.data.admin.extras    = " AND active is true LIMIT 1";

                //* perform the actual login
                $scope.cgi.ajax($scope.data.admin)
                .then((r) => {

                    $scope.data.admin.extras = "";

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        if (r.data.message.length > 0 && typeof(r.data.message[0]) != undefined) {

                            if (r.data.message[0]['password'] === $scope.data.admin.password) {
                                $scope.storage.admin = r.data.message[0];
                                $scope.storage.admin._ = {};
                                $scope.storage.admin._.user = r.data.message[0].admin_name;
                                $scope.storage.admin._.key = r.data.message[0].password;
                                $rootScope.frame.changeAdmin(true);
                                $scope.$apply();
                                resolve(r)
                            } else {
                                delete $scope.data.admin;
                                delete $scope.storage.admin;
                                window.location = "/#/admin";                                
                                resolve(r)
                            }

                        } else {
                            delete $scope.data.admin;
                            delete $scope.storage.admin;
                            $scope.app.notify(`<center>You have entered the wrong login credentials.</center>` ,"danger");
                            window.location = "/#/admin";
                            reject(false);
                        }

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/)
                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }
                        }
                        delete $scope.storage.admin;
                        $scope.app.notify(`<center>${ r.data.message }</center>`,"danger");
                        reject( $scope.app.makeResponse(500 ,r.data.message) );

                    }
                    $scope.$apply();
                })

            });

        };

        //@ Handle basic user re-authentication
        $scope.islogedin = () => {

            return new Promise( (resolve ,reject) => {

                if ($scope.storage.user) {
                    $scope.data.login.username = $scope.storage.user.username;
                    $scope.data.login.password = $scope.storage.user.password;
                    $scope.login();
                    resolve(true);
                }else{
                    $scope.app.notify(`<center>You have no permission to access this content</center>`,'danger')
                    reject(false);
                }

            })

        };

        //@ Handle basic app-user logout
        $scope.logout = () => {

            $scope.islogedin = false;
            delete $scope.storage.user;
            window.location = '/#/';
            return Promise.resolve(true);
            
        };

        //@ Handle basic application redirection
        $scope.redirect = (loc) => {
            if (loc) {
                window.location = loc
            } else {
                window.location = "/#/framify";
            }
            return Promise.resolve(true)
        };

        // Basic Admin Auth
        $scope.authorize = () => {

            if ($scope.storage.admin) {
                $scope.data.admin               = {};
                $scope.data.admin.admin_name    = $scope.storage.admin.admin_name;
                $scope.data.admin.password      = $scope.storage.admin.password;
                $scope.adminLogin();
            } else {
                $scope.location = "/#/admin";
            }

            return Promise.resolve(true);

        };

        //@ HANDLE ADMINISTRATOR DEAUTHORIZATION
        $scope.deauthorize = () => {
            delete $scope.storage.admin;
            $rootScope.frame.changeAdmin(false);
            window.location = '/#/';
            return Promise.resolve(true);
        };


        // BASIC Custom Queries
        $scope.custom = (table ,data ,cryptFields ,cb) => {

            return new Promise( (resolve,reject) => {

                //* initialize the data object
                data            = (data) ? $scope.app.json(data) : {};
                data.command    = "custom";
                data.token      = data.token || $scope.storage.admin._;

                //* Encrypt the specified cryptFields
                if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                //* Perform the actual custom query
                $scope.cgi.ajax(data)
                .then((r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        $scope.app.notify(`<center>${(r.data.message || 'Successful')}</center>`, "success");

                        $scope.cFetched[table] = r.data.message;
                        $scope.data[table.toString().replace(/vw_/ig, '')] = {};
                        $scope.$apply();

                        resolve(r);

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {

                            var v = r.data.message[2].match(/DETAIL:(.*)/)
                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }

                        } 
                        $scope.app.notify(`<center>${ r.data.message }</center>`);
                        reject( $scope.app.makeResponse(500, r.data.message) )
                    }
                    $scope.$apply();
                })

            });   

        };

        //BASIC DATABASE INSTANCEOF COUNTER
        $scope.count = (table ,data ,cryptFields ,cb) => {

            return new Promise( (resolve ,reject) => {

                data            = (data) ? $scope.app.json(data) : {};
                data.table      = table;
                data.command    = "count";
                data.token      = data.token || {};

                //* Encrypt the specified cryptFields
                if (cryptFields) {
                    cryptFields.split(",")
                    .forEach((cryptField) => {
                        data[cryptField] = $scope.app.md5(data[cryptField])
                    });
                }

                //* perform the actual count
                $scope.cgi.ajax(data)
                .then((r) => {

                    r = $scope.app.json(r);

                    if (r.response == 200) {

                        $scope.counted[table.toString().replace(/vw_/ig, '')] = r.data.message;
                        $scope.data[table.toString().replace(/vw_/ig, '')] = {};

                        $scope.$apply();

                        resolve(r);

                    } else {

                        // POSTGRESQL ERROR FORMAT MATCHING
                        if (Array.isArray(r.data.message)) {
                            var v = r.data.message[2].match(/DETAIL:(.*)/)
                            if (v != undefined || v != null) {
                                r.data.message = v[1];
                            } else {
                                r.data.message = r.data.message[2];
                            }
                        }
                        $scope.app.notify(`<center>${ r.data.message }</center>` ,'danger');
                        reject( $scope.app.makeResponse(500 ,r.data.message ) );
                    }
                    $scope.$apply();
                })

            });

        };

        /**
         * TABLE SORTER
         */
        $scope.sort = function(keyname) {
            $scope.sortKey = keyname; //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }


        /**
         *  DELETE UNWANTED FIELDS
         */
        $scope.sanitize = (data ,keys) => {
            if (keys) {
                keys.split(",").forEach((key) => {
                    delete data[key];
                });
                return Promise.resolve(data);
            }
        };

        /**
         * PUSH DATA TO OBJECT
         */
        $scope.dPush = (obj ,key ,val) => {
            obj[key] = val;
        };

        /**
         * @ MONTH REGULATION
         */
        $scope.currmoin = $scope.app.monthNum();
        $scope.setMoin = (moin) => { $scope.currmoin = moin; }

        //@ INJECT A STANDARD WHERE "Extras" OBJECT
        $scope.addExtras = (targetObj ,extrasObj ,subStrings ,removeKeys) => {

            return new Promise( (resolve,reject) => {

                targetObj   = targetObj || {};
                extrasObj   = extrasObj || {};
                subStrings  = subStrings || '';
                removeKeys  = removeKeys || '';

                var extras  = '';

                var k = [],
                    v = [];

                //@ CAPTURE THE REMOVE KEYS
                removeKeys = removeKeys.split(',').filter(e => e);


                removeKeys.forEach(e => {
                    extrasObj[e] = null;
                    delete extrasObj[e];
                });

                //@ CAPTURE REPLACE STRINGS
                subStrings
                    .split(',')
                    .forEach((e, i) => {
                        let x = e.split(':');
                        k[i] = (x[0]);
                        v[i] = (x[1]);
                    })

                //@ GET THE DEFINED KEYS
                var keys = Object.keys(extrasObj);

                //@ REPLACE THE DEFINED WITH THE DESIRED REPLACE KEYS
                k.forEach((e, i) => {

                    if (keys.indexOf(e) != -1) {

                        extrasObj[v[i]] = extrasObj[e];
                        extrasObj[e] = null;
                        delete extrasObj[e];

                    }

                });


                k = Object.keys(extrasObj);
                v = null;

                k.forEach((e, i) => {

                    extras += ' ' + e + "='" + extrasObj[e] + "' AND";

                });

                k = null;


                targetObj.extras = extras.replace(/AND+$/, '');

                resolve( targetObj );

            })

        };

        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // APPLICATION SPECIFIC ADDITIONS


}])

.directive("contenteditable"
,function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");
            };

            element.bind("blur keyup change", function() {
                scope.$apply(read);
            });
        }
    };
})
}).call(this,require("Cy01W+"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9e125f4c.js","/")
},{"Cy01W+":4,"buffer":2}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9pYW4vbnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvaG9tZS9pYW4vbnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL2hvbWUvaWFuL25wbS1nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvaG9tZS9pYW4vbnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL25vZGVqcy9wcm9qZWN0cy9mcmFtaWZ5LmpzL2Zha2VfOWUxMjVmNGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFBMVVNfVVJMX1NBRkUgPSAnLScuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0hfVVJMX1NBRkUgPSAnXycuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTIHx8XG5cdFx0ICAgIGNvZGUgPT09IFBMVVNfVVJMX1NBRkUpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIIHx8XG5cdFx0ICAgIGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiQ3kwMVcrXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vLi4vaG9tZS9pYW4vbnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanNcIixcIi8uLi8uLi8uLi9ob21lL2lhbi9ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJDeTAxVytcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ob21lL2lhbi9ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIixcIi8uLi8uLi8uLi9ob21lL2lhbi9ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJDeTAxVytcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi8uLi9ob21lL2lhbi9ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vLi4vaG9tZS9pYW4vbnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIkN5MDFXK1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uLy4uL2hvbWUvaWFuL25wbS1nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uLy4uL2hvbWUvaWFuL25wbS1nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5hbmd1bGFyLm1vZHVsZSgnZnJhbWlmeS5qcycsIFtcbiAgICAndWkucm91dGVyJ1xuICAgICwnZnJhbWlmeS1wYWdpbmF0ZSdcbiAgICAsJ25nU3RvcmFnZSdcbiAgICAsJ2pzb25Gb3JtYXR0ZXInXG4gICAgLCdjaGFydC5qcydcbl0pXG5cbi5zZXJ2aWNlKFwiYXBwXCJcbixbJyRodHRwJ1xuLGZ1bmN0aW9uKCRodHRwKSB7XG5cbiAgICAgICAgLy8hU0VUVVAgVEhFIEFQUExJQ0FUSU9OIEJBU0lDU1xuICAgICAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8nKS5maWx0ZXIoZnVuY3Rpb24odXJsUG9ydGlvbikgeyByZXR1cm4gKHVybFBvcnRpb24gIT0gJycgJiYgdXJsUG9ydGlvbiAhPSAnaHR0cDonICYmIHVybFBvcnRpb24gIT0gJ2h0dHBzOicpIH0pO1xuXG4gICAgICAgIC8vISBBUFAgQ09ORklHVVJBVElPTlNcbiAgICAgICAgdGhpcy5pcCA9IHVybFswXS5zcGxpdCgnOicpWzBdO1xuICAgICAgICB0aGlzLnBvcnQgPSB1cmxbMF0uc3BsaXQoJzonKVsxXTtcbiAgICAgICAgdGhpcy5obGluayA9IFwiaHR0cDovL1wiICsgdGhpcy5pcCArIFwiOlwiICsgdGhpcy5wb3J0O1xuXG4gICAgICAgIHZhciBobGluayA9IHRoaXMuaGxpbms7XG5cbiAgICAgICAgdGhpcy5uYXYgPSBbXTtcblxuICAgICAgICAvL0AgRkVUQ0ggVEhFIFBSRS1ERUZJTkVEIEFQUExJQ0FUSU9OIFVSTFxuICAgICAgICAkaHR0cC5nZXQoJ2NvbmZpZy9hcHAtcm91dGVzLmpzb24nKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIocmVzcG9uc2UpXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoXCJGYWlsZWQgdG8gc2V0IHJvdXRlc1wiICxcImRhbmdlclwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyFBUFBMSUNBVElPTiBVUkxcbiAgICAgICAgLy90aGlzLnVybCA9IFwiaHR0cDovLzQxLjg5LjE2Mi40OjMwMDBcIjtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmhsaW5rO1xuXG4gICAgICAgIC8vQCBUSEUgT0ZGSUNJQUwgRklMRSBVUExPQUQgU0VSVklDRVxuICAgICAgICB0aGlzLnVwbG9hZCA9IChkYXRhLCBkZXN0aW5hdGlvbikgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgLy8qIGNyZWF0ZSBhIGZvcm1kYXRhIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAvLyogYWRkIHRoZSBkZWZpbmVkIGtleXMgdG8gdGhlIGZvcm1kYXRhIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vKiBwb3N0IHRoZSBkYXRhIHRvIHRoZSAvdXBsb2FkIHJvdXRlIG9mIHRoZSBydW5uaW5nIHNlcnZlclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoYCR7aGxpbmt9L3VwbG9hZC8ke2Rlc3RpbmF0aW9ufWAsIGZkLCB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogYW5ndWxhci5pZGVudGl0eSxcblxuICAgICAgICAgICAgICAgICAgICAvLyogZW5zdXJlIGF1dG9tYXRpYyBjb250ZW50LXR5cGUgc2V0dG5nXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZCB9XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKGQ9PnJlc29sdmUoZCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvL0AgQ1JFQVRFIEEgQ09QWSBPRiBBTiBPQkpFQ1RcbiAgICAgICAgdGhpcy5jbG9uZSA9IChvYmopID0+IHtcblxuICAgICAgICAgICAgLy8qIGVuc3VyZSB0aGF0IHRoZSBvYmplY3QgaXMgZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG51bGwgPT0gb2JqIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIG9iaikgcmV0dXJuIG9iajtcblxuICAgICAgICAgICAgLy8qIGNhbGwgdGhlIG9iamVjdCBjb25zdHJ1Y3RvciBwcm90b3R5cGVcbiAgICAgICAgICAgIHZhciBjb3B5ID0gb2JqLmNvbnN0cnVjdG9yKCk7XG5cbiAgICAgICAgICAgIC8vKiBjbG9uZSBhbGwgYXR0cmlidXRlcyBvZiB0aGUgcGFyZW50IG9iamVjdCBpbnRvIGEgbmV3IG9iamVjdFxuICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGF0dHIpKSBjb3B5W2F0dHJdID0gb2JqW2F0dHJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyogcmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG5cbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vISBQQVJTRSBBTiBJTlRFR0VSXG4gICAgICAgIHRoaXMucGFyc2VJbnQgPSBzdHIgPT4gcGFyc2VJbnQoc3RyKTtcblxuICAgICAgICAvLyEgRU1QVFkgQ0FMTEJBQ0tcbiAgICAgICAgdGhpcy5kb05vdGhpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8hIFNFVCBBIE5PVElGSUNBVElPTiBcbiAgICAgICAgdGhpcy5ub3RpZnkgPSAobm90aWZpY2F0aW9uQ29udGVudCAsbm90aWZpY2F0aW9uQ2xhc3MgLG5vdGlmaWNhdGlvblRpbWVvdXQpID0+IHtcblxuICAgICAgICAgICAgVUlraXQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlIDogbm90aWZpY2F0aW9uQ29udGVudHx8ICdBIGJsYW5rIG5vdGlmaWNhdGlvbiB3YXMgdHJpZ2dlcmVkLicsXG4gICAgICAgICAgICAgICAgc3RhdHVzICA6IG5vdGlmaWNhdGlvbkNsYXNzIHx8ICdpbmZvJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0IDogbm90aWZpY2F0aW9uVGltZW91dCB8fCA2MDAwLFxuICAgICAgICAgICAgICAgIHBvcyAgICAgOiAndG9wLWNlbnRlcidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG5vdGlmeSA9IHRoaXMubm90aWZ5O1xuXG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gW3sgbmFtZTogXCJBZmdoYW5pc3RhblwiLCB2YWx1ZTogXCIxXCIgfSwgeyBuYW1lOiBcIkFsYmFuaWFcIiwgdmFsdWU6IFwiMlwiIH0sIHsgbmFtZTogXCJBbGdlcmlhXCIsIHZhbHVlOiBcIjNcIiB9LCB7IG5hbWU6IFwiQW1lcmljYW4gU2Ftb2FcIiwgdmFsdWU6IFwiNFwiIH0sIHsgbmFtZTogXCJBbmRvcnJhXCIsIHZhbHVlOiBcIjVcIiB9LCB7IG5hbWU6IFwiQW5nb2xhXCIsIHZhbHVlOiBcIjZcIiB9LCB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgdmFsdWU6IFwiN1wiIH0sIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIHZhbHVlOiBcIjhcIiB9LCB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCB2YWx1ZTogXCI5XCIgfSwgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCB2YWx1ZTogXCIxMFwiIH0sIHsgbmFtZTogXCJBcm1lbmlhXCIsIHZhbHVlOiBcIjExXCIgfSwgeyBuYW1lOiBcIkFydWJhXCIsIHZhbHVlOiBcIjEyXCIgfSwgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCB2YWx1ZTogXCIxM1wiIH0sIHsgbmFtZTogXCJBdXN0cmlhXCIsIHZhbHVlOiBcIjE0XCIgfSwgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgdmFsdWU6IFwiMTVcIiB9LCB7IG5hbWU6IFwiQmFoYW1hc1wiLCB2YWx1ZTogXCIxNlwiIH0sIHsgbmFtZTogXCJCYWhyYWluXCIsIHZhbHVlOiBcIjE3XCIgfSwgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgdmFsdWU6IFwiMThcIiB9LCB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgdmFsdWU6IFwiMTlcIiB9LCB7IG5hbWU6IFwiQmVsYXJ1c1wiLCB2YWx1ZTogXCIyMFwiIH0sIHsgbmFtZTogXCJCZWxnaXVtXCIsIHZhbHVlOiBcIjIxXCIgfSwgeyBuYW1lOiBcIkJlbGl6ZVwiLCB2YWx1ZTogXCIyMlwiIH0sIHsgbmFtZTogXCJCZW5pblwiLCB2YWx1ZTogXCIyM1wiIH0sIHsgbmFtZTogXCJCZXJtdWRhXCIsIHZhbHVlOiBcIjI0XCIgfSwgeyBuYW1lOiBcIkJodXRhblwiLCB2YWx1ZTogXCIyNVwiIH0sIHsgbmFtZTogXCJCb2xpdmlhXCIsIHZhbHVlOiBcIjI2XCIgfSwgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3dpbmFcIiwgdmFsdWU6IFwiMjdcIiB9LCB7IG5hbWU6IFwiQm90c3dhbmFcIiwgdmFsdWU6IFwiMjhcIiB9LCB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCB2YWx1ZTogXCIyOVwiIH0sIHsgbmFtZTogXCJCcmF6aWxcIiwgdmFsdWU6IFwiMzBcIiB9LCB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIHZhbHVlOiBcIjMxXCIgfSwgeyBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsIHZhbHVlOiBcIjMyXCIgfSwgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIHZhbHVlOiBcIjMzXCIgfSwgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCB2YWx1ZTogXCIzNFwiIH0sIHsgbmFtZTogXCJCdXJ1bmRpXCIsIHZhbHVlOiBcIjM1XCIgfSwgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIHZhbHVlOiBcIjM2XCIgfSwgeyBuYW1lOiBcIkNhbWVyb29uXCIsIHZhbHVlOiBcIjM3XCIgfSwgeyBuYW1lOiBcIkNhbmFkYVwiLCB2YWx1ZTogXCIzOFwiIH0sIHsgbmFtZTogXCJDYXBlIFZlcmRlXCIsIHZhbHVlOiBcIjM5XCIgfSwgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIHZhbHVlOiBcIjQwXCIgfSwgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCB2YWx1ZTogXCI0MVwiIH0sIHsgbmFtZTogXCJDaGFkXCIsIHZhbHVlOiBcIjQyXCIgfSwgeyBuYW1lOiBcIkNoaWxlXCIsIHZhbHVlOiBcIjQzXCIgfSwgeyBuYW1lOiBcIkNoaW5hXCIsIHZhbHVlOiBcIjQ0XCIgfSwgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgdmFsdWU6IFwiNDVcIiB9LCB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgdmFsdWU6IFwiNDZcIiB9LCB7IG5hbWU6IFwiQ29sb21iaWFcIiwgdmFsdWU6IFwiNDdcIiB9LCB7IG5hbWU6IFwiQ29tb3Jvc1wiLCB2YWx1ZTogXCI0OFwiIH0sIHsgbmFtZTogXCJDb25nb1wiLCB2YWx1ZTogXCI0OVwiIH0sIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIHZhbHVlOiBcIjUwXCIgfSwgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCB2YWx1ZTogXCI1MVwiIH0sIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIHZhbHVlOiBcIjUyXCIgfSwgeyBuYW1lOiBcIkNvdGUgZFxcJ0l2b2lyZVwiLCB2YWx1ZTogXCI1M1wiIH0sIHsgbmFtZTogXCJDcm9hdGlhIChIcnZhdHNrYSlcIiwgdmFsdWU6IFwiNTRcIiB9LCB7IG5hbWU6IFwiQ3ViYVwiLCB2YWx1ZTogXCI1NVwiIH0sIHsgbmFtZTogXCJDeXBydXNcIiwgdmFsdWU6IFwiNTZcIiB9LCB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgdmFsdWU6IFwiNTdcIiB9LCB7IG5hbWU6IFwiRGVubWFya1wiLCB2YWx1ZTogXCI1OFwiIH0sIHsgbmFtZTogXCJEamlib3V0aVwiLCB2YWx1ZTogXCI1OVwiIH0sIHsgbmFtZTogXCJEb21pbmljYVwiLCB2YWx1ZTogXCI2MFwiIH0sIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgdmFsdWU6IFwiNjFcIiB9LCB7IG5hbWU6IFwiRWFzdCBUaW1vclwiLCB2YWx1ZTogXCI2MlwiIH0sIHsgbmFtZTogXCJFY3VhZG9yXCIsIHZhbHVlOiBcIjYzXCIgfSwgeyBuYW1lOiBcIkVneXB0XCIsIHZhbHVlOiBcIjY0XCIgfSwgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIHZhbHVlOiBcIjY1XCIgfSwgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIHZhbHVlOiBcIjY2XCIgfSwgeyBuYW1lOiBcIkVyaXRyZWFcIiwgdmFsdWU6IFwiNjdcIiB9LCB7IG5hbWU6IFwiRXN0b25pYVwiLCB2YWx1ZTogXCI2OFwiIH0sIHsgbmFtZTogXCJFdGhpb3BpYVwiLCB2YWx1ZTogXCI2OVwiIH0sIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgdmFsdWU6IFwiNzBcIiB9LCB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCB2YWx1ZTogXCI3MVwiIH0sIHsgbmFtZTogXCJGaWppXCIsIHZhbHVlOiBcIjcyXCIgfSwgeyBuYW1lOiBcIkZpbmxhbmRcIiwgdmFsdWU6IFwiNzNcIiB9LCB7IG5hbWU6IFwiRnJhbmNlXCIsIHZhbHVlOiBcIjc0XCIgfSwgeyBuYW1lOiBcIkZyYW5jZSBNZXRyb3BvbGl0YW5cIiwgdmFsdWU6IFwiNzVcIiB9LCB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCB2YWx1ZTogXCI3NlwiIH0sIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIHZhbHVlOiBcIjc3XCIgfSwgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCB2YWx1ZTogXCI3OFwiIH0sIHsgbmFtZTogXCJHYWJvblwiLCB2YWx1ZTogXCI3OVwiIH0sIHsgbmFtZTogXCJHYW1iaWFcIiwgdmFsdWU6IFwiODBcIiB9LCB7IG5hbWU6IFwiR2VvcmdpYVwiLCB2YWx1ZTogXCI4MVwiIH0sIHsgbmFtZTogXCJHZXJtYW55XCIsIHZhbHVlOiBcIjgyXCIgfSwgeyBuYW1lOiBcIkdoYW5hXCIsIHZhbHVlOiBcIjgzXCIgfSwgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCB2YWx1ZTogXCI4NFwiIH0sIHsgbmFtZTogXCJHcmVlY2VcIiwgdmFsdWU6IFwiODVcIiB9LCB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIHZhbHVlOiBcIjg2XCIgfSwgeyBuYW1lOiBcIkdyZW5hZGFcIiwgdmFsdWU6IFwiODdcIiB9LCB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCB2YWx1ZTogXCI4OFwiIH0sIHsgbmFtZTogXCJHdWFtXCIsIHZhbHVlOiBcIjg5XCIgfSwgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCB2YWx1ZTogXCI5MFwiIH0sIHsgbmFtZTogXCJHdWluZWFcIiwgdmFsdWU6IFwiOTFcIiB9LCB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCB2YWx1ZTogXCI5MlwiIH0sIHsgbmFtZTogXCJHdXlhbmFcIiwgdmFsdWU6IFwiOTNcIiB9LCB7IG5hbWU6IFwiSGFpdGlcIiwgdmFsdWU6IFwiOTRcIiB9LCB7IG5hbWU6IFwiSGVhcmQgYW5kIE1jIERvbmFsZCBJc2xhbmRzXCIsIHZhbHVlOiBcIjk1XCIgfSwgeyBuYW1lOiBcIkhvbHkgU2VlIChWYXRpY2FuIENpdHkgU3RhdGUpXCIsIHZhbHVlOiBcIjk2XCIgfSwgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIHZhbHVlOiBcIjk3XCIgfSwgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCB2YWx1ZTogXCI5OFwiIH0sIHsgbmFtZTogXCJIdW5nYXJ5XCIsIHZhbHVlOiBcIjk5XCIgfSwgeyBuYW1lOiBcIkljZWxhbmRcIiwgdmFsdWU6IFwiMTAwXCIgfSwgeyBuYW1lOiBcIkluZGlhXCIsIHZhbHVlOiBcIjEwMVwiIH0sIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgdmFsdWU6IFwiMTAyXCIgfSwgeyBuYW1lOiBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsIHZhbHVlOiBcIjEwM1wiIH0sIHsgbmFtZTogXCJJcmFxXCIsIHZhbHVlOiBcIjEwNFwiIH0sIHsgbmFtZTogXCJJcmVsYW5kXCIsIHZhbHVlOiBcIjEwNVwiIH0sIHsgbmFtZTogXCJJc3JhZWxcIiwgdmFsdWU6IFwiMTA2XCIgfSwgeyBuYW1lOiBcIkl0YWx5XCIsIHZhbHVlOiBcIjEwN1wiIH0sIHsgbmFtZTogXCJKYW1haWNhXCIsIHZhbHVlOiBcIjEwOFwiIH0sIHsgbmFtZTogXCJKYXBhblwiLCB2YWx1ZTogXCIxMDlcIiB9LCB7IG5hbWU6IFwiSm9yZGFuXCIsIHZhbHVlOiBcIjExMFwiIH0sIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIHZhbHVlOiBcIjExMVwiIH0sIHsgbmFtZTogXCJLZW55YVwiLCB2YWx1ZTogXCIxMTJcIiB9LCB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgdmFsdWU6IFwiMTEzXCIgfSwgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZVxcJ3MgUmVwdWJsaWMgb2ZcIiwgdmFsdWU6IFwiMTE0XCIgfSwgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCB2YWx1ZTogXCIxMTVcIiB9LCB7IG5hbWU6IFwiS3V3YWl0XCIsIHZhbHVlOiBcIjExNlwiIH0sIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIHZhbHVlOiBcIjExN1wiIH0sIHsgbmFtZTogXCJMYW8sIFBlb3BsZVxcJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCB2YWx1ZTogXCIxMThcIiB9LCB7IG5hbWU6IFwiTGF0dmlhXCIsIHZhbHVlOiBcIjExOVwiIH0sIHsgbmFtZTogXCJMZWJhbm9uXCIsIHZhbHVlOiBcIjEyMFwiIH0sIHsgbmFtZTogXCJMZXNvdGhvXCIsIHZhbHVlOiBcIjEyMVwiIH0sIHsgbmFtZTogXCJMaWJlcmlhXCIsIHZhbHVlOiBcIjEyMlwiIH0sIHsgbmFtZTogXCJMaWJ5YW4gQXJhYiBKYW1haGlyaXlhXCIsIHZhbHVlOiBcIjEyM1wiIH0sIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIHZhbHVlOiBcIjEyNFwiIH0sIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgdmFsdWU6IFwiMTI1XCIgfSwgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgdmFsdWU6IFwiMTI2XCIgfSwgeyBuYW1lOiBcIk1hY2F1XCIsIHZhbHVlOiBcIjEyN1wiIH0sIHsgbmFtZTogXCJNYWNlZG9uaWEsIFRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgdmFsdWU6IFwiMTI4XCIgfSwgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgdmFsdWU6IFwiMTI5XCIgfSwgeyBuYW1lOiBcIk1hbGF3aVwiLCB2YWx1ZTogXCIxMzBcIiB9LCB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgdmFsdWU6IFwiMTMxXCIgfSwgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIHZhbHVlOiBcIjEzMlwiIH0sIHsgbmFtZTogXCJNYWxpXCIsIHZhbHVlOiBcIjEzM1wiIH0sIHsgbmFtZTogXCJNYWx0YVwiLCB2YWx1ZTogXCIxMzRcIiB9LCB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCB2YWx1ZTogXCIxMzVcIiB9LCB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCB2YWx1ZTogXCIxMzZcIiB9LCB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCB2YWx1ZTogXCIxMzdcIiB9LCB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIHZhbHVlOiBcIjEzOFwiIH0sIHsgbmFtZTogXCJNYXlvdHRlXCIsIHZhbHVlOiBcIjEzOVwiIH0sIHsgbmFtZTogXCJNZXhpY29cIiwgdmFsdWU6IFwiMTQwXCIgfSwgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgdmFsdWU6IFwiMTQxXCIgfSwgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIHZhbHVlOiBcIjE0MlwiIH0sIHsgbmFtZTogXCJNb25hY29cIiwgdmFsdWU6IFwiMTQzXCIgfSwgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIHZhbHVlOiBcIjE0NFwiIH0sIHsgbmFtZTogXCJNb250c2VycmF0XCIsIHZhbHVlOiBcIjE0NVwiIH0sIHsgbmFtZTogXCJNb3JvY2NvXCIsIHZhbHVlOiBcIjE0NlwiIH0sIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIHZhbHVlOiBcIjE0N1wiIH0sIHsgbmFtZTogXCJNeWFubWFyXCIsIHZhbHVlOiBcIjE0OFwiIH0sIHsgbmFtZTogXCJOYW1pYmlhXCIsIHZhbHVlOiBcIjE0OVwiIH0sIHsgbmFtZTogXCJOYXVydVwiLCB2YWx1ZTogXCIxNTBcIiB9LCB7IG5hbWU6IFwiTmVwYWxcIiwgdmFsdWU6IFwiMTUxXCIgfSwgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIHZhbHVlOiBcIjE1MlwiIH0sIHsgbmFtZTogXCJOZXRoZXJsYW5kcyBBbnRpbGxlc1wiLCB2YWx1ZTogXCIxNTNcIiB9LCB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCB2YWx1ZTogXCIxNTRcIiB9LCB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgdmFsdWU6IFwiMTU1XCIgfSwgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCB2YWx1ZTogXCIxNTZcIiB9LCB7IG5hbWU6IFwiTmlnZXJcIiwgdmFsdWU6IFwiMTU3XCIgfSwgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgdmFsdWU6IFwiMTU4XCIgfSwgeyBuYW1lOiBcIk5pdWVcIiwgdmFsdWU6IFwiMTU5XCIgfSwgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIHZhbHVlOiBcIjE2MFwiIH0sIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgdmFsdWU6IFwiMTYxXCIgfSwgeyBuYW1lOiBcIk5vcndheVwiLCB2YWx1ZTogXCIxNjJcIiB9LCB7IG5hbWU6IFwiT21hblwiLCB2YWx1ZTogXCIxNjNcIiB9LCB7IG5hbWU6IFwiUGFraXN0YW5cIiwgdmFsdWU6IFwiMTY0XCIgfSwgeyBuYW1lOiBcIlBhbGF1XCIsIHZhbHVlOiBcIjE2NVwiIH0sIHsgbmFtZTogXCJQYW5hbWFcIiwgdmFsdWU6IFwiMTY2XCIgfSwgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgdmFsdWU6IFwiMTY3XCIgfSwgeyBuYW1lOiBcIlBhcmFndWF5XCIsIHZhbHVlOiBcIjE2OFwiIH0sIHsgbmFtZTogXCJQZXJ1XCIsIHZhbHVlOiBcIjE2OVwiIH0sIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCB2YWx1ZTogXCIxNzBcIiB9LCB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgdmFsdWU6IFwiMTcxXCIgfSwgeyBuYW1lOiBcIlBvbGFuZFwiLCB2YWx1ZTogXCIxNzJcIiB9LCB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgdmFsdWU6IFwiMTczXCIgfSwgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIHZhbHVlOiBcIjE3NFwiIH0sIHsgbmFtZTogXCJRYXRhclwiLCB2YWx1ZTogXCIxNzVcIiB9LCB7IG5hbWU6IFwiUmV1bmlvblwiLCB2YWx1ZTogXCIxNzZcIiB9LCB7IG5hbWU6IFwiUm9tYW5pYVwiLCB2YWx1ZTogXCIxNzdcIiB9LCB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIHZhbHVlOiBcIjE3OFwiIH0sIHsgbmFtZTogXCJSd2FuZGFcIiwgdmFsdWU6IFwiMTc5XCIgfSwgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCB2YWx1ZTogXCIxODBcIiB9LCB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgdmFsdWU6IFwiMTgxXCIgfSwgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIHZhbHVlOiBcIjE4MlwiIH0sIHsgbmFtZTogXCJTYW1vYVwiLCB2YWx1ZTogXCIxODNcIiB9LCB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCB2YWx1ZTogXCIxODRcIiB9LCB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIHZhbHVlOiBcIjE4NVwiIH0sIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgdmFsdWU6IFwiMTg2XCIgfSwgeyBuYW1lOiBcIlNlbmVnYWxcIiwgdmFsdWU6IFwiMTg3XCIgfSwgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgdmFsdWU6IFwiMTg4XCIgfSwgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCB2YWx1ZTogXCIxODlcIiB9LCB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIHZhbHVlOiBcIjE5MFwiIH0sIHsgbmFtZTogXCJTbG92YWtpYSAoU2xvdmFrIFJlcHVibGljKVwiLCB2YWx1ZTogXCIxOTFcIiB9LCB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgdmFsdWU6IFwiMTkyXCIgfSwgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCB2YWx1ZTogXCIxOTNcIiB9LCB7IG5hbWU6IFwiU29tYWxpYVwiLCB2YWx1ZTogXCIxOTRcIiB9LCB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIHZhbHVlOiBcIjE5NVwiIH0sIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCB2YWx1ZTogXCIxOTZcIiB9LCB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgdmFsdWU6IFwiMTk3XCIgfSwgeyBuYW1lOiBcIlNwYWluXCIsIHZhbHVlOiBcIjE5OFwiIH0sIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgdmFsdWU6IFwiMTk5XCIgfSwgeyBuYW1lOiBcIlN0LiBIZWxlbmFcIiwgdmFsdWU6IFwiMjAwXCIgfSwgeyBuYW1lOiBcIlN0LiBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIHZhbHVlOiBcIjIwMVwiIH0sIHsgbmFtZTogXCJTdWRhblwiLCB2YWx1ZTogXCIyMDJcIiB9LCB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgdmFsdWU6IFwiMjAzXCIgfSwgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW4gSXNsYW5kc1wiLCB2YWx1ZTogXCIyMDRcIiB9LCB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIHZhbHVlOiBcIjIwNVwiIH0sIHsgbmFtZTogXCJTd2VkZW5cIiwgdmFsdWU6IFwiMjA2XCIgfSwgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIHZhbHVlOiBcIjIwN1wiIH0sIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCB2YWx1ZTogXCIyMDhcIiB9LCB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCB2YWx1ZTogXCIyMDlcIiB9LCB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCB2YWx1ZTogXCIyMTBcIiB9LCB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCB2YWx1ZTogXCIyMTFcIiB9LCB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgdmFsdWU6IFwiMjEyXCIgfSwgeyBuYW1lOiBcIlRvZ29cIiwgdmFsdWU6IFwiMjEzXCIgfSwgeyBuYW1lOiBcIlRva2VsYXVcIiwgdmFsdWU6IFwiMjE0XCIgfSwgeyBuYW1lOiBcIlRvbmdhXCIsIHZhbHVlOiBcIjIxNVwiIH0sIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIHZhbHVlOiBcIjIxNlwiIH0sIHsgbmFtZTogXCJUdW5pc2lhXCIsIHZhbHVlOiBcIjIxN1wiIH0sIHsgbmFtZTogXCJUdXJrZXlcIiwgdmFsdWU6IFwiMjE4XCIgfSwgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCB2YWx1ZTogXCIyMTlcIiB9LCB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIHZhbHVlOiBcIjIyMFwiIH0sIHsgbmFtZTogXCJUdXZhbHVcIiwgdmFsdWU6IFwiMjIxXCIgfSwgeyBuYW1lOiBcIlVnYW5kYVwiLCB2YWx1ZTogXCIyMjJcIiB9LCB7IG5hbWU6IFwiVWtyYWluZVwiLCB2YWx1ZTogXCIyMjNcIiB9LCB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgdmFsdWU6IFwiMjI0XCIgfSwgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tXCIsIHZhbHVlOiBcIjIyNVwiIH0sIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzXCIsIHZhbHVlOiBcIjIyNlwiIH0sIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgdmFsdWU6IFwiMjI3XCIgfSwgeyBuYW1lOiBcIlVydWd1YXlcIiwgdmFsdWU6IFwiMjI4XCIgfSwgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgdmFsdWU6IFwiMjI5XCIgfSwgeyBuYW1lOiBcIlZhbnVhdHVcIiwgdmFsdWU6IFwiMjMwXCIgfSwgeyBuYW1lOiBcIlZlbmV6dWVsYVwiLCB2YWx1ZTogXCIyMzFcIiB9LCB7IG5hbWU6IFwiVmlldG5hbVwiLCB2YWx1ZTogXCIyMzJcIiB9LCB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCIsIHZhbHVlOiBcIjIzM1wiIH0sIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIiwgdmFsdWU6IFwiMjM0XCIgfSwgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hIElzbGFuZHNcIiwgdmFsdWU6IFwiMjM1XCIgfSwgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIHZhbHVlOiBcIjIzNlwiIH0sIHsgbmFtZTogXCJZZW1lblwiLCB2YWx1ZTogXCIyMzdcIiB9LCB7IG5hbWU6IFwiWXVnb3NsYXZpYVwiLCB2YWx1ZTogXCIyMzhcIiB9LCB7IG5hbWU6IFwiWmFtYmlhXCIsIHZhbHVlOiBcIjIzOVwiIH0sIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCB2YWx1ZTogXCIyNDBcIiB9XTtcblxuXG4gICAgICAgIC8vISBCQVNJQyBGUkFNSUZZIEZPUk1BVCBSRVNQT05TRSBGT1JNQVRURVJcbiAgICAgICAgdGhpcy5tYWtlUmVzcG9uc2UgPSAocmVzcG9uc2UgLG1lc3NhZ2UgLGNvbW1hbmQpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kOiBjb21tYW5kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIURBVEUgRk9STUFURVJTXG4gICAgICAgIC8vKiBzaW1wbGUgZGF0ZVxuICAgICAgICB0aGlzLm5ld0RhdGUgICAgICAgID0gKCkgPT4gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgLy8qIGlzb2RhdGVcbiAgICAgICAgdGhpcy5pc29EYXRlICAgICAgICA9ICgpID0+IG5ldyBEYXRlKCkuZm9ybWF0KCdpc29EYXRlJyk7XG4gICAgICAgIC8vKiBnZXQgdGhlIGlzb0RhdGUgb2YgdGhlIHNwZWNpZmllZCBkYXRlXG4gICAgICAgIHRoaXMuZ2V0SXNvRGF0ZSAgICAgPSAoZCkgPT4gbmV3IERhdGUoZCkuZm9ybWF0KCdpc29EYXRlJyk7XG4gICAgICAgIC8vKiBnZXQgdGhlIGlzb0RhdGUgb2YgYSBkYXRlIG9iamVjdFxuICAgICAgICB0aGlzLnRvSXNvRGF0ZSAgICAgID0gZE9iaiA9PiBkT2JqLmZvcm1hdCgnaXNvRGF0ZScpO1xuICAgICAgICAvLyogY3VzdG9tIGRhdGV0aW1lXG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgICAgICAgPSAoKSA9PiBuZXcgRGF0ZSgpLmZvcm1hdCgnZGF0ZVRpbWUnKTtcbiAgICAgICAgLy8qIG1vbnRoIG51bWJlclxuICAgICAgICB0aGlzLm1vbnRoTnVtICAgICAgID0gKCkgPT4gbmV3IERhdGUoKS5mb3JtYXQoJ21vbnRoTnVtJyk7XG4gICAgICAgIC8vKiBnZXQgbW9udGggbnVtYmVyIG9mIHRoZSBzcGVjaWZpZWQgZGF0ZVxuICAgICAgICB0aGlzLmdldE1vbnRoTnVtICAgID0gZCA9PiBuZXcgRGF0ZShkKS5mb3JtYXQoJ21vbnRoTnVtJyk7XG4gICAgICAgIC8vKiBnZXQgZGF0ZSBvYmplY3RzJyBtb250aCBudW1iZXJcbiAgICAgICAgdGhpcy50b01vbnRoTnVtICAgICA9IGRPYmogPT4gZE9iai5mb3JtYXQoJ21vbnRoTnVtJyk7XG5cbiAgICAgICAgLy8qIE1PTlRIUyBBUlJBWVxuICAgICAgICB2YXIgJG1vbnRoX2FycmF5ID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgICAgIHRoaXMubW9udGhfYXJyYXkgPSAkbW9udGhfYXJyYXk7XG4gICAgICAgIHRoaXMubW9udGhfb19hcnJheSA9IFtcbiAgICAgICAgICAgIHsgaWQ6IDAsIG5hbWU6IFwiSmFudWFyeVwiIH1cbiAgICAgICAgICAgICx7IGlkOiAxLCBuYW1lOiBcIkZlYnJ1YXJ5XCIgfVxuICAgICAgICAgICAgLHsgaWQ6IDIsIG5hbWU6IFwiTWFyY2hcIiB9XG4gICAgICAgICAgICAseyBpZDogMywgbmFtZTogXCJBcHJpbFwiIH1cbiAgICAgICAgICAgICx7IGlkOiA0LCBuYW1lOiBcIk1heVwiIH1cbiAgICAgICAgICAgICx7IGlkOiA1LCBuYW1lOiBcIkp1bmVcIiB9XG4gICAgICAgICAgICAseyBpZDogNiwgbmFtZTogXCJKdWx5XCIgfVxuICAgICAgICAgICAgLHsgaWQ6IDcsIG5hbWU6IFwiQXVndXN0XCIgfVxuICAgICAgICAgICAgLHsgaWQ6IDgsIG5hbWU6IFwiU2VwdGVtYmVyXCIgfVxuICAgICAgICAgICAgLHsgaWQ6IDksIG5hbWU6IFwiT2N0b2JlclwiIH1cbiAgICAgICAgICAgICx7IGlkOiAxMCwgbmFtZTogXCJOb3ZlbWJlclwiIH1cbiAgICAgICAgICAgICx7IGlkOiAxMSwgbmFtZTogXCJEZWNlbWJlclwiIH1cbiAgICAgICAgXTtcblxuICAgICAgICAvLyB0aGlzLnByaW50TW9udGhzID0gKCkgPT4gICRtb250aF9vX2FycmF5XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobW9iaixtKT0+e1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtb2JqW21dID0gbSAgIFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0se30pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtPT5tKVxuXG4gICAgICAgIC8vISBIQU5ETEUgQVBQTElDQVRJT04gU0VSVklDRSBSRVFVRVNUU1xuICAgICAgICB0aGlzLmFqYXggPSAobWV0aG9kICx0YXJnZXQgLGRhdGEpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIUhBTkRMRSBKU09OIFJFUVVFU1RTIFxuICAgICAgICB0aGlzLmdldEpTT04gPSAodGFyZ2V0KSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiAkLmdldEpTT04odGFyZ2V0KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vISBIQU5ETEUgQ09SUyBDQUxMUyBXSVRIIGpzb25wIEVOQUJMRURcbiAgICAgICAgdGhpcy5jZ2kgPSAobWV0aG9kICx1cmwgLGRhdGEpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbnAnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyFIQU5ETEUgVEhFIERJU1BMQVkgT0YgRElBTE9HIEJPWEVTXG5cbiAgICAgICAgLy8qIFNIT1cgQSBcIkxPQURJTkdcIiBFTEVNRU5UXG4gICAgICAgIHRoaXMubG9hZGlmeSA9IChkdXJhdGlvbiwgbWVzc2FnZSkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtb2RhbCA9IFVJa2l0Lm1vZGFsLmJsb2NrVUkoJzxjZW50ZXI+PGkgc3R5bGU9XCJjb2xvcjpibHVlO1wiIGNsYXNzPVwiZmEgZmEgZmEtc3Bpbm5lciBmYS1wdWxzZSBmYS01eCBmYS1md1wiPjwvaT48L2NlbnRlcj4nKyggKG1lc3NhZ2UpP2A8Y2VudGVyPjxicj4ke21lc3NhZ2V9PC9jZW50ZXI+YDpcIlwiICkgKTtcbiAgICAgICAgICAgICAgICBpZiggZHVyYXRpb24gJiYgIWlzTmFOKGR1cmF0aW9uKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTsgXG4gICAgICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uICkgO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1vZGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8qR0VORVJBVEUgQSBDVVNUT00gQUxFUlQgRElBTE9HXG4gICAgICAgIHRoaXMuYWxlcnQgPSAodGl0bGUgLG1lc3NhZ2UgLGNiKSA9PiB7XG5cbiAgICAgICAgICAgIFVJa2l0Lm1vZGFsLmFsZXJ0KGA8Zm9udCBjb2xvcj1cIiMxOTc2RDJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1wiPiR7dGl0bGV8fCdOb3RpY2UnfTwvZm9udD5cbiAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgIDxjZW50ZXI+JHttZXNzYWdlfHwnPC9jZW50ZXI+PGZvbnQgY29sb3I9cmVkIGZvbnQtd2VpZ2h0PWJvbGQ7IGZvbnQtc2l6ZT0yZW0+T29wcyE8L2ZvbnQ+PGJyPkZhbHNlIGFsYXJtITxjZW50ZXI+J308L2NlbnRlcj5gKTtcblxuICAgICAgICAgICAgaWYoIGNiICYmIHR5cGVvZihjYikgPT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYigpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLypHRU5FUkFURSBBIENVU1RPTSBDT05GSVJNIERJQUxPR1xuICAgICAgICB0aGlzLmNvbmZpcm0gPSAoIHRpdGxlICxtZXNzYWdlICxjYiApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgVUlraXQubW9kYWwuY29uZmlybShgPGZvbnQgY29sb3I9XCIjMTk3NkQyXCIgc3R5bGU9XCJmb250LXdlaWdodDpib2xkO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcIj4ke3RpdGxlfHwnQ29uZmlybWF0aW9uIHJlcXVpcmVkLid9PC9mb250PlxuICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPiR7bWVzc2FnZX08L2NlbnRlcj5gLCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGNiICYmIHR5cGVvZihjYikgPT0gXCJmdW5jdGlvblwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2IoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTsgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH07ICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIC8vKkdFTkVSQVRFIEEgQ1VTVE9NIFBST01QVCBESUFMT0dcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBmdW5jdGlvbiggdGl0bGUgLGxhYmVsICxwbGFjZWhvbGRlciAsY2Ipe1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblxuICAgICAgICAgICAgVUlraXQubW9kYWwucHJvbXB0KGA8Zm9udCBjb2xvcj1cIiMxOTc2RDJcIiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1wiPiR7dGl0bGV8fCdJbmZvIHJlcXVpcmVkJ308L2ZvbnQ+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAke2xhYmVsfHwnZW1haWwnfSA6YCwgKHBsYWNlaG9sZGVyfHwnJyksICh1c2VyVmFsdWUpID0+IHsgXG4gICAgICAgICAgICAgICAgaWYoY2IgJiYgdHlwZW9mKGNiKSA9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNiKCkpIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy8hQkFTSUMgVkFMSURBVElPTiBNRVRIT0RTXG5cbiAgICAgICAgLy8qVkFMSURBVEUgRU1BSUwgQUREUkVTU0VTXG4gICAgICAgIHRoaXMuaXNlbWFpbCA9IC9eWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pPyQvO1xuICAgICAgICB0aGlzLmlzRW1haWwgPSBwcm9zcGVjdGl2ZV9lbWFpbCA9PiB0aGlzLmlzZW1haWwudGVzdChwcm9zcGVjdGl2ZV9lbWFpbCk7XG5cbiAgICAgICAgLy8qVkFMSURBVEUgVVNFUk5BTUVTXG4gICAgICAgIHRoaXMuaXN1c2VybmFtZSA9IC9eW2EtejAtOV8tXXs0LDE2fSQvO1xuICAgICAgICB0aGlzLmlzVXNlcm5hbWUgPSBwcm9zcGVjdGl2ZV91c2VybmFtZSA9PiB0aGlzLmlzdXNlcm5hbWUudGVzdChwcm9zcGVjdGl2ZV91c2VybmFtZSk7XG5cbiAgICAgICAgLy8qVkFMSURBVEUgUEFTU1dPUkRTXG4gICAgICAgIHRoaXMuaXNwYXNzd29yZCA9IC9eWy1ALi9cXCFcXCRcXCVcXF58IyYsK1xcd1xcc117Niw1MH0kLztcbiAgICAgICAgdGhpcy5pc1Bhc3N3b3JkID0gcHJvc3BlY3RpdmVfcGFzc3dvcmQgPT4gdGhpcy5pc3Bhc3N3b3JkLnRlc3QocHJvc3BlY3RpdmVfcGFzc3dvcmQpO1xuXG4gICAgICAgIC8vKiBWQUxJREFURSBOVU1CRVJTXG4gICAgICAgIHRoaXMuaXNudW1iZXIgPSAvXi17MCwxfVxcZCpcXC57MCwxfVxcZCskLztcbiAgICAgICAgdGhpcy5pc051bWJlciA9IHByb3NwZWN0aXZlX251bWJlciA9PiB0aGlzLmlzbnVtYmVyLnRlc3QocHJvc3BlY3RpdmVfbnVtYmVyKTtcblxuICAgICAgICAvLypWQUxJREFURSBURUxFUEhPTkUgTlVNQkVSU1xuICAgICAgICB0aGlzLmlzdGVsZXBob25lID0gL15bXFwrXT9bKF0/WzAtOV17M31bKV0/Wy1cXHNcXC5dP1swLTldezN9Wy1cXHNcXC5dP1swLTldezQsNn0kL2ltO1xuICAgICAgICB0aGlzLmlzVGVsZXBob25lID0gcHJvc3BlY3RpdmVfdGVsZXBob25lID0+IHRoaXMuaXN0ZWxlcGhvbmUudGVzdChwcm9zcGVjdGl2ZV90ZWxlcGhvbmUpO1xuXG4gICAgICAgIC8vKlZBTElEQVRFIERBVEVUSU1FIFZBTFVFUyBJTiBUSEUgRk9STUFUICBERC1NTS1ZWVlZIEhIOk1NIGUuZyAyOS0wMi0yMDEzIDIyOjE2XG4gICAgICAgIHRoaXMuaXNkYXRlVGltZSA9IC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pLSgwWzEtOV18MVswMTJdKS0oMTl8MjApWzAtOV17Mn0gKDJbMC0zXXxbMC0xXVswLTldKTpbMC01XVswLTldJC87XG4gICAgICAgIHRoaXMuaXNEYXRlVGltZSA9IHByb3NwZWN0aXZlX2RhdGU9PnRoaXMuaXNkYXRlLnRlc3QoIHByb3NwZWN0aXZlX2RhdGUgKTtcblxuICAgICAgICAvLypWQUxJREFURSBXSEVUSEVSIFRXTyBHSVZFTiBWQUxVRVMgTUFUQ0hcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gKHZhbDEsIHZhbDIpID0+ICh2YWwxID09PSB2YWwyKTtcblxuICAgICAgICAvLypUUkFORk9STSBOVU1CRVIgVE8gTU9OVEhcbiAgICAgICAgdGhpcy5udW0ybW9udGggPSAobW9udGhfbnVtYmVyKSA9PiAoIWlzTmFOKG1vbnRoX251bWJlcikgJiYgKG1vbnRoX251bWJlciA8PSAxMSkgKT8kbW9udGhfYXJyYXlbbW9udGhfbnVtYmVyXTpcIkludmFsaWQgTW9udGhcIjtcblxuICAgICAgICAvLypSRU1PVkUgRFVQTElDQVRFUyBGUk9NIEFSUkFZXG4gICAgICAgIHRoaXMudW5pcXVlID0gKGFycmF5XykgPT4ge1xuXG4gICAgICAgICAgIGlmKCAhQXJyYXkuaXNBcnJheShhcnJheV8pICl7XG4gICAgICAgICAgICAgICBub3RpZnkoJ0NvdWxkIG5vdCByZW1vdmUgZHVwbGljYXRlcyBmcm9tIGEgbm9uIGFycmF5IG9iamVjdCcsJ2RhbmdlcicpO1xuICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5XztcbiAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgIC8vKiBjcmVhdGUgYSBuZXcgYXJyYXlcbiAgICAgICAgICAgICAgICB2YXIgcmV0X2FycmF5ID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyogbG9vcCB0aHJvdWdoIHRoZSBlbnRpcmUgbGVuZ3RoIG9mIHRoZSBwcm92aWRlZCBhcnJheVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBhcnJheV8ubGVuZ3RoIC0gMTsgYSA+PSAwOyBhLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vKiBsb29wIHRocm91Z2ggdGhlIGFycmF5IG9uY2UgbW9yZSAoZm9yIHJlLXZlcmlmaWNhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IGFycmF5Xy5sZW5ndGggLSAxOyBiID49IDA7IGItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8qIGRlLXBvcHVsYXRlIGR1cGxpY2F0ZXMgaW4gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlfW2FdID09IGFycmF5X1tiXSAmJiBhICE9IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXJyYXlfW2JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8qIHN0b3JlIHRoZSByZWxldmFudCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5X1thXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0X2FycmF5LnB1c2goYXJyYXlfW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vKiByZXR1cm4gdGhlIHJldmVyc2VkIGFycmF5ICh0byBhdm9pZCBkaXN0b3J0aW9uIGZyb20gdGhlIGluaXRpYWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldF9hcnJheS5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlRHVwbGljYXRlcyA9IHRoaXMudW5pcXVlO1xuXG4gICAgICAgIC8vKiBDT1VOVCBPQ0NVUkFOQ0VTIElOIEFOIEFSUkFZXG4gICAgICAgIHRoaXMuY291bnQgPSAoc2VhcmNoUGFyYW0gLGFycmF5T2JqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciBjbnQgPSAwO1xuXG4gICAgICAgICAgICBmb3IodiBpbiBhcnJheU9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hQYXJhbSA9PT0gYXJyYXlPYmplY3Rbdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY250ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNudDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vKiBDT05ESVRJT05BTExZIFRSQU5TRk9STSBUTyBTVFJJTkdcbiAgICAgICAgdGhpcy5zdHIgICAgPSAob2JqKSA9PiAodHlwZW9mKG9iaikgPT09IFwib2JqZWN0XCIpID8gSlNPTi5zdHJpbmdpZnkob2JqKSA6IG9iajtcblxuICAgICAgICAvLyogQ09ORElUSU9OQUxMWSBUUkFOU0ZPUk0gVE8gSlNPTlxuICAgICAgICB0aGlzLmpzb24gICA9IChvYmopID0+ICh0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIikgPyBvYmogOiBKU09OLnBhcnNlKG9iaik7XG5cbiAgICAgICAgLy8qIENPTkRJVElPTkFMTFkgUkVUVVJOIEFOIE1ENSBIQVNIXG4gICAgICAgIHRoaXMubWQ1ICAgID0gKHN0cikgPT4gKC9eW2EtZjAtOV17MzJ9JC9nbS50ZXN0KHN0cikpID8gc3RyIDogQ3J5cHRvSlMuTUQ1KHN0cikudG9TdHJpbmcoKTtcblxufV0pXG5cbi8vVGhlIEJBU0lDIHNtcyBzZW5kaW5nIGFwcGxpY2F0aW9uIHNlcnZpY2Vcbi5zZXJ2aWNlKFwic21zXCIgXG4sWydhcHAnXG4sZnVuY3Rpb24oYXBwKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgYW5ndWxhciBzZXJ2aWNlIGFsbG93cyBmb3IgeW91IHRvIGVhc2lseSBzZW5kIFNNUyBtZXNzYWdlcyBjb252ZW5pZW50bHkgdXNpbmcgYml4Ynl0ZSdzIGRlZmF1bHQgU01TIHNlcnZlclxuICAgICAgICAgKiBcbiAgICAgICAgICogSXQgYWxsb3dzIHRoZSB1c2Ugb2YgeW91ciAqRnJhbWlmeSBTTVMqIGFuZHJvaWQgcGhvbmUgYXBwbGljYXRpb24gdG8gc2VuZCBzaW1wbGUgU01TIG1lc3NhZ2VzLiBcbiAgICAgICAgICogXG4gICAgICAgICAqIFlvdSBjYW4gZWFzaWx5IGV4dGVuZCBpdCBhcyB5b3Ugd2lsbCBzaW5jZSB0aGUgc29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIHNlcnZlciBjYW4gYmUgaG9va2VkIHRvIGFzIFwic21zLnNvY2tldFwiXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vQCBCQVNJQyBBUFBMSUNBVElPTiBJTklUSUFMSVpBVElPTlxuICAgICAgICB0aGlzLnNlcnZlciA9IHt9O1xuICAgICAgICB0aGlzLnNlcnZlci5ob3N0ID0gJzQxLjg5LjE2Mi4yNTI6MzAwMCc7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdChgaHR0cDovLyR7dGhpcy5zZXJ2ZXIuaG9zdH1gKTtcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zb2NrZXQ7XG5cbiAgICAgICAgLy9AIFNFTkQgRVhQUkVTUyBTTVMnXG4gICAgICAgIHRoaXMuU01TID0gKHNtc0RhdGEpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZFNNU1wiICxzbXNEYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSkgICAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICAvL0AgU0VORCBBIFNJTkdMRSBTTVNcbiAgICAgICAgdGhpcy5vbmVTTVMgPSAodGVsICxtZXNzICxhcGlLZXkpID0+IHtcblxuICAgICAgICAgICAgdmFyIG9iajtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRlbCkpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB0ZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGVsZXBob25lOiB0ZWwsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3MsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhcGlLZXlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChcInNlbmRTTVNcIiAsb2JqKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvL0AgU0VORCBCVUxLIFNNUyBNRVNTQUdFU1xuICAgICAgICB0aGlzLmJ1bGtTTVMgPSAoY29udGFjdHMgLGRhdGEgLGFwaUtleSkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vKiBFbnN1cmUgdGhhdCB0aGUgQVBJIGtleSBoYXMgYmVlbiBzZXRcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLmFsZXJ0KFwiPGZvbnQgc3R5bGU9J3dlaWdodDpib2xkO2NvbG9yOnJlZDsnPkVSUk9SPC9mb250PlwiLCc8Y2VudGVyPkZhaWxlZCB0byBpbnN0YW50aWF0ZSB0aGUgU01TIHNlbmRpbmcgc2VydmljZSBiZWZvcmUgYXBpIEtleSBkZWZpbml0aW9uLjwvY2VudGVyPicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250YWN0cykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyogaGFuZGxlIGFuIGFycmF5IG9mIGNvbnRhY3RzXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzLmZvckVhY2goIChlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHAuaXNUZWxlcGhvbmUoZWxlbWVudCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZXBob25lOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IGFwaUtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5hbGVydChcIjxmb250IHN0eWxlPSd3ZWlnaHQ6Ym9sZDtjb2xvcjpyZWQ7Jz5JbnZhbGlkIHRlbGVwaG9uZSBudW1iZXIgZW5jb3VudGVyZWQ8L2ZvbnQ+XCIsJzxjZW50ZXI+Q291bGQgbm90IHNlbmQgYW4gU01TIG1lc3NhZ2UgdG8gdGhlIGludmFsaWQgbnVtYmVyICcgKyBlbGVtZW50ICsgJy48L2NlbnRlcj4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KFwic2VuZFNNU1wiLCBvYmopO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5hbGVydChcIjxmb250IHN0eWxlPSd3ZWlnaHQ6Ym9sZDtjb2xvcjpyZWQ7Jz5CdWxrIFNNUyBlcnJvci48L2ZvbnQ+XCIgLCc8Y2VudGVyPllvdSBjYW4gb25seSB1c2UgdGhlIGJ1bGsgU01TIHNlcnZpY2Ugd2l0aCBhbiBhcnJheSBvZiB0ZWxlcGhvbmUgY29udGFjdHM8L2NlbnRlcj4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pOyAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gLy9AIFNBTVBMRSBTVUNDRVNTRlVMIFNNUyBTRU5ESU5HIElORk9STUFUSU9OIEhBTkRMRVJcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQub24oXCJ0cnVlU01TXCIsIChkYXRhKSA9PiB7XG4gICAgICAgIC8vICAgICAkc2NvcGUuYXBwLm5vdGlmeShcIlRoZSBtZXNzYWdlIGhhcyBiZWVuIGNvbnZleWVkLlwiKTtcbiAgICAgICAgLy8gfSk7XG5cbn1dKVxuXG4uc2VydmljZShcImNnaVwiIFxuLFtcbmZ1bmN0aW9uKCkge1xuXG4gICAgLy9IYW5kbGUgYmFja2dyb3VuZCBjYWxscyB0byB0aGUgd2ViIHNlcnZlciBmb3IgZGF0YWJhc2UgaW50ZWdyYXRpb25cbiAgICB0aGlzLmFqYXggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9waHAvaW5kZXgucGhwXCIsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgIH07XG5cbn1dKVxuXG4ucnVuKFxuW1wiYXBwXCIgLFwiY2dpXCIgLFwiJHJvb3RTY29wZVwiICxcIiRzdGF0ZVwiICxcIiRsb2NhbFN0b3JhZ2VcIiAsXCJzbXNcIlxuLGZ1bmN0aW9uKGFwcCAsY2dpICwkcm9vdFNjb3BlICwkc3RhdGUgLCRsb2NhbFN0b3JhZ2UgLHNtcykge1xuXG4gICAgICAgIC8vISBJTkpFQ1QgVEhFIExPQ0FUSU9OIFNPVVJDRSBUTyBUSEUgUk9PVCBTQ09QRVxuICAgICAgICAkcm9vdFNjb3BlLmxvY2F0aW9uICAgICA9ICRzdGF0ZTtcblxuICAgICAgICAvLyEgSU5KRUNUIFRIRSAkbG9jYWxTdG9yYWdlIGluc3RhbmNlIGludG8gdGhlIHJvb3Qgc2NvcGVcbiAgICAgICAgJHJvb3RTY29wZS5zdG9yYWdlICAgICAgPSAkbG9jYWxTdG9yYWdlO1xuXG4gICAgICAgIC8vISBJTkpFQ1QgVEhFIEFQUExJQ0FUSU9OJ1MgTUFJTiBTRVJWSUNFIFRPIFRIRSBST09UIFNDT1BFIFNVQ0ggVEhBVCBBTEwgU0NPUEVTIE1BWSBJTkhFUklUIElUXG4gICAgICAgICRyb290U2NvcGUuYXBwICAgICAgICAgID0gYXBwO1xuXG4gICAgICAgIC8vISBJTkpFQ1QgVEhFIEFQUCBCQVNJQ1MgU0VSVklDRVxuICAgICAgICAkcm9vdFNjb3BlLmNnaSAgICAgICAgICA9IGNnaTtcblxuICAgICAgICAvLyEgU0lNUExFIEFQUExJQ0FUSU9OIEJFSEFWSU9SIFNFVFVQXG4gICAgICAgICRyb290U2NvcGUuZnJhbWUgICAgICAgID0ge307XG5cbiAgICAgICAgLy8jISBJTkpFQ1QgVEhFIFNNUyBJTlNUQU5DRSBJTlRPIFRIRSBNQUlOIFNDT1BFXG4gICAgICAgICRyb290U2NvcGUuc21zICAgICAgICAgID0gc21zO1xuXG4gICAgICAgIC8vISBJREVOVElGWSBUSEUgQ1VSUkVOVCBQQVRIXG4gICAgICAgICRyb290U2NvcGUuZnJhbWUucGF0aCAgID0gKCkgPT4gJHN0YXRlLmFic1VybCgpLnNwbGl0KFwiLyMvXCIpWzBdICsgXCIvIy9cIiArICRzdGF0ZS5hYnNVcmwoKS5zcGxpdChcIi8jL1wiKVsxXS5zcGxpdChcIiNcIilbMF07XG4gICAgICAgIC8vcC5zcGxpdChcIi8jL1wiKVswXStcIi8jL1wiK3Auc3BsaXQoXCIvIy9cIilbMV0uc3BsaXQoXCIjXCIpWzBdXG5cbiAgICAgICAgLy8hIFJFTE9DQVRJT04gSEFORExJTkdcbiAgICAgICAgJHJvb3RTY29wZS5mcmFtZS5yZWxvY2F0ZSA9IChsb2MpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWxvY2F0aW5nIHRvOiAjJHtsb2N9YClcbiAgICAgICAgICAgICRyb290U2NvcGUubG9jYXRpb24uZ28obG9jKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyEgQURNSU4gSEFORExJTkcgIFxuICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLmlzX2FkbWluID0gZmFsc2U7XG5cbiAgICAgICAgLy8hIEFETUlOIFNUQVRVUyBDSEVDS0VSIFxuICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLmlzQWRtaW4gPSAoKSA9PiAoJHJvb3RTY29wZS5mcmFtZS5pc19hZG1pbikgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgLy8hIFJPT1QgVVNFUiBTVEFUVVMgQ0hFQ0tFUlxuICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLmlzUm9vdCA9ICgpID0+ICgkcm9vdFNjb3BlLnN0b3JhZ2UuYWRtaW4uYWNjZXNzID09IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIC8vISBBRE1JTiBTVEFUVVMgU1dJVENIXG4gICAgICAgICRyb290U2NvcGUuZnJhbWUuY2hhbmdlQWRtaW4gPSAoYm9vbCkgPT4ge1xuICAgICAgICAgICAgJHJvb3RTY29wZS5mcmFtZS5pc19hZG1pbiA9IGJvb2w7XG4gICAgICAgICAgICAvLyAgJHJvb3RTY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyEgUkVTRVQgVEhFIEFETUlOIFNUQVRVU1xuICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlICRyb290U2NvcGUuc3RvcmFnZS5hZG1pbjtcbiAgICAgICAgICAgIGRlbGV0ZSAkcm9vdFNjb3BlLnN0b3JhZ2UudXNlcjtcbiAgICAgICAgICAgICRyb290U2NvcGUuZnJhbWUuY2hhbmdlQWRtaW4oZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvIy9cIjtcbiAgICAgICAgfTtcblxuXG4gICAgfV0pXG4uY29udHJvbGxlcihcImZyYW1pZnlDb250cm9sbGVyXCJcbixbJyRzY29wZScgLCckc3RhdGUnICwnJHJvb3RTY29wZScgXG4sZnVuY3Rpb24oJHNjb3BlICwkc3RhdGUgLCRyb290U2NvcGUpIHtcblxuICAgICAgICAvLyFBUFBMSUNBVElPTiBHTE9CQUwgU0NPUEUgQ09NUE9ORU5UU1xuICAgICAgICAkc2NvcGUuY3VycmVudCA9IHt9O1xuICAgICAgICAkc2NvcGUudWkgPSB7fTtcblxuICAgICAgICAvLyAkc2NvcGUudXJsUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gICAgICAgICRyb290U2NvcGUubmF2ID0gW107XG4gICAgICAgIC8vJHJvb3RTY29wZS5uYXYuc2VhcmNoOyBcbiAgICAgICAgJHJvb3RTY29wZS5saW5rcyA9IFtdO1xuXG4gICAgICAgICRzY29wZS5uYXYuaGFzRmlsdGVycyA9IGZhbHNlO1xuXG5cbiAgICAgICAgLy8qKiBNQU5BR0UgVEhFIE5BVklHQVRJT04gU0VBUkNIIFNUQVRVU1xuICAgICAgICAkc2NvcGUub3BlbkZpbHRlcnMgPSAoaGFzRmlsdGVycykgPT4ge1xuICAgICAgICAgICAgaWYgKGhhc0ZpbHRlcnMgPT09IHRydWUpIHsgJHNjb3BlLm5hdi5oYXNGaWx0ZXJzID0gZmFsc2U7IH0gZWxzZSB7ICRzY29wZS5uYXYuaGFzRmlsdGVycyA9IHRydWU7IH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyFSRS1JTklUSUFMSVpFIEFQUExJQ0FUSU9OIERBVEFcbiAgICAgICAgJHJvb3RTY29wZS5hcHAucmVpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uLnBhdGgoXCIvZnJhbWlmeVwiKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vQCBGVU5DVElPTiBFWEVDVVRPUlxuICAgICAgICAkcm9vdFNjb3BlLmV4ZWMgPSBmID0+IGYoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU0VDVVJFIFRIRSBQQVJFTlRBTCBDT05UUk9MTEVEIFVSTFNcbiAgICAgICAgICovXG4gICAgICAgICRyb290U2NvcGUuc2VjdXJlID0gKHNlY3VyaXR5RnVuYykgPT4ge1xuXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzWyhwYXJ0cy5sZW5ndGggLSAxKV07XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUubGlua3MuaW5kZXhPZihwYXJ0KSA+PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmV4ZWMoc2VjdXJpdHlGdW5jKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogREFUQUJBU0UgQ0VOVFJJQyBBRERJVElPTiBBTkQgREVMRVRJT05cbiAgICAgICAgICovXG5cbiAgICAgICAgLy9EZWZpbmUgdGhlIG1haW4gYXBwbGljYXRpb24gb2JqZWN0c1xuICAgICAgICAkc2NvcGUuYWRkID0ge307XG4gICAgICAgICRzY29wZS5mZXRjaCA9IHt9O1xuICAgICAgICAkc2NvcGUuZmV0Y2hlZCA9IHt9O1xuICAgICAgICAkc2NvcGUuY291bnRlZCA9IHt9O1xuICAgICAgICAkc2NvcGUuZGF0YSA9IHt9O1xuXG4gICAgICAgICRzY29wZS5kYXRhLmxvZ2luID0ge307XG4gICAgICAgICRzY29wZS5kYXRhLmFkbWluID0ge307XG5cbiAgICAgICAgJHJvb3RTY29wZS5mcmFtZS5jaGFuZ2VBZG1pbihmYWxzZSk7XG4gICAgICAgICRzY29wZS5sb2dlZGluID0gZmFsc2U7XG5cbiAgICAgICAgLy8hIEJBU0lDIEFERElUSU9OXG4gICAgICAgICRzY29wZS5hZGQgPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzICxjYikgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vKiBwb3B1bGF0ZSB0aGUgZGF0YSBvYmplY3QgXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgICAgICA9IChkYXRhKSA/ICRzY29wZS5hcHAuanNvbihkYXRhKSA6IHt9O1xuICAgICAgICAgICAgICAgIGRhdGEuY29tbWFuZCAgICAgICAgPSBcImFkZFwiO1xuICAgICAgICAgICAgICAgIGRhdGEudGFibGUgICAgICAgICAgPSAodGFibGUgIT0gdW5kZWZpbmVkKSA/IHRhYmxlLnRvU3RyaW5nKCkucmVwbGFjZSgvdndfL2lnLCAnJykgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGRhdGEudG9rZW4gICAgICAgICAgPSBkYXRhLnRva2VuIHx8ICRzY29wZS5zdG9yYWdlLmFkbWluLl87XG4gICAgICAgICAgICAgICAgZGF0YS5leHRyYXMgICAgICAgICA9IChkYXRhKSA/ICgoZGF0YS5leHRyYXMpID8gZGF0YS5leHRyYXMucmVwbGFjZSgvTElNSVQgMS9pZywgJycpIDogdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vKiBFbmNyeXB0IHRoZSBzcGVjaWZpZWQgY3J5cHRGaWVsZHNcbiAgICAgICAgICAgICAgICAgaWYgKGNyeXB0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyeXB0RmllbGRzLnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY3J5cHRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtjcnlwdEZpZWxkXSA9ICRzY29wZS5hcHAubWQ1KGRhdGFbY3J5cHRGaWVsZF0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vKiBQZXJmb3JtIHRoZSBhY3R1YWwgYWRkaXRpb25cbiAgICAgICAgICAgICAgICAkc2NvcGUuY2dpLmFqYXgoZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHIgPSAkc2NvcGUuYXBwLmpzb24ocik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzcG9uc2UgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAubm90aWZ5KGA8Y2VudGVyPiAke3IuZGF0YS5tZXNzYWdlfTwvY2VudGVyPmAgLFwic3VjY2Vzc1wiICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZXRjaCh0YWJsZSwgeyBzcGVjaWZpY3M6IGRhdGEuc3BlY2lmaWNzIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YVt0YWJsZS50b1N0cmluZygpLnJlcGxhY2UoL3Z3Xy9pZywgJycpXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNiICYmIHR5cGVvZihjYikgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSggY2IocikgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQT1NUR1JFU1FMIEVSUk9SIEZPUk1BVCBNQVRDSElOR1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoci5kYXRhLm1lc3NhZ2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHIuZGF0YS5tZXNzYWdlWzJdLm1hdGNoKC9ERVRBSUw6KC4qKS8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCAsJ2RhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCAkc2NvcGUuYXBwLm1ha2VSZXNwb25zZSg1MDAgLHZbMV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8hIEJBU0lDIFVQREFUSU5HXG4gICAgICAgICRzY29wZS51cGRhdGUgPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzICxjYikgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vKiBwYWNrIHRoZSByZWxldmFudCBpbmZvIGludG8gdGhlIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgICAgICA9IChkYXRhKSA/ICRzY29wZS5hcHAuanNvbihkYXRhKSA6IHt9O1xuICAgICAgICAgICAgICAgIGRhdGEuY29tbWFuZCAgICAgICAgPSBcInVwZGF0ZVwiO1xuICAgICAgICAgICAgICAgIGRhdGEudGFibGUgICAgICAgICAgPSAodGFibGUgIT0gdW5kZWZpbmVkKSA/IHRhYmxlLnRvU3RyaW5nKCkucmVwbGFjZSgvdndfL2lnLCAnJykgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGRhdGEudG9rZW4gICAgICAgICAgPSBkYXRhLnRva2VuIHx8ICRzY29wZS5zdG9yYWdlLmFkbWluLl87XG4gICAgICAgICAgICAgICAgZGF0YS5leHRyYXMgICAgICAgICA9IChkYXRhKSA/ICgoZGF0YS5leHRyYXMpID8gZGF0YS5leHRyYXMucmVwbGFjZSgvTElNSVQgMS9pZywgJycpIDogdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vKiBFbmNyeXB0IHRoZSBzcGVjaWZpZWQgY3J5cHRGaWVsZHNcbiAgICAgICAgICAgICAgICBpZiAoY3J5cHRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3J5cHRGaWVsZHMuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjcnlwdEZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2NyeXB0RmllbGRdID0gJHNjb3BlLmFwcC5tZDUoZGF0YVtjcnlwdEZpZWxkXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8qIHBlcmZvcm0gdGhlIGFjdHVhbCB1cGRhdGVcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2dpLmFqYXgoZGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbiggKHIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICByID0gJHNjb3BlLmFwcC5qc29uKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3BvbnNlID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4gJHtyLmRhdGEubWVzc2FnZX08L2NlbnRlcj5gLCBcInN1Y2Nlc3NcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZXRjaCh0YWJsZSwgeyBzcGVjaWZpY3M6IGRhdGEuc3BlY2lmaWNzIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YVt0YWJsZS50b1N0cmluZygpLnJlcGxhY2UoL3Z3Xy9pZywgJycpXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2IpID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCBjYiggciApICk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQT1NUR1JFU1FMIEVSUk9SIEZPUk1BVCBNQVRDSElOR1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoci5kYXRhLm1lc3NhZ2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHIuZGF0YS5tZXNzYWdlWzJdLm1hdGNoKC9ERVRBSUw6KC4qKS8pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPSB1bmRlZmluZWQgfHwgdiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZGF0YS5tZXNzYWdlID0gdlsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHIuZGF0YS5tZXNzYWdlWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCxcImRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCggJHNjb3BlLmFwcC5tYWtlUmVzcG9uc2UoNTAwICxyLmRhdGEubWVzc2FnZSkgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KTtcbiAgXG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyEgQkFTSUMgREFUQSBGRVRDSElOR1xuICAgICAgICB2YXIgZG9fZmV0Y2ggPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzKSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUgLHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8qIHBvcHVsYXRlIHRoZSBcImRhdGFcIiBvYmplY3RcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICAgICAgPSAoZGF0YSkgPyAkc2NvcGUuYXBwLmpzb24oZGF0YSkgOiB7fTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbW1hbmQgICAgICAgPSBcImdldFwiO1xuICAgICAgICAgICAgICAgIGRhdGEudGFibGUgICAgICAgICA9IHRhYmxlO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5wcm9jZXNzaW5nIHRoZSBmZXRjaGluZyBvZiB0YWJsZSBcIiArIHRhYmxlICsgXCJcXG5cIilcblxuICAgICAgICAgICAgICAgIC8vKiBFbmNyeXB0IHRoZSBzcGVjaWZpZWQgY3J5cHRGaWVsZHNcbiAgICAgICAgICAgICAgICBpZiAoY3J5cHRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3J5cHRGaWVsZHMuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjcnlwdEZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2NyeXB0RmllbGRdID0gJHNjb3BlLmFwcC5tZDUoZGF0YVtjcnlwdEZpZWxkXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIC8vKiBwZXJmb3JtIHRoZSBhY3R1YWwgZGF0YSBmZXRjaGluZ1xuICAgICAgICAgICAgICAgICAkc2NvcGUuY2dpLmFqYXgoZGF0YSlcbiAgICAgICAgICAgICAgICAgLnRoZW4oIChyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgciA9ICRzY29wZS5hcHAuanNvbihyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoci5yZXNwb25zZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZXRjaGVkW3RhYmxlXSA9IHIuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUE9TVEdSRVNRTCBFUlJPUiBGT1JNQVQgTUFUQ0hJTkdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIuZGF0YS5tZXNzYWdlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSByLmRhdGEubWVzc2FnZVsyXS5tYXRjaCgvREVUQUlMOiguKikvKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAubm90aWZ5KGA8Y2VudGVyPiR7IHIuZGF0YS5tZXNzYWdlIH08L2NlbnRlcj5gLFwiZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCAkc2NvcGUuYXBwLm1ha2VSZXNwb25zZSg1MDAgLHIuZGF0YS5tZXNzYWdlKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUuZmV0Y2ggPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzICxjYikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YWJsZSkpIHtcblxuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlQXJyID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgICAgICAgICB0YWJsZVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZT0+dHlwZW9mKGVbMF0pIT0ndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgICAgLmZvckVhY2goICh0RGF0YSAsdGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlQXJyLnB1c2goIGRvX2ZldGNoKHREYXRhWzBdICwodERhdGFbMV0gfHwge30pICkgLGNyeXB0RmllbGRzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb21pc2VBcnIgPSBwcm9taXNlQXJyLmZpbHRlcihlPT50eXBlb2YoZSkhPSd1bmRlZmluZWQnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCggcHJvbWlzZUFyciApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSggZG9fZmV0Y2godGFibGUsIGRhdGEsIGNyeXB0RmllbGRzKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8hIEJBU0lDIERFTEVUSU9OICBcbiAgICAgICAgJHNjb3BlLmRlbCA9ICh0YWJsZSAsZGF0YSAsY3J5cHRGaWVsZHMgLGNiKSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlamVjdCAscmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8qIHBvcHVsYXRlIHRoZSBkYXRhIG9iamVjdFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgICA9IChkYXRhKSA/ICRzY29wZS5hcHAuanNvbihkYXRhKSA6IHt9O1xuICAgICAgICAgICAgICAgIGRhdGEuY29tbWFuZCAgICA9IFwiZGVsXCI7XG4gICAgICAgICAgICAgICAgZGF0YS50YWJsZSAgICAgID0gKHRhYmxlICE9IHVuZGVmaW5lZCkgPyB0YWJsZS50b1N0cmluZygpLnJlcGxhY2UoL3Z3Xy9pZywgJycpIDogXCJcIjtcbiAgICAgICAgICAgICAgICBkYXRhLnRva2VuICAgICAgPSBkYXRhLnRva2VuIHx8ICRzY29wZS5zdG9yYWdlLmFkbWluLl87XG5cbiAgICAgICAgICAgICAgICAvLyogRW5jcnlwdCB0aGUgc3BlY2lmaWVkIGNyeXB0RmllbGRzXG4gICAgICAgICAgICAgICAgaWYgKGNyeXB0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyeXB0RmllbGRzLnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY3J5cHRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtjcnlwdEZpZWxkXSA9ICRzY29wZS5hcHAubWQ1KGRhdGFbY3J5cHRGaWVsZF0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5jZ2kuYWpheChkYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKCAocikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHIgPSAkc2NvcGUuYXBwLmpzb24ocik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzcG9uc2UgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkc2NvcGUuZmV0Y2hlZFt0YWJsZV0uc3BsaWNlKGRlbElELCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAubm90aWZ5KGA8Y2VudGVyPiR7ci5kYXRhLm1lc3NhZ2V9PC9jZW50ZXI+YCwgXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUE9TVEdSRVNRTCBFUlJPUiBGT1JNQVQgTUFUQ0hJTkdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIuZGF0YS5tZXNzYWdlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSByLmRhdGEubWVzc2FnZVsyXS5tYXRjaCgvREVUQUlMOiguKikvKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCxcImRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCggJHNjb3BlLmFwcC5tYWtlUmVzcG9uc2UoNTAwICxyLmRhdGEubWVzc2FnZSkgKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICAvL0Jhc2ljIFVzZXIgTG9naW5cbiAgICAgICAgJHNjb3BlLmxvZ2luID0gKGNyeXB0RmllbGQpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSAscmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3J5cHRGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5sb2dpbltjcnlwdEZpZWxkXSA9ICRzY29wZS5hcHAubWQ1KCRzY29wZS5kYXRhLmxvZ2luW2NyeXB0RmllbGRdKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmxvZ2luLmNvbW1hbmQgICA9IFwiZ2V0XCI7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEubG9naW4udGFibGUgICAgID0gXCJ1c2Vyc1wiO1xuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmxvZ2luLmV4dHJhcyAgICA9IFwiIEFORCBhY3RpdmUgaXMgdHJ1ZSBMSU1JVCAxXCI7XG5cbiAgICAgICAgICAgICAgICAvLyogcGVyZm9ybSB0aGUgYWN0dWFsIGxvZ2luIHZhbGlkYXRpb25cbiAgICAgICAgICAgICAgICAkc2NvcGUuY2dpLmFqYXgoJHNjb3BlLmRhdGEubG9naW4pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5hZG1pbi5leHRyYXMgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHIgPSAkc2NvcGUuYXBwLmpzb24ocik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzcG9uc2UgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmRhdGEubWVzc2FnZS5sZW5ndGggPiAwICYmIHR5cGVvZihyLmRhdGEubWVzc2FnZVswXSkgPT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZGF0YS5tZXNzYWdlWzBdWyd1c2VybmFtZSddID09ICRzY29wZS5kYXRhLmxvZ2luLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdG9yYWdlLnVzZXIgPSByLmRhdGEubWVzc2FnZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxvZ2VkaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAkc2NvcGUuc3RvcmFnZS51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi8jL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5zdG9yYWdlLnVzZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5ub3RpZnkoYDxjZW50ZXI+WW91IGhhdmUgZW50ZXJlZCB0aGUgd3JvbmcgbG9naW4gY3JlZGVudGlhbHMuPC9jZW50ZXI+YCAsXCJkYW5nZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUE9TVEdSRVNRTCBFUlJPUiBGT1JNQVQgTUFUQ0hJTkdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIuZGF0YS5tZXNzYWdlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSByLmRhdGEubWVzc2FnZVsyXS5tYXRjaCgvREVUQUlMOiguKikvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9IHVuZGVmaW5lZCB8fCB2ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSB2WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuZGF0YS5tZXNzYWdlID0gci5kYXRhLm1lc3NhZ2VbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgJHNjb3BlLnN0b3JhZ2UudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAubm90aWZ5KGA8Y2VudGVyPiR7IHIuZGF0YS5tZXNzYWdlIH08L2NlbnRlcj5gLFwiZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCAkc2NvcGUuYXBwLm1ha2VSZXNwb25zZSg1MDAgLHIuZGF0YS5tZXNzYWdlKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9CYXNpYyBhZG1pbiBsb2dpblxuICAgICAgICAkc2NvcGUuYWRtaW5Mb2dpbiA9IChjcnlwdEZpZWxkKSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKCkgPT57XG5cbiAgICAgICAgICAgICAgICBpZiAoY3J5cHRGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5hZG1pbltjcnlwdEZpZWxkXSA9ICRzY29wZS5hcHAubWQ1KCRzY29wZS5kYXRhLmFkbWluW2NyeXB0RmllbGRdKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmFkbWluLmNvbW1hbmQgICA9IFwiZ2V0XCI7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEuYWRtaW4udGFibGUgICAgID0gXCJhZG1pbnNcIjtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5hZG1pbi5leHRyYXMgICAgPSBcIiBBTkQgYWN0aXZlIGlzIHRydWUgTElNSVQgMVwiO1xuXG4gICAgICAgICAgICAgICAgLy8qIHBlcmZvcm0gdGhlIGFjdHVhbCBsb2dpblxuICAgICAgICAgICAgICAgICRzY29wZS5jZ2kuYWpheCgkc2NvcGUuZGF0YS5hZG1pbilcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmFkbWluLmV4dHJhcyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgciA9ICRzY29wZS5hcHAuanNvbihyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoci5yZXNwb25zZSA9PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZGF0YS5tZXNzYWdlLmxlbmd0aCA+IDAgJiYgdHlwZW9mKHIuZGF0YS5tZXNzYWdlWzBdKSAhPSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmRhdGEubWVzc2FnZVswXVsncGFzc3dvcmQnXSA9PT0gJHNjb3BlLmRhdGEuYWRtaW4ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0b3JhZ2UuYWRtaW4gPSByLmRhdGEubWVzc2FnZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0b3JhZ2UuYWRtaW4uXyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RvcmFnZS5hZG1pbi5fLnVzZXIgPSByLmRhdGEubWVzc2FnZVswXS5hZG1pbl9uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3RvcmFnZS5hZG1pbi5fLmtleSA9IHIuZGF0YS5tZXNzYWdlWzBdLnBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLmNoYW5nZUFkbWluKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgJHNjb3BlLmRhdGEuYWRtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAkc2NvcGUuc3RvcmFnZS5hZG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvIy9hZG1pblwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlICRzY29wZS5kYXRhLmFkbWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAkc2NvcGUuc3RvcmFnZS5hZG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj5Zb3UgaGF2ZSBlbnRlcmVkIHRoZSB3cm9uZyBsb2dpbiBjcmVkZW50aWFscy48L2NlbnRlcj5gICxcImRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi8jL2FkbWluXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQT1NUR1JFU1FMIEVSUk9SIEZPUk1BVCBNQVRDSElOR1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoci5kYXRhLm1lc3NhZ2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHIuZGF0YS5tZXNzYWdlWzJdLm1hdGNoKC9ERVRBSUw6KC4qKS8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgJHNjb3BlLnN0b3JhZ2UuYWRtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCxcImRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCggJHNjb3BlLmFwcC5tYWtlUmVzcG9uc2UoNTAwICxyLmRhdGEubWVzc2FnZSkgKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vQCBIYW5kbGUgYmFzaWMgdXNlciByZS1hdXRoZW50aWNhdGlvblxuICAgICAgICAkc2NvcGUuaXNsb2dlZGluID0gKCkgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuc3RvcmFnZS51c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmxvZ2luLnVzZXJuYW1lID0gJHNjb3BlLnN0b3JhZ2UudXNlci51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEubG9naW4ucGFzc3dvcmQgPSAkc2NvcGUuc3RvcmFnZS51c2VyLnBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5ub3RpZnkoYDxjZW50ZXI+WW91IGhhdmUgbm8gcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhpcyBjb250ZW50PC9jZW50ZXI+YCwnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfTtcblxuICAgICAgICAvL0AgSGFuZGxlIGJhc2ljIGFwcC11c2VyIGxvZ291dFxuICAgICAgICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAkc2NvcGUuaXNsb2dlZGluID0gZmFsc2U7XG4gICAgICAgICAgICBkZWxldGUgJHNjb3BlLnN0b3JhZ2UudXNlcjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvIy8nO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vQCBIYW5kbGUgYmFzaWMgYXBwbGljYXRpb24gcmVkaXJlY3Rpb25cbiAgICAgICAgJHNjb3BlLnJlZGlyZWN0ID0gKGxvYykgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGxvY1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi8jL2ZyYW1pZnlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCYXNpYyBBZG1pbiBBdXRoXG4gICAgICAgICRzY29wZS5hdXRob3JpemUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuc3RvcmFnZS5hZG1pbikge1xuICAgICAgICAgICAgICAgICRzY29wZS5kYXRhLmFkbWluICAgICAgICAgICAgICAgPSB7fTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5hZG1pbi5hZG1pbl9uYW1lICAgID0gJHNjb3BlLnN0b3JhZ2UuYWRtaW4uYWRtaW5fbmFtZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YS5hZG1pbi5wYXNzd29yZCAgICAgID0gJHNjb3BlLnN0b3JhZ2UuYWRtaW4ucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkbWluTG9naW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmxvY2F0aW9uID0gXCIvIy9hZG1pblwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9AIEhBTkRMRSBBRE1JTklTVFJBVE9SIERFQVVUSE9SSVpBVElPTlxuICAgICAgICAkc2NvcGUuZGVhdXRob3JpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgJHNjb3BlLnN0b3JhZ2UuYWRtaW47XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmZyYW1lLmNoYW5nZUFkbWluKGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvIy8nO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vIEJBU0lDIEN1c3RvbSBRdWVyaWVzXG4gICAgICAgICRzY29wZS5jdXN0b20gPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzICxjYikgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8qIGluaXRpYWxpemUgdGhlIGRhdGEgb2JqZWN0XG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgID0gKGRhdGEpID8gJHNjb3BlLmFwcC5qc29uKGRhdGEpIDoge307XG4gICAgICAgICAgICAgICAgZGF0YS5jb21tYW5kICAgID0gXCJjdXN0b21cIjtcbiAgICAgICAgICAgICAgICBkYXRhLnRva2VuICAgICAgPSBkYXRhLnRva2VuIHx8ICRzY29wZS5zdG9yYWdlLmFkbWluLl87XG5cbiAgICAgICAgICAgICAgICAvLyogRW5jcnlwdCB0aGUgc3BlY2lmaWVkIGNyeXB0RmllbGRzXG4gICAgICAgICAgICAgICAgaWYgKGNyeXB0RmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyeXB0RmllbGRzLnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY3J5cHRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtjcnlwdEZpZWxkXSA9ICRzY29wZS5hcHAubWQ1KGRhdGFbY3J5cHRGaWVsZF0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vKiBQZXJmb3JtIHRoZSBhY3R1YWwgY3VzdG9tIHF1ZXJ5XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNnaS5hamF4KGRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICByID0gJHNjb3BlLmFwcC5qc29uKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3BvbnNlID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyhyLmRhdGEubWVzc2FnZSB8fCAnU3VjY2Vzc2Z1bCcpfTwvY2VudGVyPmAsIFwic3VjY2Vzc1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNGZXRjaGVkW3RhYmxlXSA9IHIuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFbdGFibGUudG9TdHJpbmcoKS5yZXBsYWNlKC92d18vaWcsICcnKV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQT1NUR1JFU1FMIEVSUk9SIEZPUk1BVCBNQVRDSElOR1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoci5kYXRhLm1lc3NhZ2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHIuZGF0YS5tZXNzYWdlWzJdLm1hdGNoKC9ERVRBSUw6KC4qKS8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoICRzY29wZS5hcHAubWFrZVJlc3BvbnNlKDUwMCwgci5kYXRhLm1lc3NhZ2UpIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSk7ICAgXG5cbiAgICAgICAgfTtcblxuICAgICAgICAvL0JBU0lDIERBVEFCQVNFIElOU1RBTkNFT0YgQ09VTlRFUlxuICAgICAgICAkc2NvcGUuY291bnQgPSAodGFibGUgLGRhdGEgLGNyeXB0RmllbGRzICxjYikgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlICxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgICA9IChkYXRhKSA/ICRzY29wZS5hcHAuanNvbihkYXRhKSA6IHt9O1xuICAgICAgICAgICAgICAgIGRhdGEudGFibGUgICAgICA9IHRhYmxlO1xuICAgICAgICAgICAgICAgIGRhdGEuY29tbWFuZCAgICA9IFwiY291bnRcIjtcbiAgICAgICAgICAgICAgICBkYXRhLnRva2VuICAgICAgPSBkYXRhLnRva2VuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8qIEVuY3J5cHQgdGhlIHNwZWNpZmllZCBjcnlwdEZpZWxkc1xuICAgICAgICAgICAgICAgIGlmIChjcnlwdEZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICBjcnlwdEZpZWxkcy5zcGxpdChcIixcIilcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGNyeXB0RmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbY3J5cHRGaWVsZF0gPSAkc2NvcGUuYXBwLm1kNShkYXRhW2NyeXB0RmllbGRdKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyogcGVyZm9ybSB0aGUgYWN0dWFsIGNvdW50XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNnaS5hamF4KGRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICByID0gJHNjb3BlLmFwcC5qc29uKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3BvbnNlID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY291bnRlZFt0YWJsZS50b1N0cmluZygpLnJlcGxhY2UoL3Z3Xy9pZywgJycpXSA9IHIuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFbdGFibGUudG9TdHJpbmcoKS5yZXBsYWNlKC92d18vaWcsICcnKV0gPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBPU1RHUkVTUUwgRVJST1IgRk9STUFUIE1BVENISU5HXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyLmRhdGEubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHIuZGF0YS5tZXNzYWdlWzJdLm1hdGNoKC9ERVRBSUw6KC4qKS8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT0gdW5kZWZpbmVkIHx8IHYgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmRhdGEubWVzc2FnZSA9IHZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5kYXRhLm1lc3NhZ2UgPSByLmRhdGEubWVzc2FnZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLm5vdGlmeShgPGNlbnRlcj4keyByLmRhdGEubWVzc2FnZSB9PC9jZW50ZXI+YCAsJ2RhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCAkc2NvcGUuYXBwLm1ha2VSZXNwb25zZSg1MDAgLHIuZGF0YS5tZXNzYWdlICkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVEFCTEUgU09SVEVSXG4gICAgICAgICAqL1xuICAgICAgICAkc2NvcGUuc29ydCA9IGZ1bmN0aW9uKGtleW5hbWUpIHtcbiAgICAgICAgICAgICRzY29wZS5zb3J0S2V5ID0ga2V5bmFtZTsgLy9zZXQgdGhlIHNvcnRLZXkgdG8gdGhlIHBhcmFtIHBhc3NlZFxuICAgICAgICAgICAgJHNjb3BlLnJldmVyc2UgPSAhJHNjb3BlLnJldmVyc2U7IC8vaWYgdHJ1ZSBtYWtlIGl0IGZhbHNlIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgREVMRVRFIFVOV0FOVEVEIEZJRUxEU1xuICAgICAgICAgKi9cbiAgICAgICAgJHNjb3BlLnNhbml0aXplID0gKGRhdGEgLGtleXMpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXlzKSB7XG4gICAgICAgICAgICAgICAga2V5cy5zcGxpdChcIixcIikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUFVTSCBEQVRBIFRPIE9CSkVDVFxuICAgICAgICAgKi9cbiAgICAgICAgJHNjb3BlLmRQdXNoID0gKG9iaiAsa2V5ICx2YWwpID0+IHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAIE1PTlRIIFJFR1VMQVRJT05cbiAgICAgICAgICovXG4gICAgICAgICRzY29wZS5jdXJybW9pbiA9ICRzY29wZS5hcHAubW9udGhOdW0oKTtcbiAgICAgICAgJHNjb3BlLnNldE1vaW4gPSAobW9pbikgPT4geyAkc2NvcGUuY3Vycm1vaW4gPSBtb2luOyB9XG5cbiAgICAgICAgLy9AIElOSkVDVCBBIFNUQU5EQVJEIFdIRVJFIFwiRXh0cmFzXCIgT0JKRUNUXG4gICAgICAgICRzY29wZS5hZGRFeHRyYXMgPSAodGFyZ2V0T2JqICxleHRyYXNPYmogLHN1YlN0cmluZ3MgLHJlbW92ZUtleXMpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcblxuICAgICAgICAgICAgICAgIHRhcmdldE9iaiAgID0gdGFyZ2V0T2JqIHx8IHt9O1xuICAgICAgICAgICAgICAgIGV4dHJhc09iaiAgID0gZXh0cmFzT2JqIHx8IHt9O1xuICAgICAgICAgICAgICAgIHN1YlN0cmluZ3MgID0gc3ViU3RyaW5ncyB8fCAnJztcbiAgICAgICAgICAgICAgICByZW1vdmVLZXlzICA9IHJlbW92ZUtleXMgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFzICA9ICcnO1xuXG4gICAgICAgICAgICAgICAgdmFyIGsgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgdiA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLy9AIENBUFRVUkUgVEhFIFJFTU9WRSBLRVlTXG4gICAgICAgICAgICAgICAgcmVtb3ZlS2V5cyA9IHJlbW92ZUtleXMuc3BsaXQoJywnKS5maWx0ZXIoZSA9PiBlKTtcblxuXG4gICAgICAgICAgICAgICAgcmVtb3ZlS2V5cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBleHRyYXNPYmpbZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXh0cmFzT2JqW2VdO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9AIENBUFRVUkUgUkVQTEFDRSBTVFJJTkdTXG4gICAgICAgICAgICAgICAgc3ViU3RyaW5nc1xuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgoZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBlLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBrW2ldID0gKHhbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdltpXSA9ICh4WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vQCBHRVQgVEhFIERFRklORUQgS0VZU1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXh0cmFzT2JqKTtcblxuICAgICAgICAgICAgICAgIC8vQCBSRVBMQUNFIFRIRSBERUZJTkVEIFdJVEggVEhFIERFU0lSRUQgUkVQTEFDRSBLRVlTXG4gICAgICAgICAgICAgICAgay5mb3JFYWNoKChlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMuaW5kZXhPZihlKSAhPSAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYXNPYmpbdltpXV0gPSBleHRyYXNPYmpbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYXNPYmpbZV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV4dHJhc09ialtlXTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgayA9IE9iamVjdC5rZXlzKGV4dHJhc09iaik7XG4gICAgICAgICAgICAgICAgdiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBrLmZvckVhY2goKGUsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBleHRyYXMgKz0gJyAnICsgZSArIFwiPSdcIiArIGV4dHJhc09ialtlXSArIFwiJyBBTkRcIjtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgayA9IG51bGw7XG5cblxuICAgICAgICAgICAgICAgIHRhcmdldE9iai5leHRyYXMgPSBleHRyYXMucmVwbGFjZSgvQU5EKyQvLCAnJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCB0YXJnZXRPYmogKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBBUFBMSUNBVElPTiBTUEVDSUZJQyBBRERJVElPTlNcblxuXG59XSlcblxuLmRpcmVjdGl2ZShcImNvbnRlbnRlZGl0YWJsZVwiXG4sZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0Vmlld1ZhbHVlKGVsZW1lbnQuaHRtbCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmdNb2RlbC4kcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5odG1sKG5nTW9kZWwuJHZpZXdWYWx1ZSB8fCBcIlwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYmluZChcImJsdXIga2V5dXAgY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShyZWFkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIkN5MDFXK1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfOWUxMjVmNGMuanNcIixcIi9cIikiXX0=
