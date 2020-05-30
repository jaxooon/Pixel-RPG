class BootScene extends Phaser.Scene{
    constructor() {
        super('Boot')
    }

    preload() {
        this.load.image('button1', 'images/ui/blue_button01.png')
        this.load.spritesheet('items', 'images/items.png', {frameWidth: 32, frameHeight: 32})
        this.load.spritesheet('characters', 'images/characters.png', {frameWidth: 32, frameHeight: 32})
        this.load.audio('goldSound', ['audio/Pickup.wav'])
    }

    create() {
        this.scene.start('Game')
    }
}