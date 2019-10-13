function isPC () {
    if (!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        return true
    }
    return false
}

function getIscrollCfg () {
   var iscrollCfg = {}
   if (isPC()) {
      iscrollCfg = {
         preventDefault: false,
         scrollbars: 'custom',
      }
   } else {
      iscrollCfg = {
         fadeScrollbars: true,
         scrollbars: true,
         preventDefaultException: { className: /(^|\s)allowCopy(\s|$)/ },
      }
   }
   return iscrollCfg
}