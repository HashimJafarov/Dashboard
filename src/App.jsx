import "./App.css";
import { lazy, Suspense } from "react";
import { Layout, Spin } from "antd";
import Aside from "./components/Aside/Aside";
import { Routes, Route } from "react-router-dom";
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const AllOffices = lazy(() => import("./pages/AllOffices/AllOffices"));
const Forecast = lazy(() => import("./pages/Forecast/Forecast"));
const Employees = lazy(() => import("./pages/Employees/Employees"));
function App() {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/forecast",
      element: <Forecast />,
    },
    {
      path: "/offices",
      element: <AllOffices />,
    },
    {
      path: "/employees",
      element: <Employees />,
    },
  ];
  return (
    <>
      <Layout>
        <Aside />
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<Spin size="large" />}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
