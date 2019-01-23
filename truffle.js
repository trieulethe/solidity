const HDWalletProvider = require('truffle-hdwallet-provider');

const MNEMONIC =
  'tumble enhance fire reduce advice nothing spoon thunder village strategy raven bright';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    },
    ganache: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      host: '127.0.0.1', // Connect to geth on the specified
      port: 8545,
      // from: "0x0085f8e72391Ce4BB5ce47541C846d059399fA6c", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          'https://ropsten.infura.io/v3/4fe37360656f404587f8e0f6875ec03d'
        ),
      network_id: 3,
      gas: 2900000
    }
    // ropsten: {
    //   network_id: 3,
    //   host: "127.0.0.1",
    //   port: 8545,
    //   gas: 2900000
    // }
  }
};
