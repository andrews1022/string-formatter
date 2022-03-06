export const formatTextLowerCase = (text: string): string => text.toLowerCase();

export const formatTextUpperCase = (text: string): string => text.toUpperCase();

export const formatTextWebReady = (text: string): string =>
  text
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

export const formatTextPeopleFuckingDying = (text: string): string =>
  text
    .split('')
    .map((v) => (Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()))
    .join('');

export const formatTextSentenceCase = (text: string): string =>
  text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
