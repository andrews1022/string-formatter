import type { ReactNode } from 'react';

// props type
type ExternalLinkProps = {
  children: ReactNode;
  href: string;
};

const ExternalLink = ({ children, href }: ExternalLinkProps): JSX.Element => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);

export default ExternalLink;
