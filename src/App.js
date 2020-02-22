import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from 'moment';
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";

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

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar />
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
            selectDay={() => setWeatherinfo({ ...weatherInfo, selectedDay: day})}
          />


        ))}
      </Row>
      <Row>
        <DayDetails />
      </Row>
    </Container>
  );
}

export default App;
