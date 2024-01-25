// swiper-init.js

// Khởi tạo Swiper cho phần đánh giá
var testimonialThumbs = new Swiper(".testimonial__thumbs", {
    spaceBetween: 10,        // Khoảng cách giữa các hình ảnh nhỏ
    slidesPerView: 3,        // Số lượng hình ảnh nhỏ hiển thị cùng một lúc
    centeredSlides: true,    // Hiển thị hình ảnh nhỏ tại giữa slider
    freeMode: true,          // Cho phép cuộn slider mà không giới hạn số lượng slide
    autoplay: true,          // Tự động chuyển đến slide tiếp theo
    loop: true,              // Lặp vô hạn các slide
    speed: 3000              // Tốc độ chuyển động của slider (ms)
});

// Khởi tạo Swiper cho phần bình luận
var testimonialContent = new Swiper(".testimonial__comment", {
    spaceBetween: 10,        // Khoảng cách giữa các phần tử
    autoplay: true,          // Tự động chuyển đến phần tử tiếp theo
    loop: true,              // Lặp vô hạn các phần tử
    speed: 3000,             // Tốc độ chuyển động của slider (ms)
    thumbs: {
        swiper: testimonialThumbs  // Liên kết Swiper của hình ảnh nhỏ với Swiper chính
    },
    pagination: {
        el: ".swiper-pagination",   // Selector của phần pagination
        clickable: true            // Cho phép click để chuyển đến slide tương ứng
    }
});
