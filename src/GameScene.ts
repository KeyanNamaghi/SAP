import { RedKettle } from './Pets/RedKettle'

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene')
  }

  preload() {
    this.load.image('background', 'assets/background.jpeg')
    this.load.image('red-kettle', 'assets/red_kettle.png')
  }

  create() {
    // Set the background image
    let background = this.add.image(0, 0, 'background')
    background.setScale(this.cameras.main.width / background.width, this.cameras.main.height / background.height)
    background.setOrigin(0)

    this.add.text(20, 20, 'GameScene', { font: '25px Arial', color: 'yellow' })

    const slots = [
      this.add.rectangle(200, 200, 150, 150, 0xdcc1fe),
      this.add.rectangle(500, 200, 150, 150, 0xaf72fc),
      this.add.rectangle(800, 200, 150, 150, 0x8223fa),
    ]

    // Create the target section
    // let targetSection = this.add.rectangle(200, 200, 100, 100, 0xff0000)

    slots.forEach((slot) => {
      slot.setInteractive()
    })

    // Make the target section interactive
    // targetSection.setInteractive()

    const kettle = new RedKettle({
      scene: this,
      name: 'Red Kettle',
      image: 'red-kettle',
      cost: 100,
      attack: 10,
      defense: 10,
    })
    let square = kettle.render(500, 500)

    // let square = this.add.rectangle(100, 100, 50, 50, 0x00ff00)

    // Make the square interactive and draggable
    square.setInteractive()
    this.input.setDraggable(square)

    // Add an event listener for when the square is dragged
    this.input.on('drag', function (_: Phaser.Input.Pointer, gameObject: any, dragX: number, dragY: number) {
      gameObject.x = dragX
      gameObject.y = dragY
    })

    this.input.on('dragstart', function (_: Phaser.Input.Pointer, gameObject: any) {
      console.log('Drag started')
      gameObject.setData({ oldX: gameObject.x, oldY: gameObject.y })
    })

    // Add an event listener for when the drag ends
    this.input.on('dragend', function (_: Phaser.Input.Pointer, gameObject: any, dragX: number, dragY: number) {
      console.log('Drag ended')

      let returnToOldPosition = true
      // Check for overlap with the target section
      slots.forEach((slot) => {
        if (Phaser.Geom.Intersects.RectangleToRectangle(gameObject.getBounds(), slot.getBounds())) {
          // Trigger the effect
          gameObject.x = slot.x
          gameObject.y = slot.y
          returnToOldPosition = false
          console.log('🎉')
        }
      })
      if (returnToOldPosition) {
        console.log(gameObject)
        console.table({ oldX: gameObject.oldX, oldY: gameObject.oldY })

        gameObject.x = gameObject.getData('oldX')
        gameObject.y = gameObject.getData('oldY')
      }
    })
  }
}
