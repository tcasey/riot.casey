<!DOCTYPE html>
riot.tag2('html', '<head> <meta charset="UTF-8"> <title>Testing Webpack and riot</title> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> </head> <body> <main></main> </body>', '', 'lang="en"', function(opts) {
  (function(modules) {

  	var installedModules = {};

  	function __webpack_require__(moduleId) {

  		if(installedModules[moduleId])
  			return installedModules[moduleId].exports;

  		var module = installedModules[moduleId] = {
  			exports: {},
  			id: moduleId,
  			loaded: false
  		};

  		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  		module.loaded = true;

  		return module.exports;
  	}

  	__webpack_require__.m = modules;

  	__webpack_require__.c = installedModules;

  	__webpack_require__.p = "";

  	return __webpack_require__(0);
  })

  ([

  function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);
	__webpack_require__(6);
	__webpack_require__(30);

	__webpack_require__(33);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);

	__webpack_require__(39);

  },

  function(module, exports, __webpack_require__) {

	 (function(global) {module.exports = global["$"] = __webpack_require__(2);
	 }.call(exports, (function() { return this; }())))

  },

  function(module, exports, __webpack_require__) {

	 (function(global) {module.exports = global["jQuery"] = __webpack_require__(3);
	 }.call(exports, (function() { return this; }())))

  },

  function(module, exports, __webpack_require__) {

	 (function(global) {module.exports = global["jQuery"] = __webpack_require__(4);
	 }.call(exports, (function() { return this; }())))

  },

  function(module, exports, __webpack_require__) {

	 (function(global) {module.exports = global["$"] = __webpack_require__(5);
	 }.call(exports, (function() { return this; }())))

  },

  function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};

	var
		version = "2.2.4",

		jQuery = function( selector, context ) {

			return new jQuery.fn.init( selector, context );
		},

		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		jquery: version,

		constructor: jQuery,

		selector: "",

		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		get: function( num ) {
			return num != null ?

				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				slice.call( this );
		},

		pushStack: function( elems ) {

			var ret = jQuery.merge( this.constructor(), elems );

			ret.prevObject = this;
			ret.context = this.context;

			return ret;
		},

		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		if ( typeof target === "boolean" ) {
			deep = target;

			target = arguments[ i ] || {};
			i++;
		}

		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			if ( ( options = arguments[ i ] ) != null ) {

				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					if ( target === copy ) {
						continue;
					}

					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						target[ name ] = jQuery.extend( deep, clone, copy );

					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		return target;
	};

	jQuery.extend( {

		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					indirect( code );
				}
			}
		},

		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			return concat.apply( [], ret );
		},

		guid: 1,

		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =

	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		MAX_NEGATIVE = 1 << 31,

		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,

		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		whitespace = "[\\x20\\t\\r\\n\\f]",

		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			"*([*^$|!~]?=)" + whitespace +

			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			".*" +
			")\\)|)",

		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;

			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?

					String.fromCharCode( high + 0x10000 ) :

					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		unloadHandler = function() {
			setDocument();
		};

	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);

		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			function( target, els ) {
				var j = target.length,
					i = 0;

				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			nodeType = context ? context.nodeType : 9;

		results = results || [];

		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					if ( (m = match[1]) ) {

						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						} else {

							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	function createCache() {
		var keys = [];

		function cache( key, value ) {

			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {

			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}

			div = null;
		}
	}

	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		if ( diff ) {
			return diff;
		}

		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	support = Sizzle.support = {};

	isXML = Sizzle.isXML = function( elem ) {

		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		if ( (parent = document.defaultView) && parent.top !== parent ) {

			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {

			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,

					results = context.getElementsByTagName( tag );

				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		rbuggyMatches = [];

		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {

			assert(function( div ) {

				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {

				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {

				support.disconnectedMatch = matches.call( div, "div" );

				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		hasCompare = rnative.test( docElem.compareDocumentPosition );

		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		sortOrder = hasCompare ?
		function( a, b ) {

			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				1;

			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {

			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?

				siblingCheck( ap[i], bp[i] ) :

				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {

		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				if ( ret || support.disconnectedMatch ||

						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {

		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {

		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		sortInput = null;

		return results;
	};

	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			while ( (node = elem[i++]) ) {

				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {

				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		return ret;
	};

	Expr = Sizzle.selectors = {

		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {

				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {

					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				} else if ( unquoted && rpseudo.test( unquoted ) &&

					(excess = tokenize( unquoted, true )) &&

					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}

									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							if ( forward && useCache ) {

								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								if ( useCache ) {

									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								if ( diff === false ) {

									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {

				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				if ( fn[ expando ] ) {
					return fn( argument );
				}

				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			"not": markFunction(function( selector ) {

				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );

						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			"lang": markFunction( function( lang ) {

				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {

				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {

				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			"empty": function( elem ) {

				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {

					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,

					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :

				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?

			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {

								uniqueCache[ dir ] = newCache;

								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?

					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						[] :

						results :
					matcherIn;

			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {

								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				if ( matcher[ expando ] ) {

					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),

					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					if ( bySet ) {

						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				matchedCount += i;

				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						setMatched = condense( setMatched );
					}

					push.apply( results, setMatched );

					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match   ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			cached.selector = selector;
		}
		return cached;
	};

	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		if ( match.length === 1 ) {

			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {

					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	support.detectDuplicates = !!hasDuplicate;

	setDocument();

	support.sortDetached = assert(function( div1 ) {

		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;

	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};

	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );

	var risSimple = /^.[^:#\[\.,]*$/;

	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {

				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );

	var rootjQuery,

		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			if ( !selector ) {
				return this;
			}

			root = root || rootjQuery;

			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				if ( match && ( match[ 1 ] || !context ) ) {

					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem && elem.parentNode ) {

							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				} else {
					return this.constructor( context ).find( selector );
				}

			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	init.prototype = jQuery.fn;

	rootjQuery = jQuery( document );

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		index: function( elem ) {

			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			return indexOf.call( this,

				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );

	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	jQuery.Callbacks = function( options ) {

		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var
			firing,

			memory,

			fired,

			locked,

			list = [],

			queue = [],

			firingIndex = -1,

			fire = function() {

				locked = options.once;

				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							firingIndex = list.length;
							memory = false;
						}
					}
				}

				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				if ( locked ) {

					if ( memory ) {
						list = [];

					} else {
						list = "";
					}
				}
			},

			self = {

				add: function() {
					if ( list ) {

						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				fired: function() {
					return !!fired;
				}
			};

		return self;
	};

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function(   ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			promise.pipe = promise.then;

			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				promise[ tuple[ 1 ] ] = list.add;

				if ( stateString ) {
					list.add( function() {

						state = stateString;

					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			promise.promise( deferred );

			if ( func ) {
				func.call( deferred, deferred );
			}

			return deferred;
		},

		when: function( subordinate   ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );

	var readyList;

	jQuery.fn.ready = function( fn ) {

		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		isReady: false,

		readyWait: 1,

		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		ready: function( wait ) {

			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			jQuery.isReady = true;

			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			readyList.resolveWith( document, [ jQuery ] );

			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				window.setTimeout( jQuery.ready );

			} else {

				document.addEventListener( "DOMContentLoaded", completed );

				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	jQuery.ready.promise();

	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			if ( !acceptData( owner ) ) {
				return {};
			}

			var value = owner[ this.expando ];

			if ( !value ) {
				value = {};

				if ( acceptData( owner ) ) {

					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			if ( typeof data === "string" ) {
				cache[ data ] = value;

			} else {

				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			this.set( owner, key, value );

			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				if ( jQuery.isArray( key ) ) {

					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				if ( elem && value === undefined ) {

					data = dataUser.get( elem, key ) ||

						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					return;
				}

				camelKey = jQuery.camelCase( key );
				this.each( function() {

					var data = dataUser.get( this, camelKey );

					dataUser.set( this, camelKey, value );

					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );

	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};

	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			unit = unit || initialInUnit[ 3 ];

			valueParts = valueParts || [];

			initialInUnit = +initial || 1;

			do {

				scale = scale || ".5";

				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );

	var wrapMap = {

		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll( context, tag ) {

		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}

	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				if ( jQuery.type( elem ) === "object" ) {

					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					jQuery.merge( nodes, tmp.childNodes );

					tmp = fragment.firstChild;

					tmp.textContent = "";
				}
			}
		}

		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			tmp = getAll( fragment.appendChild( elem ), "script" );

			if ( contains ) {
				setGlobalEval( tmp );
			}

			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}

	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();

	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		if ( typeof types === "object" ) {

			if ( typeof selector !== "string" ) {

				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				fn = data;
				data = undefined;
			} else {

				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			if ( !elemData ) {
				return;
			}

			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				if ( !type ) {
					continue;
				}

				special = jQuery.event.special[ type ] || {};

				type = ( selector ? special.delegateType : special.bindType ) || type;

				special = jQuery.event.special[ type ] || {};

				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				jQuery.event.global[ type ] = true;
			}

		},

		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			args[ 0 ] = event;
			event.delegateTarget = this;

			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			if ( !event.target ) {
				event.target = document;
			}

			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				noBubble: true
			},
			focus: {

				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					src.returnValue === false ?
				returnTrue :
				returnFalse;

		} else {
			this.type = src;
		}

		if ( props ) {
			jQuery.extend( this, props );
		}

		this.timeStamp = src && src.timeStamp || jQuery.now();

		this[ jQuery.expando ] = true;
	};

	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );

	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		rnoInnerhtml = /<script|<style|<link/i,

		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						if ( hasScripts ) {

							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					jQuery.map( scripts, restoreScript );

					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					jQuery.cleanData( getAll( elem, false ) );

					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );

	var iframe,
		elemdisplay = {

			HTML: "block",
			BODY: "block"
		};

	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		elem.detach();

		return display;
	}

	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			if ( display === "none" || !display ) {

				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				doc = iframe[ 0 ].contentDocument;

				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};

	var documentElement = document.documentElement;

	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		if ( !div.style ) {
			return;
		}

		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		function computeStyleTests() {
			div.style.cssText =

				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				marginDiv.style.cssText = div.style.cssText =

					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();

	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			ret + "" :
			ret;
	}

	function addGetHookIf( conditionFn, hookFn ) {

		return {
			get: function() {
				if ( conditionFn() ) {

					delete this.get;
					return;
				}

				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}

	var

		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	function vendorPropName( name ) {

		if ( name in emptyStyle ) {
			return name;
		}

		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		var matches = rcssNum.exec( value );
		return matches ?

			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			4 :

			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		if ( val <= 0 || val == null ) {

			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			val = parseFloat( val ) || 0;
		}

		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		cssProps: {
			"float": "cssFloat"
		},

		style: function( elem, name, value, extra ) {

			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			if ( value !== undefined ) {
				type = typeof value;

				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					type = "number";
				}

				if ( value == null || value !== value ) {
					return;
				}

				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );

	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				result = jQuery.css( tween.elem, tween.prop, "" );

				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	jQuery.fx.step = {};

	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {

		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			display = jQuery.css( elem, "display" );

			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			return this.filter( isHidden ).css( "opacity", 0 ).show()

				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				data.finish = true;

				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		_default: 400
	};

	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};

	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		support.checkOn = input.value !== "";

		support.optSelected = opt.selected;

		select.disabled = true;
		support.optDisabled = !opt.disabled;

		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();

	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					if ( jQuery.expr.match.bool.test( name ) ) {

						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );

	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );

	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						dataPriv.set( this, "__className__", className );
					}

					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );

	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						ret.replace( rreturn, "" ) :

						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					for ( ; i < max; i++ ) {
						option = options[ i ];

						if ( ( option.selected || i === index ) &&

								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							value = jQuery( option ).val();

							if ( one ) {
								return value;
							}

							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );

	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );

	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );

	support.focusin = "onfocusin" in window;

	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );

	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};

	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};

	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		prefilters = {},

		transports = {},

		allTypes = "*/".concat( "*" ),

		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	function addToPrefiltersOrTransports( structure ) {

		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				while ( ( dataType = dataTypes[ i++ ] ) ) {

					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			finalDataType = finalDataType || firstDataType;
		}

		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			dataTypes = s.dataTypes.slice();

		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				if ( current === "*" ) {

					current = prev;

				} else if ( prev !== "*" && prev !== current ) {

					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					if ( !conv ) {
						for ( conv2 in converters ) {

							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									if ( conv === true ) {
										conv = converters[ conv2 ];

									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					if ( conv !== true ) {

						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		active: 0,

		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			converters: {

				"* text": String,

				"text html": true,

				"text json": jQuery.parseJSON,

				"text xml": jQuery.parseXML
			},

			flatOptions: {
				url: true,
				context: true
			}
		},

		ajaxSetup: function( target, settings ) {
			return settings ?

				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		ajax: function( url, options ) {

			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			options = options || {};

			var transport,

				cacheURL,

				responseHeadersString,
				responseHeaders,

				timeoutTimer,

				urlAnchor,

				fireGlobals,

				i,

				s = jQuery.ajaxSetup( {}, options ),

				callbackContext = s.context || s,

				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				statusCode = s.statusCode || {},

				requestHeaders = {},
				requestHeadersNames = {},

				state = 0,

				strAbort = "canceled",

				jqXHR = {
					readyState: 0,

					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			s.type = options.method || options.type || s.method || s.type;

			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				try {
					urlAnchor.href = s.url;

					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					s.crossDomain = true;
				}
			}

			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			if ( state === 2 ) {
				return jqXHR;
			}

			fireGlobals = jQuery.event && s.global;

			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			s.type = s.type.toUpperCase();

			s.hasContent = !rnoContent.test( s.type );

			cacheURL = s.url;

			if ( !s.hasContent ) {

				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					delete s.data;
				}

				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				return jqXHR.abort();
			}

			strAbort = "abort";

			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				if ( state === 2 ) {
					return jqXHR;
				}

				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					if ( state < 2 ) {
						done( -1, e );

					} else {
						throw e;
					}
				}
			}

			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				if ( state === 2 ) {
					return;
				}

				state = 2;

				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				transport = undefined;

				responseHeadersString = headers || "";

				jqXHR.readyState = status > 0 ? 4 : 0;

				isSuccess = status >= 200 && status < 300 || status === 304;

				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				response = ajaxConvert( s, response, jqXHR, isSuccess );

				if ( isSuccess ) {

					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					} else if ( status === 304 ) {
						statusText = "notmodified";

					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};

	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );

	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};

	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					add( prefix, v );

				} else {

					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			add( prefix, obj );
		}
	}

	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );

	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			0: 200,

			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							if ( xhr.readyState === 4 ) {

								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					callback = callback( "abort" );

					try {

						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );

	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	jQuery.ajaxTransport( "script", function( s ) {

		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );

	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			s.dataTypes[ 0 ] = "json";

			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			jqXHR.always( function() {

				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				} else {
					window[ callbackName ] = overwritten;
				}

				if ( s[ callbackName ] ) {

					s.jsonpCallback = originalSettings.jsonpCallback;

					oldCallbacks.push( callbackName );
				}

				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			return "script";
		}
	} );

	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};

	var _load = jQuery.fn.load;

	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		if ( jQuery.isFunction( params ) ) {

			callback = params;
			params = undefined;

		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				response = arguments;

				self.html( selector ?

					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					responseText );

			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};

	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );

	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};

	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				offset = elem.getBoundingClientRect();

			} else {

				offsetParent = this.offsetParent();

				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );

	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						return elem.document.documentElement[ "client" + name ];
					}

					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						jQuery.css( elem, type, extra ) :

						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );

	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

		_jQuery = window.jQuery,

		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));

  },

  function(module, exports, __webpack_require__) {

	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];

	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;

	if(false) {

		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./materialize.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./materialize.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}

		module.hot.dispose(function() { update(); });
	}

  },

  function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();

	exports.push([module.id, "/*!\n * Materialize v0.97.8 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */\n.materialize-red{background-color:#e51c23 !important}.materialize-red-text{color:#e51c23 !important}.materialize-red.lighten-5{background-color:#fdeaeb !important}.materialize-red-text.text-lighten-5{color:#fdeaeb !important}.materialize-red.lighten-4{background-color:#f8c1c3 !important}.materialize-red-text.text-lighten-4{color:#f8c1c3 !important}.materialize-red.lighten-3{background-color:#f3989b !important}.materialize-red-text.text-lighten-3{color:#f3989b !important}.materialize-red.lighten-2{background-color:#ee6e73 !important}.materialize-red-text.text-lighten-2{color:#ee6e73 !important}.materialize-red.lighten-1{background-color:#ea454b !important}.materialize-red-text.text-lighten-1{color:#ea454b !important}.materialize-red.darken-1{background-color:#d0181e !important}.materialize-red-text.text-darken-1{color:#d0181e !important}.materialize-red.darken-2{background-color:#b9151b !important}.materialize-red-text.text-darken-2{color:#b9151b !important}.materialize-red.darken-3{background-color:#a21318 !important}.materialize-red-text.text-darken-3{color:#a21318 !important}.materialize-red.darken-4{background-color:#8b1014 !important}.materialize-red-text.text-darken-4{color:#8b1014 !important}.red{background-color:#F44336 !important}.red-text{color:#F44336 !important}.red.lighten-5{background-color:#FFEBEE !important}.red-text.text-lighten-5{color:#FFEBEE !important}.red.lighten-4{background-color:#FFCDD2 !important}.red-text.text-lighten-4{color:#FFCDD2 !important}.red.lighten-3{background-color:#EF9A9A !important}.red-text.text-lighten-3{color:#EF9A9A !important}.red.lighten-2{background-color:#E57373 !important}.red-text.text-lighten-2{color:#E57373 !important}.red.lighten-1{background-color:#EF5350 !important}.red-text.text-lighten-1{color:#EF5350 !important}.red.darken-1{background-color:#E53935 !important}.red-text.text-darken-1{color:#E53935 !important}.red.darken-2{background-color:#D32F2F !important}.red-text.text-darken-2{color:#D32F2F !important}.red.darken-3{background-color:#C62828 !important}.red-text.text-darken-3{color:#C62828 !important}.red.darken-4{background-color:#B71C1C !important}.red-text.text-darken-4{color:#B71C1C !important}.red.accent-1{background-color:#FF8A80 !important}.red-text.text-accent-1{color:#FF8A80 !important}.red.accent-2{background-color:#FF5252 !important}.red-text.text-accent-2{color:#FF5252 !important}.red.accent-3{background-color:#FF1744 !important}.red-text.text-accent-3{color:#FF1744 !important}.red.accent-4{background-color:#D50000 !important}.red-text.text-accent-4{color:#D50000 !important}.pink{background-color:#e91e63 !important}.pink-text{color:#e91e63 !important}.pink.lighten-5{background-color:#fce4ec !important}.pink-text.text-lighten-5{color:#fce4ec !important}.pink.lighten-4{background-color:#f8bbd0 !important}.pink-text.text-lighten-4{color:#f8bbd0 !important}.pink.lighten-3{background-color:#f48fb1 !important}.pink-text.text-lighten-3{color:#f48fb1 !important}.pink.lighten-2{background-color:#f06292 !important}.pink-text.text-lighten-2{color:#f06292 !important}.pink.lighten-1{background-color:#ec407a !important}.pink-text.text-lighten-1{color:#ec407a !important}.pink.darken-1{background-color:#d81b60 !important}.pink-text.text-darken-1{color:#d81b60 !important}.pink.darken-2{background-color:#c2185b !important}.pink-text.text-darken-2{color:#c2185b !important}.pink.darken-3{background-color:#ad1457 !important}.pink-text.text-darken-3{color:#ad1457 !important}.pink.darken-4{background-color:#880e4f !important}.pink-text.text-darken-4{color:#880e4f !important}.pink.accent-1{background-color:#ff80ab !important}.pink-text.text-accent-1{color:#ff80ab !important}.pink.accent-2{background-color:#ff4081 !important}.pink-text.text-accent-2{color:#ff4081 !important}.pink.accent-3{background-color:#f50057 !important}.pink-text.text-accent-3{color:#f50057 !important}.pink.accent-4{background-color:#c51162 !important}.pink-text.text-accent-4{color:#c51162 !important}.purple{background-color:#9c27b0 !important}.purple-text{color:#9c27b0 !important}.purple.lighten-5{background-color:#f3e5f5 !important}.purple-text.text-lighten-5{color:#f3e5f5 !important}.purple.lighten-4{background-color:#e1bee7 !important}.purple-text.text-lighten-4{color:#e1bee7 !important}.purple.lighten-3{background-color:#ce93d8 !important}.purple-text.text-lighten-3{color:#ce93d8 !important}.purple.lighten-2{background-color:#ba68c8 !important}.purple-text.text-lighten-2{color:#ba68c8 !important}.purple.lighten-1{background-color:#ab47bc !important}.purple-text.text-lighten-1{color:#ab47bc !important}.purple.darken-1{background-color:#8e24aa !important}.purple-text.text-darken-1{color:#8e24aa !important}.purple.darken-2{background-color:#7b1fa2 !important}.purple-text.text-darken-2{color:#7b1fa2 !important}.purple.darken-3{background-color:#6a1b9a !important}.purple-text.text-darken-3{color:#6a1b9a !important}.purple.darken-4{background-color:#4a148c !important}.purple-text.text-darken-4{color:#4a148c !important}.purple.accent-1{background-color:#ea80fc !important}.purple-text.text-accent-1{color:#ea80fc !important}.purple.accent-2{background-color:#e040fb !important}.purple-text.text-accent-2{color:#e040fb !important}.purple.accent-3{background-color:#d500f9 !important}.purple-text.text-accent-3{color:#d500f9 !important}.purple.accent-4{background-color:#a0f !important}.purple-text.text-accent-4{color:#a0f !important}.deep-purple{background-color:#673ab7 !important}.deep-purple-text{color:#673ab7 !important}.deep-purple.lighten-5{background-color:#ede7f6 !important}.deep-purple-text.text-lighten-5{color:#ede7f6 !important}.deep-purple.lighten-4{background-color:#d1c4e9 !important}.deep-purple-text.text-lighten-4{color:#d1c4e9 !important}.deep-purple.lighten-3{background-color:#b39ddb !important}.deep-purple-text.text-lighten-3{color:#b39ddb !important}.deep-purple.lighten-2{background-color:#9575cd !important}.deep-purple-text.text-lighten-2{color:#9575cd !important}.deep-purple.lighten-1{background-color:#7e57c2 !important}.deep-purple-text.text-lighten-1{color:#7e57c2 !important}.deep-purple.darken-1{background-color:#5e35b1 !important}.deep-purple-text.text-darken-1{color:#5e35b1 !important}.deep-purple.darken-2{background-color:#512da8 !important}.deep-purple-text.text-darken-2{color:#512da8 !important}.deep-purple.darken-3{background-color:#4527a0 !important}.deep-purple-text.text-darken-3{color:#4527a0 !important}.deep-purple.darken-4{background-color:#311b92 !important}.deep-purple-text.text-darken-4{color:#311b92 !important}.deep-purple.accent-1{background-color:#b388ff !important}.deep-purple-text.text-accent-1{color:#b388ff !important}.deep-purple.accent-2{background-color:#7c4dff !important}.deep-purple-text.text-accent-2{color:#7c4dff !important}.deep-purple.accent-3{background-color:#651fff !important}.deep-purple-text.text-accent-3{color:#651fff !important}.deep-purple.accent-4{background-color:#6200ea !important}.deep-purple-text.text-accent-4{color:#6200ea !important}.indigo{background-color:#3f51b5 !important}.indigo-text{color:#3f51b5 !important}.indigo.lighten-5{background-color:#e8eaf6 !important}.indigo-text.text-lighten-5{color:#e8eaf6 !important}.indigo.lighten-4{background-color:#c5cae9 !important}.indigo-text.text-lighten-4{color:#c5cae9 !important}.indigo.lighten-3{background-color:#9fa8da !important}.indigo-text.text-lighten-3{color:#9fa8da !important}.indigo.lighten-2{background-color:#7986cb !important}.indigo-text.text-lighten-2{color:#7986cb !important}.indigo.lighten-1{background-color:#5c6bc0 !important}.indigo-text.text-lighten-1{color:#5c6bc0 !important}.indigo.darken-1{background-color:#3949ab !important}.indigo-text.text-darken-1{color:#3949ab !important}.indigo.darken-2{background-color:#303f9f !important}.indigo-text.text-darken-2{color:#303f9f !important}.indigo.darken-3{background-color:#283593 !important}.indigo-text.text-darken-3{color:#283593 !important}.indigo.darken-4{background-color:#1a237e !important}.indigo-text.text-darken-4{color:#1a237e !important}.indigo.accent-1{background-color:#8c9eff !important}.indigo-text.text-accent-1{color:#8c9eff !important}.indigo.accent-2{background-color:#536dfe !important}.indigo-text.text-accent-2{color:#536dfe !important}.indigo.accent-3{background-color:#3d5afe !important}.indigo-text.text-accent-3{color:#3d5afe !important}.indigo.accent-4{background-color:#304ffe !important}.indigo-text.text-accent-4{color:#304ffe !important}.blue{background-color:#2196F3 !important}.blue-text{color:#2196F3 !important}.blue.lighten-5{background-color:#E3F2FD !important}.blue-text.text-lighten-5{color:#E3F2FD !important}.blue.lighten-4{background-color:#BBDEFB !important}.blue-text.text-lighten-4{color:#BBDEFB !important}.blue.lighten-3{background-color:#90CAF9 !important}.blue-text.text-lighten-3{color:#90CAF9 !important}.blue.lighten-2{background-color:#64B5F6 !important}.blue-text.text-lighten-2{color:#64B5F6 !important}.blue.lighten-1{background-color:#42A5F5 !important}.blue-text.text-lighten-1{color:#42A5F5 !important}.blue.darken-1{background-color:#1E88E5 !important}.blue-text.text-darken-1{color:#1E88E5 !important}.blue.darken-2{background-color:#1976D2 !important}.blue-text.text-darken-2{color:#1976D2 !important}.blue.darken-3{background-color:#1565C0 !important}.blue-text.text-darken-3{color:#1565C0 !important}.blue.darken-4{background-color:#0D47A1 !important}.blue-text.text-darken-4{color:#0D47A1 !important}.blue.accent-1{background-color:#82B1FF !important}.blue-text.text-accent-1{color:#82B1FF !important}.blue.accent-2{background-color:#448AFF !important}.blue-text.text-accent-2{color:#448AFF !important}.blue.accent-3{background-color:#2979FF !important}.blue-text.text-accent-3{color:#2979FF !important}.blue.accent-4{background-color:#2962FF !important}.blue-text.text-accent-4{color:#2962FF !important}.light-blue{background-color:#03a9f4 !important}.light-blue-text{color:#03a9f4 !important}.light-blue.lighten-5{background-color:#e1f5fe !important}.light-blue-text.text-lighten-5{color:#e1f5fe !important}.light-blue.lighten-4{background-color:#b3e5fc !important}.light-blue-text.text-lighten-4{color:#b3e5fc !important}.light-blue.lighten-3{background-color:#81d4fa !important}.light-blue-text.text-lighten-3{color:#81d4fa !important}.light-blue.lighten-2{background-color:#4fc3f7 !important}.light-blue-text.text-lighten-2{color:#4fc3f7 !important}.light-blue.lighten-1{background-color:#29b6f6 !important}.light-blue-text.text-lighten-1{color:#29b6f6 !important}.light-blue.darken-1{background-color:#039be5 !important}.light-blue-text.text-darken-1{color:#039be5 !important}.light-blue.darken-2{background-color:#0288d1 !important}.light-blue-text.text-darken-2{color:#0288d1 !important}.light-blue.darken-3{background-color:#0277bd !important}.light-blue-text.text-darken-3{color:#0277bd !important}.light-blue.darken-4{background-color:#01579b !important}.light-blue-text.text-darken-4{color:#01579b !important}.light-blue.accent-1{background-color:#80d8ff !important}.light-blue-text.text-accent-1{color:#80d8ff !important}.light-blue.accent-2{background-color:#40c4ff !important}.light-blue-text.text-accent-2{color:#40c4ff !important}.light-blue.accent-3{background-color:#00b0ff !important}.light-blue-text.text-accent-3{color:#00b0ff !important}.light-blue.accent-4{background-color:#0091ea !important}.light-blue-text.text-accent-4{color:#0091ea !important}.cyan{background-color:#00bcd4 !important}.cyan-text{color:#00bcd4 !important}.cyan.lighten-5{background-color:#e0f7fa !important}.cyan-text.text-lighten-5{color:#e0f7fa !important}.cyan.lighten-4{background-color:#b2ebf2 !important}.cyan-text.text-lighten-4{color:#b2ebf2 !important}.cyan.lighten-3{background-color:#80deea !important}.cyan-text.text-lighten-3{color:#80deea !important}.cyan.lighten-2{background-color:#4dd0e1 !important}.cyan-text.text-lighten-2{color:#4dd0e1 !important}.cyan.lighten-1{background-color:#26c6da !important}.cyan-text.text-lighten-1{color:#26c6da !important}.cyan.darken-1{background-color:#00acc1 !important}.cyan-text.text-darken-1{color:#00acc1 !important}.cyan.darken-2{background-color:#0097a7 !important}.cyan-text.text-darken-2{color:#0097a7 !important}.cyan.darken-3{background-color:#00838f !important}.cyan-text.text-darken-3{color:#00838f !important}.cyan.darken-4{background-color:#006064 !important}.cyan-text.text-darken-4{color:#006064 !important}.cyan.accent-1{background-color:#84ffff !important}.cyan-text.text-accent-1{color:#84ffff !important}.cyan.accent-2{background-color:#18ffff !important}.cyan-text.text-accent-2{color:#18ffff !important}.cyan.accent-3{background-color:#00e5ff !important}.cyan-text.text-accent-3{color:#00e5ff !important}.cyan.accent-4{background-color:#00b8d4 !important}.cyan-text.text-accent-4{color:#00b8d4 !important}.teal{background-color:#009688 !important}.teal-text{color:#009688 !important}.teal.lighten-5{background-color:#e0f2f1 !important}.teal-text.text-lighten-5{color:#e0f2f1 !important}.teal.lighten-4{background-color:#b2dfdb !important}.teal-text.text-lighten-4{color:#b2dfdb !important}.teal.lighten-3{background-color:#80cbc4 !important}.teal-text.text-lighten-3{color:#80cbc4 !important}.teal.lighten-2{background-color:#4db6ac !important}.teal-text.text-lighten-2{color:#4db6ac !important}.teal.lighten-1{background-color:#26a69a !important}.teal-text.text-lighten-1{color:#26a69a !important}.teal.darken-1{background-color:#00897b !important}.teal-text.text-darken-1{color:#00897b !important}.teal.darken-2{background-color:#00796b !important}.teal-text.text-darken-2{color:#00796b !important}.teal.darken-3{background-color:#00695c !important}.teal-text.text-darken-3{color:#00695c !important}.teal.darken-4{background-color:#004d40 !important}.teal-text.text-darken-4{color:#004d40 !important}.teal.accent-1{background-color:#a7ffeb !important}.teal-text.text-accent-1{color:#a7ffeb !important}.teal.accent-2{background-color:#64ffda !important}.teal-text.text-accent-2{color:#64ffda !important}.teal.accent-3{background-color:#1de9b6 !important}.teal-text.text-accent-3{color:#1de9b6 !important}.teal.accent-4{background-color:#00bfa5 !important}.teal-text.text-accent-4{color:#00bfa5 !important}.green{background-color:#4CAF50 !important}.green-text{color:#4CAF50 !important}.green.lighten-5{background-color:#E8F5E9 !important}.green-text.text-lighten-5{color:#E8F5E9 !important}.green.lighten-4{background-color:#C8E6C9 !important}.green-text.text-lighten-4{color:#C8E6C9 !important}.green.lighten-3{background-color:#A5D6A7 !important}.green-text.text-lighten-3{color:#A5D6A7 !important}.green.lighten-2{background-color:#81C784 !important}.green-text.text-lighten-2{color:#81C784 !important}.green.lighten-1{background-color:#66BB6A !important}.green-text.text-lighten-1{color:#66BB6A !important}.green.darken-1{background-color:#43A047 !important}.green-text.text-darken-1{color:#43A047 !important}.green.darken-2{background-color:#388E3C !important}.green-text.text-darken-2{color:#388E3C !important}.green.darken-3{background-color:#2E7D32 !important}.green-text.text-darken-3{color:#2E7D32 !important}.green.darken-4{background-color:#1B5E20 !important}.green-text.text-darken-4{color:#1B5E20 !important}.green.accent-1{background-color:#B9F6CA !important}.green-text.text-accent-1{color:#B9F6CA !important}.green.accent-2{background-color:#69F0AE !important}.green-text.text-accent-2{color:#69F0AE !important}.green.accent-3{background-color:#00E676 !important}.green-text.text-accent-3{color:#00E676 !important}.green.accent-4{background-color:#00C853 !important}.green-text.text-accent-4{color:#00C853 !important}.light-green{background-color:#8bc34a !important}.light-green-text{color:#8bc34a !important}.light-green.lighten-5{background-color:#f1f8e9 !important}.light-green-text.text-lighten-5{color:#f1f8e9 !important}.light-green.lighten-4{background-color:#dcedc8 !important}.light-green-text.text-lighten-4{color:#dcedc8 !important}.light-green.lighten-3{background-color:#c5e1a5 !important}.light-green-text.text-lighten-3{color:#c5e1a5 !important}.light-green.lighten-2{background-color:#aed581 !important}.light-green-text.text-lighten-2{color:#aed581 !important}.light-green.lighten-1{background-color:#9ccc65 !important}.light-green-text.text-lighten-1{color:#9ccc65 !important}.light-green.darken-1{background-color:#7cb342 !important}.light-green-text.text-darken-1{color:#7cb342 !important}.light-green.darken-2{background-color:#689f38 !important}.light-green-text.text-darken-2{color:#689f38 !important}.light-green.darken-3{background-color:#558b2f !important}.light-green-text.text-darken-3{color:#558b2f !important}.light-green.darken-4{background-color:#33691e !important}.light-green-text.text-darken-4{color:#33691e !important}.light-green.accent-1{background-color:#ccff90 !important}.light-green-text.text-accent-1{color:#ccff90 !important}.light-green.accent-2{background-color:#b2ff59 !important}.light-green-text.text-accent-2{color:#b2ff59 !important}.light-green.accent-3{background-color:#76ff03 !important}.light-green-text.text-accent-3{color:#76ff03 !important}.light-green.accent-4{background-color:#64dd17 !important}.light-green-text.text-accent-4{color:#64dd17 !important}.lime{background-color:#cddc39 !important}.lime-text{color:#cddc39 !important}.lime.lighten-5{background-color:#f9fbe7 !important}.lime-text.text-lighten-5{color:#f9fbe7 !important}.lime.lighten-4{background-color:#f0f4c3 !important}.lime-text.text-lighten-4{color:#f0f4c3 !important}.lime.lighten-3{background-color:#e6ee9c !important}.lime-text.text-lighten-3{color:#e6ee9c !important}.lime.lighten-2{background-color:#dce775 !important}.lime-text.text-lighten-2{color:#dce775 !important}.lime.lighten-1{background-color:#d4e157 !important}.lime-text.text-lighten-1{color:#d4e157 !important}.lime.darken-1{background-color:#c0ca33 !important}.lime-text.text-darken-1{color:#c0ca33 !important}.lime.darken-2{background-color:#afb42b !important}.lime-text.text-darken-2{color:#afb42b !important}.lime.darken-3{background-color:#9e9d24 !important}.lime-text.text-darken-3{color:#9e9d24 !important}.lime.darken-4{background-color:#827717 !important}.lime-text.text-darken-4{color:#827717 !important}.lime.accent-1{background-color:#f4ff81 !important}.lime-text.text-accent-1{color:#f4ff81 !important}.lime.accent-2{background-color:#eeff41 !important}.lime-text.text-accent-2{color:#eeff41 !important}.lime.accent-3{background-color:#c6ff00 !important}.lime-text.text-accent-3{color:#c6ff00 !important}.lime.accent-4{background-color:#aeea00 !important}.lime-text.text-accent-4{color:#aeea00 !important}.yellow{background-color:#ffeb3b !important}.yellow-text{color:#ffeb3b !important}.yellow.lighten-5{background-color:#fffde7 !important}.yellow-text.text-lighten-5{color:#fffde7 !important}.yellow.lighten-4{background-color:#fff9c4 !important}.yellow-text.text-lighten-4{color:#fff9c4 !important}.yellow.lighten-3{background-color:#fff59d !important}.yellow-text.text-lighten-3{color:#fff59d !important}.yellow.lighten-2{background-color:#fff176 !important}.yellow-text.text-lighten-2{color:#fff176 !important}.yellow.lighten-1{background-color:#ffee58 !important}.yellow-text.text-lighten-1{color:#ffee58 !important}.yellow.darken-1{background-color:#fdd835 !important}.yellow-text.text-darken-1{color:#fdd835 !important}.yellow.darken-2{background-color:#fbc02d !important}.yellow-text.text-darken-2{color:#fbc02d !important}.yellow.darken-3{background-color:#f9a825 !important}.yellow-text.text-darken-3{color:#f9a825 !important}.yellow.darken-4{background-color:#f57f17 !important}.yellow-text.text-darken-4{color:#f57f17 !important}.yellow.accent-1{background-color:#ffff8d !important}.yellow-text.text-accent-1{color:#ffff8d !important}.yellow.accent-2{background-color:#ff0 !important}.yellow-text.text-accent-2{color:#ff0 !important}.yellow.accent-3{background-color:#ffea00 !important}.yellow-text.text-accent-3{color:#ffea00 !important}.yellow.accent-4{background-color:#ffd600 !important}.yellow-text.text-accent-4{color:#ffd600 !important}.amber{background-color:#ffc107 !important}.amber-text{color:#ffc107 !important}.amber.lighten-5{background-color:#fff8e1 !important}.amber-text.text-lighten-5{color:#fff8e1 !important}.amber.lighten-4{background-color:#ffecb3 !important}.amber-text.text-lighten-4{color:#ffecb3 !important}.amber.lighten-3{background-color:#ffe082 !important}.amber-text.text-lighten-3{color:#ffe082 !important}.amber.lighten-2{background-color:#ffd54f !important}.amber-text.text-lighten-2{color:#ffd54f !important}.amber.lighten-1{background-color:#ffca28 !important}.amber-text.text-lighten-1{color:#ffca28 !important}.amber.darken-1{background-color:#ffb300 !important}.amber-text.text-darken-1{color:#ffb300 !important}.amber.darken-2{background-color:#ffa000 !important}.amber-text.text-darken-2{color:#ffa000 !important}.amber.darken-3{background-color:#ff8f00 !important}.amber-text.text-darken-3{color:#ff8f00 !important}.amber.darken-4{background-color:#ff6f00 !important}.amber-text.text-darken-4{color:#ff6f00 !important}.amber.accent-1{background-color:#ffe57f !important}.amber-text.text-accent-1{color:#ffe57f !important}.amber.accent-2{background-color:#ffd740 !important}.amber-text.text-accent-2{color:#ffd740 !important}.amber.accent-3{background-color:#ffc400 !important}.amber-text.text-accent-3{color:#ffc400 !important}.amber.accent-4{background-color:#ffab00 !important}.amber-text.text-accent-4{color:#ffab00 !important}.orange{background-color:#ff9800 !important}.orange-text{color:#ff9800 !important}.orange.lighten-5{background-color:#fff3e0 !important}.orange-text.text-lighten-5{color:#fff3e0 !important}.orange.lighten-4{background-color:#ffe0b2 !important}.orange-text.text-lighten-4{color:#ffe0b2 !important}.orange.lighten-3{background-color:#ffcc80 !important}.orange-text.text-lighten-3{color:#ffcc80 !important}.orange.lighten-2{background-color:#ffb74d !important}.orange-text.text-lighten-2{color:#ffb74d !important}.orange.lighten-1{background-color:#ffa726 !important}.orange-text.text-lighten-1{color:#ffa726 !important}.orange.darken-1{background-color:#fb8c00 !important}.orange-text.text-darken-1{color:#fb8c00 !important}.orange.darken-2{background-color:#f57c00 !important}.orange-text.text-darken-2{color:#f57c00 !important}.orange.darken-3{background-color:#ef6c00 !important}.orange-text.text-darken-3{color:#ef6c00 !important}.orange.darken-4{background-color:#e65100 !important}.orange-text.text-darken-4{color:#e65100 !important}.orange.accent-1{background-color:#ffd180 !important}.orange-text.text-accent-1{color:#ffd180 !important}.orange.accent-2{background-color:#ffab40 !important}.orange-text.text-accent-2{color:#ffab40 !important}.orange.accent-3{background-color:#ff9100 !important}.orange-text.text-accent-3{color:#ff9100 !important}.orange.accent-4{background-color:#ff6d00 !important}.orange-text.text-accent-4{color:#ff6d00 !important}.deep-orange{background-color:#ff5722 !important}.deep-orange-text{color:#ff5722 !important}.deep-orange.lighten-5{background-color:#fbe9e7 !important}.deep-orange-text.text-lighten-5{color:#fbe9e7 !important}.deep-orange.lighten-4{background-color:#ffccbc !important}.deep-orange-text.text-lighten-4{color:#ffccbc !important}.deep-orange.lighten-3{background-color:#ffab91 !important}.deep-orange-text.text-lighten-3{color:#ffab91 !important}.deep-orange.lighten-2{background-color:#ff8a65 !important}.deep-orange-text.text-lighten-2{color:#ff8a65 !important}.deep-orange.lighten-1{background-color:#ff7043 !important}.deep-orange-text.text-lighten-1{color:#ff7043 !important}.deep-orange.darken-1{background-color:#f4511e !important}.deep-orange-text.text-darken-1{color:#f4511e !important}.deep-orange.darken-2{background-color:#e64a19 !important}.deep-orange-text.text-darken-2{color:#e64a19 !important}.deep-orange.darken-3{background-color:#d84315 !important}.deep-orange-text.text-darken-3{color:#d84315 !important}.deep-orange.darken-4{background-color:#bf360c !important}.deep-orange-text.text-darken-4{color:#bf360c !important}.deep-orange.accent-1{background-color:#ff9e80 !important}.deep-orange-text.text-accent-1{color:#ff9e80 !important}.deep-orange.accent-2{background-color:#ff6e40 !important}.deep-orange-text.text-accent-2{color:#ff6e40 !important}.deep-orange.accent-3{background-color:#ff3d00 !important}.deep-orange-text.text-accent-3{color:#ff3d00 !important}.deep-orange.accent-4{background-color:#dd2c00 !important}.deep-orange-text.text-accent-4{color:#dd2c00 !important}.brown{background-color:#795548 !important}.brown-text{color:#795548 !important}.brown.lighten-5{background-color:#efebe9 !important}.brown-text.text-lighten-5{color:#efebe9 !important}.brown.lighten-4{background-color:#d7ccc8 !important}.brown-text.text-lighten-4{color:#d7ccc8 !important}.brown.lighten-3{background-color:#bcaaa4 !important}.brown-text.text-lighten-3{color:#bcaaa4 !important}.brown.lighten-2{background-color:#a1887f !important}.brown-text.text-lighten-2{color:#a1887f !important}.brown.lighten-1{background-color:#8d6e63 !important}.brown-text.text-lighten-1{color:#8d6e63 !important}.brown.darken-1{background-color:#6d4c41 !important}.brown-text.text-darken-1{color:#6d4c41 !important}.brown.darken-2{background-color:#5d4037 !important}.brown-text.text-darken-2{color:#5d4037 !important}.brown.darken-3{background-color:#4e342e !important}.brown-text.text-darken-3{color:#4e342e !important}.brown.darken-4{background-color:#3e2723 !important}.brown-text.text-darken-4{color:#3e2723 !important}.blue-grey{background-color:#607d8b !important}.blue-grey-text{color:#607d8b !important}.blue-grey.lighten-5{background-color:#eceff1 !important}.blue-grey-text.text-lighten-5{color:#eceff1 !important}.blue-grey.lighten-4{background-color:#cfd8dc !important}.blue-grey-text.text-lighten-4{color:#cfd8dc !important}.blue-grey.lighten-3{background-color:#b0bec5 !important}.blue-grey-text.text-lighten-3{color:#b0bec5 !important}.blue-grey.lighten-2{background-color:#90a4ae !important}.blue-grey-text.text-lighten-2{color:#90a4ae !important}.blue-grey.lighten-1{background-color:#78909c !important}.blue-grey-text.text-lighten-1{color:#78909c !important}.blue-grey.darken-1{background-color:#546e7a !important}.blue-grey-text.text-darken-1{color:#546e7a !important}.blue-grey.darken-2{background-color:#455a64 !important}.blue-grey-text.text-darken-2{color:#455a64 !important}.blue-grey.darken-3{background-color:#37474f !important}.blue-grey-text.text-darken-3{color:#37474f !important}.blue-grey.darken-4{background-color:#263238 !important}.blue-grey-text.text-darken-4{color:#263238 !important}.grey{background-color:#9e9e9e !important}.grey-text{color:#9e9e9e !important}.grey.lighten-5{background-color:#fafafa !important}.grey-text.text-lighten-5{color:#fafafa !important}.grey.lighten-4{background-color:#f5f5f5 !important}.grey-text.text-lighten-4{color:#f5f5f5 !important}.grey.lighten-3{background-color:#eee !important}.grey-text.text-lighten-3{color:#eee !important}.grey.lighten-2{background-color:#e0e0e0 !important}.grey-text.text-lighten-2{color:#e0e0e0 !important}.grey.lighten-1{background-color:#bdbdbd !important}.grey-text.text-lighten-1{color:#bdbdbd !important}.grey.darken-1{background-color:#757575 !important}.grey-text.text-darken-1{color:#757575 !important}.grey.darken-2{background-color:#616161 !important}.grey-text.text-darken-2{color:#616161 !important}.grey.darken-3{background-color:#424242 !important}.grey-text.text-darken-3{color:#424242 !important}.grey.darken-4{background-color:#212121 !important}.grey-text.text-darken-4{color:#212121 !important}.black{background-color:#000 !important}.black-text{color:#000 !important}.white{background-color:#fff !important}.white-text{color:#fff !important}.transparent{background-color:transparent !important}.transparent-text{color:transparent !important}/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default) li{list-style-type:none}a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.valign-wrapper .valign{display:block}.clearfix{clear:both}.z-depth-0{box-shadow:none !important}.z-depth-1,nav,.card-panel,.card,.toast,.btn,.btn-large,.btn-floating,.dropdown-content,.collapsible,.side-nav{box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)}.z-depth-1-half,.btn:hover,.btn-large:hover,.btn-floating:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)}.z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)}.z-depth-3{box-shadow:0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.3)}.z-depth-4,.modal{box-shadow:0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.3)}.z-depth-5{box-shadow:0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.3)}.hoverable{transition:box-shadow .25s;box-shadow:0}.hoverable:hover{transition:box-shadow .25s;box-shadow:0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width: 992px){.pagination{width:100%}.pagination li.prev,.pagination li.next{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:rgba(255,255,255,0.7)}.breadcrumb i,.breadcrumb [class^=\"mdi-\"],.breadcrumb [class*=\"mdi-\"],.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:'\\E5CC';color:rgba(255,255,255,0.7);vertical-align:top;display:inline-block;font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax img{display:none;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transform:translateX(-50%);transform:translateX(-50%)}.pin-top,.pin-bottom{position:relative}.pinned{position:fixed !important}ul.staggered-list li{opacity:0}.fade-in{opacity:0;-webkit-transform-origin:0 50%;transform-origin:0 50%}@media only screen and (max-width: 600px){.hide-on-small-only,.hide-on-small-and-down{display:none !important}}@media only screen and (max-width: 992px){.hide-on-med-and-down{display:none !important}}@media only screen and (min-width: 601px){.hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.hide-on-med-only{display:none !important}}@media only screen and (min-width: 993px){.hide-on-large-only{display:none !important}}@media only screen and (min-width: 993px){.show-on-large{display:block !important}}@media only screen and (min-width: 600px) and (max-width: 992px){.show-on-medium{display:block !important}}@media only screen and (max-width: 600px){.show-on-small{display:block !important}}@media only screen and (min-width: 601px){.show-on-medium-and-up{display:block !important}}@media only screen and (max-width: 992px){.show-on-medium-and-down{display:block !important}}@media only screen and (max-width: 600px){.center-on-small-only{text-align:center}}footer.page-footer{margin-top:20px;padding-top:20px;background-color:#ee6e73}footer.page-footer .footer-copyright{overflow:hidden;height:50px;line-height:50px;color:rgba(255,255,255,0.8);background-color:rgba(51,51,51,0.08)}table,th,td{border:none}table{width:100%;display:table}table.bordered>thead>tr,table.bordered>tbody>tr{border-bottom:1px solid #d0d0d0}table.striped>tbody>tr:nth-child(odd){background-color:#f2f2f2}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:#f2f2f2}table.centered thead tr th,table.centered tbody tr td{text-align:center}thead{border-bottom:1px solid #d0d0d0}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width: 992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:'\\A0'}table.responsive-table th,table.responsive-table td{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th::before{content:\"\\A0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid #d0d0d0}table.responsive-table.bordered th{border-bottom:0;border-left:0}table.responsive-table.bordered td{border-left:0;border-right:0;border-bottom:0}table.responsive-table.bordered tr{border:0}table.responsive-table.bordered tbody tr{border-right:1px solid #d0d0d0}}.collection{margin:0.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar .circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:inherit;color:#757575;float:right;box-sizing:border-box}span.badge.new{font-weight:300;font-size:0.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]::after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px}.side-nav span.badge.new,.collapsible span.badge.new{position:relative;background-color:transparent}.side-nav span.badge.new::before,.collapsible span.badge.new::before{content:'';position:absolute;top:10px;right:0;bottom:10px;left:0;background-color:#26a69a;border-radius:2px;z-index:-1}.collapsible span.badge.new{z-index:1}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container iframe,.video-container object,.video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:0.5rem 0 1rem 0;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;transition:width .3s linear}.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.progress .indeterminate:after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.hide{display:none !important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left !important}.right{float:right !important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0 !important}.material-icons{text-rendering:optimizeLegibility;-webkit-font-feature-settings:'liga';-moz-font-feature-settings:'liga';font-feature-settings:'liga'}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width: 601px){.container{width:85%}}@media only screen and (min-width: 993px){.container{width:70%}}.container .row{margin-left:-0.75rem;margin-right:-0.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 0.75rem;min-height:1px}.row .col[class*=\"push-\"],.row .col[class*=\"pull-\"]{position:relative}.row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width: 601px){.row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width: 993px){.row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}.row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}.row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{height:auto}nav a{color:#fff}nav i,nav [class^=\"mdi-\"],nav [class*=\"mdi-\"],nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width: 993px){nav a.button-collapse{display:none}}nav .button-collapse{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .button-collapse i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0;white-space:nowrap}nav .brand-logo.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media only screen and (max-width: 992px){nav .brand-logo{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;-webkit-transform:none;transform:none}nav .brand-logo.left{left:0.5rem}nav .brand-logo.right{right:0.5rem;left:auto}}nav .brand-logo.right{right:0.5rem;padding:0}nav .brand-logo i,nav .brand-logo [class^=\"mdi-\"],nav .brand-logo [class*=\"mdi-\"],nav .brand-logo i.material-icons{float:left;margin-right:15px}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,0.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-large,nav ul a.btn-large,nav ul a.btn-flat,nav ul a.btn-floating{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a:hover{background-color:rgba(0,0,0,0.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=text]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=url]:valid,nav .input-field input[type=date]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:rgba(255,255,255,0.7);transition:color .3s}nav .input-field label.active i{color:#fff}nav .input-field label.active{-webkit-transform:translateY(0);transform:translateY(0)}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width: 601px){nav,nav .nav-wrapper i,nav a.button-collapse,nav a.button-collapse i{height:64px;line-height:64px}.navbar-fixed{height:64px}}@font-face{font-family:\"Roboto\";src:local(Roboto Thin),url(" + __webpack_require__(9) + ");src:url(" + __webpack_require__(9) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(10) + ") format(\"woff2\"),url(" + __webpack_require__(11) + ") format(\"woff\"),url(" + __webpack_require__(12) + ") format(\"truetype\");font-weight:200}@font-face{font-family:\"Roboto\";src:local(Roboto Light),url(" + __webpack_require__(13) + ");src:url(" + __webpack_require__(13) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(14) + ") format(\"woff2\"),url(" + __webpack_require__(15) + ") format(\"woff\"),url(" + __webpack_require__(16) + ") format(\"truetype\");font-weight:300}@font-face{font-family:\"Roboto\";src:local(Roboto Regular),url(" + __webpack_require__(17) + ");src:url(" + __webpack_require__(17) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(18) + ") format(\"woff2\"),url(" + __webpack_require__(19) + ") format(\"woff\"),url(" + __webpack_require__(20) + ") format(\"truetype\");font-weight:400}@font-face{font-family:\"Roboto\";src:url(" + __webpack_require__(21) + ");src:url(" + __webpack_require__(21) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(22) + ") format(\"woff2\"),url(" + __webpack_require__(23) + ") format(\"woff\"),url(" + __webpack_require__(24) + ") format(\"truetype\");font-weight:500}@font-face{font-family:\"Roboto\";src:url(" + __webpack_require__(25) + ");src:url(" + __webpack_require__(25) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(26) + ") format(\"woff2\"),url(" + __webpack_require__(27) + ") format(\"woff\"),url(" + __webpack_require__(28) + ") format(\"truetype\");font-weight:700}a{text-decoration:none}html{line-height:1.5;font-family:\"Roboto\", sans-serif;font-weight:normal;color:rgba(0,0,0,0.87)}@media only screen and (min-width: 0){html{font-size:14px}}@media only screen and (min-width: 992px){html{font-size:14.5px}}@media only screen and (min-width: 1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.1}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;line-height:110%;margin:2.1rem 0 1.68rem 0}h2{font-size:3.56rem;line-height:110%;margin:1.78rem 0 1.424rem 0}h3{font-size:2.92rem;line-height:110%;margin:1.46rem 0 1.168rem 0}h4{font-size:2.28rem;line-height:110%;margin:1.14rem 0 0.912rem 0}h5{font-size:1.64rem;line-height:110%;margin:0.82rem 0 0.656rem 0}h6{font-size:1rem;line-height:110%;margin:0.5rem 0 0.4rem 0}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light,footer.page-footer .footer-copyright{font-weight:300}.thin{font-weight:200}.flow-text{font-weight:300}@media only screen and (min-width: 360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){.flow-text{font-size:1.2rem}}.card-panel{transition:box-shadow .25s;padding:20px;margin:0.5rem 0 1rem 0;border-radius:2px;background-color:#fff}.card{position:relative;margin:0.5rem 0 1rem 0;background-color:#fff;transition:box-shadow .25s;border-radius:2px}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.small,.card.medium,.card.large{position:relative}.card.small .card-image,.card.medium .card-image,.card.large .card-image{max-height:60%;overflow:hidden}.card.small .card-image+.card-content,.card.medium .card-image+.card-content,.card.large .card-image+.card-content{max-height:40%}.card.small .card-content,.card.medium .card-content,.card.large .card-content{max-height:100%;overflow:hidden}.card.small .card-action,.card.medium .card-action,.card.large .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:-webkit-flex;display:-ms-flexbox;display:flex}.card.horizontal.small .card-image,.card.horizontal.medium .card-image,.card.horizontal.large .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.small .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.large .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.card.horizontal .card-stacked .card-content{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;padding:20px}.card .card-content{padding:20px;border-radius:0 0 2px 2px}.card .card-content p{margin:0;color:inherit}.card .card-content .card-title{line-height:48px}.card .card-action{position:relative;background-color:inherit;border-top:1px solid rgba(160,160,160,0.2);padding:20px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:20px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:20px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width: 600px){#toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width: 601px) and (max-width: 992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width: 993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:0;width:auto;clear:both;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;word-break:break-all;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.toast .btn,.toast .btn-large,.toast .btn-flat{margin:0;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width: 600px){.toast{width:100%;border-radius:0}}@media only screen and (min-width: 601px) and (max-width: 992px){.toast{float:left}}@media only screen and (min-width: 993px){.toast{float:right}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab a,.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover{color:rgba(255,255,255,0.7)}.tabs.tabs-transparent .tab a:hover,.tabs.tabs-transparent .tab a.active{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs.tabs-fixed-width .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,0.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease}.tabs .tab a:hover,.tabs .tab a.active{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,0.7);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left, right}@media only screen and (max-width: 992px){.tabs{display:-webkit-flex;display:-ms-flexbox;display:flex}.tabs .tab{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;display:none;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none}.backdrop{position:absolute;opacity:0;display:none;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.btn,.btn-large,.btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 2rem;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn.disabled,.disabled.btn-large,.btn-floating.disabled,.btn-large.disabled,.btn-flat.disabled,.btn:disabled,.btn-large:disabled,.btn-floating:disabled,.btn-large:disabled,.btn-flat:disabled,.btn[disabled],[disabled].btn-large,.btn-floating[disabled],.btn-large[disabled],.btn-flat[disabled]{pointer-events:none;background-color:#DFDFDF !important;box-shadow:none;color:#9F9F9F !important;cursor:default}.btn.disabled:hover,.disabled.btn-large:hover,.btn-floating.disabled:hover,.btn-large.disabled:hover,.btn-flat.disabled:hover,.btn:disabled:hover,.btn-large:disabled:hover,.btn-floating:disabled:hover,.btn-large:disabled:hover,.btn-flat:disabled:hover,.btn[disabled]:hover,[disabled].btn-large:hover,.btn-floating[disabled]:hover,.btn-large[disabled]:hover,.btn-flat[disabled]:hover{background-color:#DFDFDF !important;color:#9F9F9F !important}.btn,.btn-large,.btn-floating,.btn-large,.btn-flat{outline:0}.btn i,.btn-large i,.btn-floating i,.btn-large i,.btn-flat i{font-size:1.3rem;line-height:inherit}.btn:focus,.btn-large:focus,.btn-floating:focus{background-color:#1d7d74}.btn,.btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:.2s ease-out;cursor:pointer}.btn:hover,.btn-large:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;transition:.3s;cursor:pointer;vertical-align:middle}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px}.btn-floating.btn-large i{line-height:56px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:998}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.horizontal{padding:0 0 0 15px}.fixed-action-btn.horizontal ul{text-align:right;right:64px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.horizontal ul li{display:inline-block;margin:15px 15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;bottom:0}.fixed-action-btn.toolbar ul li{-webkit-flex:1;-ms-flex:1;flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat:focus,.btn-flat:active{background-color:transparent}.btn-flat:focus,.btn-flat:hover{background-color:rgba(0,0,0,0.1);box-shadow:none}.btn-flat:active{background-color:rgba(0,0,0,0.2)}.btn-flat.disabled{background-color:transparent !important;color:#b3b3b3 !important;cursor:default}.btn-large{height:54px;line-height:54px}.btn-large i{font-size:1.6rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;max-height:650px;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width, height}.dropdown-content li{clear:both;color:rgba(0,0,0,0.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left;text-transform:none}.dropdown-content li:hover,.dropdown-content li.active,.dropdown-content li.selected{background-color:#eee}.dropdown-content li.active.selected{background-color:#e1e1e1}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit}.input-field.col .dropdown-content [type=\"checkbox\"]+label{top:1px;left:0;height:18px}/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */.waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;will-change:opacity, transform;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,0.2);transition:all 0.7s ease-out;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;-webkit-transform:scale(0);transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,0.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,0.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,0.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,0.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,0.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,0.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,0.7)}.waves-effect input[type=\"button\"],.waves-effect input[type=\"reset\"],.waves-effect input[type=\"submit\"]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{transition:none !important}.waves-circle{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, #fff 100%, #000 100%)}.waves-input-wrapper{border-radius:0.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top, opacity}@media only screen and (max-width: 992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%}.modal .modal-footer .btn,.modal .modal-footer .btn-large,.modal .modal-footer .btn-flat{float:right;margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-100px;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,0.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom, opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:0.5rem 0 1rem 0}.collapsible-header{display:block;cursor:pointer;min-height:3rem;line-height:3rem;padding:0 1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header i{width:2rem;font-size:1.6rem;line-height:3rem;display:block;float:left;text-align:center;margin-right:1rem}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box}.collapsible-body p{margin:0;padding:2rem}.side-nav .collapsible,.side-nav.fixed .collapsible{border:none;box-shadow:none}.side-nav .collapsible li,.side-nav.fixed .collapsible li{padding:0}.side-nav .collapsible-header,.side-nav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.side-nav .collapsible-header:hover,.side-nav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,0.05)}.side-nav .collapsible-header i,.side-nav.fixed .collapsible-header i{line-height:inherit}.side-nav .collapsible-body,.side-nav.fixed .collapsible-body{border:0;background-color:#fff}.side-nav .collapsible-body li a,.side-nav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);margin:0 24px;transition:margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,0.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin:0 0 20px 0;min-height:45px;outline:none;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .chip.selected{background-color:#26a69a;color:#fff}.chips .input{background:none;border:0;color:rgba(0,0,0,0.6);display:inline-block;font-size:1rem;height:3rem;line-height:32px;outline:0;margin:0;padding:0 !important;width:120px !important}.chips .input:focus{border:0 !important;box-shadow:none !important}.prefix ~ .chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty ~ label{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.materialboxed{display:block;cursor:-webkit-zoom-in;cursor:zoom-in;position:relative;transition:opacity .4s}.materialboxed:hover{will-change:left, top, width, height}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:-webkit-zoom-out;cursor:zoom-out}#materialbox-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#292929;z-index:1000;will-change:opacity}.materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:0.8rem;color:#9e9e9e}::-webkit-input-placeholder{color:#d1d1d1}:-moz-placeholder{color:#d1d1d1}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}input:not([type]),input[type=text],input[type=password],input[type=email],input[type=url],input[type=time],input[type=date],input[type=datetime],input[type=datetime-local],input[type=tel],input[type=number],input[type=search],textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}input:not([type]):disabled,input:not([type])[readonly=\"readonly\"],input[type=text]:disabled,input[type=text][readonly=\"readonly\"],input[type=password]:disabled,input[type=password][readonly=\"readonly\"],input[type=email]:disabled,input[type=email][readonly=\"readonly\"],input[type=url]:disabled,input[type=url][readonly=\"readonly\"],input[type=time]:disabled,input[type=time][readonly=\"readonly\"],input[type=date]:disabled,input[type=date][readonly=\"readonly\"],input[type=datetime]:disabled,input[type=datetime][readonly=\"readonly\"],input[type=datetime-local]:disabled,input[type=datetime-local][readonly=\"readonly\"],input[type=tel]:disabled,input[type=tel][readonly=\"readonly\"],input[type=number]:disabled,input[type=number][readonly=\"readonly\"],input[type=search]:disabled,input[type=search][readonly=\"readonly\"],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=\"readonly\"]{color:rgba(0,0,0,0.26);border-bottom:1px dotted rgba(0,0,0,0.26)}input:not([type]):disabled+label,input:not([type])[readonly=\"readonly\"]+label,input[type=text]:disabled+label,input[type=text][readonly=\"readonly\"]+label,input[type=password]:disabled+label,input[type=password][readonly=\"readonly\"]+label,input[type=email]:disabled+label,input[type=email][readonly=\"readonly\"]+label,input[type=url]:disabled+label,input[type=url][readonly=\"readonly\"]+label,input[type=time]:disabled+label,input[type=time][readonly=\"readonly\"]+label,input[type=date]:disabled+label,input[type=date][readonly=\"readonly\"]+label,input[type=datetime]:disabled+label,input[type=datetime][readonly=\"readonly\"]+label,input[type=datetime-local]:disabled+label,input[type=datetime-local][readonly=\"readonly\"]+label,input[type=tel]:disabled+label,input[type=tel][readonly=\"readonly\"]+label,input[type=number]:disabled+label,input[type=number][readonly=\"readonly\"]+label,input[type=search]:disabled+label,input[type=search][readonly=\"readonly\"]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=\"readonly\"]+label{color:rgba(0,0,0,0.26)}input:not([type]):focus:not([readonly]),input[type=text]:focus:not([readonly]),input[type=password]:focus:not([readonly]),input[type=email]:focus:not([readonly]),input[type=url]:focus:not([readonly]),input[type=time]:focus:not([readonly]),input[type=date]:focus:not([readonly]),input[type=datetime]:focus:not([readonly]),input[type=datetime-local]:focus:not([readonly]),input[type=tel]:focus:not([readonly]),input[type=number]:focus:not([readonly]),input[type=search]:focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=text]:focus:not([readonly])+label,input[type=password]:focus:not([readonly])+label,input[type=email]:focus:not([readonly])+label,input[type=url]:focus:not([readonly])+label,input[type=time]:focus:not([readonly])+label,input[type=date]:focus:not([readonly])+label,input[type=datetime]:focus:not([readonly])+label,input[type=datetime-local]:focus:not([readonly])+label,input[type=tel]:focus:not([readonly])+label,input[type=number]:focus:not([readonly])+label,input[type=search]:focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]).valid,input:not([type]):focus.valid,input[type=text].valid,input[type=text]:focus.valid,input[type=password].valid,input[type=password]:focus.valid,input[type=email].valid,input[type=email]:focus.valid,input[type=url].valid,input[type=url]:focus.valid,input[type=time].valid,input[type=time]:focus.valid,input[type=date].valid,input[type=date]:focus.valid,input[type=datetime].valid,input[type=datetime]:focus.valid,input[type=datetime-local].valid,input[type=datetime-local]:focus.valid,input[type=tel].valid,input[type=tel]:focus.valid,input[type=number].valid,input[type=number]:focus.valid,input[type=search].valid,input[type=search]:focus.valid,textarea.materialize-textarea.valid,textarea.materialize-textarea:focus.valid{border-bottom:1px solid #4CAF50;box-shadow:0 1px 0 0 #4CAF50}input:not([type]).valid+label:after,input:not([type]):focus.valid+label:after,input[type=text].valid+label:after,input[type=text]:focus.valid+label:after,input[type=password].valid+label:after,input[type=password]:focus.valid+label:after,input[type=email].valid+label:after,input[type=email]:focus.valid+label:after,input[type=url].valid+label:after,input[type=url]:focus.valid+label:after,input[type=time].valid+label:after,input[type=time]:focus.valid+label:after,input[type=date].valid+label:after,input[type=date]:focus.valid+label:after,input[type=datetime].valid+label:after,input[type=datetime]:focus.valid+label:after,input[type=datetime-local].valid+label:after,input[type=datetime-local]:focus.valid+label:after,input[type=tel].valid+label:after,input[type=tel]:focus.valid+label:after,input[type=number].valid+label:after,input[type=number]:focus.valid+label:after,input[type=search].valid+label:after,input[type=search]:focus.valid+label:after,textarea.materialize-textarea.valid+label:after,textarea.materialize-textarea:focus.valid+label:after{content:attr(data-success);color:#4CAF50;opacity:1}input:not([type]).invalid,input:not([type]):focus.invalid,input[type=text].invalid,input[type=text]:focus.invalid,input[type=password].invalid,input[type=password]:focus.invalid,input[type=email].invalid,input[type=email]:focus.invalid,input[type=url].invalid,input[type=url]:focus.invalid,input[type=time].invalid,input[type=time]:focus.invalid,input[type=date].invalid,input[type=date]:focus.invalid,input[type=datetime].invalid,input[type=datetime]:focus.invalid,input[type=datetime-local].invalid,input[type=datetime-local]:focus.invalid,input[type=tel].invalid,input[type=tel]:focus.invalid,input[type=number].invalid,input[type=number]:focus.invalid,input[type=search].invalid,input[type=search]:focus.invalid,textarea.materialize-textarea.invalid,textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #F44336;box-shadow:0 1px 0 0 #F44336}input:not([type]).invalid+label:after,input:not([type]):focus.invalid+label:after,input[type=text].invalid+label:after,input[type=text]:focus.invalid+label:after,input[type=password].invalid+label:after,input[type=password]:focus.invalid+label:after,input[type=email].invalid+label:after,input[type=email]:focus.invalid+label:after,input[type=url].invalid+label:after,input[type=url]:focus.invalid+label:after,input[type=time].invalid+label:after,input[type=time]:focus.invalid+label:after,input[type=date].invalid+label:after,input[type=date]:focus.invalid+label:after,input[type=datetime].invalid+label:after,input[type=datetime]:focus.invalid+label:after,input[type=datetime-local].invalid+label:after,input[type=datetime-local]:focus.invalid+label:after,input[type=tel].invalid+label:after,input[type=tel]:focus.invalid+label:after,input[type=number].invalid+label:after,input[type=number]:focus.invalid+label:after,input[type=search].invalid+label:after,input[type=search]:focus.invalid+label:after,textarea.materialize-textarea.invalid+label:after,textarea.materialize-textarea:focus.invalid+label:after{content:attr(data-error);color:#F44336;opacity:1}input:not([type]).validate+label,input[type=text].validate+label,input[type=password].validate+label,input[type=email].validate+label,input[type=url].validate+label,input[type=time].validate+label,input[type=date].validate+label,input[type=datetime].validate+label,input[type=datetime-local].validate+label,input[type=tel].validate+label,input[type=number].validate+label,input[type=search].validate+label,textarea.materialize-textarea.validate+label{width:100%;pointer-events:none}input:not([type])+label:after,input[type=text]+label:after,input[type=password]+label:after,input[type=email]+label:after,input[type=url]+label:after,input[type=time]+label:after,input[type=date]+label:after,input[type=datetime]+label:after,input[type=datetime-local]+label:after,input[type=tel]+label:after,input[type=number]+label:after,input[type=search]+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:60px;opacity:0;transition:.2s opacity ease-out, .2s color ease-out}.input-field{position:relative;margin-top:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline input,.input-field.inline .select-dropdown{margin-bottom:1rem}.input-field.col label{left:0.75rem}.input-field.col .prefix ~ label,.input-field.col .prefix ~ .validate ~ label{width:calc(100% - 3rem - 1.5rem)}.input-field label{color:#9e9e9e;position:absolute;top:0.8rem;left:0;font-size:1rem;cursor:text;transition:.2s ease-out}.input-field label.active{font-size:0.8rem;-webkit-transform:translateY(-140%);transform:translateY(-140%)}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s}.input-field .prefix.active{color:#26a69a}.input-field .prefix ~ input,.input-field .prefix ~ textarea,.input-field .prefix ~ label,.input-field .prefix ~ .validate ~ label,.input-field .prefix ~ .autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix ~ label{margin-left:3rem}@media only screen and (max-width: 992px){.input-field .prefix ~ input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width: 600px){.input-field .prefix ~ input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;padding-left:4rem;width:calc(100% - 4rem)}.input-field input[type=search]:focus{background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus+label i,.input-field input[type=search]:focus ~ .mdi-navigation-close,.input-field input[type=search]:focus ~ .material-icons{color:#444}.input-field input[type=search]+label{left:1rem}.input-field input[type=search] ~ .mdi-navigation-close,.input-field input[type=search] ~ .material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{overflow-y:hidden;padding:.8rem 0 1.6rem 0;resize:none;min-height:3rem}.hiddendiv{display:none;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem}.autocomplete-content{margin-top:-15px;display:block;opacity:1;position:static}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}[type=\"radio\"]:not(:checked),[type=\"radio\"]:checked{position:absolute;left:-9999px;opacity:0}[type=\"radio\"]:not(:checked)+label,[type=\"radio\"]:checked+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=\"radio\"]+label:before,[type=\"radio\"]+label:after{content:'';position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after,[type=\"radio\"]:checked+label:before,[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border-radius:50%}[type=\"radio\"]:not(:checked)+label:before,[type=\"radio\"]:not(:checked)+label:after{border:2px solid #5a5a5a}[type=\"radio\"]:not(:checked)+label:after{-webkit-transform:scale(0);transform:scale(0)}[type=\"radio\"]:checked+label:before{border:2px solid transparent}[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:before,[type=\"radio\"].with-gap:checked+label:after{border:2px solid #26a69a}[type=\"radio\"]:checked+label:after,[type=\"radio\"].with-gap:checked+label:after{background-color:#26a69a}[type=\"radio\"]:checked+label:after{-webkit-transform:scale(1.02);transform:scale(1.02)}[type=\"radio\"].with-gap:checked+label:after{-webkit-transform:scale(0.5);transform:scale(0.5)}[type=\"radio\"].tabbed:focus+label:before{box-shadow:0 0 0 10px rgba(0,0,0,0.1)}[type=\"radio\"].with-gap:disabled:checked+label:before{border:2px solid rgba(0,0,0,0.26)}[type=\"radio\"].with-gap:disabled:checked+label:after{border:none;background-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before,[type=\"radio\"]:disabled:checked+label:before{background-color:transparent;border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled+label{color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:not(:checked)+label:before{border-color:rgba(0,0,0,0.26)}[type=\"radio\"]:disabled:checked+label:after{background-color:rgba(0,0,0,0.26);border-color:#BDBDBD}form p{margin-bottom:10px;text-align:left}form p:last-child{margin-bottom:0}[type=\"checkbox\"]:not(:checked),[type=\"checkbox\"]:checked{position:absolute;left:-9999px;opacity:0}[type=\"checkbox\"]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}[type=\"checkbox\"]+label:before,[type=\"checkbox\"]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:2px;transition:.2s}[type=\"checkbox\"]:not(.filled-in)+label:after{border:0;-webkit-transform:scale(0);transform:scale(0)}[type=\"checkbox\"]:not(:checked):disabled+label:before{border:none;background-color:rgba(0,0,0,0.26)}[type=\"checkbox\"].tabbed:focus+label:after{-webkit-transform:scale(1);transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,0.1);background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"]:checked+label:before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:checked:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);border-bottom:2px solid rgba(0,0,0,0.26)}[type=\"checkbox\"]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,0.26);background-color:transparent}[type=\"checkbox\"].filled-in+label:after{border-radius:2px}[type=\"checkbox\"].filled-in+label:before,[type=\"checkbox\"].filled-in+label:after{content:'';left:0;position:absolute;transition:border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;z-index:1}[type=\"checkbox\"].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:20% 40%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}[type=\"checkbox\"].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}[type=\"checkbox\"].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=\"checkbox\"].filled-in.tabbed:focus+label:after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,0.1)}[type=\"checkbox\"].filled-in.tabbed:checked:focus+label:after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:before{background-color:transparent;border:2px solid transparent}[type=\"checkbox\"].filled-in:disabled:not(:checked)+label:after{border-color:transparent;background-color:#BDBDBD}[type=\"checkbox\"].filled-in:disabled:checked+label:before{background-color:transparent}[type=\"checkbox\"].filled-in:disabled:checked+label:after{background-color:#BDBDBD;border-color:#BDBDBD}.switch,.switch *{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a;left:24px}.switch label .lever{content:\"\";display:inline-block;position:relative;width:40px;height:15px;background-color:#818181;border-radius:15px;margin-right:10px;transition:background 0.3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after{content:\"\";position:absolute;display:inline-block;width:21px;height:21px;background-color:#F1F1F1;border-radius:21px;box-shadow:0 1px 3px 1px rgba(0,0,0,0.4);left:-5px;top:-3px;transition:left 0.3s ease, background .3s ease, box-shadow 0.1s ease}input[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(38,166,154,0.1)}input[type=checkbox]:not(:disabled) ~ .lever:active:after,input[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after{box-shadow:0 1px 3px 1px rgba(0,0,0,0.4),0 0 0 15px rgba(0,0,0,0.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#BDBDBD}select{display:none}select.browser-default{display:block}select{background-color:rgba(255,255,255,0.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:1rem;margin:0 0 20px 0;padding:0;display:block}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:0;bottom:0;height:10px;margin:auto 0;font-size:10px;line-height:10px}.select-wrapper span.caret.disabled{color:rgba(0,0,0,0.26)}.select-wrapper+label{position:absolute;top:-14px;font-size:0.8rem}select:disabled{color:rgba(0,0,0,0.3)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,0.3);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;border-bottom:1px solid rgba(0,0,0,0.3)}.select-wrapper i{color:rgba(0,0,0,0.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,0.3);background-color:transparent}.prefix ~ .select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix ~ label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,0.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,0.4)}.select-dropdown li.optgroup ~ li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#26a69a;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0 0;transition:.3s}input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}input[type=range]{border:1px solid white}input[type=range]::-moz-range-track{height:3px;background:#ddd;border:none}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input[type=range]:focus::-moz-range-track{background:#ccc}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a}input[type=range]:focus::-ms-fill-lower{background:#888}input[type=range]:focus::-ms-fill-upper{background:#ccc}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{display:inline-block;font-weight:300;color:#757575;padding-left:20px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:19px;border-left:1px solid #ea4a4f}.table-of-contents a.active{font-weight:500;padding-left:18px;border-left:2px solid #ea4a4f}.side-nav{position:fixed;width:300px;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.right-aligned{right:0;-webkit-transform:translateX(105%);transform:translateX(105%);left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.side-nav .collapsible{margin:0}.side-nav li{float:none;line-height:48px}.side-nav li.active{background-color:rgba(0,0,0,0.05)}.side-nav a{color:rgba(0,0,0,0.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.side-nav a:hover{background-color:rgba(0,0,0,0.05)}.side-nav a.btn,.side-nav a.btn-large,.side-nav a.btn-large,.side-nav a.btn-flat,.side-nav a.btn-floating{margin:10px 15px}.side-nav a.btn,.side-nav a.btn-large,.side-nav a.btn-large,.side-nav a.btn-floating{color:#fff}.side-nav a.btn-flat{color:#343434}.side-nav a.btn:hover,.side-nav a.btn-large:hover,.side-nav a.btn-large:hover{background-color:#2bbbad}.side-nav a.btn-floating:hover{background-color:#26a69a}.side-nav li>a>i,.side-nav li>a>[class^=\"mdi-\"],.side-nav li>a>[class*=\"mdi-\"],.side-nav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,0.54)}.side-nav .divider{margin:8px 0 0 0}.side-nav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,0.54);font-size:14px;font-weight:500;line-height:48px}.side-nav .subheader:hover{background-color:transparent}.side-nav .userView{position:relative;padding:32px 32px 0;margin-bottom:8px}.side-nav .userView>a{height:auto;padding:0}.side-nav .userView>a:hover{background-color:transparent}.side-nav .userView .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.side-nav .userView .circle,.side-nav .userView .name,.side-nav .userView .email{display:block}.side-nav .userView .circle{height:64px;width:64px}.side-nav .userView .name,.side-nav .userView .email{font-size:14px;line-height:24px}.side-nav .userView .name{margin-top:16px;font-weight:500}.side-nav .userView .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.side-nav.fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width: 992px){.side-nav.fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}.side-nav a{padding:0 16px}.side-nav .userView{padding:16px 16px 0}}.side-nav .collapsible-body>ul:not(.collapsible)>li.active,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.side-nav .collapsible-body>ul:not(.collapsible)>li.active a,.side-nav.fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,0.5);z-index:997;will-change:opacity}.preloader-wrapper{display:inline-block;position:relative;width:48px;height:48px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only,.active .spinner-layer.spinner-green-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@keyframes blue-fade-in-out{from{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}100%{opacity:1}}@-webkit-keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes green-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}100%{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border-width:3px;border-style:solid;border-color:inherit;border-bottom-color:transparent !important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent !important;-webkit-transform:rotate(129deg);transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent !important;-webkit-transform:rotate(-129deg);transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;animation:right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@-webkit-keyframes left-spin{from{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{from{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{from{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{from{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);animation:container-rotate 1568ms linear infinite,fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1)}@-webkit-keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-out{from{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:center}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4CAF50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;-webkit-perspective:500px;perspective:500px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:0% 50%;transform-origin:0% 50%}.carousel.carousel-slider{top:0;left:0;height:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{display:none;width:200px;height:400px;position:absolute;top:0;left:0}.carousel .carousel-item img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:rgba(255,255,255,0.5);transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.picker{font-size:16px;text-align:left;line-height:1.2;color:#000000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker__holder{width:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */.picker__holder,.picker__frame{bottom:0;left:0;right:0;top:100%}.picker__holder{position:fixed;transition:background 0.15s ease-out, top 0s 0.15s;-webkit-backface-visibility:hidden}.picker__frame{position:absolute;margin:0 auto;min-width:256px;width:300px;max-height:350px;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-moz-opacity:0;opacity:0;transition:all 0.15s ease-out}@media (min-height: 28.875em){.picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}}@media (min-height: 40.125em){.picker__frame{margin-bottom:7.5%}}.picker__wrap{display:table;width:100%;height:100%}@media (min-height: 28.875em){.picker__wrap{display:block}}.picker__box{background:#ffffff;display:table-cell;vertical-align:middle}@media (min-height: 28.875em){.picker__box{display:block;border:1px solid #777777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 12px 36px 16px rgba(0,0,0,0.24)}}.picker--opened .picker__holder{top:0;background:transparent;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";zoom:1;background:rgba(0,0,0,0.32);transition:background 0.15s ease-out}.picker--opened .picker__frame{top:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-moz-opacity:1;opacity:1}@media (min-height: 35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__input.picker__input--active{border-color:#E3F2FD}.picker__frame{margin:0 auto;max-width:325px}@media (min-height: 38.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.picker__box{padding:0 1em}.picker__header{text-align:center;position:relative;margin-top:.75em}.picker__month,.picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__select--month,.picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker__select--month.browser-default{display:inline;background-color:#FFFFFF;width:40%}.picker__select--year.browser-default{display:inline;background-color:#FFFFFF;width:26%}.picker__select--month:focus,.picker__select--year:focus{border-color:rgba(0,0,0,0.05)}.picker__nav--prev,.picker__nav--next{position:absolute;padding:.5em 1.25em;width:1em;height:1em;box-sizing:content-box;top:-0.25em}.picker__nav--prev{left:-1em;padding-right:1.25em}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__nav--disabled,.picker__nav--disabled:hover,.picker__nav--disabled:before,.picker__nav--disabled:before:hover{cursor:default;background:none;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__table th,.picker__table td{text-align:center}.picker__table td{margin:0;padding:0}.picker__weekday{width:14.285714286%;font-size:.75em;padding-bottom:.25em;color:#999999;font-weight:500}@media (min-height: 33.875em){.picker__weekday{padding-bottom:.5em}}.picker__day--today{position:relative;color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day--disabled:before{border-top-color:#aaaaaa}.picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__day--outfocus:hover{cursor:pointer;color:#dddddd;font-weight:500}.picker__day--highlighted:hover,.picker--focused .picker__day--highlighted{cursor:pointer}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.75);transform:scale(0.75);background:#0089ec;color:#ffffff}.picker__day--disabled,.picker__day--disabled:hover,.picker--focused .picker__day--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__day--highlighted.picker__day--disabled,.picker__day--highlighted.picker__day--disabled:hover{background:#bbbbbb}.picker__footer{text-align:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.picker__button--today,.picker__button--clear,.picker__button--close{border:1px solid #ffffff;background:#ffffff;font-size:.8em;padding:.66em 0;font-weight:bold;width:33%;display:inline-block;vertical-align:bottom}.picker__button--today:hover,.picker__button--clear:hover,.picker__button--close:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__button--today:focus,.picker__button--clear:focus,.picker__button--close:focus{background:#b1dcfb;border-color:rgba(0,0,0,0.05);outline:none}.picker__button--today:before,.picker__button--clear:before,.picker__button--close:before{position:relative;display:inline-block;height:0}.picker__button--today:before,.picker__button--clear:before{content:\" \";margin-right:.45em}.picker__button--today:before{top:-0.05em;width:0;border-top:0.66em solid #0059bc;border-left:.66em solid transparent}.picker__button--clear:before{top:-0.25em;width:.66em;border-top:3px solid #ee2200}.picker__button--close:before{content:\"\\D7\";top:-0.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777777}.picker__button--today[disabled],.picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default}.picker__button--today[disabled]:before{border-top-color:#aaaaaa}.picker__box{border-radius:2px;overflow:hidden}.picker__date-display{text-align:center;background-color:#26a69a;color:#fff;padding-bottom:15px;font-weight:300}.picker__nav--prev:hover,.picker__nav--next:hover{cursor:pointer;color:#000000;background:#a1ded8}.picker__weekday-display{background-color:#1f897f;padding:10px;font-weight:200;letter-spacing:.5;font-size:1rem;margin-bottom:15px}.picker__month-display{text-transform:uppercase;font-size:2rem}.picker__day-display{font-size:4.5rem;font-weight:400}.picker__year-display{font-size:1.8rem;color:rgba(255,255,255,0.4)}.picker__box{padding:0}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__table{margin-top:0;margin-bottom:.5em}.picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__day.picker__day--today{color:#26a69a}.picker__day.picker__day--today.picker__day--selected{color:#fff}.picker__weekday{font-size:.9rem}.picker__day--selected,.picker__day--selected:hover,.picker--focused .picker__day--selected{border-radius:50%;-webkit-transform:scale(0.9);transform:scale(0.9);background-color:#26a69a;color:#ffffff}.picker__day--selected.picker__day--outfocus,.picker__day--selected:hover.picker__day--outfocus,.picker--focused .picker__day--selected.picker__day--outfocus{background-color:#a1ded8}.picker__footer{text-align:right;padding:5px 10px}.picker__close,.picker__today{font-size:1.1rem;padding:0 1rem;color:#26a69a}.picker__nav--prev:before,.picker__nav--next:before{content:\" \";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:0.75em solid #676767;width:0;height:0;display:block;margin:0 auto}.picker__nav--next:before{border-right:0;border-left:0.75em solid #676767}button.picker__today:focus,button.picker__clear:focus,button.picker__close:focus{background-color:#a1ded8}.picker__list{list-style:none;padding:0.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #dddddd;border-top:1px solid #dddddd;margin-bottom:-1px;position:relative;background:#ffffff;padding:.75em 1.25em}@media (min-height: 46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;color:#000000;background:#b1dcfb;border-color:#0089ec;z-index:10}.picker__list-item--highlighted{border-color:#0089ec;z-index:10}.picker__list-item--highlighted:hover,.picker--focused .picker__list-item--highlighted{cursor:pointer;color:#000000;background:#b1dcfb}.picker__list-item--selected,.picker__list-item--selected:hover,.picker--focused .picker__list-item--selected{background:#0089ec;color:#ffffff;z-index:10}.picker__list-item--disabled,.picker__list-item--disabled:hover,.picker--focused .picker__list-item--disabled{background:#f5f5f5;border-color:#f5f5f5;color:#dddddd;cursor:default;border-color:#dddddd;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:none;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:hover,.picker--time .picker__button--clear:focus{color:#000000;background:#b1dcfb;background:#ee2200;border-color:#ee2200;cursor:pointer;color:#ffffff;outline:none}.picker--time .picker__button--clear:before{top:-0.25em;color:#666;font-size:1.25em;font-weight:bold}.picker--time .picker__button--clear:hover:before,.picker--time .picker__button--clear:focus:before{color:#ffffff}.picker--time .picker__frame{min-width:256px;max-width:320px}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height: 40.125em){.picker--time .picker__box{margin-bottom:5em}}\n", ""]);

  },

  function(module, exports) {

	module.exports = function() {
		var list = [];

		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];

				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dfe56a876d0282555d1e2458e278060f.eot";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "954bbdeb86483e4ffea00c4591530ece.woff2";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7500519de3d82e33d1587f8042e2afcb.woff";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94998475f6aea65f558494802416c1cf.ttf";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a990f611f2305dc12965f186c2ef2690.eot";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "69f8a0617ac472f78e45841323a3df9e.woff2";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b813c2ae0d04909a33a18d792912ee7.woff";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "46e48ce0628835f68a7369d0254e4283.ttf";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "30799efa5bf74129468ad4e257551dc3.eot";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2751ee43015f9884c3642f103b7f70c9.woff2";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ba3dcd8903e3d0af5de7792777f8ae0d.woff";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df7b648ce5356ea1ebce435b3459fd60.ttf";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4d9f3f9e5195e7b074bb63ba4ce42208.eot";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "574fd0b50367f886d359e8264938fc37.woff2";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc78759e93a6cac50458610e3d9d63a0.woff";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "894a2ede85a483bf9bedefd4db45cdb9.ttf";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecdd509cadbf1ea78b8d2e31ec52328c.eot";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "39b2c3031be6b4ea96e2e3e95d307814.woff2";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc81817def276b4f21395f7ea5e88dcd.woff";

  },

  function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e31fcf1885e371e19f5786c2bdfeae1b.ttf";

  },

  function(module, exports, __webpack_require__) {

	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {

			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}

  },

  function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	if("undefined"==typeof jQuery){var jQuery;jQuery= true?$=__webpack_require__(3):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";
	switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),"function"==ka&&__webpack_require__(31)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return ea}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3),__webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),function(a){for(var b=0,c=["webkit","moz"],d=a.requestAnimationFrame,e=a.cancelAnimationFrame,f=c.length;--f>=0&&!d;)d=a[c[f]+"RequestAnimationFrame"],e=a[c[f]+"CancelRequestAnimationFrame"];d&&e||(d=function(a){var c=+Date.now(),d=Math.max(b+16,c);return setTimeout(function(){a(b=d)},d-c)},e=clearTimeout),a.requestAnimationFrame=d,a.cancelAnimationFrame=e}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.escapeHash=function(a){return a.replace(/(:|\.|\[|\]|,|=)/g,"\\$1")},Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=jQuery?jQuery.Velocity:$?$.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0,onOpen:void 0,onClose:void 0};return b=a.extend(c,b),this.each(function(){function c(b){j=i.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),j.not(b).removeClass("active").parent().removeClass("active"),j.not(b).parent().children(".collapsible-body").stop(!0,!1).each(function(){a(this).is(":visible")&&a(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height",""),f(a(this).siblings(".collapsible-header"))}})})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){b.accordion||"accordion"===k||void 0===k?c(a):d(a),f(a)}function f(a){a.hasClass("active")?"function"==typeof b.onOpen&&b.onOpen.call(this,a.parent()):"function"==typeof b.onClose&&b.onClose.call(this,a.parent())}function g(a){var b=h(a);return b.length>0}function h(a){return a.closest("li > .collapsible-header")}var i=a(this),j=a(this).find("> li > .collapsible-header"),k=i.data("collapsible");i.off("click.collapse","> li > .collapsible-header"),j.off("click.collapse"),i.on("click.collapse","> li > .collapsible-header",function(b){var c=a(b.target);g(c)&&(c=h(c)),c.toggleClass("active"),e(c)}),b.accordion||"accordion"===k||void 0===k?e(j.filter(".active").first()):j.filter(".active").each(function(){e(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===b?(this.each(function(){a(this).trigger("open")}),!1):"close"===b?(this.each(function(){a(this).trigger("close")}),!1):void this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("induration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outduration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment")),void 0!==g.data("stoppropagation")&&(h.stopPropagation=g.data("stoppropagation"))}function e(b){"focus"===b&&(i=!0),d(),j.addClass("active"),g.addClass("active"),h.constrain_width===!0?j.css("width",g.outerWidth()):j.css("white-space","nowrap");var c=window.innerHeight,e=g.innerHeight(),f=g.offset().left,k=g.offset().top-a(window).scrollTop(),l=h.alignment,m=0,n=0,o=0;h.belowOrigin===!0&&(o=e);var p=0,q=0,r=g.parent();if(r.is("body")||(r[0].scrollHeight>r[0].clientHeight&&(p=r[0].scrollTop),r[0].scrollWidth>r[0].clientWidth&&(q=r[0].scrollLeft)),f+j.innerWidth()>a(window).width()?l="right":f-j.innerWidth()+g.innerWidth()<0&&(l="left"),k+j.innerHeight()>c)if(k+e-j.innerHeight()<0){var s=c-k-o;j.css("max-height",s)}else o||(o+=e),o-=j.innerHeight();if("left"===l)m=h.gutter,n=g.position().left+m;else if("right"===l){var t=g.position().left+g.outerWidth()-j.outerWidth();m=-h.gutter,n=t+m}j.css({position:"absolute",top:g.position().top+o+p,left:n+q}),j.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i=!1,j.fadeOut(h.outDuration),j.removeClass("active"),g.removeClass("active"),setTimeout(function(){j.css("max-height","")},h.outDuration)}var g=a(this),h=a.extend({},c,b),i=!1,j=a("#"+g.attr("data-activates"));if(d(),g.after(j),h.hover){var k=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){k===!1&&(e(),k=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(j)||(j.stop(!0,!0),f(),k=!1)}),j.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(j.stop(!0,!0),f(),k=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){i||(g[0]!=b.currentTarget||g.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?g.hasClass("active")&&(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id"))):(b.preventDefault(),h.stopPropagation&&b.stopPropagation(),e("click")),j.hasClass("active")&&a(document).bind("click."+j.attr("id")+" touchstart."+j.attr("id"),function(b){j.is(b.target)||g.is(b.target)||g.find(b.target).length||(f(),a(document).unbind("click."+j.attr("id")+" touchstart."+j.attr("id")))}))});g.on("open",function(a,b){e(b)}),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-modal-overlay-"+c},e={init:function(c){var e={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%",ending_top:"10%"};return c=a.extend(e,c),this.each(function(){var e=a(this),f=a(this).attr("id")||"#"+a(this).data("target"),g=function(){var d=e.data("overlay-id"),f=a("#"+d);e.removeClass("open"),a("body").css({overflow:"",width:""}),e.find(".modal-close").off("click.close"),a(document).off("keyup.modal"+d),f.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"});var g={
	duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){a(this).css({display:"none"}),"function"==typeof c.complete&&c.complete.call(this,e),f.remove(),b--}};e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},g):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},g)},h=function(f){var h=a("body"),i=h.innerWidth();if(h.css("overflow","hidden"),h.width(i),!e.hasClass("open")){var j=d(),k=a('<div class="modal-overlay"></div>');lStack=++b,k.attr("id",j).css("z-index",1e3+2*lStack),e.data("overlay-id",j).css("z-index",1e3+2*lStack+1),e.addClass("open"),a("body").append(k),c.dismissible&&(k.click(function(){g()}),a(document).on("keyup.modal"+j,function(a){27===a.keyCode&&g()})),e.find(".modal-close").on("click.close",function(a){g()}),k.css({display:"block",opacity:0}),e.css({display:"block",opacity:0}),k.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),e.data("associated-overlay",k[0]);var l={duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready.call(this,e,f)}};e.hasClass("bottom-sheet")?e.velocity({bottom:"0",opacity:1},l):(a.Velocity.hook(e,"scaleX",.7),e.css({top:c.starting_top}),e.velocity({top:c.ending_top,opacity:1,scaleX:"1"},l))}};a(document).off("click.modalTrigger",'a[href="#'+f+'"], [data-target="'+f+'"]'),a(this).off("openModal"),a(this).off("closeModal"),a(document).on("click.modalTrigger",'a[href="#'+f+'"], [data-target="'+f+'"]',function(b){c.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15,h(a(this)),b.preventDefault()}),a(this).on("openModal",function(){a(this).attr("href")||"#"+a(this).data("target");h()}),a(this).on("closeModal",function(){g()})})},open:function(){a(this).trigger("openModal")},close:function(){a(this).trigger("closeModal")}};a.fn.modal=function(b){return e[b]?e[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.modal"):e.init.apply(this,arguments)}}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c&&c.css("overflow","")}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;for(;null!==d&&!a(d).is(document);){var n=a(d);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});if(i.before(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).trigger("load")}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(b){var c={onShow:null};return b=a.extend(c,b),this.each(function(){var c,d,e=a(this),f=(a(window).width(),e.find("li.tab a")),g=e.width(),h=Math.max(g,e[0].scrollWidth)/f.length,i=0,j=function(a){return g-a.position().left-a.outerWidth()-e.scrollLeft()},k=function(a){return a.position().left+e.scrollLeft()};c=a(f.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),i=f.index(c),0>i&&(i=0),void 0!==c[0]&&(d=a(c[0].hash)),e.append('<div class="indicator"></div>');var l=e.find(".indicator");e.is(":visible")&&setTimeout(function(){l.css({right:j(c)}),l.css({left:k(c)})},0),a(window).resize(function(){g=e.width(),h=Math.max(g,e[0].scrollWidth)/f.length,0>i&&(i=0),0!==h&&0!==g&&(l.css({right:j(c)}),l.css({left:k(c)}))}),f.not(c).each(function(){a(Materialize.escapeHash(this.hash)).hide()}),e.on("click","a",function(m){if(a(this).parent().hasClass("disabled"))return void m.preventDefault();if(!a(this).attr("target")){g=e.width(),h=Math.max(g,e[0].scrollWidth)/f.length,c.removeClass("active"),void 0!==d&&d.hide(),c=a(this),d=a(Materialize.escapeHash(this.hash)),f=e.find("li.tab a");c.position();c.addClass("active");var n=i;i=f.index(a(this)),0>i&&(i=0),void 0!==d&&(d.show(),"function"==typeof b.onShow&&b.onShow.call(this,d)),i-n>=0?(l.velocity({right:j(c)},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({left:k(c)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(l.velocity({left:k(c)},{duration:300,queue:!1,easing:"easeOutQuad"}),l.velocity({right:j(c)},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),m.preventDefault()}})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tabs"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id")&&a("#"+f.attr("data-tooltip-id")).remove(),f.attr("data-tooltip-id",e);var g,h,i,j,k,l,m=function(){g=f.attr("data-html")?"true"===f.attr("data-html"):c.html,h=f.attr("data-delay"),h=void 0===h||""===h?c.delay:h,i=f.attr("data-position"),i=void 0===i||""===i?c.position:i,j=f.attr("data-tooltip"),j=void 0===j||""===j?c.tooltip:j};m();var n=function(){var b=a('<div class="material-tooltip"></div>');return j=g?a("<span></span>").html(j):a("<span></span>").text(j),b.append(j).appendTo(a("body")).attr("id",e),l=a('<div class="backdrop"></div>'),l.appendTo(b),b};k=n(),f.off("mouseenter.tooltip mouseleave.tooltip");var o,p=!1;f.on({"mouseenter.tooltip":function(a){var c=function(){m(),p=!0,k.velocity("stop"),l.velocity("stop"),k.css({display:"block",left:"0px",top:"0px"});var a,c,e,g=f.outerWidth(),h=f.outerHeight(),j=k.outerHeight(),n=k.outerWidth(),o="0px",q="0px",r=8,s=8;"top"===i?(a=f.offset().top-j-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="-10px",l.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:j,marginLeft:n/2-l.width()/2})):"left"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left-n-d,e=b(c,a,n,j),q="-10px",l.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:j/2,marginLeft:n})):"right"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left+g+d,e=b(c,a,n,j),q="+10px",l.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:j/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="+10px",l.css({top:0,left:0,marginLeft:n/2-l.width()/2})),k.css({top:e.y,left:e.x}),r=Math.SQRT2*n/parseInt(l.css("width")),s=Math.SQRT2*j/parseInt(l.css("height")),k.velocity({marginTop:o,marginLeft:q},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:r,scaleY:s},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})};o=setTimeout(c,h)},"mouseleave.tooltip":function(){p=!1,clearTimeout(o),setTimeout(function(){p!==!0&&(k.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),l.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){l.css("display","none"),k.css("display","none"),p=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h,i=b;null!=i&&(h=setInterval(function(){null===g.parentNode&&window.clearInterval(h),g.classList.contains("panning")||(i-=20),0>=i&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(h))},20))},function(a){var b={init:function(b){var c={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0};b=a.extend(c,b),a(this).each(function(){var c=a(this),d=a("#"+c.attr("data-activates"));300!=b.menuWidth&&d.css("width",b.menuWidth);var e;b.draggable?(e=a('<div class="drag-target"></div>').attr("data-sidenav",c.attr("data-activates")),a("body").append(e)):e=a(),"left"==b.edge?(d.css("transform","translateX(-100%)"),e.css({left:0})):(d.addClass("right-aligned").css("transform","translateX(100%)"),e.css({right:0})),d.hasClass("fixed")&&window.innerWidth>992&&d.css("transform","translateX(0)"),d.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").length&&h?f(!0):d.css("transform","translateX(0%)"):h===!1&&("left"===b.edge?d.css("transform","translateX(-100%)"):d.css("transform","translateX(100%)"))}),b.closeOnClick===!0&&d.on("click.itemclick","a:not(.collapsible-header)",function(){f()});var f=function(c){g=!1,h=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(e.css({width:"",right:"",left:"0"}),d.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(d.removeAttr("style"),d.css("width",b.menuWidth))}})):(e.css({width:"",right:"0",left:""}),d.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(d.removeAttr("style"),d.css("width",b.menuWidth))}}))},g=!1,h=!1;b.draggable&&(e.on("click",function(){h&&f()}),e.hammer({prevent_default:!1}).bind("pan",function(c){if("touch"==c.gesture.pointerType){var e=(c.gesture.direction,c.gesture.center.x),g=(c.gesture.center.y,c.gesture.velocityX,a("body")),i=a("#sidenav-overlay"),j=g.innerWidth();if(g.css("overflow","hidden"),g.width(j),0===i.length&&(i=a('<div id="sidenav-overlay"></div>'),i.css("opacity",0).click(function(){f()}),a("body").append(i)),"left"===b.edge&&(e>b.menuWidth?e=b.menuWidth:0>e&&(e=0)),"left"===b.edge)e<b.menuWidth/2?h=!1:e>=b.menuWidth/2&&(h=!0),d.css("transform","translateX("+(e-b.menuWidth)+"px)");else{e<window.innerWidth-b.menuWidth/2?h=!0:e>=window.innerWidth-b.menuWidth/2&&(h=!1);var k=e-b.menuWidth/2;0>k&&(k=0),d.css("transform","translateX("+k+"px)")}var l;"left"===b.edge?(l=e/b.menuWidth,i.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((e-window.innerWidth)/b.menuWidth),i.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var f=a('<div id="sidenav-overlay"></div>'),i=c.gesture.velocityX,j=c.gesture.center.x,k=j-b.menuWidth,l=j-b.menuWidth/2;k>0&&(k=0),0>l&&(l=0),g=!1,"left"===b.edge?h&&.3>=i||-.5>i?(0!==k&&d.velocity({translateX:[0,k]},{duration:300,queue:!1,easing:"easeOutQuad"}),f.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),e.css({width:"50%",right:0,left:""}),h=!0):(!h||i>.3)&&(a("body").css({overflow:"",width:""}),d.velocity({translateX:[-1*b.menuWidth-10,k]},{duration:200,queue:!1,easing:"easeOutQuad"}),f.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),e.css({width:"10px",right:"",left:0})):h&&i>=-.3||i>.5?(0!==l&&d.velocity({translateX:[0,l]},{duration:300,queue:!1,easing:"easeOutQuad"}),f.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),e.css({width:"50%",right:"",left:0}),h=!0):(!h||-.3>i)&&(a("body").css({overflow:"",width:""}),d.velocity({translateX:[b.menuWidth+10,l]},{duration:200,queue:!1,easing:"easeOutQuad"}),f.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),e.css({width:"10px",right:0,left:""}))}})),c.click(function(){if(h===!0)h=!1,g=!1,f();else{var c=a("body"),i=a('<div id="sidenav-overlay"></div>'),j=c.innerWidth();c.css("overflow","hidden"),c.width(j),a("body").append(e),"left"===b.edge?(e.css({width:"50%",right:0,left:""}),d.velocity({translateX:[0,-1*b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(e.css({width:"50%",right:"",left:0}),d.velocity({translateX:[0,b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),i.css("opacity",0).click(function(){h=!1,g=!1,f(),i.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(i),i.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},destroy:function(){var b=a("#sidenav-overlay"),c=a('.drag-target[data-sidenav="'+a(this).attr("data-activates")+'"]');b.trigger("click"),c.remove(),a(this).off("click"),b.remove()},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(c){++j;var d=f.scrollTop(),e=f.scrollLeft(),g=e+f.width(),i=d+f.height(),l=b(d+k.top+c||200,g+k.right,i+k.bottom,e+k.left);a.each(l,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=l}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h={throttle:100,scrollOffset:200};d=a.extend(h,d);var j=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a('a[href="#'+a(c).attr("id")+'"]').click(function(b){b.preventDefault();var c=a(Materialize.escapeHash(this.hash)).offset().top+1;a("html, body").animate({scrollTop:c-d.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var l=e(function(){c(d.scrollOffset)},d.throttle||100),m=function(){a(document).ready(l)};return i||(f.on("scroll",m),f.on("resize",m),i=!0),setTimeout(m,0),b.on("scrollSpy:enter",function(){j=a.grep(j,function(a){return 0!=a.height()});var b=a(this);j[0]?(a('a[href="#'+j[0].attr("id")+'"]').removeClass("active"),b.data("scrollSpy:id")<j[0].data("scrollSpy:id")?j.unshift(a(this)):j.push(a(this))):j.push(a(this)),a('a[href="#'+j[0].attr("id")+'"]').addClass("active")}),b.on("scrollSpy:exit",function(){if(j=a.grep(j,function(a){return 0!=a.height()}),j[0]){a('a[href="#'+j[0].attr("id")+'"]').removeClass("active");var b=a(this);j=a.grep(j,function(a){return a.attr("id")!=b.attr("id")}),j[0]&&a('a[href="#'+j[0].attr("id")+'"]').addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),d=b.css("font-size"),f=b.css("line-height");d&&e.css("font-size",d),c&&e.css("font-family",c),f&&e.css("line-height",f),"off"===b.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(b.val()+"\n");var g=e.html().replace(/\n/g,"<br>");e.html(g),b.is(":visible")?e.css("width",b.width()):e.css("width",a(window).width()/2),b.css("height",e.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label").addClass("active"):a(this).siblings("label").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, .prefix").addClass("active")}),a(document).on("blur",c,function(){var b=a(this),c=".prefix";0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&(c+=", label"),b.siblings(c).removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d="input[type=radio], input[type=checkbox]";a(document).on("keyup.radio",d,function(b){if(9===b.which){a(this).addClass("tabbed");var c=a(this);return void c.one("blur",function(b){a(this).removeClass("tabbed")})}});var e=a(".hiddendiv").first();e.length||(e=a('<div class="hiddendiv common"></div>'),a("body").append(e));var f=".materialize-textarea";a(f).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",f,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var g,h="input[type=range]",i=!1;a(h).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var j=".range-field";a(document).on("change",h,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",h,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),i=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(g=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>g?g=0:g>d&&(g=d),c.addClass("active").css("left",g)),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",j,function(){i=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",j,function(b){var c,d=a(this).children(".thumb");if(i){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(h).val())}}),a(document).on("mouseout touchleave",j,function(){if(!i){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}}),a.fn.autocomplete=function(b){var c={data:{}};return b=a.extend(c,b),this.each(function(){var c=a(this),d=b.data,e=c.closest(".input-field");if(!a.isEmptyObject(d)){var f=a('<ul class="autocomplete-content dropdown-content"></ul>');e.length?e.append(f):c.after(f);var g=function(a,b){var c=b.find("img"),d=b.text().toLowerCase().indexOf(""+a.toLowerCase()),e=d+a.length-1,f=b.text().slice(0,d),g=b.text().slice(d,e+1),h=b.text().slice(e+1);b.html("<span>"+f+"<span class='highlight'>"+g+"</span>"+h+"</span>"),c.length&&b.prepend(c)};c.on("keyup",function(b){if(13===b.which)return void f.find("li").first().click();var e=c.val().toLowerCase();if(f.empty(),""!==e)for(var h in d)if(d.hasOwnProperty(h)&&-1!==h.toLowerCase().indexOf(e)&&h.toLowerCase()!==e){var i=a("<li></li>");d[h]?i.append('<img src="'+d[h]+'" class="right circle"><span>'+h+"</span>"):i.append("<span>"+h+"</span>"),f.append(i),g(e,i)}}),f.on("click","li",function(){c.val(a(this).text().trim()),c.trigger("change"),f.empty()})}})}}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=d.attr("multiple")?!0:!1,f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var e=c.is(":disabled")?"disabled ":"",f="optgroup-option"===d?"optgroup-option ":"",g=c.data("icon"),h=c.attr("class");if(g){var j="";return h&&(j=' class="'+h+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img alt="" src="'+g+'"'+j+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><img alt="" src="'+g+'"'+j+"><span>"+c.html()+"</span></li>")),!0}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><span>'+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this),"optgroup-option")})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){
	var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),r(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];r(i,c)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)});var r=function(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d)}},s=[],t=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){s.push(c);var f=s.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&r(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],r(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&r(i,g)),setTimeout(function(){s=[]},1e3)}};q.on("keydown",t)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("> li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),!n&&!m||j.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})))})})}(jQuery),function(a){var b=!1,c={data:[],placeholder:"",secondaryPlaceholder:""};a(document).ready(function(){a(document).on("click",".chip .close",function(b){var c=a(this).closest(".chips");c.attr("data-initialized")||a(this).closest(".chip").remove()})}),a.fn.material_chip=function(d){var e=this;if(this.$el=a(this),this.$document=a(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===d)return this.$el.data("chips");var f=a.extend({},c,d);this.init=function(){var b=0;e.$el.each(function(){var c=a(this),d=Materialize.guid();f.data&&f.data instanceof Array||(f.data=[]),c.data("chips",f.data),c.attr("data-index",b),c.attr("data-initialized",!0),c.hasClass(e.SELS.CHIPS)||c.addClass("chips"),e.chips(c,d),b++})},this.handleEvents=function(){var b=e.SELS;e.$document.off("click.chips-focus",b.CHIPS).on("click.chips-focus",b.CHIPS,function(c){a(c.target).find(b.INPUT).focus()}),e.$document.off("click.chips-select",b.CHIP).on("click.chips-select",b.CHIP,function(c){a(b.CHIP).removeClass("selected"),a(this).toggleClass("selected")}),e.$document.off("keydown.chips").on("keydown.chips",function(c){if(!a(c.target).is("input, textarea")){var d,f=e.$document.find(b.CHIP+b.SELECTED_CHIP),g=f.closest(b.CHIPS),h=f.siblings(b.CHIP).length;if(f.length)if(8===c.which||46===c.which){c.preventDefault(),d=f.index(),e.deleteChip(d,g);var i=null;h>d+1?i=d:(d===h||d+1===h)&&(i=h-1),0>i&&(i=null),null!==i&&e.selectChip(i,g),h||g.find("input").focus()}else if(37===c.which){if(d=f.index()-1,0>d)return;a(b.CHIP).removeClass("selected"),e.selectChip(d,g)}else if(39===c.which){if(d=f.index()+1,a(b.CHIP).removeClass("selected"),d>h)return void g.find("input").focus();e.selectChip(d,g)}}}),e.$document.off("focusin.chips",b.CHIPS+" "+b.INPUT).on("focusin.chips",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target).closest(b.CHIPS);d.addClass("focus"),d.siblings("label, .prefix").addClass("active"),a(b.CHIP).removeClass("selected")}),e.$document.off("focusout.chips",b.CHIPS+" "+b.INPUT).on("focusout.chips",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target).closest(b.CHIPS);d.removeClass("focus"),d.data("chips").length||d.siblings("label").removeClass("active"),d.siblings(".prefix").removeClass("active")}),e.$document.off("keydown.chips-add",b.CHIPS+" "+b.INPUT).on("keydown.chips-add",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=f.children(b.CHIP).length;return 13===c.which?(c.preventDefault(),e.addChip({tag:d.val()},f),void d.val("")):8!==c.keyCode&&37!==c.keyCode||""!==d.val()||!g?void 0:(e.selectChip(g-1,f),void d.blur())}),e.$document.off("click.chips-delete",b.CHIPS+" "+b.DELETE).on("click.chips-delete",b.CHIPS+" "+b.DELETE,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=d.closest(b.CHIP);c.stopPropagation(),e.deleteChip(g.index(),f),f.find("input").focus()})},this.chips=function(a,b){var c="";a.data("chips").forEach(function(a){c+=e.renderChip(a)}),c+='<input id="'+b+'" class="input" placeholder="">',a.html(c),e.setPlaceholder(a);var d=a.next("label");d.length&&(d.attr("for",b),a.data("chips").length&&d.addClass("active"))},this.renderChip=function(a){if(a.tag){var b='<div class="chip">'+a.tag;return a.image&&(b+=' <img src="'+a.image+'"> '),b+='<i class="material-icons close">close</i>',b+="</div>"}},this.setPlaceholder=function(a){a.data("chips").length&&f.placeholder?a.find("input").prop("placeholder",f.placeholder):!a.data("chips").length&&f.secondaryPlaceholder&&a.find("input").prop("placeholder",f.secondaryPlaceholder)},this.isValid=function(a,b){for(var c=a.data("chips"),d=!1,e=0;e<c.length;e++)if(c[e].tag===b.tag)return void(d=!0);return""!==b.tag&&!d},this.addChip=function(b,c){if(e.isValid(c,b)){for(var d=e.renderChip(b),f=[],g=c.data("chips"),h=0;h<g.length;h++)f.push(g[h]);f.push(b),c.data("chips",f),a(d).insertBefore(c.find("input")),c.trigger("chip.add",b),e.setPlaceholder(c)}},this.deleteChip=function(a,b){var c=b.data("chips")[a];b.find(".chip").eq(a).remove();for(var d=[],f=b.data("chips"),g=0;g<f.length;g++)g!==a&&d.push(f[g]);b.data("chips",d),b.trigger("chip.delete",c),e.setPlaceholder(b)},this.selectChip=function(a,b){var c=b.find(".chip").eq(a);c&&!1===c.hasClass("selected")&&(c.addClass("selected"),b.trigger("chip.select",b.data("chips")[a]))},this.getChipsElement=function(a,b){return b.eq(a)},this.init(),b||(this.handleEvents(),b=!0)}}(jQuery),function(a){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return"remove"===b?(this.each(function(){(id=a(this).data("pushpin-id"))&&(a(window).off("scroll."+id),a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;a(this).data("pushpin-id",e),d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})}))}}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",function(b){var d=a(this);c(d)}),a(document).on("click.fabClickToggle",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)}),a(document).on("click.fabToolbar",".fixed-action-btn.toolbar > a",function(b){var c=a(this),e=c.parent();d(e)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))},openToolbar:function(){d(a(this))},closeToolbar:function(){e(a(this))}});var b=function(b){var c=b;if(c.hasClass("active")===!1){var d,e,f=c.hasClass("horizontal");f===!0?e=40:d=40,c.addClass("active"),c.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:d+"px",translateX:e+"px"},{duration:0});var g=0;c.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:g}),g+=40})}},c=function(a){var b,c,d=a,e=d.hasClass("horizontal");e===!0?c=40:b=40,d.removeClass("active");d.find("ul .btn-floating").velocity("stop",!0),d.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})},d=function(b){if("true"!==b.attr("data-open")){var c,d,f,g=window.innerWidth,h=window.innerHeight,i=b[0].getBoundingClientRect(),j=b.find("> a").first(),k=b.find("> ul").first(),l=a('<div class="fab-backdrop"></div>'),m=j.css("background-color");j.append(l),c=i.left-g/2+i.width/2,d=h-i.bottom,f=g/l.width(),b.attr("data-origin-bottom",i.bottom),b.attr("data-origin-left",i.left),b.attr("data-origin-width",i.width),b.addClass("active"),b.attr("data-open",!0),b.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+c+"px)",transition:"none"}),j.css({transform:"translateY("+-d+"px)",transition:"none"}),l.css({"background-color":m}),setTimeout(function(){b.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),j.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){b.css({overflow:"hidden","background-color":m}),l.css({transform:"scale("+f+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),k.find("> li > a").css({opacity:1}),a(window).on("scroll.fabToolbarClose",function(){e(b),a(window).off("scroll.fabToolbarClose"),a(document).off("click.fabToolbarClose")}),a(document).on("click.fabToolbarClose",function(c){a(c.target).closest(k).length||(e(b),a(window).off("scroll.fabToolbarClose"),a(document).off("click.fabToolbarClose"))})},100)},0)}},e=function(a){if("true"===a.attr("data-open")){var b,c,d,e=window.innerWidth,f=window.innerHeight,g=a.attr("data-origin-width"),h=a.attr("data-origin-bottom"),i=a.attr("data-origin-left"),j=a.find("> .btn-floating").first(),k=a.find("> ul").first(),l=a.find(".fab-backdrop"),m=j.css("background-color");b=i-e/2+g/2,c=f-h,d=e/l.width(),a.removeClass("active"),a.attr("data-open",!1),a.css({"background-color":"transparent",transition:"none"}),j.css({transition:"none"}),l.css({transform:"scale(0)","background-color":m}),k.find("> li > a").css({opacity:""}),setTimeout(function(){l.remove(),a.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-b+"px,0,0)"}),j.css({overflow:"",transform:"translate3d(0,"+c+"px,0)"}),setTimeout(function(){a.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),j.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}var d=0;c.find("li").velocity({translateX:"-100px"},{duration:0}),c.find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:d,easing:[60,10]}),d+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){if("function"==typeof h)h.call(this,i);else if("string"==typeof h){var k=new Function(h);k(i)}e.done=!0}}}}},100)}}(jQuery),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root.eq(0).focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root.eq(0).focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root.eq(0).focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root.eq(0).focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0;
	});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=b.parent().find('span[class="character-counter"]');c.length||(c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),b.parent().append(c))}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=a(this),f=e.parent().find('span[class="character-counter"]');if(!f.length){var g=void 0!==e.attr("length");g&&(e.on("input",b),e.on("focus",b),e.on("blur",d),c(e))}})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1,indicators:!1,no_wrap:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(H[0].addEventListener("touchstart",l),H[0].addEventListener("touchmove",m),H[0].addEventListener("touchend",n)),H[0].addEventListener("mousedown",l),H[0].addEventListener("mousemove",m),H[0].addEventListener("mouseup",n),H[0].addEventListener("mouseleave",n),H[0].addEventListener("click",j)}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function f(a){return a>=t?a%t:0>a?f(t+a%t):a}function g(a){var c,d,e,g,h,i,j;if(p="number"==typeof a?a:p,q=Math.floor((p+s/2)/s),e=p-q*s,g=0>e?1:-1,h=-g*e*2/s,d=t>>1,b.full_width?j="translateX(0)":(j="translateX("+(H[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(H[0].clientHeight-item_width)/2+"px)"),I){var k=q%t,l=G.find(".indicator-item.active");l.index()!==k&&(l.removeClass("active"),G.find(".indicator-item").eq(k).addClass("active"))}for((!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block"),c=1;d>=c;++c)b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),(!b.no_wrap||t>q+c)&&(i=o[f(q+c)],i.style[A]=j+" translateX("+(b.shift+(s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block"),b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),(!b.no_wrap||q-c>=0)&&(i=o[f(q-c)],i.style[A]=j+" translateX("+(-b.shift+(-s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block");(!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block")}function h(){var a,b,c,d;a=Date.now(),b=a-C,C=a,c=p-B,B=p,d=1e3*c/(1+b),z=.8*d+.2*z}function i(){var a,c;w&&(a=Date.now()-C,c=w*Math.exp(-a/b.time_constant),c>2||-2>c?(g(x-c),requestAnimationFrame(i)):g(x))}function j(c){if(E)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=q%t-d;0!==e&&(c.preventDefault(),c.stopPropagation()),k(d)}}function k(a){var c=q%t-a;b.no_wrap||(0>c?Math.abs(c+t)<Math.abs(c)&&(c+=t):c>0&&Math.abs(c-t)<c&&(c-=t)),0>c?H.trigger("carouselNext",[Math.abs(c)]):c>0&&H.trigger("carouselPrev",[c])}function l(a){r=!0,E=!1,F=!1,u=d(a),v=e(a),z=w=0,B=p,C=Date.now(),clearInterval(D),D=setInterval(h,100)}function m(a){var b,c,f;if(r)if(b=d(a),y=e(a),c=u-b,f=Math.abs(v-y),30>f&&!F)(c>2||-2>c)&&(E=!0,u=b,g(p+c));else{if(E)return a.preventDefault(),a.stopPropagation(),!1;F=!0}return E?(a.preventDefault(),a.stopPropagation(),!1):void 0}function n(a){return r?(r=!1,clearInterval(D),x=p,(z>10||-10>z)&&(w=.9*z,x=p+w),x=Math.round(x/s)*s,b.no_wrap&&(x>=s*(t-1)?x=s*(t-1):0>x&&(x=0)),w=x-p,C=Date.now(),requestAnimationFrame(i),E&&(a.preventDefault(),a.stopPropagation()),!1):void 0}var o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F,G=a('<ul class="indicators"></ul>'),H=a(this),I=H.attr("data-indicators")||b.indicators;if(H.hasClass("initialized"))return a(this).trigger("carouselNext",[1e-6]),!0;if(b.full_width){b.dist=0;var J=H.find(".carousel-item img").first();J.length?imageHeight=J.on("load",function(){H.css("height",a(this).height())}):(imageHeight=H.find(".carousel-item").first().height(),H.css("height",imageHeight)),I&&H.find(".carousel-fixed-item").addClass("with-indicators")}H.addClass("initialized"),r=!1,p=x=0,o=[],item_width=H.find(".carousel-item").first().innerWidth(),s=2*item_width+b.padding,H.find(".carousel-item").each(function(b){if(o.push(a(this)[0]),I){var c=a('<li class="indicator-item"></li>');0===b&&c.addClass("active"),c.click(function(){var b=a(this).index();k(b)}),G.append(c)}}),I&&H.append(G),t=o.length,A="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(A=b,!1):!0}),window.onresize=g,c(),g(p),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),x=p+s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i))}),a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),x=p-s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i))}),a(this).on("carouselSet",function(a,b){void 0===b&&(b=0),k(b)})})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])},set:function(b){a(this).trigger("carouselSet",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery);

  },

  function(module, exports) {

	 (function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	 }.call(exports, {}))

  },

  function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {

	    handler: function() { },

	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    input.eventType = eventType;

	    computeInputData(manager, input);

	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {

	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	function simpleCloneInputData(input) {

	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false;

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {

	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {

	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        if (storeIndex < 0) {
	            return;
	        }

	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {

	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [

	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {

	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation';
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {

	    set: function(value) {

	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {

	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	function cleanTouchActions(actions) {

	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {

	    defaults: {},

	    set: function(options) {
	        assign(this.options, options);

	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event);

	        if (input.additionalEvent) {
	            emit(input.additionalEvent);
	        }

	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }

	        this.state = STATE_FAILED;
	    },

	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    recognize: function(inputData) {

	        var inputDataClone = assign({}, inputData);

	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    process: function(inputData) { },

	    getTouchAction: function() { },

	    reset: function() { }
	};

	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {

	    defaults: {

	        pointers: 1
	    },

	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {

	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {

	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {

	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251,
	        threshold: 9
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {

	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {

	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {

	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300,
	        time: 250,
	        threshold: 9,
	        posThreshold: 10
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {

	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	Hammer.VERSION = '2.0.7';

	Hammer.defaults = {

	    domEvents: false,

	    touchAction: TOUCH_ACTION_COMPUTE,

	    enable: true,

	    inputTarget: null,

	    inputClass: null,

	    preset: [

	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    cssProps: {

	        userSelect: 'none',

	        touchSelect: 'none',

	        touchCallout: 'none',

	        contentZooming: 'none',

	        userDrag: 'none',

	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {

	    set: function(options) {
	        assign(this.options, options);

	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {

	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        var curRecognizer = session.curRecognizer;

	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            if (session.stopped !== FORCED_STOP && (
	                    !curRecognizer || recognizer == curRecognizer ||
	                    recognizer.canRecognizeWith(curRecognizer))) {
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    emit: function(event, data) {

	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {}));
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');

  },

  function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(34);

	riot.tag2('main', '<navbar></navbar> <div id="main-viewport"></div> <footing></footing>', '', '', function(opts) {
	});

  },

  function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.riot = global.riot || {})));
	}(this, (function (exports) { 'use strict';

	var __TAGS_CACHE = [];
	var __TAG_IMPL = {};
	var GLOBAL_MIXIN = '__global_mixin';
	var ATTRS_PREFIX = 'riot-';
	var REF_DIRECTIVES = ['ref', 'data-ref'];
	var IS_DIRECTIVE = 'data-is';
	var CONDITIONAL_DIRECTIVE = 'if';
	var LOOP_DIRECTIVE = 'each';
	var LOOP_NO_REORDER_DIRECTIVE = 'no-reorder';
	var SHOW_DIRECTIVE = 'show';
	var HIDE_DIRECTIVE = 'hide';
	var T_STRING = 'string';
	var T_OBJECT = 'object';
	var T_UNDEF  = 'undefined';
	var T_FUNCTION = 'function';
	var XLINK_NS = 'http://www.w3.org/1999/xlink';
	var XLINK_REGEX = /^xlink:(\w+)/;
	var WIN = typeof window === T_UNDEF ? undefined : window;
	var RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/;
	var RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
	var RE_RESERVED_NAMES = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/;
	var RE_SVG_TAGS = /^(altGlyph|animate(?:Color)?|circle|clipPath|defs|ellipse|fe(?:Blend|ColorMatrix|ComponentTransfer|Composite|ConvolveMatrix|DiffuseLighting|DisplacementMap|Flood|GaussianBlur|Image|Merge|Morphology|Offset|SpecularLighting|Tile|Turbulence)|filter|font|foreignObject|g(?:lyph)?(?:Ref)?|image|line(?:arGradient)?|ma(?:rker|sk)|missing-glyph|path|pattern|poly(?:gon|line)|radialGradient|rect|stop|svg|switch|symbol|text(?:Path)?|tref|tspan|use)$/;
	var RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
	var CASE_SENSITIVE_ATTRIBUTES = { 'viewbox': 'viewBox' };
	var RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/;
	var IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;

	function isSVGTag(name) {
	  return RE_SVG_TAGS.test(name)
	}

	function isBoolAttr(value) {
	  return RE_BOOL_ATTRS.test(value)
	}

	function isFunction(value) {
	  return typeof value === T_FUNCTION
	}

	function isObject(value) {
	  return value && typeof value === T_OBJECT
	}

	function isUndefined(value) {
	  return typeof value === T_UNDEF
	}

	function isString(value) {
	  return typeof value === T_STRING
	}

	function isBlank(value) {
	  return isUndefined(value) || value === null || value === ''
	}

	function isArray(value) {
	  return Array.isArray(value) || value instanceof Array
	}

	function isWritable(obj, key) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	  return isUndefined(obj[key]) || descriptor && descriptor.writable
	}

	function isReservedName(value) {
	  return RE_RESERVED_NAMES.test(value)
	}

	var check = Object.freeze({
		isSVGTag: isSVGTag,
		isBoolAttr: isBoolAttr,
		isFunction: isFunction,
		isObject: isObject,
		isUndefined: isUndefined,
		isString: isString,
		isBlank: isBlank,
		isArray: isArray,
		isWritable: isWritable,
		isReservedName: isReservedName
	});

	function $$(selector, ctx) {
	  return (ctx || document).querySelectorAll(selector)
	}

	function $(selector, ctx) {
	  return (ctx || document).querySelector(selector)
	}

	function createFrag() {
	  return document.createDocumentFragment()
	}

	function createDOMPlaceholder() {
	  return document.createTextNode('')
	}

	function mkEl(name, isSvg) {
	  return isSvg ?
	    document.createElementNS('http://www.w3.org/2000/svg', 'svg') :
	    document.createElement(name)
	}

	function getOuterHTML(el) {
	  if (el.outerHTML)
	    { return el.outerHTML }

	  else {
	    var container = mkEl('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}

	function setInnerHTML(container, html) {
	  if (!isUndefined(container.innerHTML))
	    { container.innerHTML = html; }

	  else {
	    var doc = new DOMParser().parseFromString(html, 'application/xml');
	    var node = container.ownerDocument.importNode(doc.documentElement, true);
	    container.appendChild(node);
	  }
	}

	function remAttr(dom, name) {
	  dom.removeAttribute(name);
	}

	function getAttr(dom, name) {
	  return dom.getAttribute(name)
	}

	function setAttr(dom, name, val) {
	  var xlink = XLINK_REGEX.exec(name);
	  if (xlink && xlink[1])
	    { dom.setAttributeNS(XLINK_NS, xlink[1], val); }
	  else
	    { dom.setAttribute(name, val); }
	}

	function safeInsert(root, curr, next) {
	  root.insertBefore(curr, next.parentNode && next);
	}

	function walkAttrs(html, fn) {
	  if (!html)
	    { return }
	  var m;
	  while (m = RE_HTML_ATTRS.exec(html))
	    { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }
	}

	function walkNodes(dom, fn, context) {
	  if (dom) {
	    var res = fn(dom, context);
	    var next;

	    if (res === false) { return }

	    dom = dom.firstChild;

	    while (dom) {
	      next = dom.nextSibling;
	      walkNodes(dom, fn, res);
	      dom = next;
	    }
	  }
	}

	var dom = Object.freeze({
		$$: $$,
		$: $,
		createFrag: createFrag,
		createDOMPlaceholder: createDOMPlaceholder,
		mkEl: mkEl,
		getOuterHTML: getOuterHTML,
		setInnerHTML: setInnerHTML,
		remAttr: remAttr,
		getAttr: getAttr,
		setAttr: setAttr,
		safeInsert: safeInsert,
		walkAttrs: walkAttrs,
		walkNodes: walkNodes
	});

	var styleNode;
	var cssTextProp;
	var byName = {};
	var remainder = [];
	var needsInject = false;

	if (WIN) {
	  styleNode = (function () {

	    var newNode = mkEl('style');
	    setAttr(newNode, 'type', 'text/css');

	    var userNode = $('style[type=riot]');
	    if (userNode) {
	      if (userNode.id) { newNode.id = userNode.id; }
	      userNode.parentNode.replaceChild(newNode, userNode);
	    }
	    else { document.getElementsByTagName('head')[0].appendChild(newNode); }

	    return newNode
	  })();
	  cssTextProp = styleNode.styleSheet;
	}

	var styleManager = {
	  styleNode: styleNode,

	  add: function add(css, name) {
	    if (name) { byName[name] = css; }
	    else { remainder.push(css); }
	    needsInject = true;
	  },

	  inject: function inject() {
	    if (!WIN || !needsInject) { return }
	    needsInject = false;
	    var style = Object.keys(byName)
	      .map(function(k) { return byName[k] })
	      .concat(remainder).join('\n');
	    if (cssTextProp) { cssTextProp.cssText = style; }
	    else { styleNode.innerHTML = style; }
	  }
	};

	var brackets = (function (UNDEF) {

	  var
	    REGLOB = 'g',

	    R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

	    R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,

	    S_QBLOCKS = R_STRINGS.source + '|' +
	      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
	      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,

	    UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),

	    NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,

	    FINDBRACES = {
	      '(': RegExp('([()])|'   + S_QBLOCKS, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
	      '{': RegExp('([{}])|'   + S_QBLOCKS, REGLOB)
	    },

	    DEFAULT = '{ }';

	  var _pairs = [
	    '{', '}',
	    '{', '}',
	    /{[^}]*}/,
	    /\\([{}])/g,
	    /\\({)|{/g,
	    RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB),
	    DEFAULT,
	    /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
	    /(^|[^\\]){=[\S\s]*?}/
	  ];

	  var
	    cachedBrackets = UNDEF,
	    _regex,
	    _cache = [],
	    _settings;

	  function _loopback (re) { return re }

	  function _rewrite (re, bp) {
	    if (!bp) { bp = _cache; }
	    return new RegExp(
	      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
	    )
	  }

	  function _create (pair) {
	    if (pair === DEFAULT) { return _pairs }

	    var arr = pair.split(' ');

	    if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
	      throw new Error('Unsupported brackets "' + pair + '"')
	    }
	    arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

	    arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
	    arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
	    arr[6] = _rewrite(_pairs[6], arr);
	    arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
	    arr[8] = pair;
	    return arr
	  }

	  function _brackets (reOrIdx) {
	    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
	  }

	  _brackets.split = function split (str, tmpl, _bp) {

	    if (!_bp) { _bp = _cache; }

	    var
	      parts = [],
	      match,
	      isexpr,
	      start,
	      pos,
	      re = _bp[6];

	    isexpr = start = re.lastIndex = 0;

	    while ((match = re.exec(str))) {

	      pos = match.index;

	      if (isexpr) {

	        if (match[2]) {
	          re.lastIndex = skipBraces(str, match[2], re.lastIndex);
	          continue
	        }
	        if (!match[3]) {
	          continue
	        }
	      }

	      if (!match[1]) {
	        unescapeStr(str.slice(start, pos));
	        start = re.lastIndex;
	        re = _bp[6 + (isexpr ^= 1)];
	        re.lastIndex = start;
	      }
	    }

	    if (str && start < str.length) {
	      unescapeStr(str.slice(start));
	    }

	    return parts

	    function unescapeStr (s) {
	      if (tmpl || isexpr) {
	        parts.push(s && s.replace(_bp[5], '$1'));
	      } else {
	        parts.push(s);
	      }
	    }

	    function skipBraces (s, ch, ix) {
	      var
	        match,
	        recch = FINDBRACES[ch];

	      recch.lastIndex = ix;
	      ix = 1;
	      while ((match = recch.exec(s))) {
	        if (match[1] &&
	          !(match[1] === ch ? ++ix : --ix)) { break }
	      }
	      return ix ? s.length : recch.lastIndex
	    }
	  };

	  _brackets.hasExpr = function hasExpr (str) {
	    return _cache[4].test(str)
	  };

	  _brackets.loopKeys = function loopKeys (expr) {
	    var m = expr.match(_cache[9]);

	    return m
	      ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
	      : { val: expr.trim() }
	  };

	  _brackets.array = function array (pair) {
	    return pair ? _create(pair) : _cache
	  };

	  function _reset (pair) {
	    if ((pair || (pair = DEFAULT)) !== _cache[8]) {
	      _cache = _create(pair);
	      _regex = pair === DEFAULT ? _loopback : _rewrite;
	      _cache[9] = _regex(_pairs[9]);
	    }
	    cachedBrackets = pair;
	  }

	  function _setSettings (o) {
	    var b;

	    o = o || {};
	    b = o.brackets;
	    Object.defineProperty(o, 'brackets', {
	      set: _reset,
	      get: function () { return cachedBrackets },
	      enumerable: true
	    });
	    _settings = o;
	    _reset(b);
	  }

	  Object.defineProperty(_brackets, 'settings', {
	    set: _setSettings,
	    get: function () { return _settings }
	  });

	  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
	  _brackets.set = _reset;

	  _brackets.R_STRINGS = R_STRINGS;
	  _brackets.R_MLCOMMS = R_MLCOMMS;
	  _brackets.S_QBLOCKS = S_QBLOCKS;

	  return _brackets

	})();

	var tmpl = (function () {

	  var _cache = {};

	  function _tmpl (str, data) {
	    if (!str) { return str }

	    return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr)
	  }

	  _tmpl.hasExpr = brackets.hasExpr;

	  _tmpl.loopKeys = brackets.loopKeys;

	  _tmpl.clearCache = function () { _cache = {}; };

	  _tmpl.errorHandler = null;

	  function _logErr (err, ctx) {

	    err.riotData = {
	      tagName: ctx && ctx.__ && ctx.__.tagName,
	      _riot_id: ctx && ctx._riot_id
	    };

	    if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }
	    else if (
	      typeof console !== 'undefined' &&
	      typeof console.error === 'function'
	    ) {
	      if (err.riotData.tagName) {
	        console.error('Riot template error thrown in the <%s> tag', err.riotData.tagName);
	      }
	      console.error(err);
	    }
	  }

	  function _create (str) {
	    var expr = _getTmpl(str);

	    if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }

	    return new Function('E', expr + ';')
	  }

	  var
	    CH_IDEXPR = String.fromCharCode(0x2057),
	    RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
	    RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	    RE_DQUOTE = /\u2057/g,
	    RE_QBMARK = /\u2057(\d+)~/g;

	  function _getTmpl (str) {
	    var
	      qstr = [],
	      expr,
	      parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);

	    if (parts.length > 2 || parts[0]) {
	      var i, j, list = [];

	      for (i = j = 0; i < parts.length; ++i) {

	        expr = parts[i];

	        if (expr && (expr = i & 1

	            ? _parseExpr(expr, 1, qstr)

	            : '"' + expr
	                .replace(/\\/g, '\\\\')
	                .replace(/\r\n?|\n/g, '\\n')
	                .replace(/"/g, '\\"') +
	              '"'

	          )) { list[j++] = expr; }

	      }

	      expr = j < 2 ? list[0]
	           : '[' + list.join(',') + '].join("")';

	    } else {

	      expr = _parseExpr(parts[1], 0, qstr);
	    }

	    if (qstr[0]) {
	      expr = expr.replace(RE_QBMARK, function (_, pos) {
	        return qstr[pos]
	          .replace(/\r/g, '\\r')
	          .replace(/\n/g, '\\n')
	      });
	    }
	    return expr
	  }

	  var
	    RE_BREND = {
	      '(': /[()]/g,
	      '[': /[[\]]/g,
	      '{': /[{}]/g
	    };

	  function _parseExpr (expr, asText, qstr) {

	    expr = expr
	          .replace(RE_QBLOCK, function (s, div) {
	            return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s
	          })
	          .replace(/\s+/g, ' ').trim()
	          .replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

	    if (expr) {
	      var
	        list = [],
	        cnt = 0,
	        match;

	      while (expr &&
	            (match = expr.match(RE_CSNAME)) &&
	            !match.index
	        ) {
	        var
	          key,
	          jsb,
	          re = /,|([[{(])|$/g;

	        expr = RegExp.rightContext;
	        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

	        while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }

	        jsb  = expr.slice(0, match.index);
	        expr = RegExp.rightContext;

	        list[cnt++] = _wrapExpr(jsb, 1, key);
	      }

	      expr = !cnt ? _wrapExpr(expr, asText)
	           : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
	    }
	    return expr

	    function skipBraces (ch, re) {
	      var
	        mm,
	        lv = 1,
	        ir = RE_BREND[ch];

	      ir.lastIndex = re.lastIndex;
	      while (mm = ir.exec(expr)) {
	        if (mm[0] === ch) { ++lv; }
	        else if (!--lv) { break }
	      }
	      re.lastIndex = lv ? expr.length : ir.lastIndex;
	    }
	  }

	  var
	    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
	    JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
	    JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

	  function _wrapExpr (expr, asText, key) {
	    var tb;

	    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	      if (mvar) {
	        pos = tb ? 0 : pos + match.length;

	        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	          match = p + '("' + mvar + JS_CONTEXT + mvar;
	          if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }
	        } else if (pos) {
	          tb = !JS_NOPROPS.test(s.slice(pos));
	        }
	      }
	      return match
	    });

	    if (tb) {
	      expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
	    }

	    if (key) {

	      expr = (tb
	          ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
	        ) + '?"' + key + '":""';

	    } else if (asText) {

	      expr = 'function(v){' + (tb
	          ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
	        ) + ';return v||v===0?v:""}.call(this)';
	    }

	    return expr
	  }

	  _tmpl.version = brackets.version = 'v3.0.2';

	  return _tmpl

	})();

	var observable$1 = function(el) {

	  el = el || {};

	  var callbacks = {},
	    slice = Array.prototype.slice;

	  Object.defineProperties(el, {

	    on: {
	      value: function(event, fn) {
	        if (typeof fn == 'function')
	          { (callbacks[event] = callbacks[event] || []).push(fn); }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    off: {
	      value: function(event, fn) {
	        if (event == '*' && !fn) { callbacks = {}; }
	        else {
	          if (fn) {
	            var arr = callbacks[event];
	            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	              if (cb == fn) { arr.splice(i--, 1); }
	            }
	          } else { delete callbacks[event]; }
	        }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    one: {
	      value: function(event, fn) {
	        function on() {
	          el.off(event, on);
	          fn.apply(el, arguments);
	        }
	        return el.on(event, on)
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    trigger: {
	      value: function(event) {
	        var arguments$1 = arguments;

	        var arglen = arguments.length - 1,
	          args = new Array(arglen),
	          fns,
	          fn,
	          i;

	        for (i = 0; i < arglen; i++) {
	          args[i] = arguments$1[i + 1];
	        }

	        fns = slice.call(callbacks[event] || [], 0);

	        for (i = 0; fn = fns[i]; ++i) {
	          fn.apply(el, args);
	        }

	        if (callbacks['*'] && event != '*')
	          { el.trigger.apply(el, ['*', event].concat(args)); }

	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    }
	  });

	  return el

	};

	function each(list, fn) {
	  var len = list ? list.length : 0;

	  for (var i = 0, el; i < len; ++i) {
	    el = list[i];

	    if (fn(el, i) === false)
	      { i--; }
	  }
	  return list
	}

	function contains(array, item) {
	  return !!(~array.indexOf(item))
	}

	function toCamel(str) {
	  return str.replace(/-(\w)/g, function (_, c) { return c.toUpperCase(); })
	}

	function startsWith(str, value) {
	  return str.slice(0, value.length) === value
	}

	function defineProperty(el, key, value, options) {
	  Object.defineProperty(el, key, extend({
	    value: value,
	    enumerable: false,
	    writable: false,
	    configurable: true
	  }, options));
	  return el
	}

	function extend(src) {
	  var obj, args = arguments;
	  for (var i = 1; i < args.length; ++i) {
	    if (obj = args[i]) {
	      for (var key in obj) {

	        if (isWritable(src, key))
	          { src[key] = obj[key]; }
	      }
	    }
	  }
	  return src
	}

	var misc = Object.freeze({
		each: each,
		contains: contains,
		toCamel: toCamel,
		startsWith: startsWith,
		defineProperty: defineProperty,
		extend: extend
	});

	var EVENTS_PREFIX_REGEX = /^on/;

	function handleEvent(dom, handler, e) {
	  var ptag = this.__.parent,
	    item = this.__.item;

	  if (!item)
	    { while (ptag && !item) {
	      item = ptag.__.item;
	      ptag = ptag.__.parent;
	    } }

	  if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }
	  if (isWritable(e, 'target')) { e.target = e.srcElement; }
	  if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }

	  e.item = item;

	  handler.call(this, e);

	  if (!e.preventUpdate) {
	    var p = getImmediateCustomParentTag(this);

	    if (p.isMounted) { p.update(); }
	  }
	}

	function setEventHandler(name, handler, dom, tag) {
	  var eventName,
	    cb = handleEvent.bind(tag, dom, handler);

	  if (!dom.addEventListener) {
	    dom[name] = cb;
	    return
	  }

	  dom[name] = null;

	  eventName = name.replace(EVENTS_PREFIX_REGEX, '');

	  if (!dom._riotEvents) { dom._riotEvents = {}; }

	  if (dom._riotEvents[name])
	    { dom.removeEventListener(eventName, dom._riotEvents[name]); }

	  dom._riotEvents[name] = cb;
	  dom.addEventListener(eventName, cb, false);
	}

	function updateDataIs(expr, parent) {
	  var tagName = tmpl(expr.value, parent),
	    conf, isVirtual, head, ref;

	  if (expr.tag && expr.tagName === tagName) {
	    expr.tag.update();
	    return
	  }

	  isVirtual = expr.dom.tagName === 'VIRTUAL';

	  if (expr.tag) {

	    if(isVirtual) {
	      head = expr.tag.__.head;
	      ref = createDOMPlaceholder();
	      head.parentNode.insertBefore(ref, head);
	    }

	    expr.tag.unmount(true);
	  }

	  expr.impl = __TAG_IMPL[tagName];
	  conf = {root: expr.dom, parent: parent, hasImpl: true, tagName: tagName};
	  expr.tag = initChildTag(expr.impl, conf, expr.dom.innerHTML, parent);
	  each(expr.attrs, function (a) { return setAttr(expr.tag.root, a.name, a.value); });
	  expr.tagName = tagName;
	  expr.tag.mount();
	  if (isVirtual)
	    { makeReplaceVirtual(expr.tag, ref || expr.tag.root); }

	  parent.on('unmount', function () {
	    var delName = expr.tag.opts.dataIs,
	      tags = expr.tag.parent.tags,
	      _tags = expr.tag.__.parent.tags;
	    arrayishRemove(tags, delName, expr.tag);
	    arrayishRemove(_tags, delName, expr.tag);
	    expr.tag.unmount();
	  });
	}

	function updateExpression(expr) {
	  var dom = expr.dom,
	    attrName = expr.attr,
	    isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName),
	    value = tmpl(expr.expr, this),
	    isValueAttr = attrName === 'riot-value',
	    isVirtual = expr.root && expr.root.tagName === 'VIRTUAL',
	    parent = dom && (expr.parent || dom.parentNode),
	    old;

	  if (expr.bool)
	    { value = value ? attrName : false; }
	  else if (isUndefined(value) || value === null)
	    { value = ''; }

	  if (expr._riot_id) {
	    if (expr.isMounted) {
	      expr.update();

	    } else {
	      expr.mount();

	      if (isVirtual)
	        { makeReplaceVirtual(expr, expr.root); }

	    }
	    return
	  }

	  old = expr.value;
	  expr.value = value;

	  if (expr.update) {
	    expr.update();
	    return
	  }

	  if (expr.isRtag && value) { return updateDataIs(expr, this) }
	  if (old === value) { return }

	  if (isValueAttr && dom.value === value) { return }

	  if (!attrName) {

	    value += '';

	    if (parent) {

	      expr.parent = parent;
	      if (parent.tagName === 'TEXTAREA') {
	        parent.value = value;
	        if (!IE_VERSION) { dom.nodeValue = value; }
	      }
	      else { dom.nodeValue = value; }
	    }
	    return
	  }

	  if (!expr.isAttrRemoved || !value) {
	    remAttr(dom, attrName);
	    expr.isAttrRemoved = true;
	  }

	  if (isFunction(value)) {
	    setEventHandler(attrName, value, dom, this);

	  } else if (isToggle) {
	    if (attrName === HIDE_DIRECTIVE) { value = !value; }
	    dom.style.display = value ? '' : 'none';

	  } else if (isValueAttr) {
	    dom.value = value;

	  } else if (startsWith(attrName, ATTRS_PREFIX) && attrName !== IS_DIRECTIVE) {
	    attrName = attrName.slice(ATTRS_PREFIX.length);
	    if (CASE_SENSITIVE_ATTRIBUTES[attrName])
	      { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }
	    if (value != null)
	      { setAttr(dom, attrName, value); }
	  } else {

	    if (attrName === 'selected' && parent && /^(SELECT|OPTGROUP)$/.test(parent.tagName) && value) {
	      parent.value = dom.value;
	    } if (expr.bool) {
	      dom[attrName] = value;
	      if (!value) { return }
	    } if (value === 0 || value && typeof value !== T_OBJECT) {
	      setAttr(dom, attrName, value);
	    }
	  }
	}

	function updateAllExpressions(expressions) {
	  each(expressions, updateExpression.bind(this));
	}

	var IfExpr = {
	  init: function init(dom, tag, expr) {
	    remAttr(dom, CONDITIONAL_DIRECTIVE);
	    this.tag = tag;
	    this.expr = expr;
	    this.stub = document.createTextNode('');
	    this.pristine = dom;

	    var p = dom.parentNode;
	    p.insertBefore(this.stub, dom);
	    p.removeChild(dom);

	    return this
	  },
	  update: function update() {
	    var newValue = tmpl(this.expr, this.tag);

	    if (newValue && !this.current) {
	      this.current = this.pristine.cloneNode(true);
	      this.stub.parentNode.insertBefore(this.current, this.stub);

	      this.expressions = [];
	      parseExpressions.apply(this.tag, [this.current, this.expressions, true]);
	    } else if (!newValue && this.current) {
	      unmountAll(this.expressions);
	      if (this.current._tag) {
	        this.current._tag.unmount();
	      } else if (this.current.parentNode)
	        { this.current.parentNode.removeChild(this.current); }
	      this.current = null;
	      this.expressions = [];
	    }

	    if (newValue) { updateAllExpressions.call(this.tag, this.expressions); }
	  },
	  unmount: function unmount() {
	    unmountAll(this.expressions || []);
	    delete this.pristine;
	    delete this.parentNode;
	    delete this.stub;
	  }
	};

	var RefExpr = {
	  init: function init(dom, parent, attrName, attrValue) {
	    this.dom = dom;
	    this.attr = attrName;
	    this.rawValue = attrValue;
	    this.parent = parent;
	    this.hasExp = tmpl.hasExpr(attrValue);
	    this.firstRun = true;

	    return this
	  },
	  update: function update() {
	    var value = this.rawValue;
	    if (this.hasExp)
	      { value = tmpl(this.rawValue, this.parent); }

	    if (!this.firstRun && value === this.value) { return }

	    var customParent = this.parent && getImmediateCustomParentTag(this.parent);

	    var tagOrDom = this.tag || this.dom;

	    if (!isBlank(this.value) && customParent)
	      { arrayishRemove(customParent.refs, this.value, tagOrDom); }

	    if (isBlank(value)) {

	      remAttr(this.dom, this.attr);
	    } else {

	      if (customParent) { arrayishAdd(customParent.refs, value, tagOrDom); }

	      setAttr(this.dom, this.attr, value);
	    }
	    this.value = value;
	    this.firstRun = false;
	  },
	  unmount: function unmount() {
	    var tagOrDom = this.tag || this.dom;
	    var customParent = this.parent && getImmediateCustomParentTag(this.parent);
	    if (!isBlank(this.value) && customParent)
	      { arrayishRemove(customParent.refs, this.value, tagOrDom); }
	    delete this.dom;
	    delete this.parent;
	  }
	};

	function mkitem(expr, key, val, base) {
	  var item = base ? Object.create(base) : {};
	  item[expr.key] = key;
	  if (expr.pos) { item[expr.pos] = val; }
	  return item
	}

	function unmountRedundant(items, tags) {
	  var i = tags.length,
	    j = items.length;

	  while (i > j) {
	    i--;
	    remove.apply(tags[i], [tags, i]);
	  }
	}

	function remove(tags, i) {
	  tags.splice(i, 1);
	  this.unmount();
	  arrayishRemove(this.parent, this, this.__.tagName, true);
	}

	function moveNestedTags(i) {
	  var this$1 = this;

	  each(Object.keys(this.tags), function (tagName) {
	    var tag = this$1.tags[tagName];
	    if (isArray(tag))
	      { each(tag, function (t) {
	        moveChildTag.apply(t, [tagName, i]);
	      }); }
	    else
	      { moveChildTag.apply(tag, [tagName, i]); }
	  });
	}

	function move(root, nextTag, isVirtual) {
	  if (isVirtual)
	    { moveVirtual.apply(this, [root, nextTag]); }
	  else
	    { safeInsert(root, this.root, nextTag.root); }
	}

	function insert(root, nextTag, isVirtual) {
	  if (isVirtual)
	    { makeVirtual.apply(this, [root, nextTag]); }
	  else
	    { safeInsert(root, this.root, nextTag.root); }
	}

	function append(root, isVirtual) {
	  if (isVirtual)
	    { makeVirtual.call(this, root); }
	  else
	    { root.appendChild(this.root); }
	}

	function _each(dom, parent, expr) {

	  remAttr(dom, LOOP_DIRECTIVE);

	  var mustReorder = typeof getAttr(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || remAttr(dom, LOOP_NO_REORDER_DIRECTIVE),
	    tagName = getTagName(dom),
	    impl = __TAG_IMPL[tagName] || { tmpl: getOuterHTML(dom) },
	    parentNode = dom.parentNode,
	    placeholder = createDOMPlaceholder(),
	    child = getTag(dom),
	    refExpr = getRefAttr(dom),
	    ifExpr = getAttr(dom, CONDITIONAL_DIRECTIVE),
	    tags = [],
	    oldItems = [],
	    hasKeys,
	    isLoop = true,
	    hasRefExpr = false,
	    isAnonymous = !__TAG_IMPL[tagName],
	    isVirtual = dom.tagName === 'VIRTUAL';

	  expr = tmpl.loopKeys(expr);
	  expr.isLoop = true;

	  if (ifExpr) { remAttr(dom, CONDITIONAL_DIRECTIVE); }

	  if (refExpr) {

	    hasRefExpr = tmpl.hasExpr(refExpr);
	    remRefAttr(dom);
	  }

	  parentNode.insertBefore(placeholder, dom);
	  parentNode.removeChild(dom);

	  expr.update = function updateEach() {

	    var items = tmpl(expr.val, parent),
	      frag = createFrag(),
	      refAttr = refExpr,
	      isObject$$1 = !isArray(items) && !isString(items),
	      root = placeholder.parentNode;

	    if (isObject$$1) {
	      hasKeys = items || false;
	      items = hasKeys ?
	        Object.keys(items).map(function (key) {
	          return mkitem(expr, items[key], key)
	        }) : [];
	    } else {
	      hasKeys = false;
	    }

	    if (ifExpr) {
	      items = items.filter(function(item, i) {
	        if (expr.key && !isObject$$1)
	          { return !!tmpl(ifExpr, mkitem(expr, item, i, parent)) }

	        return !!tmpl(ifExpr, extend(Object.create(parent), item))
	      });
	    }

	    if (refAttr && hasRefExpr) {
	      refAttr = tmpl(refExpr, parent);
	    }

	    if (refAttr) { parent.refs[refAttr] = []; }

	    each(items, function(item, i) {

	      var
	        doReorder = mustReorder && typeof item === T_OBJECT && !hasKeys,
	        oldPos = oldItems.indexOf(item),
	        isNew = !~oldPos,
	        pos = !isNew && doReorder ? oldPos : i,

	        tag = tags[pos],
	        mustAppend = i >= oldItems.length,
	        mustCreate =  doReorder && isNew || !doReorder && !tag;

	      item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;

	      if (mustCreate) {
	        tag = new Tag$1(impl, {
	          parent: parent,
	          isLoop: isLoop,
	          isAnonymous: isAnonymous,
	          root: dom.cloneNode(),
	          item: item
	        }, dom.innerHTML);

	        tag.mount();

	        if (mustAppend)
	          { append.apply(tag, [frag || root, isVirtual]); }
	        else
	          { insert.apply(tag, [root, tags[i], isVirtual]); }

	        if (!mustAppend) { oldItems.splice(i, 0, item); }
	        tags.splice(i, 0, tag);
	        if (child) { arrayishAdd(parent.tags, tagName, tag, true); }
	      } else if (pos !== i && doReorder) {

	        if (contains(items, oldItems[i])) {
	          move.apply(tag, [root, tags[i], isVirtual]);

	          tags.splice(i, 0, tags.splice(pos, 1)[0]);

	          oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
	        } else {
	          remove.apply(tags[i], [tags, i]);
	          oldItems.splice(i, 1);
	        }

	        if (expr.pos) { tag[expr.pos] = i; }

	        if (!child && tag.tags) { moveNestedTags.call(tag, i); }

	        if (refAttr) {
	          parent.refs[refAttr].push(isAnonymous ? tag.root : tag);
	        }
	      }

	      if (!mustCreate) { tag.update(item); }

	      tag.__.item = item;
	      tag.__.parent = parent;
	    });

	    unmountRedundant(items, tags);

	    oldItems = items.slice();

	    root.insertBefore(frag, placeholder);
	  };

	  expr.unmount = function() {
	    each(tags, function(t) { t.unmount(); });
	  };

	  return expr
	}

	function parseExpressions(root, expressions, mustIncludeRoot) {
	  var this$1 = this;

	  var tree = {parent: {children: expressions}};

	  walkNodes(root, function (dom, ctx) {
	    var type = dom.nodeType, parent = ctx.parent, attr, expr, tagImpl;
	    if (!mustIncludeRoot && dom === root) { return {parent: parent} }

	    if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))
	      { parent.children.push({dom: dom, expr: dom.nodeValue}); }

	    if (type !== 1) { return ctx }

	    var isVirtual = dom.tagName === 'VIRTUAL';

	    if (attr = getAttr(dom, LOOP_DIRECTIVE)) {
	      if(isVirtual) { setAttr(dom, 'loopVirtual', true); }
	      parent.children.push(_each(dom, this$1, attr));
	      return false
	    }

	    if (attr = getAttr(dom, CONDITIONAL_DIRECTIVE)) {
	      parent.children.push(Object.create(IfExpr).init(dom, this$1, attr));
	      return false
	    }

	    if (expr = getAttr(dom, IS_DIRECTIVE)) {
	      if (tmpl.hasExpr(expr)) {
	        parent.children.push({isRtag: true, expr: expr, dom: dom, attrs: [].slice.call(dom.attributes)});
	        return false
	      }
	    }

	    tagImpl = getTag(dom);
	    if(isVirtual) {
	      if(getAttr(dom, 'virtualized')) {dom.parentElement.removeChild(dom); }
	      if(!tagImpl && !getAttr(dom, 'virtualized') && !getAttr(dom, 'loopVirtual'))
	        { tagImpl = { tmpl: dom.outerHTML }; }
	    }

	    if (tagImpl && (dom !== root || mustIncludeRoot)) {
	      if(isVirtual && !getAttr(dom, IS_DIRECTIVE)) {

	        setAttr(dom, 'virtualized', true);

	        var tag = new Tag$1({ tmpl: dom.outerHTML },
	          {root: dom, parent: this$1},
	          dom.innerHTML);
	        parent.children.push(tag);
	      } else {
	        var conf = {root: dom, parent: this$1, hasImpl: true};
	        parent.children.push(initChildTag(tagImpl, conf, dom.innerHTML, this$1));
	        return false
	      }
	    }

	    parseAttributes.apply(this$1, [dom, dom.attributes, function(attr, expr) {
	      if (!expr) { return }
	      parent.children.push(expr);
	    }]);

	    return {parent: parent}
	  }, tree);

	  return { tree: tree, root: root }
	}

	function parseAttributes(dom, attrs, fn) {
	  var this$1 = this;

	  each(attrs, function (attr) {
	    var name = attr.name, bool = isBoolAttr(name), expr;

	    if (contains(REF_DIRECTIVES, name)) {
	      expr =  Object.create(RefExpr).init(dom, this$1, name, attr.value);
	    } else if (tmpl.hasExpr(attr.value)) {
	      expr = {dom: dom, expr: attr.value, attr: attr.name, bool: bool};
	    }

	    fn(attr, expr);
	  });
	}

	var reHasYield  = /<yield\b/i;
	var reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig;
	var reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig;
	var reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
	var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' };
	var tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION;
	var GENERIC = 'div';

	function specialTags(el, tmpl, tagName) {

	  var
	    select = tagName[0] === 'o',
	    parent = select ? 'select>' : 'table>';

	  el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
	  parent = el.firstChild;

	  if (select) {
	    parent.selectedIndex = -1;
	  } else {

	    var tname = rootEls[tagName];
	    if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }
	  }
	  return parent
	}

	function replaceYield(tmpl, html) {

	  if (!reHasYield.test(tmpl)) { return tmpl }

	  var src = {};

	  html = html && html.replace(reYieldSrc, function (_, ref, text) {
	    src[ref] = src[ref] || text;
	    return ''
	  }).trim();

	  return tmpl
	    .replace(reYieldDest, function (_, ref, def) {
	      return src[ref] || def || ''
	    })
	    .replace(reYieldAll, function (_, def) {
	      return html || def || ''
	    })
	}

	function mkdom(tmpl, html, checkSvg) {
	  var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/),
	    tagName = match && match[1].toLowerCase(),
	    el = mkEl(GENERIC, checkSvg && isSVGTag(tagName));

	  tmpl = replaceYield(tmpl, html);

	  if (tblTags.test(tagName))
	    { el = specialTags(el, tmpl, tagName); }
	  else
	    { setInnerHTML(el, tmpl); }

	  el.stub = true;

	  return el
	}

	function Tag$2(el, opts) {

	  var ref = this;
	  var name = ref.name;
	  var tmpl = ref.tmpl;
	  var css = ref.css;
	  var attrs = ref.attrs;
	  var onCreate = ref.onCreate;

	  if (!__TAG_IMPL[name]) {
	    tag$1(name, tmpl, css, attrs, onCreate);

	    __TAG_IMPL[name].class = this.constructor;
	  }

	  mountTo(el, name, opts, this);

	  if (css) { styleManager.inject(); }

	  return this
	}

	function tag$1(name, tmpl, css, attrs, fn) {
	  if (isFunction(attrs)) {
	    fn = attrs;

	    if (/^[\w\-]+\s?=/.test(css)) {
	      attrs = css;
	      css = '';
	    } else
	      { attrs = ''; }
	  }

	  if (css) {
	    if (isFunction(css))
	      { fn = css; }
	    else
	      { styleManager.add(css); }
	  }

	  name = name.toLowerCase();
	  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

	  return name
	}

	function tag2$1(name, tmpl, css, attrs, fn) {
	  if (css)
	    { styleManager.add(css, name); }

	  var exists = !!__TAG_IMPL[name];
	  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

	  if (exists && util.hotReloader)
	    { util.hotReloader(name); }

	  return name
	}

	function mount$1(selector, tagName, opts) {
	  var tags = [];

	  function pushTagsTo(root) {
	    if (root.tagName) {
	      var riotTag = getAttr(root, IS_DIRECTIVE);

	      if (tagName && riotTag !== tagName) {
	        riotTag = tagName;
	        setAttr(root, IS_DIRECTIVE, tagName);
	      }

	      var tag$$1 = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

	      if (tag$$1)
	        { tags.push(tag$$1); }
	    } else if (root.length)
	      { each(root, pushTagsTo); }
	  }

	  styleManager.inject();

	  if (isObject(tagName)) {
	    opts = tagName;
	    tagName = 0;
	  }

	  var elem;
	  var allTags;

	  if (isString(selector)) {
	    selector = selector === '*' ?

	      allTags = selectTags() :

	      selector + selectTags(selector.split(/, */));

	    elem = selector ? $$(selector) : [];
	  }
	  else

	    { elem = selector; }

	  if (tagName === '*') {

	    tagName = allTags || selectTags();

	    if (elem.tagName)
	      { elem = $$(tagName, elem); }
	    else {

	      var nodeList = [];

	      each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });

	      elem = nodeList;
	    }

	    tagName = 0;
	  }

	  pushTagsTo(elem);

	  return tags
	}

	var mixins = {};
	var globals = mixins[GLOBAL_MIXIN] = {};
	var _id = 0;

	function mixin$1(name, mix, g) {

	  if (isObject(name)) {
	    mixin$1(("__unnamed_" + (_id++)), name, true);
	    return
	  }

	  var store = g ? globals : mixins;

	  if (!mix) {
	    if (isUndefined(store[name]))
	      { throw new Error('Unregistered mixin: ' + name) }

	    return store[name]
	  }

	  store[name] = isFunction(mix) ?
	    extend(mix.prototype, store[name] || {}) && mix :
	    extend(store[name] || {}, mix);
	}

	function update$1() {
	  return each(__TAGS_CACHE, function (tag$$1) { return tag$$1.update(); })
	}

	function unregister$1(name) {
	  delete __TAG_IMPL[name];
	}

	var core = Object.freeze({
		Tag: Tag$2,
		tag: tag$1,
		tag2: tag2$1,
		mount: mount$1,
		mixin: mixin$1,
		update: update$1,
		unregister: unregister$1
	});

	var __uid = 0;

	function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {

	  if (isLoop && isAnonymous) { return }

	  var ctx = !isAnonymous && isLoop ? this : parent || this;
	  each(instAttrs, function (attr) {
	    if (attr.expr) { updateAllExpressions.call(ctx, [attr.expr]); }
	    opts[toCamel(attr.name)] = attr.expr ? attr.expr.value : attr.value;
	  });
	}

	function Tag$1(impl, conf, innerHTML) {

	  var opts = extend({}, conf.opts),
	    parent = conf.parent,
	    isLoop = conf.isLoop,
	    isAnonymous = conf.isAnonymous,
	    item = cleanUpData(conf.item),
	    instAttrs = [],
	    implAttrs = [],
	    expressions = [],
	    root = conf.root,
	    tagName = conf.tagName || getTagName(root),
	    isVirtual = tagName === 'virtual',
	    propsInSyncWithParent = [],
	    dom;

	  observable$1(this);

	  if (impl.name && root._tag) { root._tag.unmount(true); }

	  this.isMounted = false;
	  root.isLoop = isLoop;

	  defineProperty(this, '__', {
	    isAnonymous: isAnonymous,
	    instAttrs: instAttrs,
	    innerHTML: innerHTML,
	    tagName: tagName,

	    virts: [],
	    tail: null,
	    head: null,
	    parent: null,
	    item: null
	  });

	  defineProperty(this, '_riot_id', ++__uid);

	  extend(this, { root: root, opts: opts }, item);

	  defineProperty(this, 'parent', parent || null);
	  defineProperty(this, 'tags', {});
	  defineProperty(this, 'refs', {});

	  dom = mkdom(impl.tmpl, innerHTML, isLoop);

	  defineProperty(this, 'update', function tagUpdate(data) {
	    if (isFunction(this.shouldUpdate) && !this.shouldUpdate(data)) { return this }

	    data = cleanUpData(data);

	    if (isLoop && isAnonymous) { inheritFrom.apply(this, [this.parent, propsInSyncWithParent]); }
	    extend(this, data);
	    updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs]);
	    if (this.isMounted) { this.trigger('update', data); }
	    updateAllExpressions.call(this, expressions);
	    if (this.isMounted) { this.trigger('updated'); }

	    return this

	  }.bind(this));

	  defineProperty(this, 'mixin', function tagMixin() {
	    var this$1 = this;

	    each(arguments, function (mix) {
	      var instance,
	        props = [],
	        obj;

	      mix = isString(mix) ? mixin$1(mix) : mix;

	      if (isFunction(mix)) {

	        instance = new mix();
	      } else { instance = mix; }

	      var proto = Object.getPrototypeOf(instance);

	      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }
	      while (obj = Object.getPrototypeOf(obj || instance))

	      each(props, function (key) {

	        if (key !== 'init') {

	          var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key);
	          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

	          if (!this$1.hasOwnProperty(key) && hasGetterSetter) {
	            Object.defineProperty(this$1, key, descriptor);
	          } else {
	            this$1[key] = isFunction(instance[key]) ?
	              instance[key].bind(this$1) :
	              instance[key];
	          }
	        }
	      });

	      if (instance.init)
	        { instance.init.bind(this$1)(); }
	    });
	    return this
	  }.bind(this));

	  defineProperty(this, 'mount', function tagMount() {
	    var this$1 = this;

	    var _parent = this.__.parent;

	    root._tag = this;

	    parseAttributes.apply(parent, [root, root.attributes, function (attr, expr) {
	      if (!isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = this$1; }
	      attr.expr = expr;
	      instAttrs.push(attr);
	    }]);

	    implAttrs = [];
	    walkAttrs(impl.attrs, function (k, v) { implAttrs.push({name: k, value: v}); });
	    parseAttributes.apply(this, [root, implAttrs, function (attr, expr) {
	      if (expr) { expressions.push(expr); }
	      else { setAttr(root, attr.name, attr.value); }
	    }]);

	    if (_parent && isAnonymous) { inheritFrom.apply(this, [_parent, propsInSyncWithParent]); }

	    updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs]);

	    var globalMixin = mixin$1(GLOBAL_MIXIN);

	    if (globalMixin) {
	      for (var i in globalMixin) {
	        if (globalMixin.hasOwnProperty(i)) {
	          this$1.mixin(globalMixin[i]);
	        }
	      }
	    }

	    if (impl.fn) { impl.fn.call(this, opts); }

	    this.trigger('before-mount');

	    parseExpressions.apply(this, [dom, expressions, false]);

	    this.update(item);

	    if (isLoop && isAnonymous) {

	      this.root = root = dom.firstChild;
	    } else {
	      while (dom.firstChild) { root.appendChild(dom.firstChild); }
	      if (root.stub) { root = parent.root; }
	    }

	    defineProperty(this, 'root', root);
	    defineProperty(this, 'isMounted', true);

	    if (!this.parent || this.parent.isMounted) {
	      this.trigger('mount');
	    }

	    else { this.parent.one('mount', function () {
	      this$1.trigger('mount');
	    }); }

	    return this

	  }.bind(this));

	  defineProperty(this, 'unmount', function tagUnmount(mustKeepRoot) {
	    var this$1 = this;

	    var el = this.root,
	      p = el.parentNode,
	      ptag,
	      tagIndex = __TAGS_CACHE.indexOf(this);

	    this.trigger('before-unmount');

	    walkAttrs(impl.attrs, function (name) {
	      if (startsWith(name, ATTRS_PREFIX))
	        { name = name.slice(ATTRS_PREFIX.length); }
	      remAttr(root, name);
	    });

	    if (~tagIndex)
	      { __TAGS_CACHE.splice(tagIndex, 1); }

	    if (p) {
	      if (parent) {
	        ptag = getImmediateCustomParentTag(parent);

	        if (isVirtual) {
	          Object.keys(this.tags).forEach(function (tagName) {
	            arrayishRemove(ptag.tags, tagName, this$1.tags[tagName]);
	          });
	        } else {
	          arrayishRemove(ptag.tags, tagName, this);
	          if(parent !== ptag)
	            { arrayishRemove(parent.tags, tagName, this); }
	        }
	      } else {
	        while (el.firstChild) { el.removeChild(el.firstChild); }
	      }

	      if (!mustKeepRoot) {
	        p.removeChild(el);
	      } else {

	        remAttr(p, IS_DIRECTIVE);
	      }
	    }

	    if (this.__.virts) {
	      each(this.__.virts, function (v) {
	        if (v.parentNode) { v.parentNode.removeChild(v); }
	      });
	    }

	    unmountAll(expressions);
	    each(instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });

	    this.trigger('unmount');
	    this.off('*');
	    defineProperty(this, 'isMounted', false);

	    delete this.root._tag;

	    return this

	  }.bind(this));
	}

	function getTag(dom) {
	  return dom.tagName && __TAG_IMPL[getAttr(dom, IS_DIRECTIVE) ||
	    getAttr(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]
	}

	function inheritFrom(target, propsInSyncWithParent) {
	  var this$1 = this;

	  each(Object.keys(target), function (k) {

	    var mustSync = !isReservedName(k) && contains(propsInSyncWithParent, k);

	    if (isUndefined(this$1[k]) || mustSync) {

	      if (!mustSync) { propsInSyncWithParent.push(k); }
	      this$1[k] = target[k];
	    }
	  });
	}

	function getRefAttr(dom) {
	  return getAttr(dom, REF_DIRECTIVES[0]) || getAttr(dom, REF_DIRECTIVES[1])
	}

	function remRefAttr(dom) {
	  REF_DIRECTIVES.forEach(function (dir) { return remAttr(dom, dir); });
	}

	function moveChildTag(tagName, newPos) {
	  var parent = this.parent,
	    tags;

	  if (!parent) { return }

	  tags = parent.tags[tagName];

	  if (isArray(tags))
	    { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }
	  else { arrayishAdd(parent.tags, tagName, this); }
	}

	function initChildTag(child, opts, innerHTML, parent) {
	  var tag = new Tag$1(child, opts, innerHTML),
	    tagName = opts.tagName || getTagName(opts.root, true),
	    ptag = getImmediateCustomParentTag(parent);

	  defineProperty(tag, 'parent', ptag);

	  tag.__.parent = parent;

	  arrayishAdd(ptag.tags, tagName, tag);

	  if (ptag !== parent)
	    { arrayishAdd(parent.tags, tagName, tag); }

	  opts.root.innerHTML = '';

	  return tag
	}

	function getImmediateCustomParentTag(tag) {
	  var ptag = tag;
	  while (ptag.__.isAnonymous) {
	    if (!ptag.parent) { break }
	    ptag = ptag.parent;
	  }
	  return ptag
	}

	function unmountAll(expressions) {
	  each(expressions, function(expr) {
	    if (expr instanceof Tag$1) { expr.unmount(true); }
	    else if (expr.unmount) { expr.unmount(); }
	  });
	}

	function getTagName(dom, skipDataIs) {
	  var child = getTag(dom),
	    namedTag = !skipDataIs && getAttr(dom, IS_DIRECTIVE);
	  return namedTag && !tmpl.hasExpr(namedTag) ?
	                namedTag :
	              child ? child.name : dom.tagName.toLowerCase()
	}

	function cleanUpData(data) {
	  if (!(data instanceof Tag$1) && !(data && isFunction(data.trigger)))
	    { return data }

	  var o = {};
	  for (var key in data) {
	    if (!RE_RESERVED_NAMES.test(key)) { o[key] = data[key]; }
	  }
	  return o
	}

	function arrayishAdd(obj, key, value, ensureArray) {
	  var dest = obj[key];
	  var isArr = isArray(dest);

	  if (dest && dest === value) { return }

	  if (!dest && ensureArray) { obj[key] = [value]; }
	  else if (!dest) { obj[key] = value; }

	  else if (!isArr || isArr && !contains(dest, value)) {
	    if (isArr) { dest.push(value); }
	    else { obj[key] = [dest, value]; }
	  }
	}

	function arrayishRemove(obj, key, value, ensureArray) {
	  if (isArray(obj[key])) {
	    each(obj[key], function(item, i) {
	      if (item === value) { obj[key].splice(i, 1); }
	    });
	    if (!obj[key].length) { delete obj[key]; }
	    else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }
	  } else
	    { delete obj[key]; }
	}

	function isInStub(dom) {
	  while (dom) {
	    if (dom.inStub)
	      { return true }
	    dom = dom.parentNode;
	  }
	  return false
	}

	function mountTo(root, tagName, opts, ctx) {
	  var impl = __TAG_IMPL[tagName],
	    implClass = __TAG_IMPL[tagName].class,
	    tag = ctx || (implClass ? Object.create(implClass.prototype) : {}),

	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;

	  root.innerHTML = '';

	  var conf = { root: root, opts: opts };
	  if (opts && opts.parent) { conf.parent = opts.parent; }

	  if (impl && root) { Tag$1.apply(tag, [impl, conf, innerHTML]); }

	  if (tag && tag.mount) {
	    tag.mount(true);

	    if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }
	  }

	  return tag
	}

	function makeReplaceVirtual(tag, ref) {
	  var frag = createFrag();
	  makeVirtual.call(tag, frag);
	  ref.parentNode.replaceChild(frag, ref);
	}

	function makeVirtual(src, target) {
	  var this$1 = this;

	  var head = createDOMPlaceholder(),
	    tail = createDOMPlaceholder(),
	    frag = createFrag(),
	    sib, el;

	  this.__.head = this.root.insertBefore(head, this.root.firstChild);
	  this.__.tail = this.root.appendChild(tail);

	  el = this.__.head;

	  while (el) {
	    sib = el.nextSibling;
	    frag.appendChild(el);
	    this$1.__.virts.push(el);
	    el = sib;
	  }

	  if (target)
	    { src.insertBefore(frag, target.__.head); }
	  else
	    { src.appendChild(frag); }
	}

	function moveVirtual(src, target) {
	  var this$1 = this;

	  var el = this.__.head,
	    frag = createFrag(),
	    sib;

	  while (el) {
	    sib = el.nextSibling;
	    frag.appendChild(el);
	    el = sib;
	    if (el === this$1.__.tail) {
	      frag.appendChild(el);
	      src.insertBefore(frag, target.__.head);
	      break
	    }
	  }
	}

	function selectTags(tags) {

	  if (!tags) {
	    var keys = Object.keys(__TAG_IMPL);
	    return keys + selectTags(keys)
	  }

	  return tags
	    .filter(function (t) { return !/[^-\w]/.test(t); })
	    .reduce(function (list, t) {
	      var name = t.trim().toLowerCase();
	      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]"
	    }, '')
	}

	var tags = Object.freeze({
		getTag: getTag,
		inheritFrom: inheritFrom,
		getRefAttr: getRefAttr,
		remRefAttr: remRefAttr,
		moveChildTag: moveChildTag,
		initChildTag: initChildTag,
		getImmediateCustomParentTag: getImmediateCustomParentTag,
		unmountAll: unmountAll,
		getTagName: getTagName,
		cleanUpData: cleanUpData,
		arrayishAdd: arrayishAdd,
		arrayishRemove: arrayishRemove,
		isInStub: isInStub,
		mountTo: mountTo,
		makeReplaceVirtual: makeReplaceVirtual,
		makeVirtual: makeVirtual,
		moveVirtual: moveVirtual,
		selectTags: selectTags
	});

	var settings = Object.create(brackets.settings);

	var util = {
	  tmpl: tmpl,
	  brackets: brackets,
	  styleManager: styleManager,
	  vdom: __TAGS_CACHE,
	  styleNode: styleManager.styleNode,

	  dom: dom,
	  check: check,
	  misc: misc,
	  tags: tags
	};

	var Tag$$1 = Tag$2;
	var tag$$1 = tag$1;
	var tag2$$1 = tag2$1;
	var mount$$1 = mount$1;
	var mixin$$1 = mixin$1;
	var update$$1 = update$1;
	var unregister$$1 = unregister$1;
	var observable = observable$1;

	var riot$1 = extend({}, core, {
	  observable: observable$1,
	  settings: settings,
	  util: util,
	});

	exports.settings = settings;
	exports.util = util;
	exports.Tag = Tag$$1;
	exports.tag = tag$$1;
	exports.tag2 = tag2$$1;
	exports.mount = mount$$1;
	exports.mixin = mixin$$1;
	exports.update = update$$1;
	exports.unregister = unregister$$1;
	exports.observable = observable;
	exports['default'] = riot$1;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

  },

  function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(34);

	riot.tag2('navbar', '<nav> <div class="nav-wrapper"> <a href="#!" class="brand-logo">Logo</a> <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a> <ul class="right hide-on-med-and-down"> <li><a href="sass.html">Sass</a></li> <li><a href="badges.html">Components</a></li> <li><a href="collapsible.html">Javascript</a></li> <li><a href="mobile.html">Mobile</a></li> </ul> <ul class="side-nav" id="mobile-demo"> <li><a href="sass.html">Sass</a></li> <li><a href="badges.html">Components</a></li> <li><a href="collapsible.html">Javascript</a></li> <li><a href="mobile.html">Mobile</a></li> </ul> </div> </nav>', 'navbar nav,[data-is="navbar"] nav{ background-color: rgba(0,0,0,.75); }', '', function(opts) {
	    this.on('mount', function(){

	      var $node = $(this.root);
	      $node.find(".button-collapse").sideNav();
	    });
	});

  },

  function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(34);

	riot.tag2('footing', '<div class="container-fluid"> <div class="row"> <footer class="footer-wrapper"> <section class="social-media-container"> <virtual each="{social_link in social_media_items}"> <a class="social_media_link" target="_blank" href="{social_link.url}"> <img class="tooltipped" data-position="top" data-delay="30" data-tooltip="{social_link.title}" riot-src="{social_link.src}" alt="{social_link.title}"> </a> <img src="" alt=""> </virtual> </section> </footer> </div> </div>', 'footing .footer-wrapper,[data-is="footing"] .footer-wrapper{ background-color:#282828; width:100%; height:55px; position:fixed; bottom:0px; left:0px; z-index:1002; } footing .social-media-container,[data-is="footing"] .social-media-container{ height:100%; display:inline-block; float:right; } footing .social_media_link img,[data-is="footing"] .social_media_link img{ height:100%; padding:5%; }', '', function(opts) {

	    this.on('mount', function() {
	      var $node = $(this.root);
	      $node.find('.tooltipped').tooltip({delay: 50});
	    })

	    this.social_media_items = [
	    {title:'facebook', src: 'public/images/footer_assets/facebook.svg', url: '#!'},
	    {title:'Instagram', src: 'public/images/footer_assets/instagram.svg', url: '#!placeulrhere'},
	    {title:'Twitter', src: 'public/images/footer_assets/twitter.svg', url: '#!placeulrhere'},
	    {title:'LinkedIn', src: 'public/images/footer_assets/linkedin.svg', url: '#!placeulrhere'},
	    {title:'Youtube', src: 'public/images/footer_assets/youtube.svg', url: '#!placeulrhere'},
	    ];
	});

  },

  function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(34);

	riot.tag2('sample', '<div class="container center-align"> <h1 class="test">This is sample 1</h1> <a href="#sample2" class="btn btn-large teal lighten-2">Go to Sample 2</a> </div>', 'sample .test,[data-is="sample"] .test{ color:red; }', '', function(opts) {
	    this.on('mount', function(){
	      var $node = $(this.root);
	      $node.find('h1').hide().fadeIn(1500);
	    });
	});

  },

  function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(34);

	riot.tag2('sample2', '<div class="container center-align"> <h1 class="test2">This is sample 2</h1> <a href="#" class="btn btn-large teal lighten-2">Go to Sample 1</a> </div>', '', '', function(opts) {
	});

  },

  function(module, exports, __webpack_require__) {

	'use strict';

	var riot = __webpack_require__(34);
	var route = __webpack_require__(40);

	riot.mount('*');
	route(function (scene) {
	  switch (scene) {
	    case 'sample2':
	      riot.mount('#main-viewport', 'sample2');
	      break;
	    default:

	      riot.mount('#main-viewport', 'sample');
	      break;
	  }
	});

	route.base('#');
	route.start(true);

  },

  function(module, exports, __webpack_require__) {

	'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var observable = _interopDefault(__webpack_require__(41));

	var RE_ORIGIN = /^.+?\/\/+[^\/]+/;
	var EVENT_LISTENER = 'EventListener';
	var REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER;
	var ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER;
	var HAS_ATTRIBUTE = 'hasAttribute';
	var POPSTATE = 'popstate';
	var HASHCHANGE = 'hashchange';
	var TRIGGER = 'trigger';
	var MAX_EMIT_STACK_LEVEL = 3;
	var win = typeof window != 'undefined' && window;
	var doc = typeof document != 'undefined' && document;
	var hist = win && history;
	var loc = win && (hist.location || win.location);
	var prot = Router.prototype;
	var clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click';
	var central = observable();

	var started = false;
	var routeFound = false;
	var debouncedEmit;
	var base;
	var current;
	var parser;
	var secondParser;
	var emitStack = [];
	var emitStackLevel = 0;

	function DEFAULT_PARSER(path) {
	  return path.split(/[/?#]/)
	}

	function DEFAULT_SECOND_PARSER(path, filter) {
	  var f = filter
	    .replace(/\?/g, '\\?')
	    .replace(/\*/g, '([^/?#]+?)')
	    .replace(/\.\./, '.*');
	  var re = new RegExp(("^" + f + "$"));
	  var args = path.match(re);

	  if (args) { return args.slice(1) }
	}

	function debounce(fn, delay) {
	  var t;
	  return function () {
	    clearTimeout(t);
	    t = setTimeout(fn, delay);
	  }
	}

	function start(autoExec) {
	  debouncedEmit = debounce(emit, 1);
	  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
	  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	  doc[ADD_EVENT_LISTENER](clickEvent, click);
	  if (autoExec) { emit(true); }
	}

	function Router() {
	  this.$ = [];
	  observable(this);
	  central.on('stop', this.s.bind(this));
	  central.on('emit', this.e.bind(this));
	}

	function normalize(path) {
	  return path.replace(/^\/|\/$/, '')
	}

	function isString(str) {
	  return typeof str == 'string'
	}

	function getPathFromRoot(href) {
	  return (href || loc.href).replace(RE_ORIGIN, '')
	}

	function getPathFromBase(href) {
	  return base[0] === '#'
	    ? (href || loc.href || '').split(base)[1] || ''
	    : (loc ? getPathFromRoot(href) : href || '').replace(base, '')
	}

	function emit(force) {

	  var isRoot = emitStackLevel === 0;
	  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) { return }

	  emitStackLevel++;
	  emitStack.push(function() {
	    var path = getPathFromBase();
	    if (force || path !== current) {
	      central[TRIGGER]('emit', path);
	      current = path;
	    }
	  });
	  if (isRoot) {
	    var first;
	    while (first = emitStack.shift()) { first(); }
	    emitStackLevel = 0;
	  }
	}

	function click(e) {
	  if (
	    e.which !== 1
	    || e.metaKey || e.ctrlKey || e.shiftKey
	    || e.defaultPrevented
	  ) { return }

	  var el = e.target;
	  while (el && el.nodeName !== 'A') { el = el.parentNode; }

	  if (
	    !el || el.nodeName !== 'A'
	    || el[HAS_ATTRIBUTE]('download')
	    || !el[HAS_ATTRIBUTE]('href')
	    || el.target && el.target !== '_self'
	    || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) === -1
	  ) { return }

	  if (el.href !== loc.href
	    && (
	      el.href.split('#')[0] === loc.href.split('#')[0]
	      || base[0] !== '#' && getPathFromRoot(el.href).indexOf(base) !== 0
	      || base[0] === '#' && el.href.split(base)[0] !== loc.href.split(base)[0]
	      || !go(getPathFromBase(el.href), el.title || doc.title)
	    )) { return }

	  e.preventDefault();
	}

	function go(path, title, shouldReplace) {

	  if (!hist) { return central[TRIGGER]('emit', getPathFromBase(path)) }

	  path = base + normalize(path);
	  title = title || doc.title;

	  shouldReplace
	    ? hist.replaceState(null, title, path)
	    : hist.pushState(null, title, path);

	  doc.title = title;
	  routeFound = false;
	  emit();
	  return routeFound
	}

	prot.m = function(first, second, third) {
	  if (isString(first) && (!second || isString(second))) { go(first, second, third || false); }
	  else if (second) { this.r(first, second); }
	  else { this.r('@', first); }
	};

	prot.s = function() {
	  this.off('*');
	  this.$ = [];
	};

	prot.e = function(path) {
	  this.$.concat('@').some(function(filter) {
	    var args = (filter === '@' ? parser : secondParser)(normalize(path), normalize(filter));
	    if (typeof args != 'undefined') {
	      this[TRIGGER].apply(null, [filter].concat(args));
	      return routeFound = true
	    }
	  }, this);
	};

	prot.r = function(filter, action) {
	  if (filter !== '@') {
	    filter = '/' + normalize(filter);
	    this.$.push(filter);
	  }
	  this.on(filter, action);
	};

	var mainRouter = new Router();
	var route = mainRouter.m.bind(mainRouter);

	route.create = function() {
	  var newSubRouter = new Router();

	  var router = newSubRouter.m.bind(newSubRouter);

	  router.stop = newSubRouter.s.bind(newSubRouter);
	  return router
	};

	route.base = function(arg) {
	  base = arg || '#';
	  current = getPathFromBase();
	};

	route.exec = function() {
	  emit(true);
	};

	route.parser = function(fn, fn2) {
	  if (!fn && !fn2) {

	    parser = DEFAULT_PARSER;
	    secondParser = DEFAULT_SECOND_PARSER;
	  }
	  if (fn) { parser = fn; }
	  if (fn2) { secondParser = fn2; }
	};

	route.query = function() {
	  var q = {};
	  var href = loc.href || current;
	  href.replace(/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v; });
	  return q
	};

	route.stop = function () {
	  if (started) {
	    if (win) {
	      win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
	      win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
	      doc[REMOVE_EVENT_LISTENER](clickEvent, click);
	    }
	    central[TRIGGER]('stop');
	    started = false;
	  }
	};

	route.start = function (autoExec) {
	  if (!started) {
	    if (win) {
	      if (document.readyState === 'complete') { start(autoExec); }

	      else { win[ADD_EVENT_LISTENER]('load', function() {
	        setTimeout(function() { start(autoExec); }, 1);
	      }); }
	    }
	    started = true;
	  }
	};

	route.base();
	route.parser();

	module.exports = route;

  },

  function(module, exports, __webpack_require__) {

	;(function(window, undefined) {var observable = function(el) {

	  el = el || {}

	  var callbacks = {},
	    slice = Array.prototype.slice

	  Object.defineProperties(el, {

	    on: {
	      value: function(event, fn) {
	        if (typeof fn == 'function')
	          (callbacks[event] = callbacks[event] || []).push(fn)
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    off: {
	      value: function(event, fn) {
	        if (event == '*' && !fn) callbacks = {}
	        else {
	          if (fn) {
	            var arr = callbacks[event]
	            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	              if (cb == fn) arr.splice(i--, 1)
	            }
	          } else delete callbacks[event]
	        }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    one: {
	      value: function(event, fn) {
	        function on() {
	          el.off(event, on)
	          fn.apply(el, arguments)
	        }
	        return el.on(event, on)
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    trigger: {
	      value: function(event) {

	        var arglen = arguments.length - 1,
	          args = new Array(arglen),
	          fns,
	          fn,
	          i

	        for (i = 0; i < arglen; i++) {
	          args[i] = arguments[i + 1]
	        }

	        fns = slice.call(callbacks[event] || [], 0)

	        for (i = 0; fn = fns[i]; ++i) {
	          fn.apply(el, args)
	        }

	        if (callbacks['*'] && event != '*')
	          el.trigger.apply(el, ['*', event].concat(args))

	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    }
	  })

	  return el

	}

	  if (true)
	    module.exports = observable
	  else if (typeof define === 'function' && define.amd)
	    define(function() { return observable })
	  else
	    window.observable = observable

	})(typeof window != 'undefined' ? window : undefined);

  }
  ]);
});
