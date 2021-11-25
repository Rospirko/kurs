import Main from "./components/Main";
import Store from './store';
import { Provider } from "mobx-react";

const store = new Store();

function App() {
  return (
      <Provider store={store}>
          <Main/>
      </Provider>
  );
}

export default App;
