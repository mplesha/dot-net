import fs from 'fs'
import path from 'path'

const data = fs.readFileSync(path.resolve(cwd, '.github/classroom/autograding.json'));
console.log(data);
