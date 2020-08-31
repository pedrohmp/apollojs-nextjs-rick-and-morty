import React, { useRef } from 'react'

import Character from '../components/Character'
import CharacterList from '../components/CharacterList'

import { Container } from '../styles/pages/Home'

import ALL_CHARACTERS from '../../gql/allCharacters'

import { useQuery } from '@apollo/client'

const IndexPage: React.FC = () => {
  return (
    <Container>
      <h2>Gerador de personagem aleatório do Rick and Morty</h2>
      <h3>Contruido em Next js (Server side render) e Apollo js (Graphql) </h3>

      <Character />

      <CharacterList />
    </Container>
  )
}

export default IndexPage
