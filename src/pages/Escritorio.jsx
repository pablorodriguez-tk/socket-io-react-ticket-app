import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);

  const Navigate = useNavigate();

  const [usuario] = useState(getUsuarioStorage());

  useEffect(() => {
    if (!usuario.agente || !usuario.escritorio) {
      Navigate("/ingresar");
    }
  }, [usuario]);

  const salir = () => {
    localStorage.removeItem("agente");
    localStorage.removeItem("escritorio");
    Navigate("/ingresar", {
      replace: true,
    });
  };
  const siguienteTicket = () => {
    console.log("siguienteTicket");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button
            shape="round"
            type="danger"
            onClick={salir}
            icon={<CloseCircleOutlined />}
          >
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={siguienteTicket}
            shape="round"
            type="primary"
            icon={<RightOutlined />}
          >
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
