export interface FormattingState {
	input: string;
	output: string;
	checkedID: string[];
	limit: number;
	buttonText: string;
}

export const initialState = {
	input: '',
	output: '',
	checkedID: [],
	limit: 1,
	buttonText: 'Copy'
};

export type FormattingActions =
	| { type: 'BOX_CHECKED'; payload: string }
	| { type: 'COPY_OUTPUT'; payload: string }
	| { type: 'FORMAT_INPUT' }
	| { type: 'SET_INPUT'; payload: string };

export const formattingReducer = (
	state: FormattingState = initialState,
	action: FormattingActions
) => {
	switch (action.type) {
		case 'BOX_CHECKED': {
			return {
				...state
			};
		}

		case 'COPY_OUTPUT': {
			return {
				...state
			};
		}

		case 'FORMAT_INPUT': {
			if (!state.checkedID.length) {
				return {
					...state
				};
			}

			return {
				...state
			};
		}

		case 'SET_INPUT': {
			return {
				...state,
				input: action.payload
			};
		}

		default:
			return {
				...state
			};
	}
};
