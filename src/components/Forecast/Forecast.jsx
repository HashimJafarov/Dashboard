import { Card } from "antd";
import ForecastHeader from "./ForecastHeader/ForecastHeader";
import ForecastContent from "./ForecastContent/ForecastContent";
import ForecastFooter from "./ForecastFooter/ForecastFooter";

function Forecast() {
  return (
    <Card>
      <ForecastHeader />
      <ForecastContent />
      <ForecastFooter />
    </Card>
  );
}

export default Forecast;
