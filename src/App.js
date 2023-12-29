import logo from './logo.svg';
import './App.css';
import Portal from './Components/dashboard/Portal';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './Components/dashboard/Dashboard';
import BookView from './Components/Books/BookView';
import EditBooks from './Components/Books/EditBooks';
import Book from './Components/Books/Book';
import Member from './Components/members/Member';
import MemberView from './Components/members/MemberView';
import BorrowBook from './Components/Books/BorrowBook';
import ReturnBook from './Components/Books/ReturnBook';
import Login from './Components/Login/Login';
import { UserProvider } from './Components/Context/UserContext';
import { LoginProvider } from './Components/Context/LoginContext';
import AddBook from './Components/Books/Addbook';
function App() {
  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/portal' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='book' element={<Book />} />
            <Route path='addbook' element={<AddBook />} />
            <Route path='bookview/:id' element={<BookView />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='borrowbook/:id' element={<BorrowBook />} />
            <Route path='returnbook/:id' element={<ReturnBook />} />
            <Route path='member' element={<Member />} />
            <Route path='memberview/:id' element={<MemberView />} />
          </Route>
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default App;