import { Route, Routes } from "react-router-dom";
import { ExtraPage, TodoListPage } from "@/views";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<TodoListPage />}></Route>
      <Route path="/extra" element={<ExtraPage />}></Route>
    </Routes>
  );
}
