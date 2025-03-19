// Key is the total number of points accumalated by a team, value is the number of ways this many points can be accumalated
const m = new Map();

// W = Win, D = Draw, L = Lose
// on every new matchday, the team can either increase by 3 (W), or by 1 (D), or retain the same number of points it had before the match (L)
const W = 3, D = 1, L = 0;

// A team can only accumalate a number of points between 0 and 18 by the end of the group stage (there's a total of six matches)
for (let i = 0; i <= 18; ++i) {
    m.set(i, {val: 0});
}

// the currentCombination argument has been added on March 19 - 2025
var fun = function(points, matchday, currentCombination) {
    // there are six matchdays
    if (matchday == 6) {
        m.get(points).val++;
        // The if condition below has been added on March 19 - 2025
        // the purpose is to see the actual combinations that can produce a certain number of finish-points
        // Pass the number of finish points you desire to see in detail the ways it can be achieved through an argument when executing the script
        // The process.argv[2] argument represents the number of finish-points desired
        if (points == process.argv[2]) {
            console.log(currentCombination);
        }
        return;
    }

    // matchday possibilities
    fun(points+W, matchday+1, currentCombination+"W");
    fun(points+D, matchday+1, currentCombination+"D");
    fun(points+L, matchday+1, currentCombination+"L");
}

// Kick off Group Stage with the team having zero points before matchday #1
fun(0, 0, "");

// Sum up the number of all the possibilities of the results of a single team by the end of the group stage
let s = 0;

// Show the number of possible ways a number of points can be accumalated
m.forEach((v, k) => {
    console.log(`${k}: ${v.val}`);
    s += v.val;
})

console.log(`Total number of combinations: ${s} which is the same as 3 to the power of 6 "On every match there are three possible outcomes W-D-L"`);