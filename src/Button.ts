export class Button {
  constructor(x: number, y: number, label: string, scene: Phaser.Scene, callback: () => void) {
    const button = scene.add
      .text(x, y, label)
      .setOrigin(0.5)
      .setPadding(16)
      .setStyle({ backgroundColor: '#008844' })
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => callback())
      .on('pointerover', () => button.setStyle({ backgroundColor: '#1F5321' }))
      .on('pointerout', () => button.setStyle({ backgroundColor: '#008844' }))

    // const text = scene.add.graphics({ x, y }).fillStyle(0x008844, 1).fillRoundedRect(32, 32, 100, 50)
  }
}
