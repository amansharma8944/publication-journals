
import Home from "./pages/landingpage/Home";

import { Provider } from 'react-redux';
import store from "./redux/Store";
import Cart from "./components/cartPage/Cart";

function App() {


  return (
  <>
  <Provider store={store}>
<Home/>
{/* <Cart/> */}
  </Provider>
  

  </>
  );
}

export default App;
