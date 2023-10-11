import { Card, Typography } from "antd";
import OfficeHeader from "./OfficeHeader/OfficeHeader";
import OfficeContent from "./OfficeContent/OfficeContent";
import OfficeFooter from "./OfficeFooter/OfficeFooter";
function Office() {
  const { Title, Paragraph } = Typography;
  return (
    <Card>
      <OfficeHeader />
      <OfficeContent />
      <OfficeFooter />
    </Card>
  );
}

export default Office;
