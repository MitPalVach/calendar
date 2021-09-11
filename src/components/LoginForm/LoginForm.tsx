import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../../utils/rules";
import {useDispatch} from "react-redux";
import {AuthACs} from "../../store/reducers/auth/actionCreators";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label="Логин"
                name="username"
                rules={[rules.required('Введите ваш логин')]}
            >
                <Input value={username}
                       onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите ваш пароль')]}
            >
                <Input value={password}
                       onChange={e => setPassword(e.target.value)}
                       type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;