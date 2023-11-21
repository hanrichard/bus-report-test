import { Table } from 'antd';
import { ReportProps } from '../../features/Home'

export const columns = [
  {
    title: "Bus Id",
    dataIndex: "busId"
  },
  {
    title: "Route Variant",
    dataIndex: "routeVariant",
    render: (value: number) => {
      return value
    }
  },
  {
    title: 'Status',
    dataIndex: 'deviationFromTimetable',
    render: (value: number) => {
      return value
    }
  }
];

export const Report = (reports: ReportProps) => {
  return (
    <div>
      <Table dataSource={reports.busData} rowKey="busId" columns={columns} pagination={false} />
    </div>
  )
}
