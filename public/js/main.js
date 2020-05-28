var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        //These are states of the scene
        init: init, 
        preload: preload,
        create: create,
        update: update,
        shutdown: shutdown
    },
    physics: {
        //set up game physics
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y:0,
            }
        }
    }
}

var game = new Phaser.Game(config);

function init() {
    //Initializes the scene
}

function preload() {
    //Loaded in before the scene loads
    //Scope of "this" is bound to the phaser method, loaded by the scene
    this.load.image('button1', 'images/ui/blue_button01.png')
    this.load.spritesheet('items', 'images/items.png', {frameWidth: 32, frameHeight: 32})
    this.load.spritesheet('characters', 'images/characters.png', {frameWidth: 32, frameHeight: 32})
}

function create() {
    //Runs when the scene is created

    //top left corner of the screen is 0, 0
    //images cannot be animated
    var button = this.add.image(100, 100, 'button1')
    button.setOrigin(0.5,0.5); 

    //sprites can be animated
    this.add.sprite(300, 100, 'button1')

    //If using a spritesheet, you can tell phaser which sprite to load in
    this.add.image(300, 300, 'items', 0)

    //Physics objects are affected by gravity, ect.
    this.physics.add.image(500, 100, 'button1')

    this.player = this.physics.add.image(32, 32, 'characters', 0)
    this.player.setScale(2)

    this.cursors = this.input.keyboard.addKeys({
        'up': Phaser.Input.Keyboard.KeyCodes.W,
        'left': Phaser.Input.Keyboard.KeyCodes.A,
        'down': Phaser.Input.Keyboard.KeyCodes.S,
        'right': Phaser.Input.Keyboard.KeyCodes.D
    }
    )
}

function update() {
    //Called every frame

    if(this.cursors.left.isDown) {
        this.player.setVelocityX(-160,0)
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160,0)
    } else if(this.cursors.up.isDown) {
        this.player.setVelocityY(-160,0)
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160,0)
    } 
}

function shutdown() {
    //run when the scene is ended
}