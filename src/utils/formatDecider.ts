import * as F from './formattingFunctions';

// dynamically return the appropiate formatting function based on the id passed in
export const formatDecider = (id: string) => {
	switch (id) {
		case 'format_lowercase': {
			return F.formatTextLowerCase;
		}

		case 'format_uppercase': {
			return F.formatTextUpperCase;
		}

		case 'format_web_ready': {
			return F.formatTextWebReady;
		}

		case 'format_people_fucking_dying': {
			return F.formatTextPeopleFuckingDying;
		}

		case 'format_sentence_case': {
			return F.formatTextSentenceCase;
		}

		default: {
			return F.formatTextLowerCase;
		}
	}
};
