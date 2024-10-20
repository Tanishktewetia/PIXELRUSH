document.querySelectorAll('.accordion-item-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = header.classList.contains('active');

        
        document.querySelectorAll('.accordion-item-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.maxHeight = '0';
        });

       
        if (!isOpen) {
            header.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const adjustScroll = (selector, offset) => {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const adjustedPosition = elementPosition - offset;

            window.scrollTo({
                top: adjustedPosition,
                behavior: 'smooth'
            });
        }
    };

    document.querySelector('.nav-button[href="#ott"]').addEventListener('click', (event) => {
        event.preventDefault();
        adjustScroll('.heading1.screen-container h1 span.color3', 100);
    });

   
    document.querySelector('.nav-button[href="#others"]').addEventListener('click', (event) => {
        event.preventDefault();
        adjustScroll('.heading2-screen-container h1 span.color4', 100);
    });

    
    document.querySelector('.nav-button[href="#how-to-purchase"]').addEventListener('click', (event) => {
        event.preventDefault();
        adjustScroll('.heading2', 100);
    });

    
    document.querySelector('.nav-button[href="#faq"]').addEventListener('click', (event) => {
        event.preventDefault();
        adjustScroll('.heading5', 100);
    });

    
    document.querySelector('.nav-button[href="#contact"]').addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    
    document.querySelectorAll('.plan-button').forEach(button => {
        button.addEventListener('click', function() {
            
            document.querySelectorAll('.plan-button').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            this.classList.add('selected');
        });
    });
});
