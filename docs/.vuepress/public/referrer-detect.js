;'use strict';

(() =>
{
    const referrer = document.referrer.toLowerCase();
    const searchEngineReg = /^https?:\/\/([\da-zA-Z\-]*)\.?(sogou|soso|baidu|google|youdao|yahoo|bing|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso|so|haosou|sm)\.(.{2,})/;
    const originReg = /^https:\/\/([\da-zA-Z\-]*)\.?midrai\.cn/;
    const localHostReg = /^https?:\/\/((localhost|127\.0\.0\.1)(:\d{1,5}))?/;

    if (!referrer || referrer == '') return;
    if (referrer.indexOf('https://github.com/crackmidrai') === 0) return;
    if (searchEngineReg.test(referrer)) return;
    if (originReg.test(referrer)) return;
    if (localHostReg.test(referrer)) return;

    return new Promise((res) =>
    {
        alert('检测到您是来自第三方网站的游客。\r\n\r\n本组从未授权给任何第三方个人/团体宣传、使用、挂名本组及本组劳动成果的权利，请您注意辨别。\r\n\r\n如果对方涉及金钱交易，请立刻尝试退款举报并不遗余力地曝光 TA！');
        res(true);
    });
})();