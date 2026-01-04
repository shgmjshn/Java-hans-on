const fs = require('fs');
const path = require('path');

const srcDir = 'docs';
const destDir = 'docs_pdf';

if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir);

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    let content = fs.readFileSync(srcPath, 'utf8');

    // 絵文字の置換
    content = content.replace(/🎯/g, '');
    content = content.replace(/👉/g, '->');
    content = content.replace(/❌/g, '[NG]');
    content = content.replace(/✅/g, '[OK]');
    
    // 太字指定(**)の削除（エラー回避のため）
    // **text** -> text
    content = content.replace(/\*\*(.*?)\*\*/g, '$1');

    fs.writeFileSync(destPath, content, 'utf8');
    console.log(`Processed: ${file}`);
});
