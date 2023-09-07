import "./current-weather.css";
import { Container, Row, Col } from "react-bootstrap";

const CurrentWeather = ({ data }) => {
  //   const conditions = JSON.stringify(data.weather[0].description);
  //   console.log(conditions);
  return (
    <Container fluid>
      <img
        src={require("../../media/Crystal-ball.png")}
        className="crystal-ball"
      />

      <img
        src={require(`../../media/${data.weather[0].icon}.png`)}
        className="icon"
      />

      <Row className="current-weather">
        <Col className="city-name">{data.city}</Col>
        <Col className="weather-conditions">{data.weather[0].description}</Col>
        <Col className="temp">{data.main.temp} °F </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
