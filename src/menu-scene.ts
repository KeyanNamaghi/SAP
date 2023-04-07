import 'phaser'
import particleUrl from '../assets/particle.png'
import gaspUrl from '../assets/gasp.mp3'

export const menuSceneKey = 'MenuScene'

export function menu(): Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig {
  let startKey: Phaser.Input.Keyboard.Key

  return {
    key: menuSceneKey,
    preload() {
      startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
      startKey.isDown = false
      this.load.image('particle', particleUrl)
      this.load.audio('gasp', gaspUrl)
    },
    create() {
      this.add.text(0, 0, 'Press S to restart scene', {
        fontSize: '60px',
        fontFamily: 'Helvetica',
      })

      // Add a button to the bottom right of the screen that will toggle fullscreen
      const button = this.add.circle(100, 100, 100, 100, 0xffffff)

      button.setInteractive()
      button.on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          // button.setTint(0xffffff)
          this.scale.stopFullscreen()
        } else {
          // button.setTint(0xff0000)
          this.scale.startFullscreen()
        }
      })
    },
    update() {
      if (startKey.isDown) {
        this.sound.play('gasp')
        this.scene.start(menuSceneKey)
      }
    },
  }
}
