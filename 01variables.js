const accountId = 144553
let accountEmail ="shreyagooglle.com"
var accountPassword="1234"
accountCity="jaipur"
let accountstate;

/* note:
 prefer not to use var
 because of issue in block scope and functional scope*/

accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])