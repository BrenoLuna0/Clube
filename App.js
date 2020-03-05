import React, { useState, useEffect } from 'react';
import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/routes';
import { isSignedIn } from './src/services/auth';

export default function App() {
  const [signed, setSigned] = useState(false);
  const [signLoaded, setSignLoaded] = useState(false);

  useEffect(() => {

    isSignedIn().then(res => {
      setSigned(res);
      setSignLoaded(true);

    }).catch(err => {
      alert(err);
    })
  });

  if (!signLoaded) {
    return null;
  }

  const Layout = createRootNavigator(signed);
  
  return <Layout/>
}
