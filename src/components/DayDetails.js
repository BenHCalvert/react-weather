import React from "react";
import { Card } from 'reactstrap';
import {DetailsWrapper} from '../styles';

//react component is function props are args
const DayDetails = props => {
  return (
    <DetailsWrapper>
      <h2>Weather Info for {props.day}</h2>
      <h3>Average Temperature: {props.temp}°</h3>
          <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
          <p>High: {props.high}°</p>
          <p>Low: {props.low}°</p>
          <p>Precip: {props.precip}%</p>
    </DetailsWrapper>
  )
}

export default DayDetails;