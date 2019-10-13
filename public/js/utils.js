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

// IScroll.utils.preventDefaultException = function (el, exceptions) {
//     if( el.outerHTML == "<span>lohuasen-com</span>" ) {
//         return true;
//     }
//     for ( var i in exceptions ) {
//         if ( exceptions[i].test(el[i])) {
//             return true;
//         }
//     }
//     return false;
// };