import 'phaser'
import { GameScene } from './GameScene'
import { LoadingScene } from './LoadingScene'
import './style.css'

const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  parent: 'app',
  scene: [LoadingScene, GameScene] as any,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
}

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

window.addEventListener('load', () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  ;(window as any)._game = new Game(GameConfig)
})
