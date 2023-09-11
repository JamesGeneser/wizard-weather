import "./current-weather.css";
import { Container, Row, Col } from "react-bootstrap";

const CurrentWeather = ({ data }) => {
  //   const conditions = JSON.stringify(data.weather[0].description);
  //   console.log(conditions);
  return (
    <Container fluid>
      <Row className="current-weather">
        <Col>
          <h2 className="city-name">{data.city}</h2>
          <p className="weather-conditions">{data.weather[0].description}</p>

          <p className="temp">{data.main.temp} °F</p>
        </Col>
        <Col>
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
