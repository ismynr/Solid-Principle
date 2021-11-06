const Car = require("./Car");
const SpeedController = require("./Engine/Electric/SpeedController");
const BatteryManagementSystem = require("./Engine/Electric/SpeedController/BatteryManagementSystem");
const ElectricMotor = require("./Engine/Electric/SpeedController/ElectricMotor");
const ElectricEngine = require("./Engine/ElectricEngine");
const Oilpipe = require("./Engine/Petrol/Oilpipe");
const Piston = require("./Engine/Petrol/Piston");
const PetrolEngine = require("./Engine/PetrolEngine");
const Battery = require("./Storage/Battery");
const Electrons = require("./Storage/Battery/Electrons");
const Tank = require("./Storage/Tank");
const Oil = require("./Storage/Tank/Oil");


/**
 * Petrol Car
 * 
 */
const tank = new Tank();
const oilPipe = new Oilpipe();
const piston = new Piston();
const petrolEngine = new PetrolEngine(oilPipe, piston);
const petrolCar = new Car(petrolEngine, tank);
const oil = new Oil();

petrolCar.refill(oil);
petrolCar.accelerate();
petrolCar.brake();

/**
 * Electric Car
 * 
 */
const electrons = new Electrons();
const battery = new Battery(electrons);
const speedControler = new SpeedController(new BatteryManagementSystem(), new ElectricMotor());
const electricEngine = new ElectricEngine(speedControler);
const electricCar = new Car(electricEngine, battery);

electricCar.refill(electrons);
electricCar.accelerate();
electricCar.brake();