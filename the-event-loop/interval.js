let count = 3;
const countDown = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearTimeout(countDown);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
