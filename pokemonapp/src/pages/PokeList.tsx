import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import PokeCard from "../components/Card/PokeCard";

type Props = {};

function PokeList({}: Props) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>POKE LIST</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">POKE LIST</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PokeCard />
      </IonContent>
    </IonPage>
  );
}

export default PokeList;
