// 📜 사이드바 메뉴 클릭 시 스무스한 페이지 전환
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetPage = this.getAttribute("data-link");
            document.body.classList.add("fade-out"); // 페이지 전환 효과
            setTimeout(() => window.location.href = targetPage, 500);
        });
    });

    // 💡 현재 페이지 강조 표시
    const currentPage = window.location.pathname.split("/").pop();
    menuItems.forEach(item => {
        if (item.getAttribute("data-link") === currentPage) {
            item.classList.add("active");
        }
    });
});
