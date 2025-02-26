import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import TodoContainer from './components/TodoContainer'
import UserContainer from './components/users/UserContainer'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TodoContainer />
        </Route>
        <Route exact path="/users">
          <UserContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
