import '../styles/Default.module.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../graphql/apolloClient';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
    <NavBar />
 
      <Component {...pageProps} />
    </ApolloProvider>
    
      
    
    
  
  );
}
