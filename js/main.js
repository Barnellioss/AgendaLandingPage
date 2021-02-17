$(function(){
    $('.speakers__timezone:first-child').on('click', function(){
        $('.speakers__timezones').toggleClass('speakers__timezones--active');
        $('.speakers__timezone:first-child').toggleClass('speakers__timezone--active');
    })
});