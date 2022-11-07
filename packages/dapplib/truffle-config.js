require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain proof install hidden bridge swarm'; 
let testAccounts = [
"0xd536ff282cd0d0afed4f18eaccfe48f109dfda022b89893e5b19df39caf6b7fb",
"0xabe04831757ff540ab07ada8a5754c87001f7ad2d7ed3d7fa6564199a743b79f",
"0x7add744ce972f6025900e5a06ff558339249b3a53cca327cac269e2f95bd13c5",
"0xa152c4e629556d1b82a32fb405b2188d7df78afdc960b19e7f5173a424aaad8f",
"0x3f168b0fb5ab4ffaad2a945a1d9a439081dc12d04223b73911cf0d213c6377f3",
"0xdd7e56acb7765de67c75089c2c9938bde82bae24bacfaf07f472a82ac468c1ed",
"0x380e1396dff171fb7254abfedd77b5371f56a357104489e364e0a477108d881b",
"0x7958f22d9d7c0d12375c1ea793ef7c42a9785d1b6cb85795821fe6099c7b6edd",
"0x147b3488c620a1d7c1dd9d7a6d5f1f5c0022e030761fbc40e90367834599d925",
"0x7c9101930c5f32293c2d5710d14ec997dccabb80d76796c5ab490d1b0b2b05c9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


