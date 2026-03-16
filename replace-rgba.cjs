const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(fullPath));
        } else { 
            if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src');
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let updated = false;
    
    if (content.includes('13, 148, 136')) {
        content = content.replace(/13, 148, 136/g, '51, 153, 255');
        updated = true;
    }
    
    if (updated) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', file);
        updatedCount++;
    }
});

console.log('Total files updated:', updatedCount);
