import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Row } from '../styles/components/Character'

const CharacterLoading: React.FC = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Row>
        <Skeleton count={1} duration={1} width={300} height={300} />

        <div>
          <ul>
            <li>
              <Skeleton count={1} duration={1} width="100%" height={30} />
            </li>
            <li>
              <Skeleton count={1} duration={1} width="100%" height={30} />
            </li>
            <li>
              <Skeleton count={1} duration={1} width="100%" height={30} />
            </li>
            <li>
              <Skeleton count={1} duration={1} width="100%" height={30} />
            </li>
            <li>
              <Skeleton count={1} duration={1} width="100%" height={30} />
            </li>
          </ul>
        </div>
      </Row>
    </SkeletonTheme>
  )
}

export default CharacterLoading
