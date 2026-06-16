import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
    
  private player!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("GameScene");
  }

  create() {
    this.player = this.add.rectangle(400, 300, 40, 40, 0x7b5cff);

    this.cursors = this.input.keyboard!.createCursorKeys();

    this.add.text(20, 20, "A Minor Magical Disagreement", {
      fontSize: "24px",
      color: "#ffffff",
    });
  }

  update() {
    const speed = 4;

    if (this.cursors.left.isDown) this.player.x -= speed;
    if (this.cursors.right.isDown) this.player.x += speed;
    if (this.cursors.up.isDown) this.player.y -= speed;
    if (this.cursors.down.isDown) this.player.y += speed;
  }
}