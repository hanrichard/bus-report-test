import busData from "../data/bus-services-data.json";
import { Report } from '../components/report/Report';

export interface ReportProps {
  organisation: string;
  date: string;
  busData: busDataDetails[];
}

interface busDataDetails {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number | null;
}

export const Home = () => {
  const data = busData.data;

  return (
    <div>
      <h1>Bus Reports</h1>
      <div>
        {data.map((report: ReportProps) => {
          return <Report key={report.organisation} {...report} />;
        })}
      </div>
    </div>
  )
}

