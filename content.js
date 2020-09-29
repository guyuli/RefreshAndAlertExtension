function getElementByXpath(path) {
   return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function myInterval() {
   var notice = getElementByXpath('//*[@id="div_content"]/p[2]/text()[1]');
   if (!notice) {
      chrome.runtime.sendMessage({type: "alertUser"});
   } else {
      location.reload(true);
   }
}


setInterval("myInterval()", 2 * 1000);