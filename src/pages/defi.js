import { useState, useContext,useEffect } from 'react';
import { ArrowDownOutlined  } from '@ant-design/icons';
import { Button,Space,Avatar, notification,  Input, Select,Card,Flex, Row, Col, Spin,Typography } from 'antd';
import { BigNumber, ethers } from 'ethers';
import { WalletContext } from '@/context/WalletContext';
import styles from '@/styles/defi.module.css';
import IERC20ABI from "../abis/IERC20";
import config from '@/config/config';
import UniswapAbi from "../abis/UniswapAbi";


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

const TSTContractAddress="0x5a1Cdd07b84EA4273283a717AD722c00EdE6E79E" ;

// pages/defi.js
const {Option}=Select
const {Text}=Typography

function DeFi() {

    const { connected,signer,balance,selectedAddress,connectWallet } = useContext(WalletContext);
    const [tokenFrom,setTokenFrom]=useState("TST")
    const [tokenTo,setTokenTo]=useState("SHM")
    const [amountFrom,setFrom]=useState(1)
    const [amountTo,setTo]=useState(1)

    const [isLoading,setLoading] = useState(false)
    const tokenContract= new ethers.Contract(TSTContractAddress,TSTTOKENABI,signer)

    const tstTokenContract = new ethers.Contract(config.TSTToken,IERC20ABI.abi,signer);
    const uniswapRouterContract  = new ethers.Contract(config.UniswapRouter,UniswapAbi,signer);


    const [tstAllowance, setTSTAllowance] = useState("0")

    const [tstInputAmount, setTSTInputAmount] = useState(0);
    const [shmInputAmount, setSHMInputAmount] = useState(0);


    useEffect(() => {
        if (selectedAddress) {
            loadAllowance()
        }
    },[selectedAddress])




    const loadAllowance = async() => {
        const tstAllowance = await tstTokenContract.allowance(selectedAddress,config.UniswapRouter)
        setTSTAllowance(BigNumber.from(tstAllowance).toString())
    }


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


    useEffect(() => {
        updatePrice()
    },[tstInputAmount,shmInputAmount])


    const handleApprove = async () => {
        const tokenContract = tokenFrom === "TST" && tstTokenContract
        const amount = tokenFrom === "SHM" ? shmInputAmount : tstInputAmount
        const finalAmount = ethers.utils.parseUnits(amount, "ether");
        await tokenContract.approve(config.UniswapRouter, finalAmount);
        await loadAllowance()

    }
    const handleSwap = async () => {
        const inAmount = tokenFrom === "SHM" ? shmInputAmount:tstInputAmount
        const path = tokenFrom === "SHM" ? [config.SHMToken, config.TSTToken] : [config.TSTToken, config.SHMToken];

        if (tokenFrom === "SHM") {
            await uniswapRouterContract.swapExactETHForTokensSupportingFeeOnTransferTokens(

                "0",
                path,
                selectedAddress,
                parseInt(new Date().valueOf() / 1000) + 10000,
                {value: ethers.utils.parseUnits(inAmount, "ether"),}
            );
        } else {
            await uniswapRouterContract.swapExactTokensForETHSupportingFeeOnTransferTokens( ethers.utils.parseUnits(inAmount, "ether"),
                "0",
                path,
                selectedAddress,
                parseInt(new Date().valueOf()/1000)+10000
            );
        }

    }
    const handleAction = async() => {
        setLoading(true)
        const isApprovalTxn = tokenFrom === "TST" && ethers.utils.parseUnits(tstAllowance.toString()).lte(tstInputAmount.toString());
        const func = isApprovalTxn ? handleApprove : handleSwap

        try {
            await func()
        } catch (err) {

        }

        setLoading(false)
    }

    const updatePrice = async () => {
        const path = tokenFrom === "SHM" ? [config.SHMToken, config.TSTToken] : [config.TSTToken, config.SHMToken];
        const rawAmount = tokenFrom === "SHM" ? shmInputAmount : tstInputAmount
        console.log({rawAmount})
        if (rawAmount) {
            const toAmount =  ethers.utils.parseUnits(rawAmount, "ether");
            const resp = await uniswapRouterContract.getAmountsOut(toAmount,path);
            const amount1 = BigNumber.from(resp[1]).mul(100-config.Slippage).div(100).toString();
            console.log({ amount1 })
            setTo(amount1)

        }
    }

    const renderSwapButtonText = () => {
        if (isLoading) {
            return "Loading..."
        }

        if (( tokenFrom === "SHM" && !tstInputAmount) || (tokenFrom !== "SHM" && !shmInputAmount) ) {
            return "Swap Token"
        }

        if (!selectedAddress) {
            return "Connect Wallet"
        }   else if (tokenFrom === "TST" && ethers.utils.parseUnits(tstInputAmount.toString()).lte(tstAllowance.toString())) {
            return "Approve TST"
        } else {
            return "Swap Token"
        }
    }

    return (
        <div>
            <h1 className={[styles.header,]}>DeFi Page</h1>

            <div className={styles.swapcard} style={{ width: 305 }}>
                <Text style={styleswap.textstyle}>Swap </Text>
                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{padding:'0.2rem', color:'#ffffff' }}>From</Text>
                    {/* <Text style={{padding:'0.2rem', color:'#ffffff' }}> {balanceError}</Text> */}
                    <Space direction='horizontal'style={{backgroundColor:'#ffffff'}} >
                        <Input disabled={!connected} className={styles.swapInput} type='number' placeholder='0' name="amountToSwap" style={{ width: 100, borderStyle: 'none' }}
                               required
                               onChange={(e) => {
                                   console.log("ASasss",tokenFrom)
                                   setTo(e.target.value);
                                   setFrom(e.target.value)
                                   if (tokenFrom === "SHM") {
                                       setSHMInputAmount(e.target.value)
                                   } else if(tokenFrom === "TST"){
                                       setTSTInputAmount(e.target.value)
                                   }
                               }}
                               value={amountFrom} />
                        <Select defaultValue="TST" style={styleswap.selectStyle}
                                onChange={(value) => {
                                    setTokenFrom(value)

                                }}>

                            <Option value="TST">TST</Option>
                            <Option value="SHM">SHM</Option>
                        </Select>
                    </Space>
                </Space>

                <div style={{height:'30px',width:'30px',padding:'0.2rem',border:'1px solid #ffffff',borderRadius:'50%',color:'#ffffff',backgroundColor:'#001529',position: 'absolute', left: '42%', top: '45%',zIndex:'2000'}}><ArrowDownOutlined style={{padding:'0.2rem',caretColor:'#ffffff'}}/></div>

                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{padding:'0.2rem',color:'#ffffff'}}> To get</Text>
                    <Space direction='horizontal' style={{backgroundColor:'#ffffff'}}>
                        <Input disabled style={{ borderCollapse: 'collapse', width: 100, borderStyle: 'none' }}
                               type='number' placeholder='0' name="amountSwapTo"
                               required

                               value={ethers.utils.formatEther(amountTo?amountTo.toString():"0")}

                               onChange={(e) => {
                                   if (tokenTo === "SHM") {
                                       setSHMInputAmount(e.target.value)
                                   } else if(tokenTo === "TST"){
                                       setTSTInputAmount(e.target.value)
                                   }
                               }}/>
                        <Select defaultValue="SHM" style={styleswap.selectStyle} onChange={(value)=>{setTokenTo(value)}}>
                            <Option value="TST">TST</Option>
                            <Option value="SHM">SHM</Option>
                        </Select>
                    </Space>
                </Space>

                <Button type="primary" disabled={!connected}  onClick={()=>{

                    if(tokenFrom !== tokenTo) {
                        handleAction()
                    }

                    else{
                        notification.error({
                            message:"Error",
                            description:"You cannot Swap the same token"

                        })
                    }
                }} style={{ color: '#ffffff', width: '100%', height: 50, marginTop: 10 }} >{renderSwapButtonText()}</Button>
            </div>
            <Button type="primary"  disabled={!connected} style={{position:'absolute',bottom:50,right:50,color:'#ffffff',width:'10%',height:50,marginTop:10}} onClick={mintTST} >Mint TST Token</Button>
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