const m = new Map();
const W = 3, L = 0, D = 1;

var fun = function(team1, team2, team3, team4, matchday) {
    if (matchday == 6) {
        state = `${team1},${team2},${team3},${team4}`
        if(!m.get(state)) {
            m.set(state, {val: 0});
        }
        m.get(state).val++;
        return;
    }
    switch (matchday) {
        case 0:
        case 5:
            // Team1 plays Team2 and Team3 plays Team4
            fun(team1+W, team2+L, team3+W, team4+L, matchday+1);
            fun(team1+W, team2+L, team3+D, team4+D, matchday+1);
            fun(team1+W, team2+L, team3+L, team4+W, matchday+1);
            fun(team1+D, team2+D, team3+W, team4+L, matchday+1);
            fun(team1+D, team2+D, team3+D, team4+D, matchday+1);
            fun(team1+D, team2+D, team3+L, team4+W, matchday+1);
            fun(team1+L, team2+W, team3+W, team4+L, matchday+1);
            fun(team1+L, team2+W, team3+D, team4+D, matchday+1);
            fun(team1+L, team2+W, team3+L, team4+W, matchday+1);
            break;
        case 1:
        case 4:
            // Team1 plays Team3 and Team2 plays Team4
            fun(team1+W, team2+W, team3+L, team4+L, matchday+1);
            fun(team1+W, team2+D, team3+L, team4+D, matchday+1);
            fun(team1+W, team2+L, team3+L, team4+W, matchday+1);
            fun(team1+D, team2+W, team3+D, team4+L, matchday+1);
            fun(team1+D, team2+D, team3+D, team4+D, matchday+1);
            fun(team1+D, team2+L, team3+D, team4+W, matchday+1);
            fun(team1+L, team2+W, team3+W, team4+L, matchday+1);
            fun(team1+L, team2+D, team3+W, team4+D, matchday+1);
            fun(team1+L, team2+L, team3+W, team4+W, matchday+1);
            break;
        case 2:
        case 3:
            // Team1 plays Team4 and Team2 plays Team3
            fun(team1+W, team2+W, team3+L, team4+L, matchday+1);
            fun(team1+W, team2+D, team3+D, team4+L, matchday+1);
            fun(team1+W, team2+L, team3+W, team4+L, matchday+1);
            fun(team1+D, team2+W, team3+L, team4+D, matchday+1);
            fun(team1+D, team2+D, team3+D, team4+D, matchday+1);
            fun(team1+D, team2+L, team3+W, team4+D, matchday+1);
            fun(team1+L, team2+W, team3+L, team4+W, matchday+1);
            fun(team1+L, team2+D, team3+D, team4+W, matchday+1);
            fun(team1+L, team2+L, team3+W, team4+W, matchday+1);
            break;
    }
}

// Kick off the Group Stage with all teams having zero points before matchday1
fun(0, 0, 0, 0, 0);

let s = 0;

console.log('The number of possibilities for each point distribution:')

m.forEach((v, k) => {
    console.log(`${k}: ${v.val}`);
    s += v.val;
})

console.log(`The total number of possibilities is ${s}, which is exactly nine to the sixth (there are nine different possibilities on each matchday)`)

console.log(`There is ${m.get('8,8,8,8').val} ways every team can end up with eight points by the end of the stage`)