const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const data = fs.readFileSync(path.resolve('.github/classroom/autograding.json'));
const json = JSON.parse(data.toString());

spawn('dotnet test -t >> prt.txt', {shell: true});
spawn('echo ###### >> prt.txt', {shell: true});
