import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { QueryClient, QueryClientProvider } from "react-query";
import UserPage from "./pages/userPage/UserPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
          <UserPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
