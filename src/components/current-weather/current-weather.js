import "./current-weather.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const CurrentWeather = ({ data }) => {
  return (
    <Container fluid>
      <Row className="current-weather">
        <Col
          xs={4}
          sm={6}
          md={4}
          className="mt-4 
           "
        >
          <h2 className="city-name type">{data.city}</h2>
          <p className="weather-conditions type">
            {data.weather[0].description}
          </p>

          <p className="temp type">{data.main.temp} °F</p>
        </Col>
        <Col
          xs={8}
          sm={6}
          md={8}
          className="ms-0 ps-0 d-flex justify-content-end"
        >
          {" "}
          <img
            src={require(`../../media/${data.weather[0].icon}.png`)}
            className="icon"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
