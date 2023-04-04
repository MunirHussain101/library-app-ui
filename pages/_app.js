import "@/styles/globals.css";
import Head from "next/head";
import {Provider} from 'react-redux'
import { wrapper, store } from "../store/store";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>Book App</title>
        <meta
          name="Book App"
          content="A book app that allows you to view modify and read books"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);
