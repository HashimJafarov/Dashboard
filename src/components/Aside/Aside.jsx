import { Layout, Menu, Typography } from "antd";
import {
  AppstoreFilled,
  RiseOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  DingtalkOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function Aside() {
  const { Sider } = Layout;
  const { Title } = Typography;
  return (
    <>
      <Sider
        width={230}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          backgroundColor: "#fff",
          padding: "20px 10px",
        }}
        theme="dark"
      >
        <Title level={3} style={{ textAlign: "start", display: "flex" }}>
          <div>
            <DingtalkOutlined />
          </div>
          Haven Diagnostics
        </Title>
        <Menu
          mode="vertical"
          style={{ marginTop: "20px" }}
          defaultSelectedKeys={["Dashboard"]}
        >
          <Menu.Item key="Dashboard" icon={<AppstoreFilled />}>
            <NavLink to="/">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="Forecast" icon={<RiseOutlined />}>
            <NavLink to="/forecast">Forecast</NavLink>
          </Menu.Item>
          <Menu.Item key="All offices" icon={<HomeOutlined />}>
            <NavLink to="/offices">All offices</NavLink>
          </Menu.Item>
          <Menu.Item key="Employees" icon={<UsergroupAddOutlined />}>
            <NavLink to="/employees">Employees</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default Aside;
