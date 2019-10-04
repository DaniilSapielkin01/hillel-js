let mus = [];
for (let i = 0; i < 10; i++) {
  mus[i] = [];
  for (let j = 1; j < 10; j++) {
    let numberStr = i + "x" + j + "=" + i * j;
    mus[i][j] = numberStr;
  }
}
console.log(mus);
