import React from "react";
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { CardWrapper } from '../styles';

//react component is function props are args
const DayCard = props => {
  console.log(props);
  return (
    <Col>
      <CardWrapper isSelected={props.isSelected} onClick={props.selectDay}>
      <Card>
        <CardHeader>{props.day}</CardHeader>
        <CardBody>
          <h3>{props.temp}°</h3>
          <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
          <p>High: {props.high}°</p>
          <p>Low: {props.low}°</p>
          <p>Precip: {props.precip}%</p>
        </CardBody>
      </Card>
      </CardWrapper>
    </Col>
  )
}

export default DayCard;