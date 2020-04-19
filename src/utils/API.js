import axios from 'axios';
const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleKey}`)
            .then(res => {
                // console.log(res);

                if (!res.data.results.length) {
                    return alert('Not a valid location.');
                }

                const { lat, lng: lon } = res.data.results[0].geometry.location;
                return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherKey}&units=I&days=7`)
            })
            .catch(err => {
                console.log(err);
            })
    }
}