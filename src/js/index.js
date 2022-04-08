import "../scss/style.scss";
$(document).ready(function () {
    var url = "https://covid19.mathdro.id/api";
    $.get(url, function (data) {

        // deklarasi variabeel data
        var konfirmasi = $.number(data['confirmed']['value']);
        var sembuh = $.number(data['recovered']['value']);
        var mati = $.number(data['deaths']['value']);

        console.log(data['confirmed']['value']);
        $('#data-konfirm').text(konfirmasi);
        $('#data-sembuh').text(sembuh);
        $('#data-mati').text(mati);
    });
});