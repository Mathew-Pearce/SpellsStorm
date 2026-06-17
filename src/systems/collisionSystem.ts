import Phaser from 'phaser'

export function updateProjectileEnemyCollision(
    projectiles: Phaser.GameObjects.Group,
    enemy: Phaser.GameObjects.rectangle
) {
    if (!enemy.active) return;

    projectiles.getChildren().forEach((child) => {
        const projectile = child as Phaser.GameObjects.Arc;

        if(!projectile.active)
            return;

        const distance = Phaser.Math.Distance.Between(
            projectile.x,
            projectile.y,
            enemy.x,
            enemy.y
        ); 
        const hitDistance = 26;

        if (distance <= hitDistance) {
            projectile.destroy();
          
            const health = enemy.getData("health") as number | undefined;
            const currentHealth = health ?? 3;
            const nextHealth = currentHealth - 1;
          
            console.log("Enemy health:", nextHealth);
          
            enemy.setData("health", nextHealth);
          
            if (nextHealth <= 0) {
              enemy.destroy();
            }
          }
    })
}