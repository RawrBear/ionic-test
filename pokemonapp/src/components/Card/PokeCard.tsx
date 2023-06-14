import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBackButton,
  IonButton,
} from "@ionic/react";

import "./PokeCard.css";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  img: string;
};

function PokeCard({ name, img }: Props) {
  return (
    <IonCard style={{ display: "flex", flexDirection: "column" }}>
      <img style={{ alignItems: "center" }} alt="Image of {name}" src={img} />
      <IonCardHeader>
        <IonCardTitle style={{ textTransform: "capitalize", Weight: "bold" }}>
          {name}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        {/* Button sends the name to the pokesingle page */}
        <IonButton href={`/pokesingle/${name}`}>CLICK</IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default PokeCard;
