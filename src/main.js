import { BikeInfo } from './../src/bike-call.js';
import './styles.css';

$(document).ready(function() {
  
  $('#zip-code').click(function() {
    const city = $('#zip-code').val();
    $('#zip-code').val("");

    (async () => {
      let stolenBikeList = new BikeInfo();
      const response = await stolenBikeList.getStolenBikeInfo(city);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#date-stolen').text(`This bike was stolen on ${city}`);
        $('#bike-description').text(`${response}`);
      } else {
        $('#date-stolen').text(`There was an error handling your request.`);
        $('#bike-description').text(`Please check your inputs and try again!`);
      }
    }

  });
});