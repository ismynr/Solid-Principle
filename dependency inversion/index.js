const Car = require("./Car");
const DieselEngine = require("./DieselEngine");
const HybridEngine = require("./HybridEngine");
const PetrolEngine = require("./PetrolEngine");

const fuelCar = new Car(new PetrolEngine());
fuelCar.start();

const dieselCar = new Car(new DieselEngine());
dieselCar.start();

const hybridCar = new Car(new HybridEngine());
hybridCar.start();

/**
 * ketergantungan atau dependencies pada source hanya mengacu pada abstractions bukan class concret
 * high level tidak bekerja secara langsung dengan low level class tetapi menggunakan interface sebagai lapisan abstraksi
 * 
 */