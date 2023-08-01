// المان‌ها
const contentEl = document.querySelector('.content');
const sidebarEl = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-toggle');
const logoEl = document.querySelector('.brand');

/**
 * سایدبار رو در اسکرین سایز زیر ۱۲۰۰ می‌بنده
 * @returns {void}
 */
function handleSidebar() {
    if (window.innerWidth <= 1200) {
        sidebarEl.classList.add('close');
        contentEl.style.width = '100%';
        sidebarBtn.style.display = 'none';
    } else {
        sidebarEl.classList.remove('close');
        contentEl.style.width = '88%';
        sidebarBtn.style.display = 'block';
    }
}

/**
 * سایدبار در زمان لود شدن صفحه طبق عرض صفحه لود میشه
 * @returns {void}
 */
function sidebarOnLoad() {
    if (window.innerWidth <= 1200) {
        sidebarEl.classList.add('close');
        contentEl.style.width = '100%';
        sidebarBtn.style.display = 'none';
    }
}

/**
 * دکمه باز و بسته کردن سایدبار
 * @returns {void}
 */
function sidebarToggle() {
    sidebarEl.classList.toggle('close');
    contentEl.style.width = '100%';
}

/**
 * تابع شروع و اجرای توابع
 * @returns {void}
*/
function init() {
    window.addEventListener('resize', handleSidebar);
    window.addEventListener('load', sidebarOnLoad);
    sidebarBtn.addEventListener('click', sidebarToggle);
}

init();