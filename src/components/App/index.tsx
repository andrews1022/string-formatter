import React from 'react';

// components
import Footer from '../Footer';
import Formatter from '../Formatter';
import Header from '../Header';

// styled components
import * as S from './styles';

const App = () => (
	<S.Wrapper>
		<Header />
		<Formatter />
		<Footer />
	</S.Wrapper>
);

export default App;
