import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>
  );
}
