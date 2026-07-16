// static/lucide-icons.src.js
import { createIcons, icons } from 'lucide';

function initIcons() {
	createIcons({ icons });
}

window.initLucideIcons = initIcons;

document.addEventListener('DOMContentLoaded', initIcons);