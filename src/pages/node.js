import { useState } from 'react';
import { Input, Button, Spin, Typography, Card, Row, Col, notification } from 'antd';
import { SearchOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Node = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [data, setData] = useState({
    transactionCount: 0,
    stakeEnough: false,
    unstakeCount: 0,
    nodeActiveHours: 0,
    rewardAmount: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const openNotification = (message, description, type) => {
    notification[type]({
      message,
      description,
      placement: 'topRight'
    });
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const responses = await Promise.all([
        fetch(`/api/transactionCount?address=${walletAddress}`),
        fetch(`/api/stakeEnough?address=${walletAddress}`),
        fetch(`/api/unstakeCount?address=${walletAddress}`),
        fetch(`/api/nodeHours?address=${walletAddress}`),
        fetch(`/api/rewardAmount?address=${walletAddress}`)
      ]);

      const results = await Promise.all(responses.map(res => res.json()));

      setData({
        transactionCount: results[0].transactions,
        stakeEnough: results[1].enoughStake,
        unstakeCount: results[2].unstakeTransactions,
        nodeActiveHours: results[3].activeTime,
        rewardAmount: results[4].reward / 1000000000000000000
      });
      openNotification('Data Fetch Successful', 'User stats have been updated.', 'success');
    } catch (err) {
      setError('Failed to fetch data.');
      openNotification('Data Fetch Error', 'Failed to fetch user stats. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/transfer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ address: walletAddress })
      });

      if (!response.ok) {
        throw new Error('Transfer failed.');
      }

      openNotification('Transfer Successful', `15 SHM transferred successfully.`, 'success');
    } catch (err) {
      setError('Transfer failed.');
      openNotification('Transfer Error', 'Failed to transfer SHM. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      backgroundImage: 'url("/public/bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <Title level={2} style={{ textAlign: 'center', color: 'white' }}>Shardeum Node Stats</Title>
      <Row justify="center" style={{ marginBottom: '1rem' }}>
        <Col>
          <Input
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={handleInputChange}
            style={{ width: '300px' }}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Col>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={fetchData}
            disabled={loading}
          >
            Fetch Data
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<DollarCircleOutlined />}
            onClick={handleTransfer}
            disabled={loading}
          >
            Transfer 15 SHM
          </Button>
        </Col>
      </Row>
      {loading && (
        <Row justify="center" style={{ marginTop: '1rem' }}>
          <Spin size="large" />
        </Row>
      )}
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: '1rem' }}>
        <Col span={8}>
          <Card title="Total Transactions" style={{ textAlign: 'center' }}>
            <Text>{data.transactionCount}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Stake Amount >= 10" style={{ textAlign: 'center' }}>
            <Text>{data.stakeEnough ? 'Yes' : 'No'}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Unstake Transactions" style={{ textAlign: 'center' }}>
            <Text>{data.unstakeCount}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Node Active Hours" style={{ textAlign: 'center' }}>
            <Text>{data.nodeActiveHours}</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Node Reward Amount" style={{ textAlign: 'center' }}>
            <Text>{data.rewardAmount} SHM</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Node;
