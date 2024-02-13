import React from 'react';
import { useLocation } from 'react-router-dom';

function CallbackPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const token = searchParams.get('token');

  return (
    <div>
      <h1>Callback Page</h1>
      <div>
        <p>Code: {code}</p>
        <p>Token: {token}</p>
      </div>
    </div>
  );
}

export default CallbackPage;