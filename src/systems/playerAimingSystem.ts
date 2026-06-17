import Phaser from "phaser";

export function updatePlayerAim(
  player: Phaser.GameObjects.Rectangle,
  pointer: Phaser.Input.Pointer
) {
  player.rotation = Phaser.Math.Angle.Between(
    player.x,
    player.y,
    pointer.worldX,
    pointer.worldY
  );
}
 