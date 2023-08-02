class Admin {
    constructor(fullname, username, role) {
        this.fullname = fullname;
        this.username = username;
        this.role = role;
    }
}

class AdminList {
    constructor() {
        this.admins = [];
    }

    addAdmin(admin) {
        this.admins.push(admin);

        this._updateUI();
    }

    removeAdmin(username) {
        // موجود در آبجکتشون همون که به عنوان پراپرتی داده شده نباشه username ادمین‌هایی رو فیلتر کن که
        this.admins = this.admins.filter((admin) => admin.username !== username);

        this._updateUI();
    }

    _updateUI() {
        const adminsTable = document.querySelector('.admins-table-body')
        
        this.admins.forEach((admin) => {
            const row = adminsTable.insertRow();

            const nameCell = row.insertCell();
            nameCell.innerHTML = `
            <a href="#" class="admin-profile">
                <img src="./assets/img/profile.jpg" alt="">
                <div class="profile-info">
                    <span>${admin.fullname}</span>
                </div> 
            </a>
            `;

            const usernameCell = row.insertCell();
            usernameCell.textContent = admin.username;

            const roleCell = row.insertCell();
            roleCell.textContent = admin.role;
        })
    }
}

class AddAdminForm {
    constructor(adminList) {
        this.adminList = adminList;
        this.form = document.querySelector('.admin-form');
        this.form.addEventListener('submit', this._addAdmin.bind(this));
    }

    _addAdmin(e) {
        e.preventDefault();

        const name = document.getElementById('admin-name').value;
        const username = document.getElementById('admin-username').value;
        const role = document.getElementById('add-admins-role').value;

        const admin = new Admin(name, username, role);
        this.adminList.addAdmin(admin);

        this.form.reset()

    }
}

const adminList = new AdminList();
const addAdminForm = new AddAdminForm(adminList);

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