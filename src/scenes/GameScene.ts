import Phaser from "phaser";

//Entities
import { createPlayer } from "../entities/Player";
import { createEnemy } from "../entities/Enemy";
import { createProjectile } from "../entities/Projectile";
import { createHud } from '../entities/Hud'

//Systems
import { updatePlayerMovement } from "../systems/playerMovementSystem";
import { updatePlayerAim } from '../systems/playerAimingSystem'
import { updateProjectiles } from '../systems/projectileSystem'
import { updateEnemyAi } from "../systems/enemyAISystem";
import { updateSpellCasting } from '../systems/spellCastingSystem'

//Managers
import { InputManager } from '../input/InputManager'

export class GameScene extends Phaser.Scene {

  private player!: Phaser.GameObjects.Rectangle;
  private inputManager!: InputManager;
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
    this.inputManager = new InputManager(this);

    createHud(this);

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
    updatePlayerMovement(this.player, this.inputManager.getMoveVector());

    //player aiming
    updatePlayerAim(this.player, this.inputManager.getAimPointer());
    
    updateSpellCasting(
      this,
      this.player,
      this.projectiles,
      this.inputManager
    );

    updateProjectiles(this.projectiles)
    updateEnemyAi(this.enemy, this.player);
  }
}