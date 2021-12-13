import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";


function App() {
  return (
    <Provider store={store}>
       <div>
         <HooksCakeContainer />
        {/* <CakeContainer /> */}
        <HooksIcecreamContainer />
      </div>
    </Provider>
   
  );
}

export default App;
