import React from 'react';

// components
import Footer from './components/Footer';
import Formatter from './components/Formatter';
import Header from './components/Header';

// styled
import AppWrapper from './components/AppWrapper';

// data
import socialLinks from './data/socialLinks';

const App = () => (
	<AppWrapper>
		<Header />
		<Formatter />
		<Footer socialLinks={socialLinks} />
	</AppWrapper>
);

export default App;
