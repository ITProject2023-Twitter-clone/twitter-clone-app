import Image from 'next/image'
import React, { useContext } from 'react'
import closeButton from '~/../public/closeButton.svg'
import { isClickContext } from '../templetes/layout'


const CloseButton = () => {
  const onClickFunc = useContext(isClickContext)
  //closeのsvg
  return (
    <button onClick={() => onClickFunc(false)}>
      <Image src={closeButton} width={22} height={22} alt='closeButton' />
    </button>
  )
}

export default CloseButton