
import './App.css';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Address from './components/Profile/Address';
import Name from './components/Profile/FullName';

function App() {
  return (
    <div className="App">
      <Name />
      <Address />
      <ProfilePhoto />
    </div>
  );
}

export default App;
