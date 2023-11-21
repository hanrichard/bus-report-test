import { Collapse, Typography } from 'antd';

import busData from "../data/bus-services-data.json";
import { Report } from '../components/report/Report';
import { HomeWrapper } from './Home.styled';

export interface ReportProps {
  organisation: string;
  date: string;
  busData: BusDataDetails[];
}

export interface BusDataDetails {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number | null;
}

const { Title } = Typography;

export const Home = () => {
  const data = busData.data;

  const items = data.map((report: ReportProps, index: number) => {
    return {
      label: <Title style={{ margin: 0 }} level={3}>{report.organisation + "-" + report.date}</Title>,
      children: <Report key={index} {...report} />
    };
  })

  return (
    <HomeWrapper>
      <Title>Bus Reports</Title>
      <Collapse items={items} bordered={false} />
    </HomeWrapper>
  )
}

