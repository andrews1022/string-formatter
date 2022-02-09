import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// styled components
import * as S from './styles';
import { Copy } from '../UI/Copy';

// util
import { getCurrentYear } from '../../util/getCurrentYear';

// data
import socialLinks from '../../data/socialLinks';

const Footer = () => (
	<footer>
		<Copy>© {getCurrentYear()} all rights reserved. designed and built and andrew shearer</Copy>

		<S.IconRow>
			{socialLinks.map((link) => (
				<S.IconLink key={link.site} href={link.url} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={link.site === 'GitHub' ? faGithub : faTwitter} size='lg' />
				</S.IconLink>
			))}
		</S.IconRow>
	</footer>
);

export default Footer;
