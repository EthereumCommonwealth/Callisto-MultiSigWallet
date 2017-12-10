module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545, // Ganache port 7545 - Default: 8545
            network_id: "*" // Match any network id
        }
    }
};
