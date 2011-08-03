describe( "JuanValidez LOL Rule", function () {

	describe( "lol", function () {

		describe( "when given a string containing no lol or rofl", function () {
			it( "should not validate", function () {
				expect( JuanValidez.runValidator( 'lol', 'I laughed out loud!', [] ) ).toBeFalsy();
			} );
		} );

		describe( "when given a string with a \"lol\" in it", function () {
			it( "should validate", function () {
				expect( JuanValidez.runValidator( 'lol', 'And I was like, "lol"!', [] ) ).toBeTruthy();
			} );
		} );

		describe( "when given a string with \"rofl\" in it", function () {
			it( "should validate", function () {
				expect( JuanValidez.runValidator( 'lol', 'Look! A rofl copter!', [] ) ).toBeTruthy();
			} );
		} );

		describe( "when given a string containing a lol or rofl inside another word", function () {
			it( "should not validate", function () {
				expect( JuanValidez.runValidator( 'lol', 'I trololed him. ', [] ) ).toBeFalsy();
				expect( JuanValidez.runValidator( 'lol', 'I ate a stack of wrofls. ', [] ) ).toBeFalsy();
			} );
		} );

	} );

} );
