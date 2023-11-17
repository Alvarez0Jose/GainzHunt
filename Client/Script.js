window.onload = function () {
  const tabs = document.querySelectorAll('.tab');
  const searchTab = document.querySelector('.tab[data-target="search"]');
  const resultsContainer = document.getElementById('results');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
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

      // If the clicked tab is the "Search" tab
      if (this === searchTab) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        // Hardcoded gym information for Guaynabo
        const gymInformation = {
          name: 'Powerhouse Gym',
          address: 'Ave Jesus T Pinero Y Esq Carr 19, 00965 Guaynabo, Puerto Rico',
          phone_number: '(787) 792-0388',
          url: 'https://powerhousegym.com/locations/san-juan-puerto-rico/',
        };

        // Display the hardcoded gym information
        const gymElement = document.createElement('div');
        gymElement.classList.add('gym-item');
        gymElement.innerHTML = `
          <h2>${gymInformation.name}</h2>
          <p>Address: ${gymInformation.address}</p>
          <p>Phone Number: ${gymInformation.phone_number}</p>
          <p>Website: <a href="${gymInformation.url}" target="_blank" rel="noopener noreferrer">${gymInformation.url}</a></p>
        `;

        resultsContainer.appendChild(gymElement);
      }
    });
  });
};
