import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = (path) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.categoryId} />
    </>
  )
}
