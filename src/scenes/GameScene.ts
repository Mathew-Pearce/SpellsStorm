import Phaser from "phaser";

//Entities
import { createPlayer } from "../entities/Player";
import { createEnemy } from "../entities/Enemy";
import { createProjectile } from "../entities/Projectile";
//Systems
import { updatePlayerMovement } from "../systems/playerMovement";

export class GameScene extends Phaser.Scene {

  private player!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private projectiles!: Phaser.GameObjects.Group;
  private enemy!: Phaser.GameObjects.Rectangle;

  constructor() {
    super("GameScene");
  }

  create() {

    // Player
    this.player = createPlayer(this);

    // Enemy
    this.enemy = createEnemy(this);

    // Input
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Overlay
    this.add.text(20, 20, "A Minor Magical Disagreement", {
      fontSize: "24px",
      color: "#ffffff",
    });

    // Projectiles
    this.projectiles = this.add.group();

    this.input.on("pointerdown", () => {

      const pointer = this.input.activePointer;

      const projectile = createProjectile(
        this,
        this.player.x,
        this.player.y,
        pointer.worldX,
        pointer.worldY
      );

      this.projectiles.add(projectile);

    });
  }

  update() {
   
    // Player movement
    updatePlayerMovement(this.player, this.cursors);
    // Mouse aiming
    const pointer = this.input.activePointer;

    this.player.rotation = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      pointer.worldX,
      pointer.worldY
    );

    // Projectiles
    this.projectiles.getChildren().forEach((child) => {

      const projectile = child as Phaser.GameObjects.Arc;
      const velocity = projectile.getData("velocity") as Phaser.Math.Vector2;

      projectile.x += velocity.x;
      projectile.y += velocity.y;

    });

    // Enemy AI
    const enemySpeed = 1.5;

    const enemyDirection = new Phaser.Math.Vector2(
      this.player.x - this.enemy.x,
      this.player.y - this.enemy.y
    );

    if (enemyDirection.length() > 0) {

      enemyDirection.normalize();

      this.enemy.x += enemyDirection.x * enemySpeed;
      this.enemy.y += enemyDirection.y * enemySpeed;

    }
  }
}