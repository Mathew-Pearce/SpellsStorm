import Phaser from "phaser";

export function updatePlayerMovement(
  player: Phaser.GameObjects.Rectangle,
  moveVector: Phaser.Math.Vector2
) {
  const speed = 4;

  player.x += moveVector.x * speed;
  player.y += moveVector.y * speed;

  player.x = Phaser.Math.Clamp(player.x, 20, 780);
  player.y = Phaser.Math.Clamp(player.y, 20, 580);
}