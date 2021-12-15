import { Provider } from "react-redux";
import store from "./redux/store";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
// import CakeIcecreamContainer from "./components/CakeIcecreamContainer"
// import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";


function App() {
  return (
    <Provider store={store}>
       <div>
        <UserContainer />
        {/* <HooksCakeContainer />
        <CakeContainer />
        <HooksIcecreamContainer />
        <CakeIcecreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
