import { useState, useContext, useEffect } from 'react';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button, Space, notification, Input, Select, Typography } from 'antd';
import { BigNumber, ethers } from 'ethers';
import { WalletContext } from '@/context/WalletContext';
import styles from '@/styles/defi.module.css';
import IERC20ABI from "@/abis/IERC20";
import config from '@/config/config';
import UniswapAbi from "@/abis/UniswapAbi";
import TSTTOKENABI from '@/abis/TSTTokenABI';


const { Option } = Select
const { Text } = Typography

function DeFi() {

    const { connected, signer, selectedAddress } = useContext(WalletContext);
    const [tokenFrom, setTokenFrom] = useState("TST")
    const [tokenTo, setTokenTo] = useState("SHM")
    const [amountFrom, setFrom] = useState(1)
    const [amountTo, setTo] = useState(1)

    const [isLoading, setLoading] = useState(false)
    const tokenContract = new ethers.Contract(config.TSTToken, TSTTOKENABI, signer)

    const tstTokenContract = new ethers.Contract(config.TSTToken, IERC20ABI.abi, signer);
    const uniswapRouterContract = new ethers.Contract(config.UniswapRouter, UniswapAbi, signer);


    const [tstAllowance, setTSTAllowance] = useState("0")

    const [tstInputAmount, setTSTInputAmount] = useState(0);
    const [shmInputAmount, setSHMInputAmount] = useState(0);


    useEffect(() => {
        if (selectedAddress) {
            loadAllowance()
        }
    }, [selectedAddress])




    const loadAllowance = async () => {
        const tstAllowance = await tstTokenContract.allowance(selectedAddress, config.UniswapRouter)
        setTSTAllowance(BigNumber.from(tstAllowance).toString())
    }


    async function mintTST() {
        try {
            const mint = await tokenContract.mint(selectedAddress, BigInt(25 * Math.pow(10, 18)))
        }
        catch (error) {
            notification.error({
                message: "Error",
                description: " Minting Error occured"

            })
        }
    }


    useEffect(() => {
        updatePrice()
    }, [tstInputAmount, shmInputAmount])


    const handleApprove = async () => {
        const tokenContract = tokenFrom === "TST" && tstTokenContract
        const amount = tokenFrom === "SHM" ? shmInputAmount : tstInputAmount
        const finalAmount = ethers.utils.parseUnits(amount, "ether");
        await tokenContract.approve(config.UniswapRouter, finalAmount);
        await loadAllowance()
        notification.success({
            message: "Success",
            description: "Approved Tokens"

        })

    }
    const handleSwap = async () => {
        const inAmount = tokenFrom === "SHM" ? shmInputAmount : tstInputAmount
        const path = tokenFrom === "SHM" ? [config.SHMToken, config.TSTToken] : [config.TSTToken, config.SHMToken];

        if (tokenFrom === "SHM") {
            await uniswapRouterContract.swapExactETHForTokensSupportingFeeOnTransferTokens(

                "0",
                path,
                selectedAddress,
                parseInt(new Date().valueOf() / 1000) + 10000,
                { value: ethers.utils.parseUnits(inAmount, "ether"), }
            );
        } else {
            await uniswapRouterContract.swapExactTokensForETHSupportingFeeOnTransferTokens(ethers.utils.parseUnits(inAmount, "ether"),
                "0",
                path,
                selectedAddress,
                parseInt(new Date().valueOf() / 1000) + 10000
            );
        }

        notification.success({
            message: "Success",
            description: "Successfully Swapped Tokens"

        })

    }
    const handleAction = async () => {
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
        console.log({ rawAmount })
        if (rawAmount) {
            const toAmount = ethers.utils.parseUnits(rawAmount, "ether");
            const resp = await uniswapRouterContract.getAmountsOut(toAmount, path);
            const amount1 = BigNumber.from(resp[1]).mul(100 - config.Slippage).div(100).toString();
            console.log({ amount1 })
            setTo(amount1)

        }
    }

    const renderSwapButtonText = () => {
        if (isLoading) {
            return "Loading..."
        }

        if ((tokenFrom === "SHM" && !tstInputAmount) || (tokenFrom !== "SHM" && !shmInputAmount)) {
            return "Swap Token"
        }

        if (!selectedAddress) {
            return "Connect Wallet"
        } else if (tokenFrom === "TST" && ethers.utils.parseUnits(tstInputAmount.toString()).lte(tstAllowance.toString())) {
            return "Approve TST"
        } else {
            return "Swap Token"
        }
    }

    return (
        <div>
            <div className={styles.swapcard} style={{ width: 305 }}>
                <Text style={styleswap.textstyle}>Swap </Text>
                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{ padding: '0.2rem', color: '#ffffff' }}>From</Text>
                    {/* <Text style={{padding:'0.2rem', color:'#ffffff' }}> {balanceError}</Text> */}
                    <Space direction='horizontal' style={{ backgroundColor: '#ffffff' }} >
                        <Input disabled={!connected} className={styles.swapInput} type='number' placeholder='0' name="amountToSwap" style={{ width: 100, borderStyle: 'none' }}
                               required
                               onChange={(e) => {
                                   console.log("ASasss", tokenFrom)
                                   setTo(e.target.value);
                                   setFrom(e.target.value)
                                   if (tokenFrom === "SHM") {
                                       setSHMInputAmount(e.target.value)
                                   } else if (tokenFrom === "TST") {
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

                <div style={{ height: '30px', width: '30px', padding: '0.2rem', border: '1px solid #ffffff', borderRadius: '50%', color: '#ffffff', backgroundColor: '#001529', position: 'absolute', left: '42%', top: '45%', zIndex: '2000' }}><ArrowDownOutlined style={{ padding: '0.2rem', caretColor: '#ffffff' }} /></div>

                <Space direction='vertical' style={styleswap.swapContainer}>
                    <Text style={{ padding: '0.2rem', color: '#ffffff' }}> To get</Text>
                    <Space direction='horizontal' style={{ backgroundColor: '#ffffff' }}>
                        <Input disabled style={{ borderCollapse: 'collapse', width: 100, borderStyle: 'none' }}
                               type='number' placeholder='0' name="amountSwapTo"
                               required

                               value={ethers.utils.formatEther(amountTo ? amountTo.toString() : "0")}

                               onChange={(e) => {
                                   if (tokenTo === "SHM") {
                                       setSHMInputAmount(e.target.value)
                                   } else if (tokenTo === "TST") {
                                       setTSTInputAmount(e.target.value)
                                   }
                               }} />
                        <Select defaultValue="SHM" style={styleswap.selectStyle} onChange={(value) => { setTokenTo(value) }}>
                            <Option value="TST">TST</Option>
                            <Option value="SHM">SHM</Option>
                        </Select>
                    </Space>
                </Space>

                <Button type="primary" disabled={!connected} onClick={() => {

                    if (tokenFrom !== tokenTo) {
                        handleAction()
                    }

                    else {
                        notification.error({
                            message: "Error",
                            description: "You cannot Swap the same token"

                        })
                    }
                }} style={{ color: '#ffffff', width: '100%', height: 50, marginTop: 10 }} >{renderSwapButtonText()}</Button>
            </div>
            <Button type="primary" disabled={!connected} style={{ position: 'absolute', bottom: 50, right: 50, color: '#ffffff', width: '10%', height: 50, marginTop: 10 }} onClick={mintTST} >Mint TST Token</Button>
        </div>
    );
}
const styleswap = {
    swapContainer: {
        border: '0.5px solid #001529',
        height: 80,
        borderRadius: '10px',
        padding: '0.1rem',
        backgroundColor: '#001529',

    },
    textstyle: {
        fontSize: 'large',
        fontWeight: 'bold',
        color: '#ffffff'

    },
    selectStyle: {
        height: 30,
        width: 120,
        borderStyle: 'none',
        borderRadius: '50%',
        borderCollapse: 'collapse'
    }
}
export default DeFi;