import React, { ReactNode } from 'react';

type ExternalLinkProps = {
	children: ReactNode;
	href: string;
};

const ExternalLink = ({ children, href }: ExternalLinkProps) => (
	<a href={href} target='_blank' rel='noopener noreferrer'>
		{children}
	</a>
);

export default ExternalLink;
