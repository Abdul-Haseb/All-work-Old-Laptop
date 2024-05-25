import { useRouter } from 'next/router'
import React from 'react'

const userData = () => {
  const router = useRouter()
  const [title, description, image] = router.query;
  return (
    <div>
      <div>Title : {title}</div>
      <div>Description: {description}</div>
      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  )
}

export default userData
