$( function() {

    'use strict';
    $( function() {

        $( '.menu' ).each( function() {
            new Menu( $( this ) );
        } );

    } );

    var Menu = function( obj ) {

        var _obj = obj,
            _btn = _obj.find( '.menu__btn' );

        var _addEvents = function() {
                _btn.on( {
                    click: function() {
                        _obj.toggleClass( 'menu_open' );
                    }
                } );
            },
            _init = function() {
                _addEvents();
            };

        _init();
    };

} );