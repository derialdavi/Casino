$(document).ready(() => {
    $('#check').click(() => {
        $(this).is(':checked') ? $('#pwd').attr('type', 'text') : $('#pwd').attr('type', 'password');
    });
});