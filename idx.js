const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.resolve(cwd, '.github/classroom/autograding.json'));
console.log(data);
