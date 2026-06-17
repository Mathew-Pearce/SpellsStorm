import Phaser from "phaser";
import type { Player } from "../entities/Player";
import type { Enemy } from "../entities/Enemy";

const contactDamage = 1;
const damageCooldown = 500;

export function updatePlayerEnemyDamage(
  scene: Phaser.Scene,
  player: Player,
  enemies: Enemy[]
) {
  const now = scene.time.now;

  if (now - player.lastDamageTime < damageCooldown) return;

  for (const enemy of enemies) {
    if (!enemy.body.active) continue;

    const distance = Phaser.Math.Distance.Between(
      player.body.x,
      player.body.y,
      enemy.body.x,
      enemy.body.y
    );

    if (distance <= 40) {
      player.health -= contactDamage;
      player.lastDamageTime = now;

      console.log("Player health:", player.health);

      if (player.health <= 0) {
        player.body.setFillStyle(0x333333);
        console.log("Player defeated");
      }

      break;
    }
  }
}