import Phaser from "phaser";

export function updateEnemyAi(
  enemy: Phaser.GameObjects.Rectangle,
  player: Phaser.GameObjects.Rectangle
) {
  const enemySpeed = 1.5;

  const direction = new Phaser.Math.Vector2(
    player.x - enemy.x,
    player.y - enemy.y
  );

  if (direction.length() > 0) {
    direction.normalize();

    enemy.x += direction.x * enemySpeed;
    enemy.y += direction.y * enemySpeed;
  }
}

