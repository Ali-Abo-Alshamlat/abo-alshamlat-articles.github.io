document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const codeToCopy = document.getElementById('codeToCopy');
  
    copyButton.addEventListener('click', function () {
      const range = document.createRange();
      range.selectNode(codeToCopy);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      
      copyButton.innerText = 'Copied!';
      setTimeout(function () {
        copyButton.innerText = 'Copy';
      }, 1000);
    });
  });