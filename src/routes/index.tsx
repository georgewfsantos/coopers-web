import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { Home } from "../pages/Home";
import { MyToDoList } from "../pages/MyToDoList";

export function Router() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/myList"
        element={user?.id ? <MyToDoList /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
