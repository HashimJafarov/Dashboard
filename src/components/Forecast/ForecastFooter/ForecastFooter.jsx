import { Typography, Progress, Space, Row, Col } from "antd";
function ForecastFooter() {
  const { Paragraph } = Typography;
  return (
    <Space
      direction="vertical"
      className="forecast_footer"
      style={{ marginTop: "10px", width: "100%" }}
    >
      <Paragraph strong style={{ color: "#1f4172" }}>
        Maximum Recomended occupancy for vaccination rate and mask compliance
        rate:
      </Paragraph>
      <Row gutter={24}>
        <Col span={12}>
          <Paragraph strong style={{ color: "#b4b4b4" }}>
            Emloyees vaccinated
          </Paragraph>
        </Col>
        <Col style={{ textAlign: "right" }} span={12}>
          <Paragraph strong style={{ color: "#b4b4b4" }}>
            38% (34 People)
          </Paragraph>
        </Col>
      </Row>
      <Progress percent={34} />
      <Paragraph style={{ fontSize: "12px", color: "#1f4172" }} strong>
        Current vaccination rate:10%(9 People)
      </Paragraph>
      <Row gutter={24}>
        <Col span={12}>
          <Paragraph strong style={{ color: "#b4b4b4" }}>
            Emloyees using masks
          </Paragraph>
        </Col>
        <Col style={{ textAlign: "right" }} span={12}>
          <Paragraph strong style={{ color: "#b4b4b4" }}>
            30% (26 People)
          </Paragraph>
        </Col>
      </Row>
      <Progress percent={30} />
      <Paragraph
        style={{
          backgroundColor: "#efeeee",
          padding: "5px",
          borderRadius: "7px",
          color: "#1f4172",
        }}
      >
        Current recommended occupance would be 47% (45 people) if your
        vaccination rate was 38% and you mask compliance rate was 30%
      </Paragraph>
    </Space>
  );
}

export default ForecastFooter;
