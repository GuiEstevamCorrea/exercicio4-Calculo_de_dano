const forward = prompt("Whats the name of forward character?");
const powerForward = prompt("Whats your forward power?");

const defensor = prompt("Whats the name of defensor character?");
let lifePointsDefensor = prompt("How many points of life your defender has?");
const powerDefensor = prompt("Whats your defensor power?");
const haveShield = prompt("Your defensor character have shield? (Yes/Not)");

let damageCaused = 0;

if (powerForward > powerDefensor && haveShield === "Not") {
  damageCaused = powerForward - powerDefensor;
} else if (powerForward > powerDefensor && haveShield === "Yes") {
  damageCaused = (powerForward - powerDefensor) / 2;
}

lifePointsDefensor -= damageCaused;

alert(forward + " caused " + damageCaused + " life points on " + defensor);
alert(
  forward +
    "\nPower of Attacking: " +
    powerForward +
    "\n\n" +
    defensor +
    "\nLife of Defensor: " +
    lifePointsDefensor +
    "\nDefense Power: " +
    powerDefensor +
    "\nHave shield: " +
    haveShield
);
