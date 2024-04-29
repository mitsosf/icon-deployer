import './App.css';
import IRC2Form from "./IRC2Form";
import {useEffect, useState} from "react";
import ConnectWallet from "./ConnectWallet";

function App() {
    const [address, setAddress] = useState('');

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
            {address && <header className="App-header">
                <h1>Create your IRC2 token:</h1>
                <IRC2Form address={address}/>
            </header>}
        </div>
);
}

export default App;
