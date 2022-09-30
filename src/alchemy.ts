const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("https://eth-goerli.g.alchemy.com/v2/OY5JG6G9OnaDMfTV1OeRc3JKt5uHQign");

const createAccount = () => {
    const account = web3.eth.accounts.create();
    return account;
}

export { createAccount, web3 };