import Image from 'next/image'
import React from 'react'
import closeButton from '~/../public/closeButton.svg'

const CloseButton = () => {
  //closeのsvg
  return (
    <button>
      <Image src={closeButton} width={22} height={22} alt='closeButton' />
    </button>
  )
}

export default CloseButton