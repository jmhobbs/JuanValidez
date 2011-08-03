describe( "JuanValidez Basic Rule", function () {

	describe( "required", function () {

		describe( "when given an empty string", function () {
			it( "should not validate", function () {
				expect( JuanValidez.runValidator( 'required', '', [] ) ).toBeFalsy();
			} );
		} );

		describe( "when given a string consisting of space only", function () {
			it( "should not validate", function () {
				expect( JuanValidez.runValidator( 'required', '  	  ', [] ) ).toBeFalsy();
			} );
		} );

		describe( "when given a non-empty string", function () {
			it( "should validate", function () {
				expect( JuanValidez.runValidator( 'required', 'Validate Me', [] ) ).toBeTruthy();
			} );
		} );

	} );

	describe( "length", function () {

		describe( "when only a minimum length is provided", function () {

			describe( "when given a string to short", function () {
				it( "should not validate", function () {
					expect( JuanValidez.runValidator( 'length', 'No', [ 5 ] ) ).toBeFalsy();
				} );
			} );

			describe( "when given a string long enough", function () {
				it( "should validate", function () {
					expect( JuanValidez.runValidator( 'length', 'Validate Me', [ 5 ] ) ).toBeTruthy();
				} );
			} );

		} );

		describe( "when both a minimum and maximum length is provided", function () {

			describe( "when given a string to short", function () {
				it( "should not validate", function () {
					expect( JuanValidez.runValidator( 'length', 'No', [ 5, 10 ] ) ).toBeFalsy();
				} );
			} );

			describe( "when given a string in the middle", function () {
				it( "should validate", function () {
					expect( JuanValidez.runValidator( 'length', 'Validate', [ 5, 10 ] ) ).toBeTruthy();
				} );
			} );

			describe( "when given a string to long", function () {
				it( "should not validate", function () {
					expect( JuanValidez.runValidator( 'length', 'This is too long.', [ 5, 10 ] ) ).toBeFalsy();
				} );
			} );

		} );

	} );

});
