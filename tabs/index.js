const tabData = [
  {
    id: 'tab1',
    title: 'Tab 1',
    content: 'Content of tab 1'
  },
  {
    id: 'tab2',
    title: 'Tab 2',
    content: 'Content of tab 2'
  },
  {
    id: 'tab3',
    title: 'Tab 3',
    content: 'Content of tab 3'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  let activeTab = tabData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector('#tabsContainer')
    const contentContainer = document.querySelector('.tabsContent')

    tabData.forEach(tab => {
      const tabButton = document.createElement('button');
      tabButton.className = 'tabLinks';
      tabButton.innerHTML = tab.title;
      tabButton.setAttribute('data-tab', tab.id)
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement('div');
      tabContent.id = tab.id;
      tabContent.className = 'tabcontents';
      tabContent.innerHTML = `<h1>${tab.title}</h1><p>${tab.content}</p>`
      contentContainer.appendChild(tabContent)
    })

    tabContainer.addEventListener('click', function(event) {
      if(event.target.matches('.tabLinks')) {
        const tabId = event.target.getAttribute('data-tab');
        if(tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId
        }
      }
    })

    function openTab(tabId) {
      console.log("tab id", tabId)
      const tabContents = document.querySelectorAll('.tabcontents');
      const tabLinks = document.querySelectorAll('.tabLinks');

      tabContents.forEach((tab) => tab.classList.remove("active"))
      tabLinks.forEach((tab) => tab.classList.remove("active"))

      document.getElementById(tabId).classList.add("active");
      document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active')
    }
  }
  renderTabs();
  console.log("active tab", activeTab)
  document.getElementById(activeTab).classList.add('active')
  document.querySelector(`button[data-tab="${activeTab}"]`).classList.add('active')
})