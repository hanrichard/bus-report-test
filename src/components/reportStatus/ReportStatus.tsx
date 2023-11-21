import { ReportStatusWrapper } from './ReportStatus.styled'

export const ReportStatus = ({ deviationFromTimetable }: { deviationFromTimetable: number }) => {
  switch (true) {
    case deviationFromTimetable > 100:
      return <ReportStatusWrapper className="isLate">Late</ReportStatusWrapper>
    case deviationFromTimetable <= 100 && deviationFromTimetable >= 0:
      return <ReportStatusWrapper className="isOnTime">On Time</ReportStatusWrapper>
    case deviationFromTimetable < 0:
      return <ReportStatusWrapper className="isEarly">Early</ReportStatusWrapper>
    default:
      return <></>
  }
};
