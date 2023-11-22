import Logo from './image.svg';
import { Wrapper } from './Header.styled';

export const Header = () => {
  return <Wrapper><img src={Logo} height="61" width="260" alt="transportnsw.info" /></Wrapper>
}

