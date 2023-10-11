import { Row, Col } from "antd";
import Forecast from "../Forecast/Forecast";
import Office from "../Office/Office";
function DallasOffice() {
  return (
    <>
      <Row gutter={24}>
        <Col span={16}>
          <Forecast />
        </Col>
        <Col span={8}>
          <Office />
        </Col>
      </Row>
    </>
  );
}

export default DallasOffice;
