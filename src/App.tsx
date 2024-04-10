import React from 'react';

function App() {
  const handleButtonClick = async (endpoint: string) => {
    const method = 'eth_blockNumber';
    const params: never[] = [];

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: method,
          params: params,
          id: 1,
        }),
      });
      const data = await response.json();
      console.log('Response from', endpoint, data);
    } catch (error) {
      console.error('Error fetching from', endpoint, error);
    }
  };

  return (
    <div>
      <h1>JSON-RPC Endpoint Tester</h1>
      <button onClick={() => handleButtonClick('https://staging.omni.network')}>Test Staging Endpoint</button>
      <button onClick={() => handleButtonClick('https://testnet.omni.network')}>Test Testnet Endpoint</button>
    </div>
  );
}

export default App;
