import Phaser from "phaser";

//Entities
import { createPlayer } from "../entities/Player";
import { createEnemy } from "../entities/Enemy";
import { createProjectile } from "../entities/Projectile";
//Systems
import { updatePlayerMovement } from "../systems/playerMovementSystem";
import { updatePlayerAim } from '../systems/playerAimingSystem'
import { updateProjectiles } from '../systems/projectileSystem'

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

    updatePlayerAim(
      this.player,
      this.input.activePointer
    );
   
    updateProjectiles(this.projectiles)

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