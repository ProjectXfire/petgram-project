import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import Logo from './components/Logo/index'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
