import {Provider} from 'react-redux';
import store from '../../shared/store';

//  ErrorBoundary

type ReduxProviderProps = {
  children: React.ReactNode;
}

const ReduxProvider = ({children}: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;