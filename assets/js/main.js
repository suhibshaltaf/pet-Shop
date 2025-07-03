document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // إزالة الكلاس "active" من كل العناصر
        navLinks.forEach(l => l.parentElement.classList.remove("active"));
        
        // إضافة "active" للعنصر الحالي
        this.parentElement.classList.add("active");
      });
    });
  });

    const imageUrls = [
    "assets/img/folio-1.jpg",
    "assets/img/folio-2.jpg",
    "assets/img/folio-3.jpg",
    "assets/img/folio-4.jpg",
    "assets/img/folio-5.jpg",
    "assets/img/folio-6.jpg",
    "assets/img/folio-7.jpg",
    "assets/img/folio-8.jpg",
    "assets/img/folio-9.jpg",
    "assets/img/folio-10.jpg"
  ];

  let currentIndex = 0;

  document.querySelectorAll(".pic_zoom a").forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = index;
      showImageModal();
    });
  });

  function showImageModal() {
    document.getElementById("modalImage").src = imageUrls[currentIndex];
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    document.getElementById("modalImage").src = imageUrls[currentIndex];
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    document.getElementById("modalImage").src = imageUrls[currentIndex];
  }

    document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
      const percent = parseInt(skill.getAttribute("data-percent")) || 0;
      let current = 0;
      const span = skill.querySelector("span");

      function animate() {
        if (current <= percent) {
          span.textContent = current + "%";

          skill.style.background = `conic-gradient(#64BE43 0deg, #64BE43 ${current * 3.6}deg, #ddd ${current * 3.6}deg, #ddd 360deg)`;

          current++;
          requestAnimationFrame(animate);
        }
      }

      animate();
    });
  });

    document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('[data-bs-target="#photographyCarousel"]');

    items.forEach(item => {
      item.addEventListener("click", function () {
        // إزالة active من جميع العناصر
        items.forEach(i => i.classList.remove("active"));
        // إضافة active للعنصر الحالي
        this.classList.add("active");
      });
    });
  });

  
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.getElementById("scrollUp");
  const section2 = document.querySelectorAll("section")[1]; // السكشن الثاني

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const triggerPoint = section2.offsetTop + section2.offsetHeight;

    if (scrollPosition > triggerPoint) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  });
});