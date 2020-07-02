import { BikeInfo } from './../src/bike-call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import './IMG/noimg.jpg';

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
      for(let i=0; i<response.bikes.length; i++){
        // $('.date-stolen').html(`This bike was stolen on ${response.bikes[i].date_stolen}`);
        if(response.bikes[i].thumb === null) {
          $('.results-container').append(`no image`);
          // $('.bike-image').append(`<p> No Image! </p>`);
          // console.log('no image!')
        } else {
          $('.results-container').append(`<img src="${response.bikes[i].thumb}">`);
        }
      }
    }
  });
});