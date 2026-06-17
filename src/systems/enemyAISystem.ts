import Phaser from "phaser";
import type { Enemy } from "../entities/Enemy";

export function updateEnemyAi(
  enemy: Enemy,
  player: Phaser.GameObjects.Rectangle
) {
  const enemySpeed = 1.5;

  const direction = new Phaser.Math.Vector2(
    player.x - enemy.body.x,
    player.y - enemy.body.y
  );

  if (direction.length() > 0) {
    direction.normalize();

    enemy.body.x += direction.x * enemySpeed;
    enemy.body.y += direction.y * enemySpeed;
  }
}

