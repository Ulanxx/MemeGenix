import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';

async function generateBanner() {
  // 创建画布 (1200x300 像素)
  const canvas = createCanvas(1200, 300);
  const ctx = canvas.getContext('2d');

  // 设置背景
  ctx.fillStyle = '#0a0a0a'; // cyber-dark
  ctx.fillRect(0, 0, 1200, 300);

  // 添加网格背景
  ctx.strokeStyle = '#7B61FF10'; // cyber-primary with low opacity
  ctx.lineWidth = 1;

  // 绘制网格
  for (let x = 0; x < 1200; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 300);
    ctx.stroke();
  }
  for (let y = 0; y < 300; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
  }

  // 添加渐变光效
  const gradient = ctx.createRadialGradient(600, 150, 0, 600, 150, 600);
  gradient.addColorStop(0, '#7B61FF15'); // cyber-primary
  gradient.addColorStop(0.5, '#FF61DC10'); // cyber-secondary
  gradient.addColorStop(1, 'transparent');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 300);

  // 添加标题
  ctx.font = '48px "Press Start 2P"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // 添加文字发光效果
  ctx.shadowColor = '#7B61FF';
  ctx.shadowBlur = 20;
  ctx.fillStyle = '#E0E0E0'; // cyber-text
  ctx.fillText('MemeForge', 600, 150);

  // 添加副标题
  ctx.font = '24px VT323';
  ctx.shadowBlur = 10;
  ctx.fillStyle = '#61FFEA'; // cyber-accent
  ctx.fillText('AI-Powered Meme Token Creation Platform', 600, 200);

  // 保存图片
  const buffer = canvas.toBuffer('image/png');
  writeFileSync('./public/banner.png', buffer);
}

generateBanner();
