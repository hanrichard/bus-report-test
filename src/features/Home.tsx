import { Collapse, Spin, Typography } from 'antd';

import { useGetBusReports } from '../apis/useGetReports';
import { Report } from '../components/report/Report';
import { HomeWrapper, HomeWrapperInner } from './Home.styled';

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
  const { data, isLoading, isError } = useGetBusReports();

  const items = data?.map((report: ReportProps, index: number) => {
    return {
      label: <Title style={{ margin: 0 }} level={3}>{report.organisation + " - " + report.date}</Title>,
      children: <Report key={index} {...report} />
    };
  })

  return (
    <HomeWrapper>
      <HomeWrapperInner>
        <Title>Bus Reports</Title>
        {isError ? <Title style={{ margin: 0 }} level={3}>Something is wrong, please refresh!</Title> :
          data?.length > 0 ?
            <Collapse items={items} bordered={false} /> :
            <Title level={3}>No results</Title>
        }
        <Spin spinning={isLoading} fullscreen size="large" />
      </HomeWrapperInner>
    </HomeWrapper>
  )
}

