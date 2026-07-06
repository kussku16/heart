input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
})
basic.showString("Hi!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
})
