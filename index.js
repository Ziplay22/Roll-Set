import { register } from "@owlbear-rodeo/sdk";

register("custom-dice-roller", async (api) => {
  console.log("Extensión cargada");

  // Agregar un botón para tirar 8d6
  api.ui.addActionButton({
    label: "Bola de Fuego (8d6)",
    onClick: () => {
      const result = api.dice.roll("8d6");
      console.log("Tirada de Bola de Fuego:", result);
    }
  });
});
