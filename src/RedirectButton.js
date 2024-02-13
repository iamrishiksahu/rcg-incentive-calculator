import React from 'react';
import UserDetailsPage from './UserDetailsPage';

function RedirectButton() {
  const hash = window.location.hash.substr(1);
  const params = new URLSearchParams(hash);

  // Extract the code parameter from the hash
  const codeParam = params.get('code');

  // Render the UserDetailsPage component with the codeParam passed as a prop
  return <UserDetailsPage codeParam={codeParam} />;
}

export default RedirectButton;