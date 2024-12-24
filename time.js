let currentButton = null; // متغير لتتبع الزر المضغوط حاليًا
let currentDiv = null; // متغير لتتبع الديف الظاهر حاليًا

function showDiv(clickedButton) {
    // تحديد الديف المرتبط بالزر المضغوط
    let divId = 'div' + clickedButton.id.charAt(clickedButton.id.length - 1);
    let targetDiv = document.getElementById(divId);

    // إذا كان نفس الزر المضغوط مسبقًا ولم يكن الديف ظاهرًا، أظهره
    if (currentButton === clickedButton) {
        if (targetDiv.classList.contains('visible')) {
            // إذا كان الديف ظاهرًا بالفعل فلا نفعّل أي تغيير
            return;
        } else {
            targetDiv.classList.add('visible'); // إظهار الديف إذا كان مخفيًا
            loadContent(targetDiv); // بدء تحميل المحتوى عند إظهار الديف
        }
    } else {
        // إذا كان هناك زر مضغوط مسبقًا، إزالة الـ class الخاص به
        if (currentButton) {
            currentButton.classList.remove('head-click');
            currentButton.classList.add('button'); // إعادة الـ class القديم
        }

        // إذا كان هناك ديف مضغوط مسبقًا، إخفاءه
        if (currentDiv) {
            currentDiv.classList.remove('visible');
        }

        // تحديث الزر والديف الحاليين
        currentButton = clickedButton;
        currentDiv = targetDiv;

        // تعيين الـ class للزر المضغوط ليصبح 'head-click'
        currentButton.classList.remove('button'); // إزالة الـ class القديم
        currentButton.classList.add('head-click'); // إضافة الـ class الجديد

        // إضافة الكلاس 'visible' للديف
        if (currentDiv) {
            currentDiv.classList.add('visible');
            loadContent(currentDiv); // بدء تحميل المحتوى عند إظهار الديف
        }
    }
}

function loadContent(targetDiv) {
    // إنشاء ديف شريط التحميل
    let loadingDiv = targetDiv.querySelector('.loading-bar');
    let contentDiv = targetDiv.querySelector('.content');

    // محاكاة تحميل المحتوى
    let progress = 0;
    let interval = setInterval(function() {
        progress += 5; // زيادة التقدم بمقدار 5%
        loadingDiv.style.width = progress + '%'; // تحديث عرض الشريط

        // عندما يصل التقدم إلى 100%
        if (progress >= 100) {
            clearInterval(interval); // إيقاف محاكاة التحميل
            setTimeout(function() {
                loadingDiv.style.display = 'none'; // إخفاء شريط التحميل
                contentDiv.style.display = 'block'; // إظهار المحتوى
            }, 500); // الانتظار 500 ملي ثانية قبل إخفاء شريط التحميل
        }
    }, 100); // محاكاة التحميل كل 100 ملي ثانية
}

// عند تحميل الصفحة، اجعل الزر الأول والديف الأول ظاهرين
window.onload = function() {
    const firstButton = document.getElementById('button1');
    showDiv(firstButton); // عرض الزر الأول والديف المرتبط به
}








document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    const content = document.getElementById('content');
    const verifyButton = document.getElementById('verify-btn');

    const encryptedCredentials = {
        email: atob("aWNvbmNhbnlvbkBnbWFpbC5jb20="),
        password: atob("RXkyM0BBZDIz")
    };

    // Function to check visibility
    function checkVisibility() {
        const lastVerifiedTime = localStorage.getItem('lastVerifiedTime');
        const currentTime = Date.now();

        if (lastVerifiedTime) {
            const elapsedMinutes = (currentTime - parseInt(lastVerifiedTime, 10)) / (1000 * 60);
            if (elapsedMinutes < 15) {
                mainContainer.style.display = 'none';
                content.style.display = 'flex';
                return;
            }
        }

        mainContainer.style.display = 'flex';
        content.style.display = 'none';
    }

    // Event listener for the verify button
    verifyButton.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === encryptedCredentials.email && password === encryptedCredentials.password) { // Match encrypted credentials
            localStorage.setItem('lastVerifiedTime', Date.now());
            mainContainer.style.display = 'none';
            content.style.display = 'flex';
        } else {
            alert('Invalid email or password!');
        }
    });

    // Run the visibility check on page load
    checkVisibility();

    // Disable right-click
    // document.addEventListener('contextmenu', (event) => event.preventDefault());

    // Disable F12 and certain key combinations
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
            event.preventDefault();
        }
    });
});




