import Phaser from "phaser";
import { InputManager } from "../input/InputManager";
import { createProjectile } from "../entities/Projectile";


let lastCastTime = 0;
const castCooldown = 200;

export function updateSpellCasting(
  scene: Phaser.Scene,
  player: Phaser.GameObjects.Rectangle,
  projectiles: Phaser.GameObjects.Group,
  inputManager: InputManager
) {
  if (!inputManager.isCasting()) return;

  const pointer = inputManager.getAimPointer();

  const now = scene.time.now;

  if (now - lastCastTime < castCooldown) 
    return;
    console.log("cast");
lastCastTime = now;

  const projectile = createProjectile(
    scene,
    player.x,
    player.y,
    pointer.worldX,
    pointer.worldY
  );

  projectiles.add(projectile);
}