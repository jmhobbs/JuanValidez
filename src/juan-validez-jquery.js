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
				    $el = $(this);

				options.before.call( $el );

				failures = JuanValidez.validate( $el.val(), $el.data( 'validates' ) );

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
