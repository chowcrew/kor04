import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import useTranslate from "../hooks/useTranslate";
import { TranslateProps } from "../interface/translate";
import { Colors } from "../utils/colors";
import HeaderSwap from "../components/HeaderSwap";
import dynamic from 'next/dynamic';
import Image from "next/image";
import {ethers} from 'ethers'
import WalletProvider, { WalletContext } from "../context/walletContext";
import { WalletContextType } from "../context/@types/wallet";

const Chart = dynamic(() => import("../components/Chart"), {ssr:false});

const Home: NextPage<TranslateProps> = (props: TranslateProps) => {
  const { t, font } = useTranslate(props);
  
  const [mode, setMode] = useState('BUY');
  const [asset1, setAsset1] = useState('oUSDT');
  const [asset2, setAsset2] = useState('BTC2');

  const [exactValue, setExactValue] = useState('');
  const [aboutValue, setAboutValue] = useState('');

  const [price, setPrice] = useState('-');
  const [initValue, setInitValue] = useState(1);
  const [fee, setFee] = useState('-');

  const { wallet } = useContext(WalletContext) as WalletContextType;

  const changeMode = (_mode: string) => {
    setMode(_mode);
    if (_mode === 'BUY') {
      setAsset1('oUSDT');
      setAsset2('BTC2');
    } else {
      setAsset1('BTC2');
      setAsset2('oUSDT');
    }
  }

  const abiYesbswap = [
    "function getPrice() view returns (uint256)",
    "function getMinialAmount() view returns (uint256)",
    "function getFee() view returns (uint256)",
    "function estimateAmount(string _orderType, uint256 _amount) view returns (uint256 cAmount, uint256 cPrice)",
    "function swap(string _orderType, uint256 _amount) payable",
    "function getAssetAddress() view returns (address)",
    "function getUsdtAddress() view returns (address)",
  ];
  
  const abiToken = [
    "function approve(address spender, uint256 value) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
  ];

  const getPrice = async () => {
    const provider = await new ethers.JsonRpcProvider('https://public-en-cypress.klaytn.net');
    const yesbswap = await new ethers.Contract("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", abiYesbswap, provider);
    setPrice((await yesbswap.getPrice() * ethers.toBigInt(10)).toString());
  }


  const getVar = async () => {
    const provider = await new ethers.JsonRpcProvider('https://public-en-cypress.klaytn.net');
    const yesbswap = await new ethers.Contract("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", abiYesbswap, provider);
    setInitValue((await yesbswap.getMinialAmount()).toString());
    // console.log(await yesbswap.getMinialAmount())
    //@ts-ignore
    setFee((await yesbswap.getFee()).toString() * 0.1);
  }

  const estimateValue = async () => {
    const provider = await new ethers.JsonRpcProvider('https://public-en-cypress.klaytn.net');
    const yesbswap = await new ethers.Contract("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", abiYesbswap, provider);
    const response = await yesbswap.estimateAmount(mode.toUpperCase(), await ethers.parseUnits(exactValue, mode === 'BUY' ? 6 : 18));
    setAboutValue(await ethers.formatUnits(response.cAmount.toString(), mode === 'BUY' ? 18 : 6))
  }

  const swap = async () => {
    //@ts-ignore
    const provider = await new ethers.BrowserProvider(window.klaytn);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const yesbswap = await new ethers.Contract("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", abiYesbswap, signer);
    console.log((await yesbswap.getUsdtAddress()).toString())
    console.log((await yesbswap.getAssetAddress()).toString())
    const usdt = await new ethers.Contract((await yesbswap.getUsdtAddress()).toString(), abiToken, signer);
    const btc2 = await new ethers.Contract((await yesbswap.getAssetAddress()).toString(), abiToken, signer);

    if (mode === 'BUY') {
      console.log(await usdt.allowance(wallet, "0x23697e2E16af303e3FAF011B1eb1e6628D26e67E") < exactValue)
      if (!(await usdt.allowance(wallet, "0x23697e2E16af303e3FAF011B1eb1e6628D26e67E") < exactValue)) {
        await usdt.approve("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", (await usdt.totalSupply()).toString());
      }
    } else {
      if (!(await btc2.allowance(wallet, "0x23697e2E16af303e3FAF011B1eb1e6628D26e67E") < exactValue)) {
        await btc2.approve("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", (await btc2.totalSupply()).toString());
      }
    }

    try {
      console.log(await ethers.parseUnits(exactValue, mode === 'BUY' ? 6 : 18))
      await yesbswap.swap(mode.toUpperCase(), await ethers.parseUnits(exactValue, mode === 'BUY' ? 6 : 18));
      alert('Swapped!');
    } catch (e) {
      // alert()
      console.log(e)
    }

  }

  //@ts-ignore
  const onChange = e => {
    setExactValue(e.target.value);
    //@ts-ignore
    setAboutValue(0);
  };

  useEffect(() => {
    if (mode === 'SELL') {
      alert(t.swap.notice);
    }
  }, [mode]);

  useEffect(() => {
    estimateValue();
  }, [exactValue]);

  useEffect(() => {
    getPrice();
    getVar();
    setInterval(() => getPrice(), 3000);
  }, []);

  return (
      <div
        style={{ backgroundColor: Colors.BACKGROUND }}
        className="overflow-hidden"
      >
        <HeaderSwap t={t} font={font} />
        <div style={{marginTop: 148, marginBottom: 48, gap: 30}} className="d-flex justify-content-center">
          <Chart t={t} font={font} />
          {
            wallet === ''? <div style={{
              height: 551,
              width: 378,
              backgroundColor: "#102434",
              borderRadius: 10,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 20,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                width: 233,
                height: 72,
                borderRadius: 8,
                backgroundColor: "rgba(231,31,25,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
                color: '#FFFFFF'
              }}>
                <img src="/assets/img/warn.png" width={20} height={20} style={{marginRight: 12}} />
                {t.swap.wallet}  
              </div>
            </div> :
            <div style={{
              height: 551,
              width: 378,
              backgroundColor: "#102434",
              borderRadius: 10,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 20,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div style={{display: "flex", gap: 20}}>
                {
                  mode === 'BUY' ? 
                  <div style={{
                    background: "linear-gradient(#E71F19, #CB5653)",
                    width: 82,
                    height: 35,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontFamily: 'Lato', fontWeight: 400, fontSize: 16
                  }} onClick={() => changeMode('BUY')}>{t.swap.buy}</div>
                  : 
                  <div style={{
                    backgroundColor: '#13354E',
                    width: 82,
                    height: 35,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: 'pointer',
                    color: '#A0AEC0',
                    fontFamily: 'Lato', fontWeight: 400, fontSize: 16
                  }} onClick={() => changeMode('BUY')}>{t.swap.buy}</div>
                }
                {
                  mode === 'SELL' ? 
                  <div style={{
                    background: "linear-gradient(#E71F19, #CB5653)",
                    width: 82,
                    height: 35,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontFamily: 'Lato', fontWeight: 400, fontSize: 16
                  }} onClick={() => changeMode('SELL')}>{t.swap.sell}</div>
                  : 
                  <div style={{
                    backgroundColor: '#13354E',
                    width: 82,
                    height: 35,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: 'pointer',
                    color: '#A0AEC0',
                    fontFamily: 'Lato', fontWeight: 400, fontSize: 16
                  }} onClick={() => changeMode('SELL')}>{t.swap.sell}</div>
                }
              </div>
              <div style={{
                backgroundColor: "#0A1721",
                width: "100%",
                height: 139.19,
                borderRadius: 12,
                padding: 12, 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div style={{fontFamily:'Lato', fontWeight: 500, fontSize: 12, color: '#A0AEC0'}}>{t.swap.payExact}</div>
                <div style={{color: '#FFFFFF', display: "flex", flexDirection: 'row', alignContent: 'center', gap: 8, fontSize: 14, fontFamily: 'Lato', fontWeight: 500}}>
                  {
                    asset1 === 'BTC2'
                    ? <img src="/assets/img/btc2.png" width={23.88} height={23.88} alt="btc2" />
                    : <img src="/assets/img/usdt.png" width={23.88} height={23.88} alt="usdt" />
                  }
                  {asset1}
                </div>
                <input onChange={onChange} value={exactValue} style={{backgroundColor: '#102434', height: 40, border: 'none', borderRadius: 8, outline: 'none', color: '#FFFFFF', padding: 16, fontFamily: 'Lato', fontWeight: 400, fontSize: 16}} type="number" />
              </div>
              <div style={{
                backgroundColor: "#0A1721",
                width: "100%",
                height: 139.19,
                borderRadius: 12,
                padding: 12, 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div style={{fontFamily:'Lato', fontWeight: 500, fontSize: 12, color: '#A0AEC0'}}>{t.swap.getAbout}</div>
                <div style={{color: '#FFFFFF', display: "flex", flexDirection: 'row', alignContent: 'center', gap: 8, fontSize: 14, fontFamily: 'Lato', fontWeight: 500}}>
                  {
                    asset2 === 'BTC2'
                    ? <img src="/assets/img/btc2.png" width={23.88} height={23.88} alt="btc2" />
                    : <img src="/assets/img/usdt.png" width={23.88} height={23.88} alt="usdt" />
                  }
                  {asset2}
                </div>
                <input disabled value={aboutValue} style={{backgroundColor: '#102434', height: 40, border: 'none', borderRadius: 8, outline: 'none', color: '#FFFFFF', padding: 16, fontFamily: 'Lato', fontWeight: 400, fontSize: 16}} type="number" />
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                  <div style={{fontFamily: 'Lato', fontWeight: 400, fontSize: 14, color: '#A0AEC0'}}>Price</div>
                  <div style={{fontFamily: 'Lato', fontWeight: 500, fontSize: 14, color: '#FFFFFF'}}>1 BTC2 = {ethers.formatUnits(price, 18)} oUSDT</div>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", marginTop: 7.67}}>
                  <div style={{fontFamily: 'Lato', fontWeight: 400, fontSize: 14, color: '#A0AEC0'}}>Swap Fee</div>
                  <div style={{fontFamily: 'Lato', fontWeight: 500, fontSize: 14, color: '#FFFFFF'}}>{fee} %</div>
                </div>
                <div style={{display: 'flex', justifyContent: "space-between", marginTop: 7.67}}>
                  <div style={{fontFamily: 'Lato', fontWeight: 400, fontSize: 14, color: '#A0AEC0'}}>Route</div>
                  <div style={{fontFamily: 'Lato', fontWeight: 500, fontSize: 14, color: '#FFFFFF'}}>{asset1} {'>'} {asset2}</div>
                </div>
              </div>
              <div style={{
                height: 57,
                border: 'none',
                borderRadius: 99999,
                background: "linear-gradient(#E71F19, #CB5653)",
                color: '#FFFFFF',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                cursor: 'pointer'
              }} onClick={swap}>
                {t.swap.swapNow}
              </div>
            </div>
          }
        </div>
        <Footer t={t} font={font} />
      </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))._nextI18Next
        .initialI18nStore,
      // Will be passed to the page component as props
    },
  };
}
