import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom'
import MemoryRouter from '../MemoryRouter'
import Route from '../Route'
import withRouter from '../withRouter'

describe('withRouter', () => {
  const node = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node)
  })

  it('passes `{ match, location, history }`', () => {
    const ContextChecker = withRouter(props => {
      expect(props.match).toBeAn('object')
      expect(props.location).toBeAn('object')
      expect(props.history).toBeAn('object')
      return null
    })

    ReactDOM.render((
      <MemoryRouter initialEntries={[ '/bubblegum' ]}>
        <Route path="/bubblegum" render={() => (
          <ContextChecker/>
        )}/>
      </MemoryRouter>
    ), node)
  })
})