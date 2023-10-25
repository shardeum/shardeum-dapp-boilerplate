import { useState} from 'react';
import { ethers } from 'ethers';
import { Button, notification, Card , Space, Typography} from 'antd';
const MintNFT = () => {
  const [minting, setMinting] = useState(false);
  const { Text, Link } = Typography;

  const mintNFT = async () => {
    if (typeof window.ethereum !== 'undefined') {
      setMinting(true);

      try {
        const nftContractAddress= process.env.NFT_CONTRACT_ADDRESS;
        const imageURI = 'ipfs://QmcxhRwKmYcaDrsh7bM7rKE9118PP9DbhcfSUAm6xn68uT';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let overrides = {
          value: ethers.utils.parseEther("1") // 1 ether
        };
        const transaction = await contract.mintNFT(signer.getAddress(), imageURI, overrides);
        await transaction.wait();

        notification.success({
          message: "Success",
          description: (
            <span>
              Minting completed! Transaction hash: 
              <Link href={`https://explorer-dapps.shardeum.org/transaction/${transaction.hash}`} target="_blank">
                {` https://explorer-dapps.shardeum.org/transaction/${transaction.hash}`}
              </Link>
            </span>
          ),
        });
      } catch (error) {
        console.error("Error minting NFT: ", error);
        notification.error({
          message: "Error",
          description: "Minting failed. Please try again.",
        });
      } finally {
        setMinting(false);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Space direction="vertical" size="large">
      <Card style={{ width: '400px', height: '400px', border: '1px solid black' }}>
        <img src='https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300' alt="Image Preview" style={{ width: '100%', height: '100%' }} />
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Text strong style={{ fontSize: '18px' }}>Cost : 1 SHM</Text>
        </div>  
      </Card>
   </Space>
      <Space direction="vertical" size="large">
      <Button type="primary" loading={minting} onClick={mintNFT} size='large' style={{ marginTop: '16px', alignSelf: 'center' }}>
        {minting ? "Minting..." : "Mint NFT"}
      </Button>
      </Space>
    </div>
);

};

export default MintNFT;