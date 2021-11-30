input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("* PAUSE *")
    soundExpression.yawn.play()
    for (let MicroBitNr = 0; MicroBitNr <= 12; MicroBitNr++) {
        basic.showNumber(MicroBitNr)
        radio.setGroup(MicroBitNr)
        radio.sendString("PAUSE")
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(MicroBitNr)
    radio.sendNumber(MicroBitNr)
    music.playMelody("- - A A - - - - ", 321)
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (MicroBitNr < 12) {
        MicroBitNr += 1
        basic.showNumber(MicroBitNr)
        radio.setGroup(MicroBitNr)
        music.playMelody("G G A B - - - - ", 303)
    } else {
        MicroBitNr = 1
        radio.setGroup(MicroBitNr)
        basic.showNumber(MicroBitNr)
        music.playMelody("C5 C5 B B A A G G ", 303)
    }
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MicroBitNr)
    basic.pause(2000)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let MicroBitNr = 0
MicroBitNr = 0
basic.showNumber(MicroBitNr)
basic.pause(5000)
