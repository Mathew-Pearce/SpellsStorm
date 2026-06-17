import Phaser from "phaser";

export class InputManager {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd: Record<string, Phaser.Input.Keyboard.Key>;

  constructor(private scene: Phaser.Scene) {
    this.cursors = scene.input.keyboard!.createCursorKeys();

    this.wasd = scene.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as Record<string, Phaser.Input.Keyboard.Key>;
  }

  getMoveVector() {
    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.cursors.left?.isDown || this.wasd.left.isDown) velocity.x = -1;
    else if (this.cursors.right?.isDown || this.wasd.right.isDown) velocity.x = 1;

    if (this.cursors.up?.isDown || this.wasd.up.isDown) velocity.y = -1;
    else if (this.cursors.down?.isDown || this.wasd.down.isDown) velocity.y = 1;

    if (velocity.length() > 0) {
      velocity.normalize();
    }

    return velocity;
  }

  getAimPointer() {
    return this.scene.input.activePointer;
  }

  isCasting() {
    return this.scene.input.activePointer.isDown;
  }
}