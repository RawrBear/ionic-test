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

// TODO: Grab stats from api based on name. See:https://pokeapi.co/docs/v2#pokemon-section

function PokeSingle({ name }) {
  const [pokeData, setPokeData] = useState();

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      name: name,
    },
  });

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    } else {
      console.log("Data:", data);
      setPokeData(data.pokemon);
    }

    if (error) {
      console.log("Error", error);
    }
  }, [loading, error, data]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle size="large">POKE SINGLE</IonTitle>
      </IonContent>
    </IonPage>
  );
}

export default PokeSingle;
