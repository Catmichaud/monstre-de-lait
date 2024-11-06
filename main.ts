let angle = 0
// TODO: utiliser l'angle atteint lors de l'étalonnage !
let opened = 95
// TODO: use the angle found at calibration!
let closed = 175
basic.forever(function () {
    led.plotBarGraph(
        input.lightLevel(),
        0
    )
    angle = pins.map(
        input.lightLevel(),
        0,
        255,
        opened,
        closed
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
