import { graphql } from 'react-apollo'
// gql nos permite realizar las querys como si fueran strings y apollo lo va a entender
import { gql } from 'apollo-boost'

export const withPhotos = graphql(gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)
