import { Inter } from 'next/font/google';
import WalletHeader from '../components/Header';
import { Typography, Button, Divider, Row, Col, Card, Space, Icon } from 'antd';

const { Title, Text } = Typography;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Row justify="center" align="top" style={{ minHeight: '100vh', backgroundColor: '#001529', color: '#fff' }}>
        <Col span={24} style={{ textAlign: 'center', paddingTop: '10vh' }}>
          <Title style={{ color: '#fff', fontWeight: 'bold' }}>Welcome to Shardeum Dapp Boilerplate</Title>
          <Text style={{ fontSize: '18px', color: '#fff' }}>
            Kickstart your decentralized application journey with confidence.
          </Text>
          
          <Divider style={{ borderColor: '#40a9ff', margin: '20px 0' }} />

          <Row gutter={[48, 48]} style={{ padding: '5vh 10vw' }}>
            <Col span={8}>
              <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
                <Icon type="block" style={{ fontSize: '48px', color: '#40a9ff' }} />
                <Title level={3} style={{ color: '#fff' }}>Blockchain RPC</Title>
                <Text style={{ color: '#fff' }}>Seamless real-time blockchain RPC call functionalities. Dive into the vast universe of queries, transactions, and smart contracts.</Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
                <Icon type="gold" style={{ fontSize: '48px', color: '#40a9ff' }} />
                <Title level={3} style={{ color: '#fff' }}>NFT Minting</Title>
                <Text style={{ color: '#fff' }} >Mint unique digital assets on the blockchain with ease. Experience the essence of NFTs firsthand.</Text>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
                <Icon type="bank" style={{ fontSize: '48px', color: '#40a9ff' }} />
                <Title level={3} style={{ color: '#fff' }}>DeFi Explorations</Title>
                <Text style={{ color: '#fff' }}>Discover decentralized finance. From lending and borrowing to staking, it's all here.</Text>
              </Card>
            </Col>
          </Row>

          <Divider style={{ borderColor: '#40a9ff', margin: '20px 0' }} />

          <Space size="large">
            <Button type="primary" size="large">Get Started</Button>
            <Button type="default" size="large">Contribute Here</Button>
          </Space>
        </Col>
      </Row>
    </>
  );
}
