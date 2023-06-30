// Key is the total number of points accumalated by a team, value is the number of ways this many points can be accumalated
const m = new Map();

// W = Win, D = Draw, L = Lose
// on every new matchday, the team can either increase by 3 (W), or by 1 (D), or retain the same number of points it had before the match (L)
const W = 3, D = 1, L = 0;

// A team can only accumalate a number of points between 0 and 18 by the end of the group stage
for (let i = 0; i <= 18; ++i) {
    m.set(i, {val: 0});
}


var fun = function(points, matchday) {
    // there are six matchdays
    if (matchday == 6) {
        m.get(points).val++;
        return;
    }

    // matchday possibilities
    fun(points+W, matchday+1);
    fun(points+D, matchday+1);
    fun(points+L, matchday+1);
}

// Kick off Group Stage with the team having zero points before matchday #1
fun(0, 0);

// Sum up the number of all the possibilities of the results of a single team by the end of the group stage
let s = 0;

// Show the number of possible ways a number of points can be accumalated
m.forEach((v, k) => {
    console.log(`${k}: ${v.val}`);
    s += v.val;
})

console.log(`Total number of combinations: ${s} which is the same as 3 to the power of 6 "On every match there are three possible outcomes W-D-L"`);