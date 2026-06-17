import type { Hud } from "../entities/Hud";
import type { Player } from "../entities/Player";
import type { Enemy } from "../entities/Enemy";

export function updateHud(
  hud: Hud,
  player: Player,
  enemies: Enemy[]
) {
  hud.healthText.setText(`Health: ${player.health}`);
  hud.enemyText.setText(`Enemies: ${enemies.length}`);
}