function helloWorld() {
  const greeting = document.querySelector('#greeting');

  if (greeting) {
    greeting.innerText = 'Hello, World!';
  } else {
    console.error('Greeting element not found');
  }
}

helloWorld();
