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
    
      let dx = 0;
      let dy = 0;
    
      if (this.cursors.left.isDown) dx -= 1;
      if (this.cursors.right.isDown) dx += 1;
      if (this.cursors.up.isDown) dy -= 1;
      if (this.cursors.down.isDown) dy += 1;
    
      const length = Math.hypot(dx, dy);
    
      if (length > 0) {
        dx /= length;
        dy /= length;
    
        this.player.x += dx * speed;
        this.player.y += dy * speed;
      }
    }
}