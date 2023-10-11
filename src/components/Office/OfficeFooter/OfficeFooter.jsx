import { Row, Col, Typography, Space } from "antd";
function OfficeFooter() {
  const { Paragraph } = Typography;
  return (
    <Space direction="vertical" style={{ width: "100%", marginTop: "15px" }}>
      <Row gutter={24} style={{ marginTop: "10px" }}>
        <Col span={4}>
          <div className="office_icon">
            <i className="fa-solid fa-virus"></i>
          </div>
        </Col>
        <Col span={20}>
          <Paragraph strong style={{ color: "#1f4172" }}>
            Estimated office infection rate:
          </Paragraph>
          <Paragraph type="success" strong>
            0.3% (low)
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: "10px" }}>
        <Col span={4}>
          <div className="office_icon">
            <i className="fa-regular fa-face-smile"></i>
          </div>
        </Col>
        <Col span={20}>
          <Paragraph strong style={{ color: "#1f4172" }}>
            Employee satisfaction rate:
          </Paragraph>
          <Paragraph type="success" strong>
            65% (high)
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: "10px" }}>
        <Col span={4}>
          <div className="office_icon">
            <i className="fa-solid fa-syringe"></i>
          </div>
        </Col>
        <Col span={20}>
          <Paragraph strong style={{ color: "#1f4172" }}>
            Employee vaccination rate:
          </Paragraph>
          <Paragraph type="success" strong>
            10
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: "10px" }}>
        <Col span={4}>
          <div className="office_icon">
            <i className="fa-solid fa-mask-face"></i>
          </div>
        </Col>
        <Col span={20}>
          <Paragraph strong style={{ color: "#1f4172" }}>
            Mask compliance:
          </Paragraph>
          <Paragraph type="secondary" strong>
            No
          </Paragraph>
        </Col>
      </Row>
    </Space>
  );
}

export default OfficeFooter;
