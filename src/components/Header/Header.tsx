// styled components
import { Copy } from '../UI/Copy';
import { Heading } from '../UI/Heading';

const Header = (): JSX.Element => (
  <header>
    <Heading>String Formatter</Heading>
    <Copy>Use this formatter to quickly format your text in a few different, helpful formats!</Copy>
  </header>
);

export default Header;
