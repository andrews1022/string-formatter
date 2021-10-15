// convert text to lowercase
export const formatTextLowerCase = (text: string) => text.toLowerCase();

// convert text to lowercase
export const formatTextUpperCase = (text: string) => text.toUpperCase();

// convert text to "web-ready"
export const formatTextWebReady = (text: string) =>
	text
		.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
		.replace(/\s+/g, '-')
		.toLowerCase();

// convert text to "PeOPleFucKInGDyINg"
export const formatTextPeopleFuckingDying = (text: string) =>
	text
		.split('')
		.map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
		.join('');

// conver text to sentence case
export const formatTextSentenceCase = (text: string) =>
	text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
