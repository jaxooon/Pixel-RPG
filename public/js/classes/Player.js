class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, frame) {
        super(scene, x, y, frame)
        this.scene = scene 
        this.velocity = 160

        //enable physics
        this.scene.physics.world.enable(this)

        //set immovable if another object collides with our player
        this.setImmovable(false)

        //scale out player and have it collide with world bounds
        this.setScale(2)
        this.setCollideWorldBounds(true)

        //add player to our existing scene
        this.scene.add.existing(this)
    }

    update(cursors){
        //Called every frame

       this.body.setVelocity(0)

       if(cursors.left.isDown) {
           this.body.setVelocityX(-this.velocity,0)
       } else if (cursors.right.isDown) {
           this.body.setVelocityX(this.velocity,0)
       }
       
       if(cursors.up.isDown) {
           this.body.setVelocityY(-this.velocity,0)
       } else if (cursors.down.isDown) {
           this.body.setVelocityY(this.velocity,0)
       } 
   }
}