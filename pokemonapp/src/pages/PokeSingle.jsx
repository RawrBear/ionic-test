import { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLoading,
} from "@ionic/react";

import { useQuery } from "@apollo/client";
import { GET_SINGLE_POKEMON } from "../components/graphQL/queries";
import { useEffect } from "react";
import { useParams } from "react-router";

// TODO: Grab stats from api based on name. See:https://pokeapi.co/docs/v2#pokemon-section

function PokeSingle() {
  const [pokeData, setPokeData] = useState();

  // get state from react router
  let { name } = useParams();
  console.log("name outside", name);

  const { loading, error, data } = useQuery(GET_SINGLE_POKEMON, {
    variables: {
      name: name,
    },
  });

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    } else {
      console.log("Data SINGLE:", data.pokemon);
      setPokeData(data.pokemon);
      console.log("name", name);
    }

    if (error) {
      console.log("Error", error);
    }
  }, [loading, error, data]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textTransform: "Capitalize" }}>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {!pokeData ? (
          <IonItem>
            <IonLabel>LOADING</IonLabel>
            <IonSpinner name="dots"></IonSpinner>
          </IonItem>
        ) : (
          <>
            <IonTitle size="large" style={{ textTransform: "Capitalize" }}>
              {pokeData?.name}
            </IonTitle>
            <IonTitle size="large" style={{ textTransform: "Capitalize" }}>
              Type: {pokeData?.types[0].type.name}
            </IonTitle>
            <IonTitle size="large">Height: {pokeData?.height}</IonTitle>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}

export default PokeSingle;
