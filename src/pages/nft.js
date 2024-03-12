import { useState, useContext } from "react";
import { ethers } from "ethers";
import { Button, notification, Card, Space, Typography } from "antd";
import { WalletContext } from "@/context/WalletContext";

const MintNFT = () => {
  const [minting, setMinting] = useState(false);
  const { Text, Link } = Typography;
  const { connected } = useContext(WalletContext);

  const mintNFT = async () => {
    if (!connected) {
      notification.warning({
        message: "Warning",
        description: "Please connect your wallet first before minting.",
      });
      return;
    }
    await window.ethereum.request({ method: "eth_requestAccounts" });

    if (typeof window.ethereum !== "undefined") {
      setMinting(true);

      try {
        const NFTMinter = [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "_fromTokenId",
                type: "uint256",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "_toTokenId",
                type: "uint256",
              },
            ],
            name: "BatchMetadataUpdate",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
              },
            ],
            name: "MetadataUpdate",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "getApproved",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
            ],
            name: "isApprovedForAll",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
            ],
            name: "mintNFT",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "mintPrice",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "ownerOf",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
              },
            ],
            name: "supportsInterface",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "tokenURI",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
        const imageURI =
          "ipfs://QmcxhRwKmYcaDrsh7bM7rKE9118PP9DbhcfSUAm6xn68uT";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        await console.log(signer.getAddress());
        const contractNFT = new ethers.Contract(
          `0x00BdeF4Db81Ca5d666d3B892Fb9E062334707633`,
          NFTMinter,
          signer
        );

        let overrides = {
          value: ethers.utils.parseEther("1"), // Cost to mint: 1 SHM
          gasLimit: 3000000,
        };
        const transaction = await contractNFT.mintNFT(
          signer.getAddress(),
          imageURI,
          overrides
        );
        await transaction.wait();

        notification.success({
          message: "Success",
          description: (
            <span>
              Minting completed! Transaction hash:
              <Link
                href={`https://explorer-hackathon.shardeum.org/transaction/${transaction.hash}`}
                target="_blank"
              >
                {`https://explorer-hackathon.shardeum.org/transaction/${transaction.hash}`}
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Space direction="vertical" size="large">
        <Card
          style={{ width: "400px", height: "400px", border: "1px solid black" }}
        >
          <img
            src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
            alt="Image Preview"
            style={{ width: "100%", height: "100%" }}
          />
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Text strong style={{ fontSize: "18px" }}>
              Cost : 1 SHM
            </Text>
          </div>
        </Card>
      </Space>
      <Space direction="vertical" size="large">
        <Button
          type="primary"
          disabled={!connected}
          loading={minting}
          onClick={mintNFT}
          size="large"
          style={{ marginTop: "16px", alignSelf: "center", color: "#FFFFFF" }}
        >
          {minting ? "Minting..." : "Mint NFT"}
        </Button>
      </Space>
    </div>
  );
};

export default MintNFT;
