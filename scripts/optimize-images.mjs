/**
 * Script para otimizar imagens do site C&C Vida e Negócio
 * 
 * Para executar:
 * 1. Instale as dependências: pnpm add -D sharp
 * 2. Execute: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'client', 'public', 'assets');

const imagesToOptimize = [
    { name: 'familia-cleber.png', maxWidth: 800, quality: 80 },
    { name: 'logo-no-bg.png', maxWidth: 200, quality: 90 },
    { name: 'logo.jpg', maxWidth: 400, quality: 85 },
];

async function optimizeImages() {
    console.log('🖼️  Otimizando imagens...\n');

    for (const img of imagesToOptimize) {
        const inputPath = path.join(assetsDir, img.name);
        const baseName = img.name.replace(/\.[^.]+$/, '');
        const webpPath = path.join(assetsDir, `${baseName}.webp`);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Arquivo não encontrado: ${img.name}`);
            continue;
        }

        const originalSize = fs.statSync(inputPath).size;

        try {
            // Criar versão WebP otimizada
            await sharp(inputPath)
                .resize(img.maxWidth, null, { withoutEnlargement: true })
                .webp({ quality: img.quality })
                .toFile(webpPath);

            const webpSize = fs.statSync(webpPath).size;
            const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

            console.log(`✅ ${img.name}`);
            console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`   WebP: ${(webpSize / 1024).toFixed(0)} KB (${savings}% menor)`);
            console.log('');
        } catch (error) {
            console.error(`❌ Erro ao otimizar ${img.name}:`, error.message);
        }
    }

    console.log('✨ Otimização concluída!');
    console.log('\n📝 Atualize o código para usar as versões .webp das imagens.');
}

optimizeImages();
