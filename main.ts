input.onButtonPressed(Button.A, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.CYAN)
        basic.pause(100)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
        basic.pause(100)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()
