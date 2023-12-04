// TODO: Calculate room's volume (size)
// NOTE: Everything is rectangular
//
//
export class Room {
    x: number
    y: number
    z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    getVolume(): number {
        const volume = this.x * this.y * this.z
        return volume
    }

}
