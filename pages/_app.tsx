import { AppProps } from 'next/app'
import { useInitial } from 'use-between';
import { InitialData } from '../interfaces/initial-data';

interface Props extends AppProps {
  pageProps: InitialData
}

function App({ Component, pageProps }: Props) {
  useInitial(pageProps);
  return (
    <Component />
  );
}

export default App;
