import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

// styled components
import * as S from './Formatter.styles';
import { Button } from '../UI/Button';

// reducer
import { formattingReducer, initialState } from '../../reducers/formattingReducer';

// data
import { formatters } from '../../data/formatters';

const Formatter = (): JSX.Element => {
  const [state, dispatch] = useReducer(formattingReducer, initialState);

  // event functions
  const copyOutputHandler = () => {
    dispatch({ type: 'COPY_OUTPUT' });
  };

  const formatInputHandler = () => {
    dispatch({ type: 'FORMAT_INPUT' });
  };

  const setFormattingOptionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'BOX_CHECKED', payload: event.target.id });
  };

  const setInputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'SET_INPUT', payload: event.target.value });
  };

  // button disabled bools
  const isInputButtonDisabled = !state.input.length || !state.checkedID.length;
  const isOutputButtonDisabled = !state.output.length;

  return (
    <S.Wrapper>
      <S.Row>
        <S.Box>
          <S.Group>
            <S.Label htmlFor='input'>Input</S.Label>

            <S.TextBox id='input' name='input' onChange={setInputHandler} value={state.input} />

            <Button disabled={isInputButtonDisabled} onClick={formatInputHandler} type='button'>
              Format
            </Button>
          </S.Group>

          <S.Group>
            <S.Label htmlFor='output'>Output</S.Label>

            <S.TextBox id='output' name='output' readOnly value={state.output} />

            <Button disabled={isOutputButtonDisabled} onClick={copyOutputHandler} type='button'>
              Copy
            </Button>
          </S.Group>
        </S.Box>

        <S.Box>
          <S.Heading>Options (Pick 1)</S.Heading>
          <S.OptionsList>
            {formatters.map((formatter) => (
              <S.OptionsItem key={formatter.id}>
                <S.OptionsCheckbox
                  id={formatter.id}
                  name={formatter.id}
                  onChange={setFormattingOptionHandler}
                  type='checkbox'
                />
                <S.OptionsLabel htmlFor={formatter.id}>{formatter.label}</S.OptionsLabel>
              </S.OptionsItem>
            ))}
          </S.OptionsList>
        </S.Box>
      </S.Row>
    </S.Wrapper>
  );
};

export default Formatter;
