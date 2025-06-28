let myName = "tanishq       "; // this is a string literal
let myName2 = "Gupta    " // this is a string object
// console.log(myName.length); // tanishq

let myHeros = ["thor", "ironman", "spiderman"]; // this is an array literal
let heroPower ={
    thor: "thunder",
    ironman: "suit",
    spiderman: function()
    {
        console.log(`Spiderman is swinging${this.thor}`);
    }


}

Object.prototype.tanishq = function ()
{
    console.log("this is tanishq");
}

// heroPower.tanishq() // directly accessing the top level prototype method


