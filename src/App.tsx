import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
}
