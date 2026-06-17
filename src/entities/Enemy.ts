import Phaser from 'phaser';

export function createEnemy(scene: Phaser.Scene) {
    return scene.add.rectangle(100, 100, 40, 40, 0xff4444)

    enemy.setData('health', 3);

    return enemy;
}