require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name razor rifle upgrade hidden private army gather'; 
let testAccounts = [
"0x1f8ef90b50583077bb71ab3bd1a726576eb3cec4f3c7803896a4d6cdf5c34fbf",
"0x049420829b73d00899b48279aa185832fb7a4903060111985288ff800ba673b7",
"0xa273bb229c9bf09de26b7525798c32ecca316a3b012614b0e8d49daea7dc8d9f",
"0xf6b289131f5473a3a37c5022e700a20b7c1b0681d03f058f5c25332817b03169",
"0xd91f87f06c72d138fab806e44bbb21f3fc2c0c43465832416c052b4546eda0dd",
"0xf81f8c3d3a966816b0593d2d65780438e228093144aae967a6429b11c79fb05e",
"0x6ac6206461c88c8ede1343c451f0d7a3c638600c4aeec5e8950d95014638722b",
"0xf9f3d3ff56453038d8d0d95dc0225ace3a9e33e597d6cae6b1774f101ceb8cd6",
"0x3a0b6767bace6891c85f4d262a16a4e74b3e9c42670e0a2ef6ceee6f8e749c77",
"0x890e903a8a4a3632ef4b3522723b8c76a1cbc4af056e35dfd6de58d87a18e04a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

