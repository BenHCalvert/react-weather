import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from 'moment';
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import API from "./utils/API";

const App = () => {

  const [weatherInfo, setWeatherinfo] = useState({
    searchTerm: '',
    selectedDay: null,
    days: sampleData.data,
    location: 'Denver, CO',
    // days: [],
    // location: ''
  });

  const { searchTerm, selectedDay, days, location } = weatherInfo;

  useEffect(() => {
    API.getWeather("Mount Rushmore");
  }, []);

  const handleInputChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    setWeatherinfo({ ...weatherInfo, [name]: value})
  }

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        {/* parens are implict return */}
        {days.map(day => (
          <DayCard
            key={day.ts}
            day={moment(day.valid_date, 'YYYY-MM-DD').format('dddd')}
            icon={day.weather.icon}
            description={day.weather.description}
            temp={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            precip={day.pop}
            isSelected={day === selectedDay}
            selectDay={() => setWeatherinfo({ ...weatherInfo, selectedDay: day })}
          />


        ))}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
            <DayDetails
              day={moment(selectedDay.valid_date, 'YYYY-MM-DD').format('dddd, MMMM Do, YYYY')}
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              temp={selectedDay.temp}
              high={selectedDay.max_temp}
              low={selectedDay.min_temp}
              precip={selectedDay.pop}
            />
          ) : (
              <h3>Click on a day above to view details</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
