import { useState, useContext,useEffect } from 'react';
import { ArrowDownOutlined  } from '@ant-design/icons';
import { Button,Space,Avatar, notification,  Input, Select,Card,Flex, Row, Col, Spin,Typography } from 'antd';
import { ethers } from 'ethers';
import { WalletContext } from '@/context/WalletContext';
import styles from '@/styles/defi.module.css';


const swapTokenABI= [ {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
    {
        "input": [
            {
                "internalType": "uint256",
                "name": "amountOutDesired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountInMax",
                "type": "uint256"
            }
        ],
        "name": "swapSHMForTST",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amountOutDesired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountInMax",
                "type": "uint256"
            }
        ],
        "name": "swapTSTForSHM",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "uniswapRouter",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }];
const swapContractAddress="0x63fC85f4Fcdbf7BC4EEE7003fd47bBF08d0B33FB";
const TSTTOKENABI= [{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "intialSupply",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }]
const ShmABI=[   "function balanceOf(address account) public view virtual returns (uint256)"]
const TSTContractAddress="0x5a1Cdd07b84EA4273283a717AD722c00EdE6E79E" ;
const SHMContractAddress="0xae49C37fc1C0487Fe1F3778570a496a9F01960AC";

// pages/defi.js
const {Option}=Select
const {Text}=Typography

function DeFi() {

    const { connected,signer,balance,selectedAddress,connectWallet } = useContext(WalletContext);
    const [tokenFrom,setTokenFrom]=useState("TST")
    const [tokenTo,setTokenTo]=useState("SHM")
    const [amountFrom,setFrom]=useState(1)
    const [amountTo,setTo]=useState(1)
    const [swapError,setSwapError]=useState(" ")
    const [balanceError,setBalanceError]=useState(" ")

    const isConnected=connected
    const swapContract= new ethers.Contract(swapContractAddress,swapTokenABI,signer);
    const tokenContract= new ethers.Contract(TSTContractAddress,TSTTOKENABI,signer)
    const shmbalance=Number(balance)

    async function mintTST(){
        try{
            const mint= await tokenContract.mint(selectedAddress,BigInt(25 * Math.pow(10,18)))
        }
        catch(error){
            notification.error({
                message:"Error",
                description:" Minting Error occured"

            })
        }
    }


    async function swapTstToSHM(){
        const balance=await tokenContract.balanceOf(selectedAddress);
        if(amountFrom >Number(balance)){
            notification.error({
                message:"Error",
                description:" Insufficient SHM"

            })
            return;
        }
        else{
            try{
                const swaptst=await swapContract.swapTSTForSHM(amountFrom,0);
            }
            catch(error){
                notification.error({
                    message:"Error",
                    description:" Transcation reversed"

                })


            }
        }
    }
    async function swapSHMToTST(){
        if(amountFrom > shmbalance){
            notification.error({
                message:"Error",
                description:" Insufficient SHM"

            })

            return
        }
        else{
            try{
                const swaptst=await swapContract.swapSHMForTST(amountFrom,0);
            }
            catch(error){
                notification.error({
                    message:"Error",
                    description:" Transcation reversed"

                })

            }
        }
    }
    return (
        <div>
            <h1 className={styles.header}>DeFi Page</h1>

            <div className={styles.swapcard} style={{ width: 305 }}>
                <Text style={styleswap.textstyle}>Swap </Text>
                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{padding:'0.2rem', color:'#ffffff' }}> From</Text>
                    <Text style={{padding:'0.2rem', color:'#ffffff' }}> {balanceError}</Text>
                    <Space direction='horizontal'style={{backgroundColor:'#ffffff'}} >
                        <Input disabled={!connected} className={styles.swapInput}type='number' placeholder='0' name="amountToSwap" style={{width:100,borderStyle:'none' }} required onChange={(e)=>{setTo(e.target.value);setFrom(e.target.value)}} value={amountFrom}/>
                        <Select defaultValue="TST" style={styleswap.selectStyle} onChange={(value)=>{setTokenFrom(value)}}>
                            <Option value="TST">TST</Option>
                            <Option value="SHM">SHM</Option>
                        </Select>
                    </Space>
                </Space>

                <div style={{height:'30px',width:'30px',padding:'0.2rem',border:'1px solid #ffffff',borderRadius:'50%',color:'#ffffff',backgroundColor:'#001529',position: 'absolute', left: '42%', top: '45%',zIndex:'2000'}}><ArrowDownOutlined style={{padding:'0.2rem',caretColor:'#ffffff'}}/></div>

                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{padding:'0.2rem',color:'#ffffff'}}> To get</Text>
                    <Space direction='horizontal' style={{backgroundColor:'#ffffff'}}>
                        <Input disabled={!connected} style={{borderCollapse:'collapse',width:100,borderStyle:'none' }} type='number' placeholder='0' name="amountSwapTo" required value={amountTo}/>
                        <Select defaultValue="SHM" style={styleswap.selectStyle} onChange={(value)=>{setTokenTo(value)}}>
                            <Option value="TST">TST</Option>
                            <Option value="SHM">SHM</Option>
                        </Select>
                    </Space>
                </Space>

                <Button type="primary" disabled={!connected}  onClick={()=>{

                    if(tokenFrom==='TST' && tokenTo !='TST') {
                        swapTstToSHM();
                    }
                    else if(tokenFrom==='SHM' && tokenTo !='SHM'){
                        swapSHMToTST();

                    }
                    else{
                        notification.error({
                            message:"Error",
                            description:"You cannot Swap the same token"

                        })
                    }
                }} style={{color:'#ffffff',width:'100%',height:50,marginTop:10}} >Swap Token</Button>
            </div>
            <Button type="primary"  disabled={!connected} style={{position:'absolute',bottom:1,right:0,color:'#ffffff',width:'10%',height:50,marginTop:10}} onClick={mintTST} >Mint TST Token</Button>
        </div>
    );
}
const styleswap={
    swapContainer:{
        border: '0.5px solid #001529',
        height:80,
        borderRadius:'10px',
        padding:'0.1rem',
        backgroundColor:'#001529',

    },
    textstyle:{
        fontSize:'large',
        fontWeight:'bold',
        color:'#ffffff'

    },
    selectStyle:{
        height: 30,
        width: 120,
        borderStyle:'none',
        borderRadius:'50%',
        borderCollapse:'collapse'
    }
}
export default DeFi;
