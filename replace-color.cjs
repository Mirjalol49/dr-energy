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
    
    // Replace main accent color
    if (content.includes('hsl(175, 84%, 32%)')) {
        content = content.replace(/hsl\(175, 84%, 32%\)/g, 'hsl(212, 60%, 50%)');
        updated = true;
    }
    
    // Replace hover accent color
    if (content.includes('hsl(175, 77%, 26%)')) {
        content = content.replace(/hsl\(175, 77%, 26%\)/g, 'hsl(212, 60%, 40%)');
        updated = true;
    }
    
    // Update any text that says "Premium Medical Teal" to "Soft Medical Blue"
    if (content.includes('Premium Medical Teal')) {
        content = content.replace(/Premium Medical Teal/g, 'Soft Medical Blue');
        updated = true;
    }
    
    if (updated) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', file);
        updatedCount++;
    }
});

console.log('Total files updated:', updatedCount);
