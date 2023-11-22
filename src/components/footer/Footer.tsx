import { Typography } from 'antd';
import { Wrapper } from '../header/Header.styled';

const { Paragraph } = Typography;

export const Footer = () => {
  return (
    <Wrapper>
      <Paragraph>
        © Transport for NSW
    </Paragraph>
    </Wrapper>
  )
}

