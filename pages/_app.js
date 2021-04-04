import { Provider } from 'react-redux';
import { useStore } from '../store';
import '../styles/global.scss';
import '../styles/tab.scss';
export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
