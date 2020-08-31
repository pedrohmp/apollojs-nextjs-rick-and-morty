import React, { useState, useEffect } from 'react'

import ALL_CHARACTERS from '../../gql/allCharacters'

import { useLazyQuery } from '@apollo/client'

import { Row, CharacterBtn } from '../styles/components/Character'

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
    ALL_CHARACTERS,
    {
      notifyOnNetworkStatusChange: true,
      ssr: true
    }
  )

  useEffect(() => {
    console.log(data)
    if (data) {
      setPersonage(data)
    }
  }, [data])

  useEffect(() => {
    getRandomCharacter({
      variables: { random: Math.floor(Math.random() * (493 - 1) + 1) }
    })
  }, [])

  if (loading || !personage) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Ocorreu um error</div>
  }

  console.log(personage)

  return (
    <>
      <Row>
        <img src={personage.character.image} alt={personage.character.name} />

        <ul>
          <li>Nome: {personage.character.name}</li>
          <li>Especie: {personage.character.species}</li>
          <li>Status: {personage.character.status}</li>
          <li>Lugar: {personage.character.location?.name}</li>
        </ul>
      </Row>

      <CharacterBtn
        onClick={() =>
          getRandomCharacter({
            variables: { random: Math.floor(Math.random() * (493 - 1) + 1) }
          })
        }
      >
        Gerar novo personagem!
      </CharacterBtn>
    </>
  )
}

export default Character
