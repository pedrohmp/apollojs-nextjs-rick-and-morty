import gql from 'graphql-tag'

const ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`

export default ALL_CHARACTERS
