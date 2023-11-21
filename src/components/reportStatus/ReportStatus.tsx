import { ReportStatusWrapper } from './ReportStatus.styled'

export const ReportStatus = ({ status }: any) => {
  switch (true) {
    case status > 100:
      return <ReportStatusWrapper className="isLate">Late</ReportStatusWrapper>
    case status < 100 && status > 0:
      return <ReportStatusWrapper className="isOnTime">On Time</ReportStatusWrapper>
    case status < 0:
      return <ReportStatusWrapper className="isEarly">Early</ReportStatusWrapper>
    default:
      return <></>
  }
};
