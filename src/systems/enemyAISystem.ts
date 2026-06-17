import Phaser from "phaser";
import type { Enemy } from "../entities/Enemy";
import type { Player } from "../entities/Player";

export function updateEnemyAi(
  enemies: Enemy[],
  player: Player
) {
  const enemySpeed = 1.5;

  enemies.forEach((enemy) => {
    if (!enemy.body.active) return;

    const direction = new Phaser.Math.Vector2(
      player.body.x - enemy.body.x,
      player.body.y - enemy.body.y
    );

    if (direction.length() > 0) {
      direction.normalize();

      enemy.body.x += direction.x * enemySpeed;
      enemy.body.y += direction.y * enemySpeed;
    }
  });
}
