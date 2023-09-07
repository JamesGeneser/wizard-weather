import "./current-weather.css";
import { Container, Row, Col } from "react-bootstrap";
import Switch from "../switch";

const CurrentWeather = ({ data }) => {
  const conditions = JSON.stringify(data.weather[0].description);
  console.log(conditions);
  return (
    <Container fluid>
      <img
        src={require("../../media/Crystal-ball.png")}
        className="crystal-ball"
      />

      {conditions && <Switch data={conditions} />}
      {/* <img src={require("../../media/Sunny.png")} className="sunny"></img> */}
      {/* <img src={require("../../media/Cloudy.png")} className="cloudy" />
      <img src={require("../../media/Cloudy.png")} className="cloudy" /> */}
      <Row className="current-weather">
        <Col className="city-name">{data.city}</Col>
        <Col className="weather-conditions">{data.weather[0].description}</Col>
        <Col className="temp">{data.main.temp} °F </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
