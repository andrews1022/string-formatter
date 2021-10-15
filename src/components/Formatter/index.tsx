import React, { useReducer } from 'react';

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
	const [state, dispatch] = useReducer(formattingReducer, initialState);

	const setInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch({ type: 'SET_INPUT', payload: event.target.value });
	};

	const formatInputValue = () => {
		dispatch({ type: 'FORMAT_INPUT' });
	};

	const setFormattingOption = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'BOX_CHECKED', payload: event.target.id });
	};

	const copyOutputValue = () => {
		dispatch({ type: 'COPY_OUTPUT' });
	};

	return (
		<FormatterWrapper>
			<FormatterRow>
				<LeftBox>
					<FormatterGroup>
						<FormatterLabel htmlFor='input'>Input</FormatterLabel>
						<FormatterTextBox
							id='input'
							name='input'
							onChange={setInputValue}
							value={state.input}
						/>

						<FormatterButton
							disabled={!state.input.length || !state.checkedID.length}
							onClick={formatInputValue}
							type='button'
						>
							Format
						</FormatterButton>
					</FormatterGroup>

					<FormatterGroup>
						<FormatterLabel htmlFor='output'>Output</FormatterLabel>
						<FormatterTextBox id='output' name='output' readOnly value={state.output} />
						<FormatterButton
							disabled={!state.output.length}
							onClick={copyOutputValue}
							type='button'
						>
							Copy
						</FormatterButton>
					</FormatterGroup>
				</LeftBox>

				<RightBox>
					<OptionsHeading>Options (Pick 1)</OptionsHeading>
					<FormattingOptionsList>
						{formatters.map((formatter) => (
							<FormattingOptionsItem key={formatter.id}>
								<FormattingOptionsCheckbox
									id={formatter.id}
									name={formatter.id}
									onChange={setFormattingOption}
									type='checkbox'
								/>
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
