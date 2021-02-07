import React, { Suspense } from "react";
import ErrorBoundary from "react-error-boundary";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import PuzzToolDocumentTitle from "./Common/PuzzToolDocumentTitle";
import AppNav from "./Features/AppNav";
import NotFound from "./Features/Error/NotFound";
import Loading from "./Features/Loading";
import "./App.scss";

const loadingDelay = 200;
const loadingTimeout = 10000;

const Autokey = React.lazy(() => import("./Features/Cipher/Autokey"));
const Caesar = React.lazy(() => import("./Features/Cipher/Caesar"));
const Vigenere = React.lazy(() => import("./Features/Cipher/Vigenere"));
const AutoConvert = React.lazy(() => import("./Features/Encoding/AutoConvert"));
const Braille = React.lazy(() => import("./Features/Encoding/Braille"));
const Character = React.lazy(() => import("./Features/Encoding/Character"));
const Morse = React.lazy(() => import("./Features/Encoding/Morse"));
const Nato = React.lazy(() => import("./Features/Encoding/Nato"));
const NavalFlag = React.lazy(() => import("./Features/Encoding/NavalFlag"));
const Semaphore = React.lazy(() => import("./Features/Encoding/Semaphore"));
const Home = React.lazy(() => import("./Features/Home"));
const Pigpen = React.lazy(() => import("./Features/Pigpen"));
const Resistor = React.lazy(() => import("./Features/Resistor"));
const Settings = React.lazy(() => import("./Features/Settings"));
const WordSearch = React.lazy(() => import("./Features/WordSearch"));

function ErrorFallback() {
  return (
    <div className="App-loadError">
      <div className="App-loadError-icon">!</div>
      <div>Failed to load content</div>
    </div>
  );
}

function App(props: RouteComponentProps) {
  return (
    <PuzzToolDocumentTitle>
      <div className="App">
        <AppNav />
        <div className="App-content">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            key={props.history.location.key}
          >
            <Suspense
              fallback={
                <Loading delay={loadingDelay} timeout={loadingTimeout} />
              }
            >
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route
                  exact={true}
                  path="/cipher/autokey"
                  component={Autokey}
                />
                <Route exact={true} path="/cipher/caesar" component={Caesar} />
                <Route
                  exact={true}
                  path="/cipher/vigenere"
                  component={Vigenere}
                />
                <Route
                  exact={true}
                  path="/encoding/autoconvert"
                  component={AutoConvert}
                />
                <Route
                  exact={true}
                  path="/encoding/braille"
                  component={Braille}
                />
                <Route exact={true} path="/encoding/morse" component={Morse} />
                <Route
                  exact={true}
                  path="/encoding/pigpen"
                  component={Pigpen}
                />
                <Route
                  exact={true}
                  path="/encoding/semaphore"
                  component={Semaphore}
                />
                <Route
                  exact={true}
                  path="/help/settings"
                  component={Settings}
                />
                <Route
                  exact={true}
                  path="/reference/characterencodings"
                  component={Character}
                />
                <Route exact={true} path="/reference/nato" component={Nato} />
                <Route
                  exact={true}
                  path="/reference/navalflags"
                  component={NavalFlag}
                />
                <Route
                  exact={true}
                  path="/reference/resistors"
                  component={Resistor}
                />
                <Route
                  exact={true}
                  path="/solvers/wordsearch"
                  component={WordSearch}
                />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </PuzzToolDocumentTitle>
  );
}

export default withRouter(App);
