/*!
	JuanValidez Library v0.0.1
	https://github.com/jmhobbs/JuanValidez

	Copyright 2011, John Hobbs
	Licensed under the MIT license.
	https://github.com/jmhobbs/JuanValidez/blob/master/LICENSE
*/
var JuanValidez = {
	
	_validators: {},

	/*
		Get the names of all currently loaded validators.

		\returns Array
	*/
	validators: function () {
		var key,
		    keys = [];

		for( key in this._validators ) {
			keys.push( key );
		}

		return keys;
	},

	/*
		Register a validator.

		\param name Name of the validator. Be unique but concise.
		\param fn The validation function.
	*/
	addValidator: function ( name, fn ) {
		this._validators[name] = fn;
	},

	/*
		Remove a registered validator.

		\param name The name of the validator to remove.
	*/
	removeValidator: function ( name ) {
		if( this._validators[name] ) {
			delete this._validators[name];
		}
	},

	/*
		Execute a single validator. If the validator does not exist, the validation is false.

		\param validator The name of the validator to run.
		\param value The value to test.
		\param args Arguments to pass to the validator, as an array. (optional)

		\returns boolean True if the value validated. False if not.
	*/
	runValidator: function ( validator, value, args ) {
		// args is optional
		args = ( "undefined" == typeof( args ) ) ? [] : args; 
		try {
			if( ! this._validators[validator] ) { throw new TypeError( "No such validator: " + validator ); }
			return this._validators[validator].apply( value, args );
		}
		catch ( error ) {
			if( window.console && window.console.log ) { console.log( error ); }
			return false;
		}
	},

	/*
		Validate a value given a JuanValidez formatted string.

		Example:
			// Validate the string "hello" against the "required" validator and the "length" validator (minimum length 4, maximum 10)
			JuanValidez.validate( 'hello', 'required length:4,10' );

		\param value The value to validate.
		\param validators The string of validators to test against.
	*/
	validate: function ( value, validators ) {
	
		// If there are no validation rules, it's valid.
		if( 
			'undefined' == typeof( validators ) || 
			'' == validators.replace( /^\s*(\S*)\s*$/, '$1' ) 
		) { return []; }

		var vds      = validators.split( ' ' ),
		    failed   = [],
		    valid    = true,
				vd_valid,
				args,
				validator;

		for( i in vds ) {
			args = vds[i].split( ':' );
			validator = args[0];
			args = args.slice( 1 ).join( ':' ).split( ',' );

			vd_valid = this.runValidator( validator, value, args );
			if( ! vd_valid ) {
				failed.push( validator );
				valid = false;
			}
		}

		return failed;
	}

};
