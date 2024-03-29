import { store } from '@/redux/store';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
// export default wrapper.withRedux(App)
