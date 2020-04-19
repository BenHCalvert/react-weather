import axios from 'axios';
const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleKey}`)

    }
}