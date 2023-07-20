import { AdminScreen } from 'pages'
import { Navigate, Route, Routes } from 'react-router-dom'

interface PrivateRoutesProps {
  isAuthenticated: boolean;
}

export const PrivateRoutes = ({isAuthenticated}: PrivateRoutesProps) => {

  if(!isAuthenticated) return <Navigate to="/" />

  return (
    <Routes>
      <Route path='/' element={<AdminScreen />} />
    </Routes>
  )
}
