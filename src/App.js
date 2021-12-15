import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import CakeIcecreamContainer from "./components/CakeIcecreamContainer"
import NewCakeContainer from "./components/NewCakeContainer";


function App() {
  return (
    <Provider store={store}>
       <div>
         {/* <HooksCakeContainer /> */}
        <CakeContainer />
        {/* <HooksIcecreamContainer /> */}
        <CakeIcecreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
