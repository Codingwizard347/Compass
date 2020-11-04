input.calibrateCompass()
basic.forever(function () {
    if (340 < input.compassHeading()) {
        basic.showArrow(ArrowNames.North)
    }
    if (20 < input.compassHeading() && 70 > input.compassHeading()) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (70 < input.compassHeading() && 110 > input.compassHeading()) {
        basic.showArrow(ArrowNames.East)
    }
    if (110 < input.compassHeading() && 160 > input.compassHeading()) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (160 < input.compassHeading() && 200 > input.compassHeading()) {
        basic.showArrow(ArrowNames.South)
    }
    if (200 < input.compassHeading() && 250 > input.compassHeading()) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (250 < input.compassHeading() && 300 > input.compassHeading()) {
        basic.showArrow(ArrowNames.West)
    }
    if (300 < input.compassHeading() && 340 > input.compassHeading()) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
