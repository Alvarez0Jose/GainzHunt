// Add a script to handle the tab navigation
window.onload = function() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const activeTabContent = document.querySelector('.tab-content.active');
            const activeTab = document.querySelector('.tab.active');

            if (activeTabContent) {
                activeTabContent.classList.remove('active');
            }

            if (activeTab) {
                activeTab.classList.remove('active');
            }

            const targetTabContent = document.getElementById(this.dataset.target);

            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }

            this.classList.add('active');
        });
    });
};