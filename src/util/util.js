export const addScript = (urls) => {
    for (let i = 0, len = urls.length; i < len; i++) {
        let script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', urls[i]);
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
};
