import Phaser from "phaser";

export type Enemy = {
  body: Phaser.GameObjects.Rectangle;
  health: number;
};

export function createEnemy(scene: Phaser.Scene): Enemy {
  return {
    body: scene.add.rectangle(100, 100, 40, 40, 0xff4444),
    health: 3,
  };
}