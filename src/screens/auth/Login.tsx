import {KeyboardView} from 'components/basics';
import {useUserContext} from 'contexts/UserContext';
import {useFormik} from 'formik';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';

export const Login: React.FC = () => {
  const userContext = useUserContext();

  const login = useCallback(
    (values: {name: string; password: string}) => {
      userContext.login(values.name, values.password).then(
        () => {},
        () => {},
      );
    },
    [userContext],
  );

  const formik = useFormik({
    initialValues: {name: '', password: ''},
    validationSchema: Yup.object().shape({
      name: Yup.string().required('名前を入力してください'),
      password: Yup.string().required('パスワードを入力してください'),
    }),
    validateOnChange: false,
    onSubmit: login,
  });

  return (
    <KeyboardView>
	    <View style={styles.form}>
	      <Input
	        label="名前"
	        containerStyle={styles.input}
	        autoCapitalize="none"
	        errorMessage={formik.errors.name}
	        onChangeText={formik.handleChange('name')}
	        value={formik.values.name}
	      />
	      <Input
	        label="パスワード"
	        containerStyle={styles.input}
	        errorMessage={formik.errors.password}
	        secureTextEntry
	        onChangeText={formik.handleChange('password')}
	        value={formik.values.password}
	      />
	      <Button
	        disabled={formik.isSubmitting}
	        onPress={() => formik.handleSubmit()}
	        title="ログインする"
	        buttonStyle={styles.button}
	      />
	    </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {marginTop: 20, width: '80%'},
  button: {
    marginTop: 30,
  },
});