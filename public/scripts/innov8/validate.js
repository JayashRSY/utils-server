
 document.addEventListener('DOMContentLoaded', () => {
      const currentDate = new Date();
      const targetDate = new Date('2024-09-15');

      if (currentDate > targetDate) {
        document.body.style.opacity = 0;
      }
    });
