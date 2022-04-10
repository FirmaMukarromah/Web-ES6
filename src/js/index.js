import '../scss/style.scss';
import $ from 'jquery';
import Loading from './LoadingComponent';
const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const loading = new Loading();
// $(window).on('load', () => {
//     $('body').append(loading); 
// });

$(document).ready(async () => {
    // $('loading-component').remove();
    let url = "https://covid19.mathdro.id/api";
    await $.get(url, function (data) {
        $('#data-konfirm').text(data.confirmed.value);
        $('#data-sembuh').text(data.recovered.value);
        $('#data-mati').text(data.deaths.value);
    });

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});