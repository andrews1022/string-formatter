// components
import Footer from '../Footer/Footer';
import Formatter from '../Formatter/Formatter';
import Header from '../Header/Header';

// styled components
import * as S from './App.styles';

const App = (): JSX.Element => (
  <S.Wrapper>
    <Header />
    <Formatter />
    <Footer />
  </S.Wrapper>
);

export default App;
