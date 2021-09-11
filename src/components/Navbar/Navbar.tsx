import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../../routes/routes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AuthACs} from "../../store/reducers/auth/actionCreators";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";


const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ? <>
                        <div style={{color: 'white', marginRight: '20px'}}>{user.username}</div>
                        <Menu theme={"dark"} mode={'horizontal'} selectable={false}>
                            <Menu.Item key={1}
                                       onClick={logout}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme={"dark"} mode={'horizontal'} selectable={false}>
                        <Menu.Item key={1}
                                   onClick={() => router.push(RouteNames.LOGIN)}>
                            Логин</Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;