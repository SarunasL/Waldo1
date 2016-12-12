/**
 * Created by sarun on 2016-12-09.
 */
$( function() {
    $( "#target" ).draggable();
} );
$( function () {
    $("#circle").resizable();
});
$(document).on('scroll', function () {
    $(document).scrollLeft(0);
    $(document).scrollTop(0);
});