import Phaser from "phaser";
import type { Enemy } from "../entities/Enemy";

export function updateProjectileEnemyCollision(
  projectiles: Phaser.GameObjects.Group,
  enemies: Enemy[]
) {
  for (const enemy of enemies) {
    if (!enemy.body.active) continue;

    for (const child of projectiles.getChildren()) {
      const projectile = child as Phaser.GameObjects.Arc;

      if (!projectile.active) continue;

      const distance = Phaser.Math.Distance.Between(
        projectile.x,
        projectile.y,
        enemy.body.x,
        enemy.body.y
      );

      if (distance <= 26) {
        projectile.setActive(false);
        projectile.setVisible(false);
        projectiles.remove(projectile, true, true);

        enemy.health -= 1;

        console.log("Enemy health:", enemy.health);

        if (enemy.health <= 0) {
          enemy.body.destroy();
        }

        break;
      }
    }
  }
}