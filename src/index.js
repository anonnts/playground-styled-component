import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router} from 'react-router-dom'
import RootContainer from 'Containers/app'

const render = Component => {
    ReactDOM.render(
        <Router>
            <AppContainer>
                <RootContainer/>
            </AppContainer>
        </Router>
        , document.getElementById('root')
    )
}

// don't forget change hydrate to render

render(RootContainer)

if (module.hot) {
    module.hot.accept('Containers/app', () => render(RootContainer))
}

// pattern for use hot module replacement 
// { AppContainer } will encapsulate the component 