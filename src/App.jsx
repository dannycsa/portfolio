import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";  // ⬅️ add this

function App() {
  return (
    <>
      <Toaster />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
