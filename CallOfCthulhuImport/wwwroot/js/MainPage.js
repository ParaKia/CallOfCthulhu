$(document).ready(function () {
    $('.link').on('click', function (event) {
        event.preventDefault(); // 阻止默认的页面跳转行为

        var targetURL = event.target.href;
        // 获取目标页面的 URL
        //var targetURL = $('#smoothLink').attr('href');

        // 获取滑动容器和内容
        var container = $('.myselft-container');
        var content = $('#RenderBody');
        var containerside = $('.sidebar');
        var contentside = $('#RenderSide');


        // 执行动画效果
        containerside.animate({
            top: '50px', // 容器向下滑动 100% 的宽度
            opacity: 0
        }, 800
        );

        // 内容逐渐消失
        contentside.fadeOut(800);

        // 执行动画效果
        container.animate({
            top: '50px' // 容器向下滑动 50px 的高度
        }, 800, function () {
            // 动画完成后执行页面跳转
            window.location.href = targetURL;
        });

        // 内容逐渐消失
        content.fadeOut(800);

        
    });

    

    // 先将透明度逐渐设置为 1，然后执行向下滑动动画
    $('.animationDiv').animate({ opacity: 1 }, 800, function () {
        // 向下滑动 50px
        $(".animationDiv").css('transform', 'translateY(50px)');
    });

});



//设置展开
function Settings() {
    layer.open({
        type: 2,
        title: '设置',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['515px', '215px'],
        content: "/Home/Settings"
    });
}

//高亮sidebar
window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('.sidebar a');
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i].getAttribute('href');
        var target = document.querySelector(section);
        var rect = target.getBoundingClientRect();

        // Adjust the threshold value as needed
        var threshold = 300;

        if (rect.top <= threshold && rect.bottom >= 20) {
            sections[i].classList.add('highlight');
        } else {
            sections[i].classList.remove('highlight');
        }
    }
});

//window.onload = function () {
//    Particles.init({
//        selector: '.background',
//        responsive: [
//            {
//                breakpoint: 1920,
//                options: {
//                    maxParticles: 100,
//                    color: '#000000',
//                    connectParticles: false
//                }
//            },
//            {
//                breakpoint: 425,
//                options: {
//                    maxParticles: 100,
//                    connectParticles: false
//                }
//            },
//            {
//                breakpoint: 320,
//                options: {
//                    maxParticles: 0
//                }
//            }
//        ]
//    });
//};

//VANTA.CLOUDS2({
//    el: "#AllPages",
//    mouseControls: true,
//    touchControls: true,
//    gyroControls: false,
//    minHeight: 200.00,
//    minWidth: 200.00,
//    scale: 1.00,
//    texturePath: "image/noise.png"
//})

let fireNodes1 = document.querySelectorAll("#fireNodes1 .cf-flame");
let fireNodes2 = document.querySelectorAll("#fireNodes2 .cf-flame");
let fireNodes3 = document.querySelectorAll("#fireNodes1 .cf-flame");
let baseFire = document.querySelectorAll("#base-fire .cf-flame");

function animateBaseFire() {
    anime({
        targets: baseFire,
        delay: anime.stagger(300),
        translateY: function () { return anime.random(0, -10); },
        keyframes: [
            { scale: .8 },
            { scale: .825 },
            { scale: .9 },
            { scale: .925 },
            { scale: 1 }
        ],
        duration: 300,
        easing: 'easeInOutSine',
        loop: true,
    })
}

function animateFlame1() {
    anime({
        targets: fireNodes1,
        delay: anime.stagger(100),
        translateY: function () { return anime.random(0, 300); },
        rotate: 30,
        opacity: function () { return anime.random(.5, 1); },
        translateX: function () { return anime.random(0, -60); },
        scale: 0,
        skew: function () { return anime.random(0, 10); },
        loop: true,
        easing: "easeInOutSine",
    })
}

function animateFlame2() {
    anime({
        targets: fireNodes2,
        delay: anime.stagger(400),
        translateX: function () { return anime.random(-30, 0); },
        translateY: function () { return anime.random(0, -260); },
        translateY: function () { return anime.random(-260, -160); },
        translateX: function () { return anime.random(0, -30); },
        scale: 0,
        rotate: function () { return anime.random(0, 60); },
        skew: function () {
            return anime.random(0, 30);
        },
        loop: true,
        easing: "easeInOutSine"
    })
}

function animateFlame3() {
    anime({
        targets: fireNodes3,
        delay: anime.stagger(500),
        translateY: function () { return anime.random(-300, -200); },
        opacity: function () { return anime.random(0, 1); },
        translateX: function () { return anime.random(-50, 50); },
        scale: 0,
        rotate: function () { return anime.random(0, -30); },
        skew: function () { return anime.random(0, 20); },
        loop: true,
        easing: "easeInOutSine",
    })
}

animateFlame1();
animateFlame2();
animateFlame3();
animateBaseFire();