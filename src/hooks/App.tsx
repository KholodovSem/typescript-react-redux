import Wrapper from "./Wrapper";
import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./UseStateComponent";
import UserProvider from "./UserProvider";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CastomHookComponent";

function App() {
  return (
    <UserProvider>
      <Wrapper title='useState'>
        <UseStateComponent />
      </Wrapper>
      <Wrapper title='useEffect'>
        <UseEffectComponent />
      </Wrapper>
      <Wrapper title='useContext'>
        <UseContextComponent />
      </Wrapper>
      <Wrapper title='useReducer'>
        <UseReducerComponent />
      </Wrapper>
      <Wrapper title='useRef'>
        <UseRefComponent />
      </Wrapper>
      <Wrapper title='Custom Hook Component'>
        <CustomHookComponent />
      </Wrapper>
    </UserProvider>
  );
}

export default App;
