import { Space, Row, Col, Typography, Progress } from "antd";

function OfficeHeader() {
  const { Paragraph, Title } = Typography;
  return (
    <Space
      style={{ width: "100%" }}
      className="office_header"
      direction="vertical"
    >
      <Row gutter={24}>
        <Col span={12}>
          <Title level={4} style={{ fontWeight: "bold", color: "#1F4172" }}>
            Dallas Office
          </Title>
        </Col>
        <Col span={12}>
          <Paragraph
            code
            strong
            style={{ color: "#1f4172", textAlign: "right" }}
          >
            View Details
          </Paragraph>
        </Col>
      </Row>
      <Paragraph
        strong
        style={{
          backgroundColor: "#efeeee",
          padding: "5px",
          borderRadius: "7px",
          color: "#1f4172",
        }}
      >
        40 shared desks + 39 private offices Maximu capacity : 96 people
      </Paragraph>
      <Paragraph strong style={{ color: "#1f4172" }}>
        Current office occupancy:
      </Paragraph>
      <Progress percent={50} strokeWidth={10} />
    </Space>
  );
}

export default OfficeHeader;
