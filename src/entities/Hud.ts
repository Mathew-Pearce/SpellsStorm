import Phaser from "phaser";

export function createHud(scene: Phaser.Scene) {
  return scene.add.text(20, 20, "A Minor Magical Disagreement", {
    fontSize: "24px",
    color: "#ffffff",
  });
}