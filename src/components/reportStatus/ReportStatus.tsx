import { ReportStatusWrapper } from './ReportStatus.styled'

export const ReportStatus = ({ deviationFromTimetable }: { deviationFromTimetable: number }) => {
  switch (true) {
    case deviationFromTimetable > 250:
      return <ReportStatusWrapper className="isLate">Late</ReportStatusWrapper>
    case deviationFromTimetable <= 250 && deviationFromTimetable >= 0:
      return <ReportStatusWrapper className="isOnTime">On Time</ReportStatusWrapper>
    case deviationFromTimetable < 0:
      return <ReportStatusWrapper className="isEarly">Early</ReportStatusWrapper>
    default:
      return <></>
  }
};
