import { Table } from 'antd';
import { ReportProps } from '../../features/Home'
import { Note } from '../note/Note';
import { TextWrapper } from './Report.styled';
import { calStatus } from '../../utility/utility';

const updateValue = (val: string | null) => {
  if (val !== null) {
    const firstThree = val.indexOf(" ");

    return <>
      <b>
        {val.substring(0, firstThree)}
      </b>
      {val.substring(firstThree)}
    </>
  }
  return val
}

export const columns = [
  {
    title: "Bus Id",
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
    render: (value: number) => {
      return <TextWrapper className={calStatus(value)}>{value}</TextWrapper>
    }
  }
];

export const Report = (reports: ReportProps) => {
  return (
    <div>
      <Table dataSource={reports.busData} rowKey="busId" columns={columns} pagination={false} />
      <Note />
    </div>
  )
}
