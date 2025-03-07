import {
  View,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {SetStateAction, useRef} from 'react';
import useTheme from '../hooks/useTheme';

type InputPasscodeProps = {
  state: [string, string, string, string];
  setState: React.Dispatch<SetStateAction<[string, string, string, string]>>;
  focused?: boolean;
};

const InputPasscode: React.FC<InputPasscodeProps> = ({
  state,
  setState,
  focused = false,
}): React.JSX.Element => {
  const {currentTheme} = useTheme();
  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const handleOnChangeText = (index: number, value: string) => {
    if (value.trim().length > 1) return;
    const newVal: [string, string, string, string] = [...state];
    newVal[index] = value;
    setState(newVal);
    if (value && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };
  const handleOnKeyChange = (
    index: number,
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace' && !state[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };
  return (
    <View style={styles.container}>
      {state.map((s, i) => (
        <View
          style={[
            styles.inputContainer,
            {borderColor: currentTheme.baseColor},
          ]}
          key={i}>
          <TextInput
            ref={refs[i]}
            style={styles.input}
            value={s}
            autoFocus={i === 0 && focused}
            onChangeText={v => handleOnChangeText(i, v)}
            onKeyPress={e => handleOnKeyChange(i, e)}
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 18,
    alignSelf: 'center',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 20,
  },
  input: {
    color: 'black',
    fontSize: 28,
  },
});

export default InputPasscode;
