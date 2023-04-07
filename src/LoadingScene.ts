import { Button } from './Button'

export class LoadingScene extends Phaser.Scene {
  startKey: Phaser.Input.Keyboard.Key | undefined

  constructor() {
    super('bootGame')
    this.startKey = undefined
  }

  preload() {
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
  }

  create() {
    this.add.text(20, 20, 'Press S to Start', { font: '25px Arial', color: 'yellow' })
    new Button(600, 300, 'Start Game', this, () => this.scene.start('GameScene'))
  }

  update() {
    this.scene.start('GameScene')
    if (this.startKey?.isDown) {
      this.scene.start('GameScene')
    }
  }
}
