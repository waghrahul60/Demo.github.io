$(document).ready(function()
{
    $('.toggle-menu').on('click', function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
});