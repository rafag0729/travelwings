import { AdminScreen } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminScreen />} />
    </Routes>
  )
}
