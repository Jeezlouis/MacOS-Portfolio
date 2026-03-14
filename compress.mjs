import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public', 'images');

const filesToConvert = [
    'wallpaper-8.png',
    'wallpapper-dark.png',
    'portfolio-image-white.png',
    'portfolio-image.png',
    'isreal-profile.jpg'
];

async function convert() {
    for (const file of filesToConvert) {
        const inputPath = path.join(publicDir, file);
        if (!fs.existsSync(inputPath)) {
            console.log(`Skipping ${file}, not found.`);
            continue;
        }
        
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const outputPath = path.join(publicDir, `${name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
            
        console.log(`Successfully converted ${file} to WebP.`);
    }
}

convert().catch(err => {
    console.error(err);
    process.exit(1);
});
