input.onButtonPressed(Button.A, function () {
    Letter_Index += -1
    if (Letter_Index == -1) {
        Letter_Index = 25
    }
    basic.showString("" + (Letters[Letter_Index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString(Message)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showString("" + (Letters[Letter_Index]))
})
input.onButtonPressed(Button.AB, function () {
    Message = "" + Message + Letters[Letter_Index]
    basic.showIcon(IconNames.Yes)
    basic.showString("" + (Letters[Letter_Index]))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showString("" + (Letters[Letter_Index]))
})
input.onButtonPressed(Button.B, function () {
    Letter_Index += 1
    if (Letter_Index == 26) {
        Letter_Index = 0
    }
    basic.showString("" + (Letters[Letter_Index]))
})
input.onGesture(Gesture.Shake, function () {
    Message = ""
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showString("" + (Letters[Letter_Index]))
})
let Letters: string[] = []
let Letter_Index = 0
let Message = ""
basic.showString("MicroChat")
radio.setGroup(125)
Message = ""
Letter_Index = 0
Letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.showString("" + (Letters[Letter_Index]))
