import theme from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from '@emotion/react';
import { Header } from './app/layout/header/header';
import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { routesConfig } from './app/routes/routes-config';
import { Footer } from './app/layout/footer/footer';
import styled from '@emotion/styled';
import { Spinner } from './app/shared/spinner/spinner';

const HomePage: React.LazyExoticComponent<React.FC> = lazy(
    () => import('./app/pages/home/home')
);

const OperationsPage: React.LazyExoticComponent<React.FC> = lazy(
    () => import('./app/pages/operations/operations')
);

const ManagementPage: React.LazyExoticComponent<React.FC> = lazy(
    () => import('./app/pages/management/management')
);

const ReportingPage: React.LazyExoticComponent<React.FC> = lazy(
    () => import('./app/pages/reporting/reporting')
);

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100vh;
`;

const Main = styled.main`
    flex-grow: 1;
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<Spinner />}>
            <Router>
                <AppContainer>
                    <Header />
                    <Main>
                        <Switch>
                            <Redirect
                                exact
                                from='/'
                                to={routesConfig.home.route}
                            />
                            <Route
                                exact
                                path={routesConfig.home.route}
                                render={() => <HomePage />}
                            />
                            <Route
                                exact
                                path={routesConfig.operations.route}
                                render={() => <OperationsPage />}
                            />
                            <Route
                                exact
                                path={routesConfig.management.route}
                                render={() => <ManagementPage />}
                            />
                            <Route
                                exact
                                path={routesConfig.reporting.route}
                                render={() => <ReportingPage />}
                            />
                        </Switch>
                    </Main>
                    <Footer />
                </AppContainer>
            </Router>
        </Suspense>
    </ThemeProvider>
);

export default App;
