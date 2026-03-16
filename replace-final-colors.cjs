const fs = require('fs');
const path = require('path');

// Bright logo color (for dark backgrounds)
const BRIGHT_LIME = '#cdfc4e'; 
const BRIGHT_LIME_HOVER = '#bcf129'; // Slightly darker for hover
const BRIGHT_SHADOW = 'rgba(205, 252, 78, 0.3)';
const BRIGHT_SHADOW_HOVER = 'rgba(205, 252, 78, 0.5)';

// Dark logo color equivalent (for light backgrounds)
const DARK_LIME = '#4d7c0f'; // Tailwind lime-700
const DARK_LIME_HOVER = '#3f6212'; // Tailwind lime-800
const DARK_SHADOW = 'rgba(77, 124, 15, 0.3)';

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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    const isDarkBgContext = file.includes('Header') || file.includes('Footer') || file.includes('Hero');
    const isLightBgContext = !isDarkBgContext;

    // Apply color replacements
    // 1. Replace temporary blue (hsl(212, 60%, 50%))
    if (isDarkBgContext) {
        content = content.replace(/hsl\(212, 60%, 50%\)/g, BRIGHT_LIME);
        content = content.replace(/hsl\(212, 60%, 40%\)/g, BRIGHT_LIME_HOVER);
    } else {
        content = content.replace(/hsl\(212, 60%, 50%\)/g, DARK_LIME);
        content = content.replace(/hsl\(212, 60%, 40%\)/g, DARK_LIME_HOVER);
    }

    // 2. Replace old teal (hsl(175, 84%, 32%) or #0d9488)
    if (isDarkBgContext) {
        content = content.replace(/hsl\(175, 84%, 32%\)/g, BRIGHT_LIME);
        content = content.replace(/#0d9488/g, BRIGHT_LIME);
        content = content.replace(/#0f766e/g, BRIGHT_LIME_HOVER); // Hover for teal
    } else {
        content = content.replace(/hsl\(175, 84%, 32%\)/g, DARK_LIME);
        content = content.replace(/#0d9488/g, DARK_LIME);
        content = content.replace(/#0f766e/g, DARK_LIME_HOVER);
    }

    // 3. Replace old teal rgba shadows that are now blue
    if (isDarkBgContext) {
        content = content.replace(/rgba\(51, 153, 255/g, 'rgba(205, 252, 78');
        content = content.replace(/rgba\(13, 148, 136/g, 'rgba(205, 252, 78');
    } else {
        content = content.replace(/rgba\(51, 153, 255/g, 'rgba(77, 124, 15');
        content = content.replace(/rgba\(13, 148, 136/g, 'rgba(77, 124, 15');
    }

    // Specific Fixes for Hero Button Contrast
    if (file.includes('Hero.jsx')) {
        // Since the button is now bright lime, text MUST be dark slate
        content = content.replace(/bg-\[#cdfc4e\] hover:bg-\[#bcf129\] text-white/g, 'bg-[#cdfc4e] hover:bg-[#bcf129] text-slate-900');
        // Fix the arrow color inside the button
        content = content.replace(/text-white" \/>/g, 'text-slate-900" \/>');
    }

    // Ensure header text contrast is inverted correctly
    if (file.includes('Header.css')) {
        // the text of the button is #cdfc4e? No, it used to be hsl(198, 67%, 13%) and background was the accent color. That is still correct contrast!
        // But for hover, it used to set color to the accent and background to transparent. That's fine since header background is dark!
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated colors in:', file);
    }
});
