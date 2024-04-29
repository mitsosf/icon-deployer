import './App.css';
import IRC2Form from "./IRC2Form";
import IRC3Form from "./IRC3Form";
import {useEffect, useState} from "react";
import { Button, Layout, Menu , Switch } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { DollarCircleOutlined, GoldOutlined } from '@ant-design/icons';
const { Header, Content, Sider, Footer} = Layout;

function App() {
    const [address, setAddress] = useState('');
    const [networkId, setNetworkId] = useState(1); // 1: Mainnet, 2: Lisbon Testnet
    const [tokenType, setTokenType] = useState('IRC2');

    useEffect(() => {
        window.addEventListener('ICONEX_RELAY_RESPONSE', (event) => {
            const { type, payload } = event.detail;

            if (type === 'RESPONSE_ADDRESS') {
                setAddress(payload);
            }
        });
    }, []);


    const toggleNetwork = (checked) => {
        setNetworkId(checked ? 1 : 2);  // 1 for mainnet, 2 for testnet
    };

    const connectWallet = () => {
        window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
            detail: {
                type: 'REQUEST_ADDRESS'
            }
        }));
    }

    function logout() {
        setAddress('');
        setTokenType('IRC2');
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" style={{color: 'white'}}>
                        ICON Deployer
                    </div>
                </Header>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<DollarCircleOutlined />} onClick={() => setTokenType('IRC2')}>
                        IRC2
                    </Menu.Item>
                    <Menu.Item key="2" icon={<GoldOutlined />} onClick={() => setTokenType('IRC3')}>
                        IRC3 (NFT)
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                    <div>
                        <Switch
                            checkedChildren="Mainnet"
                            unCheckedChildren="Lisbon Testnet"
                            defaultChecked
                            style={{ marginRight: 10 }}
                            onChange={toggleNetwork}
                        />
                    </div>
                    <div>
                        {!address ? (
                            <Button type="primary" onClick={connectWallet}>Connect Wallet</Button>
                        ) : (
                            <div style={{color: 'white'}}>
                                Logged in as: &nbsp;
                                <a
                                    target="_blank" rel="noopener noreferrer"
                                    href={`https://tracker.${networkId === 2 ? 'lisbon.' : ''}icon.community/address/${address}`}>{address}</a>
                                <Button style={{marginLeft: 20}} onClick={logout}><LogoutOutlined style={{ cursor: 'pointer', color: 'black' }} /> Logout</Button>
                            </div>
                        )}
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {!address && (
                            <div>
                                <h1>Welcome to the ICON Deployer</h1>
                                <h3>You can deploy:</h3>
                                <ul>
                                    <li>IRC2 (Fungible Token)</li>
                                    <li>IRC3 (NFT)</li>
                                </ul>
                                <p>Please connect your ICON wallet to continue.</p>
                            </div>
                        )}
                        {address && tokenType === 'IRC2' && (
                            <IRC2Form address={address} networkId={networkId}/>
                        )}
                        {address && tokenType === 'IRC3' && (
                            <IRC3Form address={address} networkId={networkId}/>
                        )}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Copyright ©{new Date().getFullYear()}. Created by <a target='_blank' rel='noreferrer nofollow' href="https://github.com/mitsosf">Dimitris
                    F.</a> of <a target='_blank' rel='noreferrer nofollow' href="https://iconation.team/">ICONation</a>
                </Footer>
            </Layout>
        </Layout>
    );
}

export default App;
