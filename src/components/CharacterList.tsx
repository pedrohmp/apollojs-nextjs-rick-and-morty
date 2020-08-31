import React from 'react'

import { Row, Box, Grid } from '../styles/components/Character'

import ALL_CHARACTERS from '../../gql/allCharacters'

import { useQuery } from '@apollo/client'

const CharacterList: React.FC = () => {
  const { data = {}, error, loading } = useQuery(ALL_CHARACTERS, {
    notifyOnNetworkStatusChange: true
  })

  const { characters } = data

  return (
    <>
      <h2>Personagens</h2>

      <Grid>
        {characters &&
          characters.results.map(element => (
            <Box>
              <img src={element.image} alt={element.name} />
              <p>{element.name}</p>
            </Box>
          ))}
      </Grid>
    </>
  )
}

export default CharacterList
