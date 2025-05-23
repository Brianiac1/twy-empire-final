
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'gold', minHeight: '100vh', textAlign: 'center', padding: '40px' }}>
      <Head>
        <title>$TWY Web3 Empire</title>
      </Head>
      <Image src="/token.png" alt="$TWY" width={200} height={200} />
      <h1 style={{ fontSize: '2em', marginTop: '1em' }}>$TWY Web3 Empire</h1>
      <p style={{ marginBottom: '20px' }}>Say hello to The World, Chico... and Everything in it.</p>
      <button style={{ padding: '10px 20px', margin: '10px' }}>Connect Wallet</button>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', margin: '10px' }}>Buy with ETH</button>
        <button style={{ padding: '10px 20px', margin: '10px' }}>Buy with USDC</button>
      </div>
      <p style={{ marginTop: '40px' }}>[Claim Button Logic Placeholder]</p>
    </div>
  );
}
