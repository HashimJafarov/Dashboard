import { Space, Typography, Row, Col, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
function OfficeContent() {
  const { Paragraph } = Typography;
  return (
    <Space direction="vertical" style={{ width: "100%", marginTop: "25px" }}>
      <Paragraph strong style={{ color: "#1f4172" }}>
        Criteria for increasing occupancy:
      </Paragraph>
      <Row gutter={24}>
        <Col span={12}>
          <Paragraph icon="hello">
            Haven Guidelines <QuestionCircleOutlined />
          </Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph style={{ textAlign: "right" }} code strong type="danger">
            Not Met
          </Paragraph>
        </Col>
      </Row>
      <Divider></Divider>
      <Row gutter={24}>
        <Col span={12}>
          <Paragraph>
            County Guidelines <QuestionCircleOutlined />
          </Paragraph>
        </Col>
        <Col span={12}>
          <Paragraph style={{ textAlign: "right" }} code strong type="success">
            Met
          </Paragraph>
        </Col>
      </Row>
    </Space>
  );
}

export default OfficeContent;
