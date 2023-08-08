$(document).ready(function () {
    $('.link').on('click', function (event) {
        event.preventDefault(); // 阻止默认的页面跳转行为

        var targetURL = event.target.href;
        // 获取目标页面的 URL
        //var targetURL = $('#smoothLink').attr('href');

        // 获取滑动容器和内容
        var container = $('.container');
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