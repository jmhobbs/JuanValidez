var JuanValidez = {
	
	validators: {},

	addValidator: function ( name, fn ) {
		this.validators[name] = fn;
	},

	removeValidator: function ( validator ) {
		if( this.validators[validator] ) {
			delete this.validators[validator];
		}
	},

	runValidator: function ( validator, value, args ) {
		// args is optional
		args = ( "undefined" == typeof( args ) ) ? [] : args; 
		try {
			if( ! this.validators[validator] ) { throw new TypeError( "No such validator: " + validator ); }
			return this.validators[validator].apply( value, args );
		}
		catch ( error ) {
			if( window.console && window.console.log ) { console.log( error ); }
			return false;
		}
	},

	validate: function ( validators, value ) {
	
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
