chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getMailInfo') {
      const text = $("div[title*=Inbox]").attr('title');
      const itemsRegex = / (\d+(,\d+)*)/;
      const unreadRegex = /\((\d+(,\d+)*)\sunread\)/;
      const itemsMatches = text.match(itemsRegex);
      const unreadMatches = text.match(unreadRegex);
      const nItems = itemsMatches ? Number(itemsMatches[1].replace(/,/g, "")) : 0;
      const nUnread = unreadMatches ? Number(unreadMatches[1].replace(/,/g, "")) : 0;
      console.log(nItems, nUnread);
      sendResponse({ nItems, nUnread });
    }
  });
  