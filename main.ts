DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (input.lightLevel() > 100) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, input.lightLevel())
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 120)
    }
})
