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

import PokeCard from "../components/Card/PokeCard";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../components/graphQL/queries";
import { useEffect } from "react";

const pokemonNames = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
];

// TODO: Grab stats from api based on name. See:https://pokeapi.co/docs/v2#pokemon-section

function PokeList() {
  const [pokeData, setPokeData] = useState();
  const [pokeTest, setPokeTest] = useState();
  const { loading, error, data } = useQuery(GET_POKEMONS);

  useEffect(() => {
    if (loading) {
      console.log("Loading");
    } else {
      console.log("Data:", data);
    }

    if (error) {
      console.log("Error", error);
    }
  }, [loading, error, data]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>POKE LIST</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle size="large">POKE LIST</IonTitle>
        <IonGrid fixed={true} style={{ margin: "6vh auto 6vh auto" }}>
          <IonRow>
            {!pokeData ? (
              <h1>LOADING</h1>
            ) : (
              pokeData.results.map((pokemon) => {
                return (
                  <IonCol size="3" key={pokemon.name}>
                    <PokeCard name={pokemon.name} img={pokemon.image} />
                  </IonCol>
                );
              })
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default PokeList;
