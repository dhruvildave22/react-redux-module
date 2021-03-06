import React, { useEffect } from 'react';
import {
  Row, Col, Typography, Input, Form, Button,
  Radio, Switch, Slider, Select, notification
} from 'antd';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, createUserClear } from '../../actions/userActions';
const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const NewUser = () => {
  const history = useHistory();

  const user = useSelector(state => state.user.newUser)
  const error = useSelector(state => state.user.error)
  const loading = useSelector(state => state.user.loading)


  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(createUser(values));
  }

  useEffect(() => {
    if (user !== null) {
      dispatch(createUserClear());
      notification.success({
        message: `${user.username} created successfully`,
      });
      history.push('/users');
    }
    if (error !== null) {
      notification.success({
        message: `something went wrong`,
      });
    }

  }, [user, error]);

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: 'center' }} level={2}>
            Please Fill the User Form
            </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item name="username" label="UserName"
              rules={[
                {
                  required: true,
                  message: 'Please input your name',
                }
              ]}
            >
              <Input placeholder="Please Enter your username" />
            </Form.Item>
            <Form.Item name="email" label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your correct email',
                  type: 'email'
                }
              ]}
            >
              <Input placeholder="Please Enter your email" />
            </Form.Item>
            <Form.Item name="gender" label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please select your gender',
                }
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="hobbies" label="Hobbies"
              rules={[
                {
                  required: true,
                  message: 'Please select your hobbies',
                  type: 'array'
                }
              ]}
            >
              <Select mode="multiple" placeholder="Please select you hobbies">
                <Select.Option value="Reading">Reading</Select.Option>
                <Select.Option value="Writing">Writing</Select.Option>
                <Select.Option value="Coding">Coding</Select.Option>
                <Select.Option value="Singing">Singing</Select.Option>
                <Select.Option value="Dancing">Dancing</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="review" label="Review"
            >
              <Slider />
            </Form.Item>
            <Form.Item name="notificaiton" label="Notificaiton" valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Save
            </Button>{' '}
              <Button type="danger" htmlType="button" onClick={() => history.push('/list')}>
                Back
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
export default NewUser;