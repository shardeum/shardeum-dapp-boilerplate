
import { Inter } from 'next/font/google';
import { Typography, Button, Divider, Row, Col, Card, Space, Icon } from 'antd';
import Link from 'next/link';
import { GlobalOutlined, FileImageOutlined, BankOutlined } from '@ant-design/icons';


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
          <GlobalOutlined style={{ fontSize: '48px', color: '#40a9ff' }} />
          <Title level={3} style={{ color: '#fff' }}>Blockchain RPC</Title>
          <Text style={{ color: '#fff' }}>Seamless real-time Shardeum RPC call functionalities. Dive into the vast universe of queries, transactions, and smart contracts.</Text>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
          <FileImageOutlined style={{ fontSize: '48px', color: '#40a9ff' }} />
          <Title level={3} style={{ color: '#fff' }}>NFT Minting</Title>
          <Text style={{ color: '#fff' }}>Mint your own NFTs from an NFT collection on the Shardeum blockchain with ease.</Text>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false} style={{ backgroundColor: 'transparent' }}>
          <BankOutlined style={{ fontSize: '48px', color: '#40a9ff' }} />
          <Title level={3} style={{ color: '#fff' }}>DeFi Explorations</Title>
          <Text style={{ color: '#fff' }}>Discover the world of DeFi by building with one of the biggest Defi protocol in the web3 space - Uniswap.</Text>
        </Card>
      </Col>
    </Row>
          <Divider style={{ borderColor: '#40a9ff', margin: '20px 0' }} />

          <Space size="large">
            <Link href="/rpc">
            <Button type="primary" size="large">Get Started</Button>
            </Link>
            <Link href="https://github.com/Shardeum/shardeum-dapp-boilerplate">
            <Button type="default" size="large">Contribute</Button>
            </Link>

          </Space>
        </Col>
      </Row>
    </>
  );
}

