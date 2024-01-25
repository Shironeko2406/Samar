// owl-carousel-init.js

// Khởi tạo Owl Carousel cho phần blog
$('.owl-carousel').owlCarousel({
    loop: true, // Lặp vô hạn các mục trong carousel
    margin: 30, // Khoảng cách giữa các mục
    nav: false, // Hiển thị nút điều hướng (next, prev)
    responsive: {
        0: {
            items: 1 // Số lượng mục hiển thị ở độ rộng màn hình dưới 600px
        },
        600: {
            items: 2 // Số lượng mục hiển thị ở độ rộng màn hình từ 600px đến 999px
        },
        1000: {
            items: 3 // Số lượng mục hiển thị ở độ rộng màn hình 1000px trở lên
        }
    }
});
