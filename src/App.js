import './App.css';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <WarningSign something="danger"/>
      <MyBadge colour="black" textcontent="Some text, why not?" variant="danger"/>
      <BookList/>
    </div>
  );
}

export default App;
