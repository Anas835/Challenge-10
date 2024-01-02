
import './App.css';
// import MyComponent from './Components/MyComponent'; //uncommentr to laod data using axios
import FirstContext from './Components/FirstContext';
import SecondContext from './Components/SecondContext';
import MyConsumerComponent from './Components/ConsumerComponent';

function App() {
  const firstContextValue = 'Value for First Context';
  const secondContextValue = 'Value for Second Context';
  return (
    <div className="App">
      {/* <MyComponent/> */}
      <FirstContext.Provider value={firstContextValue}>
      <SecondContext.Provider value={secondContextValue}>
        <MyConsumerComponent />
      </SecondContext.Provider>
    </FirstContext.Provider>
    </div>
  );
}

export default App;