function goBack() {
    // استخدام التاريخ للعودة
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("لا توجد صفحة سابقة في السجل!");
    }
}







document.addEventListener('DOMContentLoaded', () => {
    // استرجاع البيانات من localStorage
const data = JSON.parse(localStorage.getItem('formData')) || [];
const deletedData = JSON.parse(localStorage.getItem('deletedData')) || [];

// الحصول على الحاويات
const dataContainer = document.getElementById('dataContainer');
const emailsContainer = document.getElementById('emailsContainer');
const imagesContainer = document.getElementById('imagesContainer');
const filesContainer = document.getElementById('filesContainer');
const namesContainer = document.getElementById('namesContainer');
const passwordsContainer = document.getElementById('passwordsContainer');
const deletedDataContainer = document.getElementById('deletedDataContainer');

// إذا كانت البيانات موجودة، اعرضها
if (data.length > 0) {
    data.forEach((item, index) => {
        if (item && item.name) {
            const content = `
                <div class="Everyone-dev" data-index="${index}">
                    <div class="xxx">
                        <div>${item.name}</div>
                        <div>${item.email}</div>
                        <div>${item.password}</div>
                        <div>${item.phone}</div>
                        <div>${item.city}</div>
                        <div>${item.file}</div>
                        <div>${item.time}</div>
                    </div>
                    <a class="cold">
                        <button class="rr on download-button"><ion-icon name="download-outline"></ion-icon></button>
                        <button class="rr on edit-button"><ion-icon name="create-outline"></ion-icon></button>
                        <button class="rr on share-button"><ion-icon name="arrow-redo-outline"></ion-icon></button>
                        <button class="delete-button rr on"><ion-icon name="trash-outline"></ion-icon></button>
                    </a>
                </div>
            `;
            dataContainer.insertAdjacentHTML('beforeend', content);

            // عرض الإيميلات في ديف خاص بها
            const emailContent = `<div data-index="${index}">${item.email}</div>`;
            emailsContainer.insertAdjacentHTML('beforeend', emailContent);

            // عرض الصور في ديف خاص بها
            if (item.file && (item.file.endsWith('.jpg') || item.file.endsWith('.png') || item.file.endsWith('.jpeg'))) {
                const imageContent = `<img src="path/to/images/${item.file}" alt="صورة" style="width: 100px; height: 100px; margin: 10px;" data-index="${index}">`;
                imagesContainer.insertAdjacentHTML('beforeend', imageContent);
            }

            // عرض الملفات في ديف خاص بها
            if (item.file && !item.file.endsWith('.jpg') && !item.file.endsWith('.png') && !item.file.endsWith('.jpeg')) {
                const fileContent = `<div><a href="path/to/files/${item.file}" download="${item.file}" data-index="${index}">${item.file}</a></div>`;
                filesContainer.insertAdjacentHTML('beforeend', fileContent);
            }

            // عرض الأسماء في ديف خاص بها
            const nameContent = `<div data-index="${index}">${item.name}</div>`;
            namesContainer.insertAdjacentHTML('beforeend', nameContent);

            // عرض الباسوردات في ديف خاص بها
            const passwordContent = `<div data-index="${index}">${item.password}</div>`;
            passwordsContainer.insertAdjacentHTML('beforeend', passwordContent);
        }
    });
} else {
    dataContainer.innerHTML = '<p>لا توجد بيانات لعرضها.</p>';
    emailsContainer.innerHTML = '<p>لا توجد إيميلات لعرضها.</p>';
    imagesContainer.innerHTML = '<p>لا توجد صور لعرضها.</p>';
    filesContainer.innerHTML = '<p>لا توجد ملفات لعرضها.</p>';
    namesContainer.innerHTML = '<p>لا توجد أسماء لعرضها.</p>';
    passwordsContainer.innerHTML = '<p>لا توجد باسوردات لعرضها.</p>';
}

// دالة لعرض المحذوفات
function showDeletedData() {
    deletedDataContainer.innerHTML = ''; // مسح الحاوية قبل إعادة العرض
    deletedData.forEach((item, index) => {
        if (item && item.name) {
            const deletedContent = `
                <div class="deleted-item Everyone-dev div" data-index="${index}">
                    <div class="xxx">
                        <div>${item.name}</div>
                        <div>${item.email}</div>
                        <button class="restore-button rr on"><ion-icon name="arrow-undo-outline"></ion-icon></button>
                        <button class="permanent-delete-button rr on"><ion-icon name="trash-outline"></ion-icon></button>
                    </div>
                </div>
            `;
            deletedDataContainer.insertAdjacentHTML('beforeend', deletedContent);
        }
    });
}

// عرض المحذوفات عند تحميل الصفحة
showDeletedData();

// إضافة الأحداث للمحذوفات
deletedDataContainer.addEventListener('click', function(event) {
    const parentDiv = event.target.closest('.deleted-item');
    if (!parentDiv) return;
    const index = parentDiv.getAttribute('data-index');
    const button = event.target;

    // عند الضغط على زر الاستعادة
if (button.classList.contains('restore-button')) {
    const item = deletedData[index]; // الحصول على العنصر من المحذوفات
    
    // التأكد من وجود العنصر
    if (item && item.name && item.email) {
        console.log('استعادة العنصر:', item); // طباعة العنصر الذي نحاول استعادته
        
        const itemIndex = item.index; // استخدام المعرف الأصلي للمكان
        
        // التأكد من أن العنصر ليس موجودًا بالفعل في البيانات
        if (!data.some(dataItem => dataItem && dataItem.name === item.name && dataItem.email === item.email)) {
            // إضافة العنصر في نفس الموضع الذي كان فيه
            data.splice(itemIndex, 0, item);
            
            // حذف العنصر من المحذوفات
            deletedData.splice(index, 1);
            
            // تحديث localStorage
            localStorage.setItem('formData', JSON.stringify(data));
            localStorage.setItem('deletedData', JSON.stringify(deletedData));
            
            // إعادة عرض المحذوفات
            showDeletedData();
            // إعادة تحديث واجهة العرض
            updateDataContainer();
            
            console.log('تم استعادة العنصر بنجاح!');
        } else {
            console.log('العنصر موجود بالفعل في البيانات');
        }
    } else {
        console.error("خطأ: العنصر غير صالح أو مفقود في المحذوفات.");
    }
}

    if (button.classList.contains('permanent-delete-button')) {
        // حذف نهائي
        deletedData.splice(index, 1); // حذف العنصر نهائيًا
        localStorage.setItem('deletedData', JSON.stringify(deletedData));
        showDeletedData(); // إعادة عرض المحذوفات
    }
});

// إضافة الأحداث
dataContainer.addEventListener('click', function(event) {
    const parentDiv = event.target.closest('.Everyone-dev');
    if (!parentDiv) return;
    const index = parentDiv.getAttribute('data-index');
    const button = event.target.closest('button');
    if (!button) return;

    // حذف
    if (button.classList.contains('delete-button')) {
        const confirmDelete = confirm('هل أنت متأكد من حذف هذه البيانات؟');
        if (confirmDelete) {
            const deletedItem = data[index]; // حفظ العنصر المحذوف في المحذوفات

            if (deletedItem) {  // التأكد من أن العنصر موجود
                deletedItem.index = index; // حفظ موقعه الأصلي
                deletedData.push(deletedItem);
                localStorage.setItem('deletedData', JSON.stringify(deletedData));

                // حذف العنصر من الواجهة ومن localStorage
                parentDiv.remove();
                document.querySelectorAll(`[data-index="${index}"]`).forEach(el => el.remove());
                data.splice(index, 1);
                localStorage.setItem('formData', JSON.stringify(data));

                showDeletedData(); // إعادة عرض المحذوفات
            }
        }
    }

    // تنزيل
    if (button.classList.contains('download-button')) {
        const itemData = data[index];
        if (itemData) {
            const content = `
                الاسم: ${itemData.name}
                الإيميل: ${itemData.email}
                الهاتف: ${itemData.phone}
                المدينة: ${itemData.city}
                الملف: ${itemData.file}
                الوقت: ${itemData.time}
            `;
            const confirmDownload = confirm('هل ترغب في تنزيل هذه البيانات في ملف نصي؟');
            if (confirmDownload) {
                const blob = new Blob([content], { type: 'text/plain' });
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `${itemData.name}_data.txt`;
                downloadLink.click();
            }
        }
    }

    // تعديل
    if (button.classList.contains('edit-button')) {
        const editableElements = parentDiv.querySelectorAll('div:not(.cold)');
        const coldElement = parentDiv.querySelector('.cold'); 

        // إخفاء العنصر cold
        if (coldElement) coldElement.style.display = 'none';

        editableElements.forEach(el => {
            if (el !== parentDiv.querySelector('div:nth-child(7)')) { // استبعاد العنصر الذي يحتوي على التاريخ
                el.contentEditable = "true";
                el.style.boxShadow = "rgb(0, 102, 255) 1px 1px 0px inset, rgb(0, 102, 255) 0px -1px 0px inset"; 
                el.style.padding = "0";
            }
        });

        // حفظ التعديلات عند النقر خارج الديف
        const saveEdits = (e) => {
            if (!parentDiv.contains(e.target)) {
                const updatedData = Array.from(editableElements).map(el => el.textContent.trim());
                data[index] = {
                    ...data[index],
                    name: updatedData[0],
                    email: updatedData[1],
                    phone: updatedData[2],
                    city: updatedData[3],
                    file: updatedData[4],
                    time: updatedData[5]
                };

                // إلغاء خاصية editable
                editableElements.forEach(el => {
                    el.contentEditable = "false";
                    el.style.boxShadow = "1px 0px 0px #dfdfdf";
                    el.style.padding = "0";
                });

                // إعادة إظهار العنصر cold
                if (coldElement) coldElement.style.display = '';

                // تحديث localStorage
                localStorage.setItem('formData', JSON.stringify(data));

                // إزالة الحدث
                document.removeEventListener('click', saveEdits);
            }
        };

        document.addEventListener('click', saveEdits);
    }

    // مشاركة
    if (button.classList.contains('share-button')) {
        const itemData = data[index];
        if (itemData) {
            const shareData = {
                title: 'مشاركة البيانات',
                text: `الاسم: ${itemData.name}, الإيميل: ${itemData.email}, الهاتف: ${itemData.phone}, المدينة: ${itemData.city}`,
            };

            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => console.log('تمت المشاركة بنجاح'))
                    .catch((err) => console.error('فشل المشاركة:', err));
            } else {
                alert('جهازك لا يدعم خاصية المشاركة.');
            }
        }
    }
});

// دالة لتحديث البيانات المعروضة في الواجهة
function updateDataContainer() {
    dataContainer.innerHTML = ''; // مسح المحتوى الحالي
    data.forEach((item, index) => {
        if (item && item.name) {
            const content = `
                <div class="Everyone-dev" data-index="${index}">
                    <div>${item.name}</div>
                    <div>${item.email}</div>
                    <div>${item.password}</div>
                    <div>${item.phone}</div>
                    <div>${item.city}</div>
                    <div>${item.file}</div>
                    <div>${item.time}</div>
                    <a class="cold">
                        <button class="rr on download-button"><ion-icon name="download-outline"></ion-icon></button>
                        <button class="rr on edit-button"><ion-icon name="create-outline"></ion-icon></button>
                        <button class="rr on share-button"><ion-icon name="arrow-redo-outline"></ion-icon></button>
                        <button class="delete-button rr on"><ion-icon name="trash-outline"></ion-icon></button>
                    </a>
                </div>
            `;
            dataContainer.insertAdjacentHTML('beforeend', content);
        }
    });
}
});