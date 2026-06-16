import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.add.rectangle(400, 300, 100, 100, 0x7bcff);
    this.add.text(20, 20, 'spellstorm', {
      fontSize: '24px',
      color: '##ffffff',
    });
  }
}
new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#111111',
  parent: 'app',
  scene: [GameScene],
});
