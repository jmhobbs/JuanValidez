( function ( $ ) {	

	$.fn.extend( {

		validate: function ( options ) {

			var valid = true,
			    defaults,
					options;
			
			defaults = {
				before: function () {
					this.removeClass( 'invalid' );
				},
				onFailure: function ( failures ) {
					this.addClass( 'invalid' );
				},
				onSuccess: function () {}
			};

			options = $.extend( defaults, options );

			this.each( function () {

				var failures,
				    value,
						compares,
				    $el = $(this);

				options.before.call( $el );

				// Special case for checkbox
				if( $el.is( '[type=checkbox]' ) ) {
					value = ( $el.is( ':checked' ) ) ? $el.val() : '';
				}
				else {
					value = $el.val();
				}

				failures = JuanValidez.validate( value, $el.data( 'validates' ) );

				// Comparators take more work
				compares = $el.data( 'compares' );
				if( "string" == typeof compares ) {
					$.each( compares.split( ' ' ), function ( index, element ) {
						var chunks, validator, selectors;
						chunks = element.split( ':' );
						validator = chunks[0];
						selectors = chunks[1].split( ',' );
						$.each( selectors, function ( index, selector ) {
							if( ! JuanValidez.runValidator( validator, value, [ $(selector).val() ] ) ) {
								failures.push( validator + ':' + selector );
							}
						} );
					} );
				}

				if( failures.length > 0 ) {
					valid = false;
					options.onFailure.call( $el, failures );
				}
				else {
					options.onSuccess.call( $el );
				}
			} );

			return valid;
		}

	} );

} )(jQuery);
