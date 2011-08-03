/* 
	This is a basic example of how to add a validator.

	It checks to make sure you used "lol" or "rofl" in your string.
*/
JuanValidez.addValidator(
	"lol", // name of the validator
	function () {
		// "this" is the string to validate.
		// Return true if it's valid, false if not.
		// It's that simple.
		return ( null != /\b(lol|rofl)/i.exec( this ) );
	}
);
