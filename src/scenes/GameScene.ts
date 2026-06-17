import Phaser from "phaser";

//Entities
import { createPlayer, type Player } from "../entities/Player";
import { createEnemy, type Enemy } from "../entities/Enemy";
import { createProjectile } from "../entities/Projectile";
import { createHud } from '../entities/Hud'

//Systems
import { updatePlayerMovement } from "../systems/playerMovementSystem";
import { updatePlayerAim } from '../systems/playerAimingSystem'
import { updateProjectiles } from '../systems/projectileSystem'
import { updateEnemyAi } from "../systems/enemyAISystem";
import { updateSpellCasting } from '../systems/spellCastingSystem'
import { updateProjectileEnemyCollision } from '../systems/collisionSystem'
import { updateEnemySpawning } from '../systems/enemySpawnSystem'
import { updatePlayerEnemyDamage } from '../systems/playerDamageSystem'

//Managers
import { InputManager } from '../input/InputManager'

export class GameScene extends Phaser.Scene {

  private player!: Player;
  private inputManager!: InputManager;
  private projectiles!: Phaser.GameObjects.Group;
  private enemies!: Enemy[] = [];

  constructor() {
    super("GameScene");
  }

  create() {

    // Player
    this.player = createPlayer(this);

    // Enemy
    this.enemies.push(createEnemy(this));

    // Input
    this.inputManager = new InputManager(this);

    createHud(this);

    this.projectiles = this.add.group();
  }

  update() {
   
    updatePlayerMovement(this.player.body, this.inputManager.getMoveVector());

    updatePlayerAim(this.player.body, this.inputManager.getAimPointer());
    
    updateSpellCasting(
      this,
      this.player.body,
      this.projectiles,
      this.inputManager
    );

    updateProjectiles(this.projectiles);
    updateProjectileEnemyCollision(this.projectiles, this.enemies);
    updateEnemySpawning(this, this.enemies);
    updateEnemyAi(this.enemies, this.player);
    updatePlayerEnemyDamage(this, this.player, this.enemies)

  }
}