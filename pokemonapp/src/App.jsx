import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { moon, sunny } from "ionicons/icons";

import { ApolloProvider } from "@apollo/client";
import client from "./components/graphQL/graphClient";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// Custom styles
import "./App.css";
import PokeList from "./pages/PokeList";

setupIonicReact();
const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};

const App = () => (
  <ApolloProvider client={client}>
    <IonApp>
      <IonReactRouter>
        <IonToolbar slot="top">
          <IonGrid>
            <IonRow
              style={{
                display: "flex",
                justifyContent: "space-between",
                with: "100%",
              }}
            >
              <IonCol style={{ paddingLeft: "2vw" }}>POKEMON</IonCol>

              <IonCol
                style={{
                  display: "flex",
                  justifyContent: "end",
                  paddingRight: "2vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "5vw",
                    justifyContent: "space-between",
                  }}
                >
                  <IonIcon icon={sunny} />
                  <IonToggle
                    slot="end"
                    name="darkMode"
                    onIonChange={toggleDarkModeHandler}
                  />
                  <IonIcon icon={moon} />
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        <PokeList />
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer!</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonReactRouter>
    </IonApp>
  </ApolloProvider>
);

export default App;
