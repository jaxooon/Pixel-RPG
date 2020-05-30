class GameScene extends Phaser.Scene{
    constructor() {
        super('Game')
    }

    create(){
        //Runs when the scene is created

        //top left corner of the screen is 0, 0
        //images cannot be animated
        var button = this.add.image(100, 100, 'button1')
        button.setOrigin(0.5,0.5); 

        var goldPickupSound = this.sound.add('goldSound')

        //sprites can be animated
        this.add.sprite(300, 100, 'button1')

        

        //If using a spritesheet, you can tell phaser which sprite to load in
        this.chest = new Chest(this, 300, 300, 'items', 0)

        //Physics objects are affected by gravity, ect.
        this.wall = this.physics.add.image(500, 100, 'button1')
        this.wall.setImmovable()

        this.player = new Player(this, 32, 32, 'characters', 0)

        this.physics.add.collider(this.player, this.wall)
        this.physics.add.overlap(this.player, this.chest,(player, chest) => {
            goldPickupSound.play()
            chest.destroy()
        })

        this.cursors = this.input.keyboard.addKeys({
            'up': Phaser.Input.Keyboard.KeyCodes.W,
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'down': Phaser.Input.Keyboard.KeyCodes.S,
            'right': Phaser.Input.Keyboard.KeyCodes.D
        })
    }

    update(){
        //Called every frame
        this.player.update(this.cursors) 
    }
}