import React from 'react'
import { Category } from '../Category/index'
import { Loader } from '../Loader/index'
import { usefloatBar } from '../../hooks/UseFloatBar'
import { useCategoriesDate } from '../../hooks/UseCategoriesDate'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesDate()
  const { showFixed } = usefloatBar()

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loader />
          : categories.map(cat =>
            <Item key={cat.id}>
              <Category {...cat} />
            </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
