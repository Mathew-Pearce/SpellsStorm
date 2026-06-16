import Phaser from 'phaser';
import { GameScene } from './GameScene';

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#111111",
  parent: "app",
  scene: [GameScene],
});
