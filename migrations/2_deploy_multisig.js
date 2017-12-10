var CallistoMultiSig = artifacts.require('./CallistoMultiSig.sol');

module.exports = function(deployer) {
    const owners = [
        "0x01000b5fe61411c466b70631d7ff070187179bbf",
        "0x93195e6A2cDAAEEa1e7186279089e09c89BBaE09",
        "0x37006d230C9b0dA7A00011Efb1Acc3388fbD3c6A",
        "0x4667d0c30E6f58ef935ddAb560d41E030E4d2AeB"
    ];
    
    const required = 2;
    const dayLimit = 0;

    deployer.deploy(CallistoMultiSig, owners, required, dayLimit);
};
