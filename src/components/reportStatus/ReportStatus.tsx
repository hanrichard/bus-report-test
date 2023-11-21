import { TextWrapper } from './ReportStatus.styled'

export const ReportStatus = ({ status }: any) => {
  switch (true) {
    case status > 100:
      return <TextWrapper className="isLate">Late</TextWrapper>
    case status < 100 && status > 0:
      return <TextWrapper className="isOnTime">On Time</TextWrapper>
    case status < 0:
      return <TextWrapper className="isEarly">Early</TextWrapper>
    default:
      return <></>
  }
};
