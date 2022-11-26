
// https://gist.github.com/jed/982883#gistcomment-2403369
function createUUID() {
  const hex = [];

  for (var i = 0; i < 256; i++) {
    hex[i] = (i < 16 ? "0" : "") + i.toString(16);
  }

  // -------------------------
  var r = crypto.getRandomValues(new Uint8Array(16));

  r[6] = (r[6] & 0x0f) | 0x40;
  r[8] = (r[8] & 0x3f) | 0x80;

  return (
    hex[r[0]] +
    hex[r[1]] +
    hex[r[2]] +
    hex[r[3]] +
    "-" +
    hex[r[4]] +
    hex[r[5]] +
    "-" +
    hex[r[6]] +
    hex[r[7]] +
    "-" +
    hex[r[8]] +
    hex[r[9]] +
    "-" +
    hex[r[10]] +
    hex[r[11]] +
    hex[r[12]] +
    hex[r[13]] +
    hex[r[14]] +
    hex[r[15]]
  );
}

function copy(text) {
  const input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
}

(function () {
  var uuid = createUUID();
  console.log(uuid);
  copy(uuid);
})();
