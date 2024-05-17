import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProvider from "./conntexts/UserContext";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./utils/ProtectedRoute";
import {CustomThemeOptions} from "./styles/CustomTheme";
import Bar from "./layouts/Bar";
import {ThemeProvider} from "@mui/material";
import DashboardLayout from "./layouts/dashboard/Layout";
import {LoanCreation} from "./pages/LoanCreation";

function App() {
  return (

      <Router>
        <UserProvider>
          <ThemeProvider theme={CustomThemeOptions}>
            <div className="App">
              <Bar/>
              <div className="content">
                <Routes>
                  <Route path="/login" element={
                    <LogIn/>
                  }/>
                  <Route element={<ProtectedRoute/>}>
                    <Route element={<DashboardLayout/>}>
                      <Route path="/loan-opening" element={<LoanCreation/>}/>
                    </Route>
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                  </Route>

                </Routes>
              </div>
            </div>
          </ThemeProvider>
        </UserProvider>
      </Router>

  );
}

export default App;
