const accordionData = [
  {
    title: 'Header 1',
    content: "Content of Header 1"
  },
  {
    title: 'Header 2',
    content: "Content of Header 2"
  },
  {
    title: 'Header 3',
    content: "Content of Header 3"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const accordionSection = document.querySelector("#accordion");
 
  accordionData.forEach((data, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item')

    const accordionHeader = document.createElement('div');
    accordionHeader.classList.add('accordion-header');
    accordionHeader.textContent = data.title;

    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accordion-content');
    accordionContent.innerHTML = `<p>${data.content}</p>`;

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);
    accordionSection.appendChild(accordionItem)

    if(index === 0) {
      accordionItem.classList.add('active');
      accordionContent.style.display = 'block'
    }
  })

  accordionSection.addEventListener('click', (event) => {
    const header = event.target.closest('.accordion-header');
  
    if(!header) return;

    const headerParent = header.parentNode;
    const content = headerParent.querySelector('.accordion-content')
    const isActive = headerParent.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach((item) => { 
      item.classList.remove('active');
      item.querySelector('.accordion-content').style.display = 'none';
    })

    if(!isActive) {
      headerParent.classList.add('active')
      content.style.display = 'block'
    }  
  })
})