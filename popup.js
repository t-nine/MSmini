chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getMailInfo' }, function (response) {
      if (response) {
        const { nItems, nUnread } = response;
        const totalEmailsSpan = document.getElementById('totalEmails');
        const unreadEmailsSpan = document.getElementById('unreadEmails');
        const resultSpan = document.getElementById('result');
  
        totalEmailsSpan.textContent = nItems;
        unreadEmailsSpan.textContent = nUnread;
  
        if (nUnread > nItems * 0.3) {
          resultSpan.textContent = 'Rule out folder';
        } else {
          resultSpan.textContent = 'Perfect';
        }
      }
    });
  });
  