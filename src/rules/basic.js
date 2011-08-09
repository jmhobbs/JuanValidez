JuanValidez.addValidator(
	"required",
	function () { return this.replace( /^\s*(\S*)\s*/, '$1' ) != ''; }
);

JuanValidez.addValidator(
	"length",
	function ( min, max ) {
		if( "undefined" === typeof max ) {
			return ( this.length >= min );
		}
		else {
			return ( this.length >= min && this.length <= max );
		}
	}
);

/* Check if the string is a representation of a positive integer */
JuanValidez.addValidator( 
	"integer",
	function () {
		return /^[0-9]+$/.test( this );
	}
);

/* 
	Email validation is a complex subject. 
	This is only a very simple test. 
	Implement your own if you really need something else.
*/
JuanValidez.addValidator(
	"email",
	function () {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( this );
	}
);

