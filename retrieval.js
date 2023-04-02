import * as IPFS from 'ipfs';
const test = async () => {
  const node = await IPFS.create()
  console.log(node);

  const stream = node.cat('QmdVyht2VWTh1FMx2DDWJGS9NpeCoAaomF7PsDGtWtmT23')
  const decoder = new TextDecoder()
  let data = ''

  for await (const chunk of stream) {
    // chunks of data are returned as a Uint8Array, convert it back to a string
    data += decoder.decode(chunk, { stream: true })
  }

  console.log(data)
}
test();