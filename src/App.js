import './App.css';
import IRC2Form from "./IRC2Form";
import IRC3Form from "./IRC3Form";
import {useEffect, useState} from "react";
import ConnectWallet from "./ConnectWallet";
import { Button } from 'antd';

function App() {
    const [address, setAddress] = useState('');
    // const [network, setNetwork] = useState('');
    const [tokenType, setTokenType] = useState('');

    useEffect(() => {
        window.addEventListener('ICONEX_RELAY_RESPONSE', (event) => {
            const { type, payload } = event.detail;

            if (type === 'RESPONSE_ADDRESS') {
                setAddress(payload);
            }
        });
    }, []);

    return (
        <div className="App">
            {!address && <header className="App-header">
                <h1>Connect your ICON wallet:</h1>
                <ConnectWallet/>
            </header>}
            {address && !tokenType && <header className="App-header">
                <h1>Choose token type:</h1>
                <div>
                    <div>
                        <Button onClick={() => setTokenType('IRC2')}>IRC2 - Fungible token</Button>
                    </div>
                    <div>
                        <Button onClick={() => setTokenType('IRC3')}>IRC3 - NFT</Button>
                    </div>
                </div>
            </header>
            }
            {address && tokenType === 'IRC2' &&<header className="App-header">
                <h1>Create your IRC2 token:</h1>
                <IRC2Form address={address}/>
            </header>}
            {address && tokenType === 'IRC3' && <header className="App-header">
                <h1>Create your NFT:</h1>
                <IRC3Form address={address}/>
            </header>}
        </div>
);
}

export default App;
