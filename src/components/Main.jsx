import { View } from "react-native"
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const Main = () => {
  return (
    <View style={{ backgroundColor: '#e1e4e8' }} >
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main