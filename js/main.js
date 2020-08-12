// 網頁的主程式寫在這裡
// C-like
// 等待畫面載入完成...
$(document).ready(function () {
    // 畫面載入完才會執行...
    // console.log('[畫面載入完成]');
    // 點擊事件綁定
    $('.navbar .nav-link, #goBackBtn').click(function () {
        // console.log('[被點到的是]', this);
        // 取得移動目標
        // 取得按鈕的href值並存到target變數內
        let target = $(this).attr('href');
        // console.log('[移動目標]', target);
        // 取得目標上邊座標
        let targetPosition = $(target).offset().top;
        // console.log('[移動座標]', targetPosition);
        // 取得導覽列高度
        let navbarHeight = $('.navbar').outerHeight();
        // console.log('[導覽列高度]', navbarHeight)
        // 設定動畫時間
        let duration = 300;
        // (停止並)觸發滾動動畫
        // .animate(物件, 時間)
        $('html, body').stop().animate({
            scrollTop: targetPosition - navbarHeight
        }, duration);
    });
});