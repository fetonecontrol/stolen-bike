import { BikeInfo } from './../src/bike-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#bike-form').submit(function() {
    event.preventDefault();
    const city = $('#zip-code').val();
    // $('#zip-code').val("");

    (async () => {
      let stolenBikeList = new BikeInfo();
      const response = await stolenBikeList.getStolenBikeInfo(city);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
        $('.date-stolen').html(`This bike was stolen on ${response.bikes[0].date_stolen}`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);
        $('.bike-image').append(`<img src="${response.bikes[1].thumb}">`);

    }

  });
});