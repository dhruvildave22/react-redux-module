import React, { useEffect, useRef, useState } from 'react';
import { Table, Row, Col, Button, Typography } from 'antd';
import { useHistory } from 'react-router';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';
import ErrorDisplay from '../shared/ErrorDisplay';
const { Title } = Typography;

const List = (props) => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch()

  const { loading, users, error } = props

  const prevLoading = usePrevious(loading);


  useEffect(() => {
    props.dispatch(fetchUsers());
    if (prevLoading && prevLoading.loading !== loading && loading) {
      setAllData(users);
    }
  }, [dispatch])

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      title: 'Review',
      dataIndex: 'review'
    },
  ];

  const data = [{
  }];
  allData.map((user) => {
    data.push({
      key: user.id,
      username: user.username,
      email: user.email,
      gender: user.gender,
      review: user.review + '%',
    })
    return data;
  });
  const handleClick = () => {
    history.push('/new-user')
  }

  if (error !== null) {
    return <ErrorDisplay error={error} />
  } else {
    return (
      <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
              User List
            </Title>
          </Col>
          <Col span={6}>
            <Button onClick={handleClick} block>Add User</Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
  users: state.user.items
});

export default connect(mapStateToProps)(List);

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
