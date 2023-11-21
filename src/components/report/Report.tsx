import { Table } from 'antd';
import { ReportProps } from '../../features/Home'
import { Note } from '../note/Note';
import { ReportTableWrapper } from './Report.styled';
import { ReportStatus } from '../reportStatus/ReportStatus';

const updateValue = (val: string | null) => {
  if (val !== null) {
    const firstThree = val.indexOf(" ");

    return <><b>{val.substring(0, firstThree)}</b>
      {val.substring(firstThree)}
    </>
  }
  return val
}

export const columns = [
  {
    title: "Bus ID",
    dataIndex: "busId"
  },
  {
    title: "Route Variant",
    dataIndex: "routeVariant",
    render: (value: string) => {
      return updateValue(value)
    }
  },
  {
    title: 'Status',
    dataIndex: 'deviationFromTimetable',
    render: (value: number | null) => {
      return value ? <ReportStatus deviationFromTimetable={value} /> : <>Unkown</>
    }
  }
];

export const Report = (reports: ReportProps) => {
  return (
    <>
      <ReportTableWrapper>
        <Table dataSource={reports.busData} rowKey="busId" columns={columns} pagination={false} />
      </ReportTableWrapper>
      <Note organisation={reports.organisation} />
    </>
  )
}
