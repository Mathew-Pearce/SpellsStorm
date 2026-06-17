import Phaser from "phaser";
import { createEnemy, type Enemy } from "../entities/Enemy";

let lastSpawnTime = 0;
const spawnCooldown = 3000;
const maxEnemies = 10;

export function updateEnemySpawning(
  scene: Phaser.Scene,
  enemies: Enemy[]
) {
  const now = scene.time.now;

  if (enemies.length >= maxEnemies) return;
  if (now - lastSpawnTime < spawnCooldown) return;

  lastSpawnTime = now;

  const side = Phaser.Math.Between(0, 3);

  let x = 0;
  let y = 0;

  if (side === 0) {
    x = Phaser.Math.Between(0, 800);
    y = -40;
  } else if (side === 1) {
    x = Phaser.Math.Between(0, 800);
    y = 640;
  } else if (side === 2) {
    x = -40;
    y = Phaser.Math.Between(0, 600);
  } else {
    x = 840;
    y = Phaser.Math.Between(0, 600);
  }

  enemies.push(createEnemy(scene, x, y));
}