let Assembly = artifacts.require("./Assembly.sol");
const web3 = require('web3');

contract('Assembly', async (accounts) => {
  let AssemblyInstance;
  beforeEach(async () => {
    ablInstance = await Assembly.new();
  });

  it.only("create Assembly", async () => {
    // console.log('assembly instance', ablInstance)
    let test1 = await ablInstance.test1.call(3)
    console.log('res test1', test1.toNumber())

    let test2 = await ablInstance.test2.call()
    console.log('test2 result', test2.toNumber())

    let test3 = await ablInstance.test3.call()
    console.log('test3 result', test3.toNumber())

    let test4 = await ablInstance.test4.call(3)
    console.log('test4 result', test4.toNumber())

    let test5 = await ablInstance.test5.call()
    console.log('test5 result', test5)

    let test6 = await ablInstance.test6.call()
    console.log('test6 result', test6)

    let test7 = await ablInstance.test7.call(3)
    console.log('test7 result', test7)


  });

  
})