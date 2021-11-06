class SpeedController {
    constructor(batteryMS, electricMotor) { 
        this._batteryMS = batteryMS;
        this._electricMotor = electricMotor;
    }

    control() {
        const battery = this._batteryMS.getBattery();
        this._electricMotor.rotate(battery);
    }
}

module.exports = SpeedController;