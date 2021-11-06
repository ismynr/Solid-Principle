const Smartphone = require("./Smartphone");
const Vegetable = require("./Vegetable");

const vegetable = new Vegetable();
console.log(vegetable.getName());

const smartphone = new Smartphone();
console.log(smartphone.getName());

/**
 * child harus bisa melakukan apa yang harus parent lakukan, dengan aturan:
 * 
 * - contravariant & covariant
 *   contravariant => parameter fungsi subclass harus memiliki tipe dan jml yg sama dg supperclass
 *   covariant => kondisi return dari nilai & fungsi yang berada pada subclass dan superclass
 * 
 * - precondition & postcondition
 *   precondition => tindakan yg harus ada sebelum proses dijalankan (memastikan suatu proses)
 *   postcondition => tindakan yg harus ada setelah proses dilakukan
 * 
 * - invariant
 *   penjelasan dari kondisi suatu proses yang benar sebelum proses itu dimulai dan tetap benar setelahnya
 * 
 * - constraint
 *   pembatasan yang ditentukan superclass pada perubahan keadaan sebuah object
 */