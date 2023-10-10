function Hoch_Runter2 () {
    sprite_2.change(LedSpriteProperty.Y, sprite_2_y_änderung)
    basic.pause(10)
    if (sprite_2.get(LedSpriteProperty.Y) == 0) {
        sprite_2_y_änderung = 1
    }
    if (sprite_2.get(LedSpriteProperty.Y) == 4) {
        sprite_2_y_änderung = -1
    }
}
function Hoch_Runter5 () {
    sprite_5.change(LedSpriteProperty.Y, sprite_5_y_änderung)
    basic.pause(10)
    if (sprite_5.get(LedSpriteProperty.Y) == 0) {
        sprite_5_y_änderung = 1
    }
    if (sprite_5.get(LedSpriteProperty.Y) == 4) {
        sprite_5_y_änderung = -1
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sprite_1.delete()
    sprite_2.delete()
    sprite_3.delete()
    sprite_4.delete()
    sprite_5.delete()
    Reset()
})
function Reset () {
    sprite_1 = game.createSprite(0, 4)
    sprite_2 = game.createSprite(1, 3)
    sprite_3 = game.createSprite(2, 2)
    sprite_4 = game.createSprite(3, 1)
    sprite_5 = game.createSprite(4, 0)
    sprite_1_y_änderung = -1
    sprite_2_y_änderung = -1
    sprite_3_y_änderung = -1
    sprite_4_y_änderung = -1
    sprite_5_y_änderung = 1
}
function Hoch_Runter3 () {
    sprite_3.change(LedSpriteProperty.Y, sprite_3_y_änderung)
    basic.pause(10)
    if (sprite_3.get(LedSpriteProperty.Y) == 0) {
        sprite_3_y_änderung = 1
    }
    if (sprite_3.get(LedSpriteProperty.Y) == 4) {
        sprite_3_y_änderung = -1
    }
}
function Hoch_Runter4 () {
    sprite_4.change(LedSpriteProperty.Y, sprite_4_y_änderung)
    basic.pause(10)
    if (sprite_4.get(LedSpriteProperty.Y) == 0) {
        sprite_4_y_änderung = 1
    }
    if (sprite_4.get(LedSpriteProperty.Y) == 4) {
        sprite_4_y_änderung = -1
    }
}
function Hoch_Runter () {
    sprite_1.change(LedSpriteProperty.Y, sprite_1_y_änderung)
    basic.pause(10)
    if (sprite_1.get(LedSpriteProperty.Y) == 0) {
        sprite_1_y_änderung = 1
    }
    if (sprite_1.get(LedSpriteProperty.Y) == 4) {
        sprite_1_y_änderung = -1
    }
}
let sprite_4_y_änderung = 0
let sprite_3_y_änderung = 0
let sprite_1_y_änderung = 0
let sprite_4: game.LedSprite = null
let sprite_3: game.LedSprite = null
let sprite_1: game.LedSprite = null
let sprite_5_y_änderung = 0
let sprite_5: game.LedSprite = null
let sprite_2_y_änderung = 0
let sprite_2: game.LedSprite = null
Reset()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Hoch_Runter()
        Hoch_Runter2()
        Hoch_Runter3()
        Hoch_Runter4()
        Hoch_Runter5()
    }
})
