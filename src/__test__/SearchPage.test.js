import React from 'react'
import "@testing-library/jest-dom";
import {render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "../redux/store/index";
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

function renderSearchPage (searchTerm) {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/search?q=${searchTerm}`]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
}

test('Should render a list of results according with the searchTerm', async () => {
  renderSearchPage('Poly')

  expect(await screen.findByTestId('product-YWL8XBIAAC0AzuPZ')).toBeInTheDocument()
})

test('Should not render a list of results when searchTerm is empty', async () => {
  renderSearchPage('')
  expect(await screen.findByTestId('search-not-found')).toBeInTheDocument()
})

