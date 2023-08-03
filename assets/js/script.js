// داده‌های اولیه
const admins = [
    {
        fullName: 'ماهان عادلی',
        userName: '#123456',
        role: 'مدیر سایت',
        photo: 'profile.jpg'
    },

    {
        fullName: 'ماهان عادلی 2',
        userName: '#123456',
        role: 'مدیر سایت',
        photo: 'profile.jpg'
    },

    {
        fullName: 'ماهان عادلی 3',
        userName: '#123456',
        role: 'مدیر سایت',
        photo: 'profile.jpg'
    }
];

// المان‌ها
const contentEl = document.querySelector('.content');
const sidebarEl = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-toggle');
const logoEl = document.querySelector('.brand');
const adminsTable = document.querySelector('.admins-table-body');
const addBtn = document.querySelector('.add-admin-btn');
const adminForm = document.querySelector('.admin-form');

const adminName = document.getElementById('admin-name');
const adminUserName = document.getElementById('admin-username');
const adminRole = document.getElementById('admin-role');

// توابع

/**
 * اضافه کردن ادمین به آرایه ادمین‌ها 
 * @returns {void}
 */
function addAdmin() {
    // یک آبجکت از ورودی‌های وارد شده میسازه
    const newAdmin = {
        fullName: adminName.value,
        userName: adminUserName.value,
        role: adminRole.value, 
    };
    
    // آبجکت رو وارد آرایه میکنه
    admins.push(newAdmin);
}

/**
 * آپدیت کردن جدول نمایش ادمین‌ها
 * @param {object[]} admins آرایه‌ای از آبجکت‌های هر ادمین
 * @returns {void}
 */
function updateTable() {
    adminsTable.innerHTML = '';

    admins.forEach((admin) => {
        // یک ردیف در جدول میسازه
        const row = document.createElement('tr');
        
        // یک سلول در ردیف میسازه
        const nameCell = document.createElement('td');
        nameCell.innerHTML = `
        <a href="#" class="admin-profile">
            <img src="./assets/img/profile.jpg" alt="">
            <div class="profile-info">
                <span>${admin.fullName}</span>
            </div> 
        </a>
        `
        row.appendChild(nameCell);
    
        const userNameCell = document.createElement('td')
        userNameCell.textContent = admin.userName;
        row.appendChild(userNameCell);
    
        const roleCell = document.createElement('td')
        roleCell.textContent = admin.role;
        row.appendChild(roleCell);
    
        adminsTable.appendChild(row)
    });
}

// توابع ایونت هندلر

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
 * ادمین را اضافه و در صفحه نشان می‌دهد
 * @param {Event} e 
 */
function showAdmin(e) {
    e.preventDefault();

    if (adminName.value === '' 
    || adminUserName.value === '' 
    || adminRole.value === '') {
        alert('لطفا تمامی اطلاعات خواسته شده را وارد کنید')
        return;
    } else {
        addAdmin();
        updateTable();
        adminForm.reset();
    }
} 

/**
 * تابع شروع و اجرای توابع
 * @returns {void}
*/
function init() {
    updateTable();
    window.addEventListener('resize', handleSidebar);
    window.addEventListener('load', sidebarOnLoad);
    sidebarBtn.addEventListener('click', sidebarToggle);
    adminForm.addEventListener('submit', showAdmin);
}

init();