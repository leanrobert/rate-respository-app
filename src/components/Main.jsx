import { View } from "react-native"
import RepositoryList from './RepositoryList'
import Text from './Text'
import AppBar from './AppBar'

const Main = () => {
  return (
    <View>
      <AppBar />
      <Text fontWeight="bold" fontSize="subheading" color="textSecondary">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main