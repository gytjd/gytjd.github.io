/*!
 * Chirpy v5.3.0 (https://github.com/cotes2020/jekyll-theme-chirpy/)
 * © 2019 Cotes Chung
 * MIT Licensed
 */
$(function(){$(window).scroll(()=>{50<$(this).scrollTop()&&"none"===$("#sidebar-trigger").css("display")?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").click(()=>($("body,html").animate({scrollTop:0},800),!1))}),$(function(){$(".mode-toggle").click(o=>{const e=$(o.target);let t=e.prop("tagName")==="button".toUpperCase()?e:e.parent();t.blur(),flipMode()})});const ScrollHelper=function(){const o=$("body"),e="data-topbar-visible",t=$("#topbar-wrapper").outerHeight();let l=0,r=!1,a=!1;return{hideTopbar:()=>o.attr(e,!1),showTopbar:()=>o.attr(e,!0),addScrollUpTask:()=>{l+=1,r=r||!0},popScrollUpTask:()=>--l,hasScrollUpTask:()=>0<l,topbarLocked:()=>!0===r,unlockTopbar:()=>r=!1,getTopbarHeight:()=>t,orientationLocked:()=>!0===a,lockOrientation:()=>a=!0,unLockOrientation:()=>a=!1}}();$(function(){const o=$("#sidebar-trigger"),e=$("#search-trigger"),t=$("#search-cancel"),l=$("#main"),r=$("#topbar-title"),a=$("#search-wrapper"),n=$("#search-result-wrapper"),s=$("#search-results"),i=$("#search-input"),c=$("#search-hints"),d=function(){let o=0;return{block(){o=window.scrollY,$("html,body").scrollTop(0)},release(){$("html,body").scrollTop(o)},getOffset(){return o}}}(),p={on(){o.addClass("unloaded"),r.addClass("unloaded"),e.addClass("unloaded"),a.addClass("d-flex"),t.addClass("loaded")},off(){t.removeClass("loaded"),a.removeClass("d-flex"),o.removeClass("unloaded"),r.removeClass("unloaded"),e.removeClass("unloaded")}},u=function(){let o=!1;return{on(){o||(d.block(),n.removeClass("unloaded"),l.addClass("unloaded"),o=!0)},off(){o&&(s.empty(),c.hasClass("unloaded")&&c.removeClass("unloaded"),n.addClass("unloaded"),l.removeClass("unloaded"),d.release(),i.val(""),o=!1)},isVisible(){return o}}}();function f(){return t.hasClass("loaded")}e.click(function(){p.on(),u.on(),i.focus()}),t.click(function(){p.off(),u.off()}),i.focus(function(){a.addClass("input-focus")}),i.focusout(function(){a.removeClass("input-focus")}),i.on("input",()=>{""===i.val()?f()?c.removeClass("unloaded"):u.off():(u.on(),f()&&c.addClass("unloaded"))})}),$(function(){var o=function(){const o="sidebar-display";let e=!1;const t=$("body");return{toggle(){!1===e?t.attr(o,""):t.removeAttr(o),e=!e}}}();$("#sidebar-trigger").click(o.toggle),$("#mask").click(o.toggle)}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){const e=$("#search-input"),t=ScrollHelper.getTopbarHeight();let o,l=0;function r(){0!==$(window).scrollTop()&&(ScrollHelper.lockOrientation(),ScrollHelper.hideTopbar())}screen.orientation?screen.orientation.onchange=()=>{var o=screen.orientation.type;"landscape-primary"!==o&&"landscape-secondary"!==o||r()}:$(window).on("orientationchange",()=>{$(window).width()<$(window).height()&&r()}),$(window).scroll(()=>{o=o||!0}),setInterval(()=>{o&&(!function(){var o=$(this).scrollTop();if(!(Math.abs(l-o)<=t)){if(o>l)ScrollHelper.hideTopbar(),e.is(":focus")&&e.blur();else if(o+$(window).height()<$(document).height()){if(ScrollHelper.hasScrollUpTask())return;ScrollHelper.topbarLocked()?ScrollHelper.unlockTopbar():ScrollHelper.orientationLocked()?ScrollHelper.unLockOrientation():ScrollHelper.showTopbar()}l=o}}(),o=!1)},250)}),$(function(){var e="div.post>h1:first-of-type";const t=$(e),n=$("#topbar-title");if(0!==t.length&&!t.hasClass("dynamic-title")&&!n.is(":hidden")){const s=n.text().trim();let l=t.text().trim(),r=!1,a=0;($("#page-category").length||$("#page-tag").length)&&/\s/.test(l)&&(l=l.replace(/[0-9]/g,"").trim()),t.offset().top<$(window).scrollTop()&&n.text(l);let o=new IntersectionObserver(o=>{var e,t;r?(t=$(window).scrollTop(),e=a<t,a=t,t=o[0],e?0===t.intersectionRatio&&n.text(l):1===t.intersectionRatio&&n.text(s)):r=!0},{rootMargin:"-48px 0px 0px 0px",threshold:[0,1]});o.observe(document.querySelector(e)),n.click(function(){$("body,html").animate({scrollTop:0},800)})}});