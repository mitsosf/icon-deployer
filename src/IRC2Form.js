import React from 'react';
import { Form, Input, Button } from 'antd';
import { IconService } from 'icon-sdk-js';

const IRC2Form = ({address}) => {

    const eventHandler = event => {
        const { type, payload } = event.detail;
        if (type === 'RESPONSE_JSON-RPC') {
            console.log(payload)
        }

        else if (type === 'CANCEL_JSON-RPC') {
            console.error('User canceled deployment request')
        }
    }
    window.addEventListener('ICONEX_RELAY_RESPONSE', eventHandler);

    const onFinish = (values) => {
        const iconService = IconService;
        const IconBuilder = iconService.IconBuilder;
        const deployTransactionBuilder = new IconBuilder.DeployTransactionBuilder();
        const deployTransaction = deployTransactionBuilder
            .from(address)
            .to('cx0000000000000000000000000000000000000000')
            .nid(iconService.IconConverter.toBigNumber(2))
            .value(iconService.IconConverter.toBigNumber(0))
            .timestamp((new Date()).getTime() * 1000)
            .stepLimit(iconService.IconConverter.toBigNumber(10000000000))
            .version(iconService.IconConverter.toBigNumber(3))
            .contentType('application/java')
            .nonce(iconService.IconConverter.toBigNumber(1))
            .content('0x504b03041400080808000000210000000000000000000000000014000d004d4554412d494e462f4d414e49464553542e4d46555405000100000000feca0000f34dcccb4c4b2d2ed10d4b2d2acecccfb35230d433e0e5f24dccccd375ce492c2eb65270e4e5e2e50200504b07082bc2bf352a00000028000000504b0304140008080800000021000000000000000000000000000d0009004d4554412d494e462f41504953555405000100000000ad91cb4ac340148627137d9e3c408b607785828bbaeb62384d4ee2c85ccaccb4d2b74871086ebdc51441c185eb3c9a136a57265db93edff9fec3f91f2af2a240624cca1dfd9addc2061201aa48e6ce70558c2a52dbad5c6a310c3419a65c82b01d127d1f1009ee2699f062aa1c166802f6eeb403315faf56627b9adc2f2124a47895c7d1ced74cdf29349f339b6a83c9659619b47674de9e3034ce80b2391a4aeffd3373faef76f06e40ac71c011b5fe9565e0e0693189dbb2a2cdf5af92c43e8c72a3658ff45fb2483de68abb0b72d62575edf4fc9db6fe8d1daae99feed9b197c76948f8609d931f1b183ca5fc01504b0708a4b61118ef00000012020000504b03041400080808000000210000000000000000000000000007000900412e636c6173735554050001000000008d52cb6ed350103de33871631c68da129ab6e1fdb09312437909152a5a2b4891422b35a18bee2ec9553075ece03808f6fc053b36dd42162162c107f035ac91a08c1b84046d24ac2b8f6674e79c3367eed79f9fbf00b887bb045ad7401c1c0d09c26c75db59d9103db7d908f6a45f7e215e0942ea81ebbbd11a61cdacc515db137edbae47a1ebb7578f56aae3524744cfed0db75df523d996e1aab54330ff0fc0da3190c2940e1569c2dc71701a4e10d4ddcaf61621773ca1810c4ea661e01421dd0c3a5d11ca4640c89b1304560d6431a373c72c61fa5f591a4e1332bd66104adb09b8e775a4e10c410be5cbbe1b4a9663eec6caf358d0318f45666dcbc8119e274342d6b46ae3e6f5562b94bd1eeb2be06c7cf31cfb2f625d556bd22417705187824b84a94edf8bdcaef786509e34c824942bb81a4f778df95a87cbf85bd0a4bd19b0508ce94b84c4d666c5c0f5b1b165ce1b954d0337c6f94df6c0095a6c45a61e89e6de13d16d88671ee77a3de8874df9d8f524cfa2f062e34f013f2ef003c42dce9e7235c9b1542c2d173e41cfab034c0f31f70e9aba0f3531c2527184f379b530c2e521cc21963ff275c26dfecf4339400e490d8a861c1fd258101e31756cde6f8afb4c99e0b838805d4b3c5c5a788f6c69801546abbd5568ffe05be9c31f4803ca0fa41886be63866b770e15277f01504b070869170babf20100003e030000504b03041400080808000000210000000000000000000000000007000900422e636c6173735554050001000000003bf56fd73e06060673067646064627760646460681acc4b244fd9cc4bc747dffa4acd4e41276066646064ecf2067233d9014230357707e695172aa5b664e2a1b230313030b03043032b0014926065600504b0708d7334cde5000000056000000504b03041400080808000000210000000000000000000000000007000900432e636c61737355540500010000000095560b7bdbe4157e3f5b8e1447495d43b27834c51dd0fad6a49402258492264d215008ab4b4a12a09365c555234b419253c27d17e8eedcb751b6b1c1b66e5c4b4bdd8496db2e94cb5fe201ce27c94eea383cd9f3d896cea7f39df39ef3bedf91bff8fafd0f015c8f2f19d8b008c6103ba2cc297d866296fac60a4734d51511a6874322220c1da3fb87b70f298eaef672375aa7efba7d8e6ad95adfee62d1d61ce7465a2d30b407abe38abd6788d6362db707f62d65c9bbb66e966edcc5f7a9f42d325cd5c4b7acb887fb86f4d2a8e96a25cdf6fd35fa4e13acc07f8faeba5eb26b2f5a186800f81d014bf49d646819d04dddddc5904aad44ba7265343dce104ea5c76574a13b0a010986a86bcd68e62153296b122ebba8b1fe36113dd4261fdab045281ea45e5fce2099da51af7286eddf9d7ed850a89cf4459d96b1093f8822892b6444d1d68a10ae62907d30ce7cb9601912b6c868f79fa5295f5153f5b2623812b20c97366b8e88ad323afc1d7d5e3457310e3995d959635ec2d53262feb36b285a41216caa46d1ae6568a55a7c1218aef97f8a09a894499b3b793537c8588f38cf4134b52d2b58c44dd4fb92e612f4547a5fa37a29c2cd186cc32eec66d8dc04417ae5126fdc709452eda1c80e8fdc995a1998b3bd17b7f0d0b732f4d49a983435ade8245d2b59d092b396a3bbfa1c09e03606d1d61ea8e83669b62b35d90408c5db873b78b17732649bc6a3008a91b4eca4611dd5eca47b583193dbaf967017459f538c8a3646a72191ba2ddd5ce232f6231f452f0e300894b5dcd8b37a03c671308a8db887e2eace4879d69df7043e29631253fcc9bdb4d571eda44e002b868749e36e12ee9771293a39533f62e85e8abddb7134dbd52d73c4b62d5254210a959f13819f103a72be36694b6a15f4c4bba7bbbc273bda3839b27f8c9ab95aad3a8eb452ad33a45792c798bd479b562a86db20831a9bcd945386c9e9b548c781aa797fb7a41ae6c9aa78e5e55a16e130ec6c927acd602a6d7031e70da5b50c343e94b6ac2d9f27e5791efe213ac1aead98ceb4663364d696696a88e76aa52e0f2b86c137ae4fa51b76ca780c8f73713f419eaa559e556ced80c5d5ba0afa51193fc14fb95a7f561f934130114f315c76c853fc2ae7ede7321e80cd0ff12f49a9a3a653999ed6555d33dd6440a5845f53ad4ea540e5aaa48aded580aca6afdfe2698eee193e4b1fe4999ea333a2148b325ef09fbcc8109a22de7f4f790ed47b7ac38a9eaeb5c5325ec2719ee8657abbe80e7f6770e832fec4cfe431fc99fae4cdf9bdc44241516724fc858e894a16c3adcda95c7eeca7d6a8c457f11a27f26f3224b4f283fe0f3abede68725619953437fe897f718caf335c3976d4a4e1a5f83892aa629a96cbd97b48b3addab284378962a56c5588b1e614bf2de3304abc1f27a9cab26eba124e51ab498643f3ae465884547a6a48c67b38c3475695e18a1a0da9a00bb9da9576e70a7c575ac2020531acd2c81ca985219d6ad29766ad227edec739de99f31460403582ff10eb1ade71223ea2a955d41c7a1714eb5331ef2a6ec591f109e7f263fc9b2192f249efc27f79e7fe47e726af974c72e3ef1061d82ad2a59df6a9337728b30794824176346f556c55dbab1b9ab0895a2380b881880d9c2bfaab17e77f0a68ed02dd872093ddde60772cb3d7911d6bb0e9355cb72f8975f3614ff732ad75e17bf4fb1959e710a6ccc03399b3f87e26be21be7101579ec1e64c3c15dc6632f15cbcd7bbdd96896f0f6e7764e2d7f1dbfe3318c8bc87cd8b18e2a96ee7f7996c15238b180d81ac4c2657b37a5e86289c80108edfbe80b19e58e76b35fb876493efb69e271770b7e7fb2e6162f89c7e13887c83190822422236d2870183ac6390c5a92c7afd0785dc425688ae7dd94fb19e004c5471dff15afc4314ff1494e35897bd80b6735027cea2f811f73a59cfd382707c907591a5e160103441574a87f67a891f6323dfc2374d3775cb34ba65516ae2b62d70ebadb91daebb6da03ab85b8cdc769c82b188d9d0724f9a9681670f91c76b5e4f9e0359cff56878c935c4c75de0da4dae61cebee79a5bc4c361afc73ce0237834f03a495d68a1eb530bf871bf90a388553c5967ed179ca58450c5af72cb977fe32fd79f3c5bc5f3992c1701b77e47d6d60b680d9f97c87b6b7f84fcb2b944a48a3f92c72b2f614336fed7960f204c8413427e42c8e5272289487e017f3fb8a4816e885fe11211c70659e720cb0d8af8c357c8d22f69b7a35ee32c225e8de3a7708262bf51a7ff2d42d858cc3bbee47664aa7897c3f4f57a11ec0c8f938b9faee22ca15d422341e0f21be46cd29c0fb2ef242c225d7331c1ab26be48d564a91aaaa8656bbe3f1263b52afb5b129144cb023ef01990f02155e847b9ceab00b83c1eaae23fb50a4e4339876313b1cef3d2597c7a1a2796c04410923d245f788c8bdf02504b0708f3322022e1060000290e0000504b01021400140008080800000021002bc2bf352a0000002800000014000d0000000000000000000000000000004d4554412d494e462f4d414e49464553542e4d46555405000100000000feca0000504b0102140014000808080000002100a4b61118ef000000120200000d00090000000000000000000000790000004d4554412d494e462f41504953555405000100000000504b010214001400080808000000210069170babf20100003e0300000700090000000000000000000000ac010000412e636c617373555405000100000000504b0102140014000808080000002100d7334cde50000000560000000700090000000000000000000000dc030000422e636c617373555405000100000000504b0102140014000808080000002100f3322022e1060000290e000007000900000000000000000000006a040000432e636c617373555405000100000000504b050600000000050005004d010000890b00000000')
            .params({
                _name: `${values.name}`,
                _symbol: `${values.symbol}`,
                _decimals: iconService.IconConverter.toHexNumber(parseInt(values.decimals, 10)),
                _initialSupply: iconService.IconConverter.toHexNumber(parseInt(values.initialSupply, 10))
            })
            .build()

        const customEvent = new CustomEvent('ICONEX_RELAY_REQUEST', {
            detail: {
                type: 'REQUEST_JSON-RPC',
                payload: {
                    jsonrpc: '2.0',
                    method: 'icx_sendTransaction',
                    params: iconService.IconConverter.toRawTransaction(deployTransaction),
                    id: Math.floor(Math.random() * 10000) + 1
                }

            }
        });
        window.dispatchEvent(customEvent);
    };

    return (
        <div>
            <h5>Address: {address}</h5>
            <Form
                name="irc2Form"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}

                style={{ maxWidth: 600, margin: '0 auto' }}
            >
                <Form.Item
                    label="Token Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your token name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Token Symbol"
                    name="symbol"
                    rules={[{ required: true, message: 'Please input your token symbol!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Decimals"
                    name="decimals"
                    rules={[{ required: true, message: 'Please input the decimal count!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Initial Supply"
                    name="initialSupply"
                    rules={[{ required: true, message: 'Please input the initial supply!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Deploy Token
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default IRC2Form;