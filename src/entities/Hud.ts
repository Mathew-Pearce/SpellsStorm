import Phaser from "phaser";

export type Hud = {
  title: Phaser.GameObjects.Text;
  healthText: Phaser.GameObjects.Text;
  enemyText: Phaser.GameObjects.Text;
};

export function createHud(scene: Phaser.Scene): Hud {
  const title = scene.add.text(20, 20, "A Minor Magical Disagreement", {
    fontSize: "24px",
    color: "#ffffff",
  });

  const healthText = scene.add.text(20, 55, "Health: 10", {
    fontSize: "18px",
    color: "#ffffff",
  });

  const enemyText = scene.add.text(20, 80, "Enemies: 0", {
    fontSize: "18px",
    color: "#ffffff",
  });

  return {
    title,
    healthText,
    enemyText,
  };
}