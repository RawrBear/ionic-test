import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import "./PokeCard.css";

type Props = {
  name: string;
  img: string;
};

function PokeCard({ name, img }: Props) {
  console.log("IMAGE:", img);
  return (
    <IonCard style={{ display: "flex", flexDirection: "column" }}>
      <img style={{ alignItems: "center" }} alt="Image of {name}" src={img} />
      <IonCardHeader>
        <IonCardTitle style={{ textTransform: "capitalize", Weight: "bold" }}>
          {name}
        </IonCardTitle>
        <IonCardSubtitle>Abilities: </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Click for stats</IonCardContent>
    </IonCard>
  );
}

export default PokeCard;
