// Phần 1: Sử dụng jQuery để kích hoạt plugin "counterUp" cho phần tử có lớp là "counter"
$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
});


// Phần 2: Xử lý hiển thị và ẩn nút "back-to-top" khi cuộn, và cuộn mềm mại lên đầu trang khi nút được nhấp
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.querySelector('.backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('cd-top--is-visible');
        } else {
            backToTopButton.classList.remove('cd-top--is-visible');
        }
    });

    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        var currentPosition = window.scrollY;
        var targetPosition = 0;
        var distance = targetPosition - currentPosition;
        var duration = 1000; // Adjust the duration as needed

        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;

            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
        // cubic easing in/out - acceleration until halfway, then deceleration
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});
