const { verifier } = require('./src/verifier');

const answers = {
  solc_version: 'v0.6.12+commit.27d51765',
  file_name: 'WaspToken.sol',
  contract_address: '0x8B9F9f4aA70B1B0d586BE8aDFb19c1Ac38e05E9a',
  is_optimized: '1',
  file_folder: '/Users/molin/workspace/utils/bytecode-verifier'
};

// const provider = 'https://gwan-ssl.wandevs.org:56891';
const provider = 'http://192.168.1.2:9545';


verifier(answers, provider);

const answers2 = {
  solc_version: 'v0.4.26+commit.4563c3fc',
  file_name: 'QuotaDelegate.sol',
  contract_address: '0x3feD7D5371841307369F7adbCb2aBF5617cd8611',
  is_optimized: '1',
  file_folder: '/Users/molin/workspace/utils/bytecode-verifier'
};

verifier(answers2, provider);

const answers3 = {
  solc_version: 'v0.6.6+commit.6c089d02',
  file_name: 'UniswapV2Factory.sol',
  contract_address: '0x1125C5F53C72eFd175753d427aA116B972Aa5537',
  is_optimized: '1',
  file_folder: '/Users/molin/workspace/utils/bytecode-verifier'
};

verifier(answers3, provider);
