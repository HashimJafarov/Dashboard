import { Row, Col, Select, Typography, Progress } from "antd";
import { Outlet } from "react-router-dom"; // baxmaq lazimdi
function ForecastContent() {
  const { Paragraph } = Typography;

  return (
    <>
      <Row style={{ marginTop: "10px" }} gutter={24}>
        <Col span={12}>
          <Paragraph strong={true} style={{ color: "#1F4172" }}>
            Occupancy Targets:
          </Paragraph>
        </Col>
        <Col span={12}>
          <div className="forecast_select">
            <Paragraph strong code>
              75
            </Paragraph>
            <Select
              showSearch
              placeholder="People"
              optionFilterProp="children"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <div className="forecast_content_progress">
            <Paragraph style={{ textAlign: "center", color: "#1f4172" }} strong>
              4 weeks
            </Paragraph>
            <Progress
              type="circle"
              percent={80}
              size={120}
              strokeColor={"orange"}
              strokeWidth={10}
              format={() => {
                return (
                  <>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      Possible
                    </Paragraph>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      85%
                    </Paragraph>
                  </>
                );
              }}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="forecast_content_progress">
            <Paragraph style={{ textAlign: "center", color: "#1f4172" }} strong>
              8 weeks
            </Paragraph>
            <Progress
              type="circle"
              percent={88}
              status="normal"
              strokeColor={"#5cb85c"}
              size={120}
              format={() => {
                return (
                  <>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      Likely
                    </Paragraph>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      88%
                    </Paragraph>
                  </>
                );
              }}
              strokeWidth={10}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="forecast_content_progress">
            <Paragraph style={{ textAlign: "center", color: "#1f4172" }} strong>
              12 weeks
            </Paragraph>
            <Progress
              type="circle"
              strokeColor={"#5cb85c"}
              percent={95}
              size={120}
              format={() => {
                return (
                  <>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      Yes
                    </Paragraph>
                    <Paragraph strong style={{ color: "#b4b4b4" }}>
                      95%
                    </Paragraph>
                  </>
                );
              }}
              strokeWidth={10}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ForecastContent;
