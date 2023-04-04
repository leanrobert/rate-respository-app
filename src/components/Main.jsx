import { View } from "react-native"
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import SignIn from './SignIn'
import { Navigate, Route, Routes } from "react-router-native"

const Main = () => {
  return (
    <View style={{ backgroundColor: '#e1e4e8' }} >
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main