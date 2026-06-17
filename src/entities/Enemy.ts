import Phaser from "phaser";

export type Enemy = {
  body: Phaser.GameObjects.Rectangle;
  health: number;
};

export function createEnemy(
    scene: Phaser.Scene,
    x = 100,
    y = 100
  ): Enemy {
    return {
      body: scene.add.rectangle(x, y, 40, 40, 0xff4444),
      health: 3,
    };
  }