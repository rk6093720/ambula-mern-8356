import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';
// import MainRoutes from './Pages/MainRoutes';
function App() {
  return (
    <div className="App">
       {/* <MainRoutes/> */}
     <TodoInput/>
      <TodoList/>
     
    </div>
  );
}

export default App;
