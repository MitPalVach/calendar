import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";
import {useDispatch} from "react-redux";
import {AuthACs} from "../../store/reducers/auth/actionCreators";


const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const submit = () => {
        dispatch(AuthACs.login('',''))
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Логин"
                name="username"
                rules={[rules.required('Введите ваш логин')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите ваш пароль')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;