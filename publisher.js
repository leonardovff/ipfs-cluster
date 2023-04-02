import * as IPFS from 'ipfs';
const test = async () => {
  const node = await IPFS.create();
  const file = {
    content: Buffer.from('Hello, <YOUR NAME HERE>bb'),
    path: 'test.txt'
  };

  const results = await node.add(file)
  console.log(results);
  const { cid } = results;

  console.log(cid.toString())
  //}
}
test();