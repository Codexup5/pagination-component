import './styles/global.scss';

import { Provider } from 'react-redux';

import { store } from './store';

import { MainPage } from '@/pages/main';

import { Layout } from '@/widgets';

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <MainPage />
            </Layout>
        </Provider>
    );
}

export default App;
