# group-stage-point-distribution

Collection of scripts to generate the different combinations of points that a group of four teams can end up with at the end of the group stage (think European Football UCL pre 2025 group stage format, or FIFA World Cup group stage format)

I was inspired to write those scripts by an incident that occured in the Football Europa Cup Group Stage (Group F - Season 2022/2023) where all four teams finished with the same number of points, which I found interesting. Well, interesting enough to get me questioning things like in how many different ways can this result end up happening?

Currently there are two scripts, both written in Javascript. A brief explanation of each can be found below:

# OneTeam.js:

Used to generate the points with which a certain team can finish the group stage with, and calculate the number of ways each one of those finish-points can be accumulated by the team through Wins, Draws and Losses.

Can be run with _code_ node ./OneTeam.js numerical argument _code_, where the argument represents the number of points of choice you'd like to see in detail the different combinations of Wins, Draws and Losses that yield this possibility.

# AllFourTeams.js:

Used to generate the different combinations of points that a whole group can finish the group stage with, and calculate the number of ways each one of those possibilities can end up happening.
