// 平滑滚动
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 工具卡片加载动画
  const toolCards = document.querySelectorAll('.tool-card');
  toolCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 * index);
  });

  // 暗黑模式切换动画
  const themeToggle = document.querySelector('.md-header__button.md-icon-button');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
  }
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
  const header = document.querySelector('.md-header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
});
