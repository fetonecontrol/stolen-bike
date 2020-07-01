import { BikeInfo } from './../src/bike-call.js';
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
        
    }

  });
});