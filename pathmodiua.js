const path = require('path')
const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname(__filename);
console.log(a2 ,a1 ,a3 , __filename);