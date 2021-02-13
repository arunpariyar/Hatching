//When ever we add the _app.js for global css it is important to restart the server

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
