import React, { useState, useEffect, useReducer } from 'react';

// styled components
import {
	FormatterWrapper,
	FormatterRow,
	LeftBox,
	RightBox,
	OptionsHeading,
	FormatterGroup,
	FormatterTextBox,
	FormatterLabel,
	FormatterButton,
	FormattingOptionsCheckbox,
	FormattingOptionsItem,
	FormattingOptionsList,
	FormattingOptionsLabel
} from './styles';
// reducer
import { formattingReducer, initialState } from '../../reducers/formattingReducer';

// data
import formatters from './data';

const Formatter = () => {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [state, dispatch] = useReducer(formattingReducer, initialState);

	useEffect(() => {
		// set format button disabled value if either state is not met
		if (!state.input || !state.checkedID.length) {
			setButtonIsDisabled(true);
		} else {
			setButtonIsDisabled(false);
		}

		// cleanup
		return () => {
			setButtonIsDisabled(true);
		};
	}, [state.input, state.checkedID.length]);

	const setInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({ type: 'SET_INPUT', payload: event.target.value });
	};

	const formatInputValue = () => {
		dispatch({ type: 'FORMAT_INPUT' });
	};

	return (
		<FormatterWrapper>
			<FormatterRow>
				<LeftBox>
					<FormatterGroup>
						<FormatterLabel htmlFor='input'>Input</FormatterLabel>
						<FormatterTextBox
							name='input'
							id='input'
							value={state.input}
							onChange={setInputValue}
						/>

						<FormatterButton onClick={formatInputValue} type='button'>
							Format
						</FormatterButton>
					</FormatterGroup>

					<FormatterGroup>
						<FormatterLabel htmlFor='output'>Output</FormatterLabel>
						<FormatterTextBox name='output' id='output' readOnly value={state.output} />

						<FormatterButton type='button'>{state.buttonText}</FormatterButton>
					</FormatterGroup>
				</LeftBox>

				<RightBox>
					<OptionsHeading>Options (Pick 1)</OptionsHeading>
					<FormattingOptionsList>
						{formatters.map((formatter) => (
							<FormattingOptionsItem key={formatter.id}>
								<FormattingOptionsCheckbox type='checkbox' name={formatter.id} id={formatter.id} />
								<FormattingOptionsLabel htmlFor={formatter.id}>
									{formatter.label}
								</FormattingOptionsLabel>
							</FormattingOptionsItem>
						))}
					</FormattingOptionsList>
				</RightBox>
			</FormatterRow>
		</FormatterWrapper>
	);
};

export default Formatter;
