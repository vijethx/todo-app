import "./App.css";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
      <Footer />
    </div>
  );
}

export default App;
