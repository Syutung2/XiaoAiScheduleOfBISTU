function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    //除函数名外都可编辑
    //以下为示例，您可以完全重写或在此基础上更改
                                
const ifrs = dom.getElementsByTagName("iframe");
const frs = dom.getElementsByTagName("frame");
let sch = document.querySelector('#kcb_container')
alert("您需要首先进入课程表页面才能导入哦！\n 部分系统可能会存在无法导入等现象 \n iOS无法点击我的课表 \n 其他bug反馈：2019011133@bistu.edu.cn")

  return sch.outerHTML
}