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
        <IonButton>
          <a hre>Click For Stats</a>
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default PokeCard;
