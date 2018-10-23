$(document).ready(function(){
  var a = $("#toplevel_page_td_theme_welcome,.nav-tab-wrapper");
  //---------------菜单--------------
  a.filter(":contains('Welcome')").each(function() {  $(this).html( $(this).html().replace("Welcome", "欢迎使用"));}); 
  a.filter(":contains('Plugins')").each(function() {  $(this).html($(this).html().replace("Plugins", "相关插件"));}); 
  a.filter(":contains('Install demos')").each(function() { $(this).html($(this).html().replace("Install demos", "安装示例"));}); 
  a.filter(":contains('Support')").each(function() {  $(this).html($(this).html() .replace("Support", "帮助支持"));}); 
  a.filter(":contains('System status')").each(function() {  $(this).html($(this).html() .replace("System status", "系统状态"));}); 
  a.filter(":contains('Theme panel')").each(function() {  $(this).html($(this).html() .replace("Theme panel", "控制面板"));}); 
  $("#wp-admin-bar-our_support_item").remove();
  //--------------控制面板---------------
  //面板标题 
  var c =  $(".td-panel-main-header");
  var zm_by ='  © 筑梦汉化 - <a href="https://www.zmwo.com" title="筑梦窝" target="_blank">https://zmwo.com</a>    主题版本9.0.1';
  c.filter(":contains('Theme panel')").each(function() { $(this).html($(this).html().replace("Theme panel",  "控制面板"));}); 
  c.filter(":contains('version: 9.0.1')").each(function() { $(this).html($(this).html().replace("version: 9.0.1", zm_by ));}); 
  //面板目录
  var b =  $(".td-panel-menu");
  b.filter(":contains('HEADER')").each(function() { $(this).html($(this).html().replace("HEADER", "头部"));}); 
  b.filter(":contains('FOOTER')").each(function() { $(this).html($(this).html().replace("FOOTER", "底部"));}); 
  b.filter(":contains('ADS')").each(function() { $(this).html($(this).html().replace("ADS", "广告"));}); 
  b.filter(":contains('LAYOUT SETTINGS')").each(function() { $(this).html($(this).html().replace("LAYOUT SETTINGS", "布局设置"));}); 
  b.filter(":contains('TEMPLATE SETTINGS')").each(function() { $(this).html($(this).html().replace("TEMPLATE SETTINGS", "模板"));}); 
  b.filter(":contains('CATEGORIES')").each(function() { $(this).html($(this).html().replace("CATEGORIES", "分类"));}); 
  b.filter(":contains('POST SETTINGS')").each(function() { $(this).html($(this).html().replace("POST SETTINGS", "文章"));}); 
  b.filter(":contains('MISC')").each(function() { $(this).html($(this).html().replace("MISC", "样式设置"));}); 
  b.filter(":contains('BLOCK SETTINGS')").each(function() { $(this).html($(this).html().replace("BLOCK SETTINGS", "区块"));}); 
  b.filter(":contains('BACKGROUND')").each(function() { $(this).html($(this).html().replace("BACKGROUND", "背景"));}); 
  b.filter(":contains('EXCERPTS')").each(function() { $(this).html($(this).html().replace("EXCERPTS", "摘要"));}); 
  b.filter(":contains('TRANSLATIONS')").each(function() { $(this).html($(this).html().replace("TRANSLATIONS", "翻译"));}); 
  b.filter(":contains('THEME COLORS')").each(function() { $(this).html($(this).html().replace("THEME COLORS", "色彩"));}); 
  b.filter(":contains('THEME FONTS')").each(function() { $(this).html($(this).html().replace("THEME FONTS", "字体"));}); 
  b.filter(":contains('CUSTOM CODE')").each(function() { $(this).html($(this).html().replace("CUSTOM CODE", "自定义代码"));}); 
  b.filter(":contains('ANALYTICS/JS CODES')").each(function() { $(this).html($(this).html().replace("ANALYTICS/JS CODES", "引入统计/JS"));}); 
  b.filter(":contains('SOCIAL NETWORKS')").each(function() { $(this).html($(this).html().replace("SOCIAL NETWORKS", "社交"));}); 
  b.filter(":contains('CPT \& TAXONOMY')").each(function() { $(this).html($(this).html().replace("CPT \& TAXONOMY", "CPT 和 分支"));}); 
  b.filter(":contains('Import / export')").each(function() { $(this).html($(this).html().replace("Import / export", "注册 / 重置"));}); 
  b.filter(":contains('EXPORT')").each(function() { $(this).html($(this).html().replace("EXPORT", "重置"));}); 
  b.filter(":contains('PLUGINS')").each(function() { $(this).html($(this).html().replace("PLUGINS' SETTINGS", "插件设置"));}); 
  b.filter(":contains('MULTI-PURPOSE')").each(function() { $(this).html($(this).html().replace("MULTI-PURPOSE", "插件"));}); 
  b.filter(":contains('BACK')").each(function() { $(this).html($(this).html().replace("BACK", "返回"));}); 
  //保存按钮
  var s_in = $('#td_button_save_panel').val();
  var s_en = 'SAVE SETTINGS';
  var $s_zh = s_in.replace(s_en,'保存设置');
  $('#td_button_save_panel').val($s_zh);
  //----面板>标题	-------	
    var d = $("#td-col-right");
  //面板>标题>头部
  d.filter(":contains('Header Style')").each(function() { $(this).html($(this).html().replace("Header Style", "头部样式"));}); 
  d.filter(":contains('Top Bar')").each(function() { $(this).html($(this).html().replace("Top Bar", "顶部工具栏"));}); 
  d.filter(":contains('Main Menu')").each(function() { $(this).html($(this).html().replace("Main Menu", "主菜单"));}); 
  d.filter(":contains('Favicon')").each(function() { $(this).html($(this).html().replace("Logo & Favicon", "Logo 和 Favicon"));}); 
  d.filter(":contains('Mobile')").each(function() { $(this).html($(this).html().replace("Logo for Mobile", "手机版Logo"));}); 
  d.filter(":contains('Header background')").each(function() { $(this).html($(this).html().replace("Header background", "头部背景"));}); 
  d.filter(":contains('Bookmarklet')").each(function() { $(this).html($(this).html().replace("iOS Bookmarklet", "手机书签图标"));}); 
  //面板>标题>底部
  d.filter(":contains('Footer settings')").each(function() { $(this).html($(this).html().replace("Footer settings", "底部设置"));}); 
  d.filter(":contains('Instagram settings')").each(function() { $(this).html($(this).html().replace("Instagram settings", "Instagram设置"));}); 
  var d_i = new RegExp("Footer info content", "g");//全局替换
  d.filter(":contains('Footer info content')").each(function() { $(this).html($(this).html().replace( d_i , "底部信息"));}); 
  d.filter(":contains('Footer background')").each(function() { $(this).html($(this).html().replace("Footer background", "底部背景"));}); 
  d.filter(":contains('Sub footer settings')").each(function() { $(this).html($(this).html().replace("Sub footer settings", "底部单元"));}); 
  //面板>头部
  var e = $("#td-panel-header");
  e.filter(":contains('HEADER STYLE')").each(function() { $(this).html($(this).html().replace("HEADER STYLE", "头部样式"));}); 
  e.filter(":contains('SEARCH POSITION')").each(function() { $(this).html($(this).html().replace("SEARCH POSITION", "搜索框位置"));}); 
  var e_y = new RegExp("Style", "g");//全局替换 td_vso_caption
   $(".td_vso_caption").filter(":contains('Style')").each(function() { $(this).html($(this).html().replace( e_y , "样式"));}); 
  var e_h = "Select the order in which the header elements will be arranged";
  var e_h1 = ":contains('e_h')";
  e.filter( e_h1 ).each(function() { $(this).html($(this).html().replace(e_h, "选择头部样式排列布局"));}); 
  var e_s = "Select the search button placement area";
  var e_s1 = ":contains('e_s')";  
  e.filter( e_s1 ).each(function() { $(this).html($(this).html().replace(e_s, "选择搜索框位置"));}); 
  
  

  
});