import Phaser from "phaser";
import { InputManager } from "../input/InputManager";
import { createProjectile } from "../entities/Projectile";

export function updateSpellCasting(
  scene: Phaser.Scene,
  player: Phaser.GameObjects.Rectangle,
  projectiles: Phaser.GameObjects.Group,
  inputManager: InputManager
) {
  if (!inputManager.isCasting()) return;

  const pointer = inputManager.getAimPointer();

  const projectile = createProjectile(
    scene,
    player.x,
    player.y,
    pointer.worldX,
    pointer.worldY
  );

  projectiles.add(projectile);
}