import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../../routes/routes";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ? <>
                        <div style={{color: 'white', marginRight: '20px'}}>MitPal</div>
                        <Menu theme={"dark"} mode={'horizontal'} selectable={false}>
                            <Menu.Item key={1}
                                       onClick={() => console.log('Выйти')}>
                                Выйти</Menu.Item>
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