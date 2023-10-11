import React from "react";
import { Tabs, Typography } from "antd";
import DallasOffice from "../../components/Dallas Office/DallasOffice";
function Dashboard() {
  const onChange = (key) => {
    console.log(key);
  };
  const { Title } = Typography;
  const items = [
    {
      key: "1",
      label: "Dallas Office",
      children: <DallasOffice />,
    },
    {
      key: "2",
      label: "Coppell Office",
      children: "Coppell Office",
    },
    {
      key: "3",
      label: "Los Angeles Office",
      children: "Los Angeles Office",
    },
  ];
  return (
    <section style={{ padding: "20px" }}>
      <Title level={2} strong style={{ color: "#1f4172" }}>
        Dashboard
      </Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </section>
  );
}

export default Dashboard;
