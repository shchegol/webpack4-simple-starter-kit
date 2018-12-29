const getHeader = () => {
  const element = document.createElement('h1');

  element.innerHTML = 'Hello Webpack 4!';

  return element;
};

document.body.appendChild(getHeader());