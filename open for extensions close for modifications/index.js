const CoupleCinema = require("./CoupleCinema");
const DeluxeCinema = require("./DeluxeCinema");
const PremiumCinema = require("./PremiumCinema");
const StandartCinema = require("./StandartCinema");

const standartCinema = new StandartCinema(4);
console.log(standartCinema.calculateAdminFee());

const deluxeCinema = new DeluxeCinema(4);
console.log(deluxeCinema.calculateAdminFee());

const premiumCinema = new PremiumCinema(4);
console.log(premiumCinema.calculateAdminFee());

const coupleCinema = new CoupleCinema(4);
console.log(coupleCinema.calculateAdminFee());