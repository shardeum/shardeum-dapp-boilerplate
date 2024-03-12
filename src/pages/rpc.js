import { useState, useContext } from "react";
import { Button, Card, Row, Col, Spin, notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { ethers } from "ethers";
import { WalletContext } from "@/context/WalletContext";

function RPC() {
  const [result, setResult] = useState("Your result will appear here...");
  const [definition, setDefinition] = useState(
    "Definition of the selected RPC call will appear here..."
  );
  const { connected } = useContext(WalletContext);
  const [loading, setLoading] = useState(false);
  const isConnected = connected;
  const provider = new ethers.providers.JsonRpcProvider(
    "https://hackathon.shardeum.org/"
  );

  const actions = [
    {
      label: "Network ID",
      action: async () => {
        const network = await provider.getNetwork();
        return ` Network ID: ${network.chainId}`;
      },
      definition:
        "Gets the network ID of the current network configured with the provider.",
    },
    {
      label: "Block Number",
      action: async () => {
        const blockNumber = await provider.getBlockNumber();
        return `Current Block Number: ${blockNumber}`;
      },
      definition: "Gets the current block number of the Shardeum network.",
    },
    {
      label: "Gas Price",
      action: async () => {
        const gasPrice = await provider.getGasPrice();
        return `Current Gas Price: ${gasPrice.toString()}`;
      },
      definition: "Retrieves the current gas price on the network.",
    },
    {
      label: "Balance of Address",
      action: async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const balance = await provider.getBalance(accounts[0]);
        return `Balance of ${accounts[0]}: ${parseFloat(ethers.utils.formatEther(balance)).toFixed(2)} SHM`;
        },
      definition: "Fetches the balance of a specific Shardeum address.",
    },
    {
      label: "Latest Block",
      action: async () => {
        const block = await provider.getBlock("latest");
        return `Latest Block Hash: ${block.hash}`;
      },
      definition: "Retrieves the hash of the latest block.",
    },
    {
      label: "Transaction Count",
      action: async () => {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const txCount = await provider.getTransactionCount(accounts[0]);
          return `Transaction Count for ${accounts[0]}: ${txCount}`;
        } catch (error) {
          throw new Error(`Error getting transaction count: ${error.message}`);
        }
      },
      definition: "Gets the number of transactions sent from the connected address.",
    },
    {
      label: "Code at Address",
      action: async () => {
        // Address of the Uniswap V2 router for demonstration.
        const address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        const code = await provider.getCode(address);
        return `Code at ${address}: ${code.slice(0, 50)}...`;
      },
      definition: "Fetches the contract code at a given address.",
    },
  ];

  const handleClick = async (action, def) => {
    if (!isConnected) {
      notification.error({
        message: "Error",
        description: "Please connect your wallet to proceed.",
      });
      return;
    }
    setLoading(true);
    try {
      const result = await action();
      setResult(result);
      setDefinition(def);
    } catch (error) {
      setResult(`Error: ${error.message}`);
      setDefinition("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={16}>
        <Col span={12}>
          {actions.map((item, index) => (
            <Button
              key={index}
              style={{ margin: "5px" }}
              onClick={() => handleClick(item.action, item.definition)}
              disabled={loading}
            >
              {item.label}
            </Button>
          ))}
        </Col>
        <Col span={12}>
          {loading ? (
            <Spin size="large" style={{ display: "block", margin: "auto" }} />
          ) : (
            <>
              <Card title="RPC Definition" style={{ marginBottom: "20px" }}>
                <p>{definition}</p>
              </Card>
              <Card
                title={
                  <div>
                    Result
                    {definition !== "" ? (
                      <CheckCircleOutlined
                        style={{ color: "green", marginLeft: "10px" }}
                      />
                    ) : (
                      <CloseCircleOutlined
                        style={{ color: "red", marginLeft: "10px" }}
                      />
                    )}
                  </div>
                }
                style={{ width: "100%" }}
              >
                <p>{result}</p>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default RPC;
