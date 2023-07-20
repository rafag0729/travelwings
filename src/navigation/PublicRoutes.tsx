import { HomeScreen, LoginScreen } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<HomeScreen />}/>

      <Route path='login' element={<LoginScreen />}/>
    </Routes>
  )
}
