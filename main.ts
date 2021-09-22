let index3 = 0
let index2 = 0
let index1 = 0
let c = 0
let a = 0
let proporcionalidad3 = 0
let proporcionalidad2 = 0
let b = 0
let proporcionalidad1 = 0
let conductividad = 0
let distancia = 0
let humedad = 0
basic.forever(function () {
    conductividad = randint(0, 1023)
    distancia = randint(0, 1023)
    humedad = randint(0, 1023)
    proporcionalidad1 = pins.map(
    conductividad,
    0,
    1023,
    0,
    4
    )
    proporcionalidad2 = pins.map(
    distancia,
    0,
    1023,
    0,
    4
    )
    proporcionalidad3 = pins.map(
    humedad,
    0,
    1023,
    0,
    4
    )
    a = Math.round(proporcionalidad1)
    b = Math.round(proporcionalidad2)
    c = Math.round(proporcionalidad3)
    index1 = Math.abs(a - 4)
    index2 = Math.abs(b - 4)
    index3 = Math.abs(c - 4)
    while (index1 <= 4) {
        led.plot(0, index1)
        index1 += 1
    }
    while (index2 <= 4) {
        led.plot(2, index2)
        index2 += 1
    }
    while (index3 <= 4) {
        led.plot(4, index3)
        index3 += 1
    }
    basic.pause(1000)
    basic.clearScreen()
})
