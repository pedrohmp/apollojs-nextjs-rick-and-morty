import React, { useState, useEffect } from 'react'

import RANDOM_CHARACTERS from '../../gql/randomCharacters'

import { useLazyQuery } from '@apollo/client'

import { Row, CharacterBtn } from '../styles/components/Character'

import getRandomValue from '../utils/getRandomValue'

import CharacterLoading from './CharacterLoading'

interface Personage {
  character: {
    name: string
    species: string
    status: string
    image: string
    location: {
      name: string
    }
  }
}

const Character: React.FC = () => {
  const [personage, setPersonage] = useState<Personage>()

  const [getRandomCharacter, { data, error, loading }] = useLazyQuery(
    RANDOM_CHARACTERS,
    {
      notifyOnNetworkStatusChange: true,
      ssr: true
    }
  )

  useEffect(() => {
    if (data) {
      setPersonage(data)
    }
  }, [data])

  useEffect(() => {
    getRandomCharacter({
      variables: { random: getRandomValue() }
    })
  }, [])

  if (error) {
    return <div>Ocorreu um error</div>
  }

  return (
    <>
      {loading || !personage ? (
        <CharacterLoading />
      ) : (
        <>
          <Row>
            <img
              src={personage.character.image}
              alt={personage.character.name}
            />

            <ul>
              <li>Nome: {personage.character.name}</li>
              <li>Especie: {personage.character.species}</li>
              <li>Status: {personage.character.status}</li>
              <li>Lugar: {personage.character.location?.name}</li>
            </ul>
          </Row>
        </>
      )}

      <CharacterBtn
        onClick={() =>
          getRandomCharacter({
            variables: { random: getRandomValue() }
          })
        }
      >
        {loading ? 'Carregando...' : 'Gerar novo personagem!'}
      </CharacterBtn>
    </>
  )
}

export default Character
