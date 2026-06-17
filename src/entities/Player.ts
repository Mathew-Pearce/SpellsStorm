import Phaser from 'phaser';

export function createPlayer(scene: Phaser.Scene) {
    return scene.add.rectangle(400, 300, 40, 40, 0x7b5cff);
}