
 document.addEventListener('DOMContentLoaded', () => {
      const currentDate = new Date();
      const targetDate = new Date('2025-03-11');

      if (currentDate > targetDate) {
        document.body.style.opacity = 0;
      }
    });
