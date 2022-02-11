import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// compoents
import ExternalLink from '../ExternalLink';

// styled components
import * as S from './styles';
import { Copy } from '../UI/Copy';
import { ScreenReaderText } from '../UI/ScreenReaderText';

// util
import { getCurrentYear } from '../../util/getCurrentYear';

// data
import socialLinks from '../../data/socialLinks';

const Footer = () => (
	<S.Footer>
		<Copy>© {getCurrentYear()} all rights reserved. designed and built and andrew shearer</Copy>

		<S.IconRow>
			{socialLinks.map((link) => (
				<ExternalLink key={link.site} href={link.url}>
					<FontAwesomeIcon icon={link.site === 'GitHub' ? faGithub : faTwitter} size='lg' />
					<ScreenReaderText>Go to my {link.site} page</ScreenReaderText>
				</ExternalLink>
			))}
		</S.IconRow>
	</S.Footer>
);

export default Footer;
