import Phaser from "phaser";

export type Player = {
  body: Phaser.GameObjects.Rectangle;
  health: number;
  lastDamageTime: number;
};

export function createPlayer(scene: Phaser.Scene): Player {
  return {
    body: scene.add.rectangle(400, 300, 40, 40, 0x7b5cff),
    health: 10,
    lastDamageTime: 0,
  };
}