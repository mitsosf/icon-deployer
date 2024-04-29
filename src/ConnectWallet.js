import { Button } from "antd"


const ConnectWallet = () => {
    return (
        <div>
            <Button
                onClick={() => {
                    window.dispatchEvent(new CustomEvent('ICONEX_RELAY_REQUEST', {
                        detail: {
                            type: 'REQUEST_ADDRESS'
                        }
                    }));
                }}
            >
                Connect
            </Button>
        </div>
    )
}

export default ConnectWallet;