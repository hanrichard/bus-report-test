import { Collapse } from 'antd';
import busData from "../data/bus-services-data.json";
import { Report } from '../components/report/Report';


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

export const Home = () => {
  const data = busData.data;

  const items = data.map((report: ReportProps, index: number) => {
    return {
      label: report.organisation + "-" + report.date,
      children: <Report key={index} {...report} />
    };
  })

  return (
    <div>
      <h1>Bus Reports</h1>
      <Collapse items={items} bordered={false} />
    </div>
  )
}

