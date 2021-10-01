import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../../utils/rules";
import {IUser} from "../../models/IUser";
import {IEvent} from "../../models/IEvent";


interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)
    return (
        <Form>
            <Form.Item label="Описание события"
                       name="description"
                       rules={[rules.required()]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Дата события"
                       name="date"
                       rules={[rules.required()]}>
                <DatePicker/>
            </Form.Item>
            <Form.Item label="Выберите гостя"
                       name="guest"
                       rules={[rules.required()]}>
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {props.guests.map(guests =>
                        <Select.Option key={guests.username} value={guests.username}>
                            {guests.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;