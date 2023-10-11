import { Progress, Typography, Space } from "antd";
function ForecastHeader() {
  const { Title, Paragraph } = Typography;
  return (
    <Space
      direction="vertical"
      className="forecast_header"
      style={{ width: "100%" }}
    >
      <Title level={3} style={{ fontWeight: "bold", color: "#1F4172" }}>
        Forecast & Recomendation
      </Title>
      <Paragraph strong={true} style={{ color: "#1F4172" }}>
        Currently Recomended Ocupancy:
      </Paragraph>
      <Progress percent={30} strokeWidth={12} />
    </Space>
  );
}

export default ForecastHeader;
