pragma solidity 0.4.15;

import 'multisig-wallet-gnosis/contracts/MultiSigWalletWithDailyLimit.sol';

contract CallistoMultiSig is MultiSigWalletWithDailyLimit {
    function CallistoMultiSig(address[] _owners, uint _required, uint _daylimit) public
        MultiSigWalletWithDailyLimit(_owners, _required, _daylimit) {
    }
}
