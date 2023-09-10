import { AuthProvider } from "./context/authContext";
import AppNav from "./navigation/AppNav";
export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
``;
