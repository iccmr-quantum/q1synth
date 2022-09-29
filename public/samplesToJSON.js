const dirTree = require("directory-tree");
const fs = require('fs');
const tree = dirTree("./public/samples");

function compile(array) {
    return array.map(({path, name, children}) => {
        if (children) {
            return compile(children);
        } else {
            const [_, ext] = name.split(".");
            return ['wav', 'aif', 'mp3'].includes(ext) 
                ? path.slice(6) // chop off 'public'
                : false;
        }
    }).filter(path => path)
}

const samples = JSON.stringify(compile(tree.children).flat(128));

fs.writeFile('./public/samples/samples.json', samples, 'utf8', (err) => {
    err
        ? console.log(`Error writing file: ${err}`)
        : console.log(`File is written successfully!`);
});