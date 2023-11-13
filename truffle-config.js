/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 */

require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your Ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one, Truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a Truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - Truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like Ganache, Geth, or Parity) in a separate terminal
    // tab if you use this network, and you must also set the `host`, `port`, and `network_id`
    // options below to some value.
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    //
    // An additional network, but with some advanced options…
    advanced: {
      port: 8777,             // Custom port
      network_id: 1342,       // Custom network
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      from: "<address>",      // Account to send transactions from (default: accounts[0])
      websocket: true         // Enable EventEmitter interface for web3 (default: false)
    },
    //
    // Useful for deploying to a public network.
    // Note: It's important to wrap the provider as a function to ensure Truffle uses a new provider every time.
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public networks)
    },
    //
    // Useful for private networks
    private: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://network.io`),
      network_id: 2111,   // Your custom network's ID
      production: true    // Treats this network as if it was a public net. (default: false)
    }
  },

  // Set default Mocha options here, use special reporters, etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",      // Fetch exact version from solc-bin (default: Truffle's version)
      docker: false,          // Use "0.5.1" you've installed locally with Docker (default: false)
      settings: {
        optimizer: {
          enabled: true,       // Enable optimization
          runs: 200            // Number of runs for optimization
        },
        evmVersion: "byzantium"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to Truffle DB, and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts, you can utilize the DB by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
