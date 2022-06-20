import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import {
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import { Layout, Menu } from "antd";
import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { CrearTicket } from "./CrearTicket";
import { Escritorio } from "./Escritorio";
import UiContext from "../context/UiContext";
import { useContext } from "react";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Router>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola de tickets</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/crear">Creat tickets</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />}></Route>
              <Route path="/cola" element={<Cola />}></Route>
              <Route path="/crear" element={<CrearTicket />}></Route>
              <Route path="/escritorio" element={<Escritorio />} />
              <Route path="*" element={<Navigate to="/ingresar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
