import { useQuery } from '@apollo/client'
import { GET_SINGLE_REPO } from '../graphql/queries'
import RepositoryItem from './RepositoryItem'
import { useParams } from 'react-router-native'

const RepositoryDetails = () => {
  const { id } = useParams();

  console.log('id:',id);

  const {loading, data } = useQuery(GET_SINGLE_REPO, {
    variables: { id }
  })

  if (loading) return null

  return (
    <RepositoryItem item={data.repository} button={true} />
  )
}

export default RepositoryDetails