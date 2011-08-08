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

JuanValidez.addValidator( 
	"integer",
	function () {
		return /^[0-9]+$/.test( this );
	}
);
