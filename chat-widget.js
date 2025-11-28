// chat-widget.js
(function () {
  const widgetButton = document.createElement('div');
  widgetButton.id = 'chatbot-widget-button';
  widgetButton.innerText = '💬 Chat';
  Object.assign(widgetButton.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#0078ff',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '25px',
    cursor: 'pointer',
    zIndex: '9999',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
  });

  const iframeContainer = document.createElement('div');
  iframeContainer.id = 'chatbot-widget-container';
  Object.assign(iframeContainer.style, {
    position: 'fixed',
    bottom: '70px',
    right: '20px',
    width: '350px',
    height: '500px',
    display: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: '9998',
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
  });

  const iframe = document.createElement('iframe');
  iframe.src = 'https://yourdomain.com/chatbot.html'; // update with your hosted chatbot UI
  Object.assign(iframe.style, {
    width: '100%',
    height: '100%',
    border: 'none'
  });

  iframeContainer.appendChild(iframe);
  document.body.appendChild(widgetButton);
  document.body.appendChild(iframeContainer);

  widgetButton.addEventListener('click', () => {
    iframeContainer.style.display =
      iframeContainer.style.display === 'none' ? 'block' : 'none';
  });
})();
