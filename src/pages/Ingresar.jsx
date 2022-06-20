import { SaveOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Ingresar = () => {
  useHideMenu(false);
  const Navigate = useNavigate();

  const [usuario] = useState(getUsuarioStorage());

  useEffect(() => {
    if (usuario.agente && usuario.escritorio) {
      Navigate("/escritorio");
    }
  }, [usuario]);

  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem("agente", agente);
    localStorage.setItem("escritorio", escritorio);
    Navigate("/escritorio");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Ingrese el numero de su escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            icon={<SaveOutlined />}
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
