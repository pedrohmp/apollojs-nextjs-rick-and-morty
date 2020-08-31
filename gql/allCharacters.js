import gql from 'graphql-tag'

const ALL_CHARACTERS = gql`
  query($random: ID!) {
    character(id: $random) {
      id
      name
      image
      status
      species
      location {
        name
      }
      origin {
        name
      }
    }
  }
`

export default ALL_CHARACTERS
