function openSlide() {
    document.getElementById('res-side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

$(document).ready(function () {
    $('select').formSelect();
});