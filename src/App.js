import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      {!auth.isAuthenticated && <Auth />}
      {auth.isAuthenticated && <UserProfile />}
      <Counter />;
    </>
  );
}

export default App;
