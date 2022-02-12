// util
import { formatDecider } from '../utils/formatDecider';

type FormattingState = {
	input: string;
	output: string;
	checkedID: string[];
	limit: number;
};

type FormattingActions =
	| { type: 'BOX_CHECKED'; payload: string }
	| { type: 'COPY_OUTPUT' }
	| { type: 'FORMAT_INPUT' }
	| { type: 'SET_INPUT'; payload: string };

export const initialState = {
	input: '',
	output: '',
	checkedID: [],
	limit: 1
};

export const formattingReducer = (
	state: FormattingState = initialState,
	action: FormattingActions
) => {
	switch (action.type) {
		case 'BOX_CHECKED': {
			const currentCheckedItem = document.getElementById(state.checkedID[0]) as HTMLInputElement;

			// remove currently checked item from state
			if (state.checkedID.includes(action.payload)) {
				return {
					...state,
					checkedID: state.checkedID.filter((id) => id !== action.payload)
				};
			}

			// a different item is already in the state
			if (state.checkedID.length >= state.limit && currentCheckedItem) {
				currentCheckedItem.checked = false;

				// eslint-disable-next-line no-param-reassign
				state.checkedID = [];

				return {
					...state,
					checkedID: [...state.checkedID, action.payload]
				};
			}

			// added checked item to state (no box is currently checked)
			return {
				...state,
				checkedID: [...state.checkedID, action.payload]
			};
		}

		case 'COPY_OUTPUT': {
			navigator.clipboard.writeText(state.output);

			return {
				...state
			};
		}

		case 'FORMAT_INPUT': {
			// store returned function in this variable
			// access first and only element in array
			const formatter = formatDecider(state.checkedID[0]);

			if (!state.checkedID.length) {
				return {
					...state
				};
			}

			return {
				...state,
				output: formatter(state.input) // use dynamic text formatter
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
