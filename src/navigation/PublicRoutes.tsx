import { HomeScreen, LoginScreen } from 'pages'
import { Navigate, Route, Routes } from 'react-router-dom'

interface PublicRoutesProps {
  isAuthenticated: boolean;
}

export const PublicRoutes = ({isAuthenticated}: PublicRoutesProps) => {

  if(isAuthenticated) return <Navigate to="admin" />

  return (
    <Routes>
      <Route path='/*' element={<HomeScreen />}/>

      <Route path='login' element={<LoginScreen />}/>
    </Routes>
  )
}
