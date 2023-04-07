interface PetInterface {
  scene: Phaser.Scene
  name: string
  image: string
  cost: number
  attack: number
  defense: number
}

export class Pet {
  private _scene: Phaser.Scene
  private _name: string
  private _image: string
  private _cost: number
  private _attack: number
  private _defense: number

  constructor(config: PetInterface) {
    this._scene = config.scene
    this._name = config.name || 'Pet'
    this._image = config.image || ''
    this._cost = config.cost || 0
    this._attack = config.attack || 0
    this._defense = config.defense || 0
  }

  render(x: number, y: number) {
    console.log('Render pet')
    const image = this._scene.add.image(x ?? 0, y ?? 0, this._image)
    image.scale = 0.4

    return image
  }

  get name(): string {
    return this._name
  }

  get image(): string {
    return this._image
  }

  get cost(): number {
    return this._cost
  }

  get attack(): number {
    return this._attack
  }

  get defense(): number {
    return this._defense
  }
}
