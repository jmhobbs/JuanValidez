describe( "JuanValidez Core", function () {

	describe( "when adding a validator", function () {

		it( "should have that validator", function () {
			JuanValidez.addValidator( 'jasmine-add-test', function () { return true; } ); 
			expect( JuanValidez.validators() ).toContain( 'jasmine-add-test' );
		} );

	} );

	describe( "when removing a validator", function () {

		beforeEach( function () {
			JuanValidez.addValidator( 'jasmine-add-test', function () { return true; } ); 
		} );

		it( "should not have that validator", function () {
			JuanValidez.removeValidator( 'jasmine-add-test' );
			expect( JuanValidez.validators() ).not.toContain( 'jasmine-add-test' );
		} );

	} );

	describe( "when attempting to use a non-existant validator", function () {

		it( "should not validate", function () {
			expect( JuanValidez.runValidator( 'jasmine-not-a-real-validator', '' ) ).toBeFalsy();
		} );

	} );

    describe( "when renaming a function that uses this", function () {

        it( "should still have that validator", function () {

            var renamed = JuanValidez.validators;
            JuanValidez.addValidator( 'jasmine-add-test', function () { return true; } ); 
            expect( renamed() ).toContain( 'jasmine-add-test' );

        } );

    } );

} );
