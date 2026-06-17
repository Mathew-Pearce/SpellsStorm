import Phaser from "phaser";

export function updateProjectiles(
  projectiles: Phaser.GameObjects.Group
) {
  projectiles.getChildren().forEach((child) => {
    const projectile = child as Phaser.GameObjects.Arc;
    const velocity = projectile.getData("velocity") as Phaser.Math.Vector2;

    projectile.x += velocity.x;
    projectile.y += velocity.y;
  });
}