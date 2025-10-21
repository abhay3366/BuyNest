const DatauriParser = require('datauri/parser');
const  path=require('path');

const getDataUrl=(file) => {
    const parser = new DatauriParser();
    const extension=path.extname(file.originalname).toString();
    return parser.format(extension,file.buffer);
}
module.exports=getDataUrl