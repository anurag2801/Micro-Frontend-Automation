import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
    return (
        <div>
            <ErrorBoundary>
                <StylesProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/pricing" component={Pricing} />
                            <Route path="/" component={Landing} />
                        </Switch>
                    </BrowserRouter>
                </StylesProvider>
                <h1>Marketing component</h1>
            </ErrorBoundary>
        </div>
    );
};
