function insert(num) {
  if (document.getElementById('res').value == '0') {
    document.getElementById('res').value = num;
  }
 else {
    document.getElementById('res').value += num;
  }
}

