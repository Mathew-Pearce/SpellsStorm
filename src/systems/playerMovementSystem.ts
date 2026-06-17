import Phaser from 'phaser';

export function updatePlayerMovement(
    player: Phaser.GameObjects.Rectangle,
    cursors: Phaser.Types.Input.Keyboard.CursorKeys
) {
    const speed = 4;
    const velocity = new Phaser.Math.Vector2(0, 0);

    //Handle move input. 
    if (cursors.left.isDown) velocity.x = -1;
     else if (cursors.right.isDown) velocity.x = 1;

    if (cursors.up.isDown) velocity.y = -1;
        else if (cursors.down.isDown) velocity.y = 1;

    //Normalise Player Movement
    if (velocity.length() > 0) {
        velocity.normalize();

        player.x += velocity.x * speed;
        player.y += velocity.y * speed;
    }


    //Clamp player within the screes boundary. 
    player.x = Phaser.Math.Clamp(player.x, 20, 780);
    player.y = Phaser.Math.Clamp(player.y, 20, 580);
}