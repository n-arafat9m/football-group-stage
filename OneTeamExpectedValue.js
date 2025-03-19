/* Ditch this if you like lol
   it's 7am (at the time I'm writing this, my sleep schedule is such that I sleep this time usually)
   I was thinking about Expected Value after watching a YouTube video and thought I'd calculate it
   for a team that spends a lot of money in a group of two other teams that don't spend as much and are generally not considered tough opponents
   and one other team that does spend a lot and is considered a tough opponent
*/

const m = new Map();
let p1, p2, p3;

var fun = function(state, iteration) {
    if (iteration == 6) {
        if (!m.get(state)) {
            m.set(state, { val: 0 });
        }
        m.get(state).val++;
        return;
    }
    if (iteration < 4) {
        p1 = .85;
        p2 = .10;
        p3 = .05;
    } else if (iteration == 4){
        p1 = .40;
        p2 = .35;
        p3 = .25;
    } else {
        p1 = .25;
        p2 = .35;
        p3 = .40;
    }
    fun(state+3*p1+1*p2+0*p3, iteration+1);
}

fun(0, 0);
let s = 0, ev = 0.0;

m.forEach((v, k) => {
    console.log(`${k}: ${v.val}`);
    s += v.val;
    ev += k * v.val;
})

console.log(`Total number of combinations: ${s} which is the same as 3 to the power of 6 "On every match there are three possible outcomes W-D-L"`);
console.log(`Expected Value: ${ev}`)