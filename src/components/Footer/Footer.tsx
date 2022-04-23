// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// components
import ExternalLink from '../ExternalLink/ExternalLink';

// styled components
import * as S from './Footer.styles';
import { Copy } from '../UI/Copy';
import { ScreenReaderText } from '../UI/ScreenReaderText';

// utils
import { getCurrentYear } from '../../utils/getCurrentYear';

// data
import { socialLinks } from '../../data/socialLinks';

const Footer = (): JSX.Element => (
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
