const { verifier } = require('./src/verifier');

const answers = {
  solc_version: 'v0.6.12+commit.27d51765',
  file_name: 'WaspToken.sol',
  contract_address: '0x8B9F9f4aA70B1B0d586BE8aDFb19c1Ac38e05E9a',
  is_optimized: '1',
  file_folder: '/Users/molin/workspace/utils/bytecode-verifier'
};

const provider = 'https://gwan-ssl.wandevs.org:56891';

// verifier(answers, provider);

const answers2 = {
  solc_version: 'v0.4.26+commit.4563c3fc',
  file_name: 'QuotaDelegate.sol',
  contract_address: '0x3feD7D5371841307369F7adbCb2aBF5617cd8611',
  is_optimized: '1',
  file_folder: '/Users/molin/workspace/utils/bytecode-verifier'
};

verifier(answers2, provider);
