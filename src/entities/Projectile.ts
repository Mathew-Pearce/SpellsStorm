import Phaser from "phaser";

export function createProjectile(
  scene: Phaser.Scene,
  x: number,
  y: number,
  targetX: number,
  targetY: number
) {
  const projectile = scene.add.circle(x, y, 6, 0xffdd55);

  const direction = new Phaser.Math.Vector2(
    targetX - x,
    targetY - y
  ).normalize();

  projectile.setData("velocity", direction.scale(8));

  return projectile;
}