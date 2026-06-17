import Phaser from "phaser";

export class GameScene extends Phaser.Scene {
    
  private player!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  projectiles!: Phaser.GameObjects.Group;

  constructor() {
    super("GameScene");
  }

  create() {
    //Player
    this.player = this.add.rectangle(400, 300, 40, 40, 0x7b5cff);

    //Input
    this.cursors = this.input.keyboard!.createCursorKeys();

    //overlay
    this.add.text(20, 20, "A Minor Magical Disagreement", {
      fontSize: "24px",
      color: "#ffffff",
    });

    //Projectiles
    this.projectiles = this.add.group();

this.input.on("pointerdown", () => {
  const pointer = this.input.activePointer;

  const projectile = this.add.circle(
    this.player.x,
    this.player.y,
    6,
    0xffdd55
  );

  const direction = new Phaser.Math.Vector2(
    pointer.worldX - this.player.x,
    pointer.worldY - this.player.y
  ).normalize();

  projectile.setData("velocity", direction.scale(8));

  this.projectiles.add(projectile);
  });
}

  update(){

    const speed = 4;

    const velocity = new Phaser.Math.Vector2(0, 0);
  
    if (this.cursors.left.isDown) velocity.x = -1;
    else if (this.cursors.right.isDown) velocity.x = 1;
  
    if (this.cursors.up.isDown) velocity.y = -1;
    else if (this.cursors.down.isDown) velocity.y = 1;
  
    if (velocity.length() > 0) {
      velocity.normalize();
  
      this.player.x += velocity.x * speed;
      this.player.y += velocity.y * speed;
    }
    //Rotate the player to mouse position.
    const pointer = this.input.activePointer;

    const angle = Phaser.Math.Angle.Between(
    this.player.x,
    this.player.y,
    pointer.worldX,
    pointer.worldY
  );
    
  this.player.rotation = angle; 
    
  //Clamp player to screen bounds
  this.player.x = Phaser.Math.Clamp(this.player.x, 20, 780);
  this.player.y = Phaser.Math.Clamp(this.player.y, 20, 580);

  //
    this.projectiles.getChildren().forEach((child) => {
    const projectile = child as Phaser.GameObjects.Arc;
    const velocity = projectile.getData("velocity") as Phaser.Math.Vector2;
  
    projectile.x += velocity.x;
    projectile.y += velocity.y;
  
    return true;
  });
    
  }
}