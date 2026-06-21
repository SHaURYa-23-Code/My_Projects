function appendValue(val) {
    document.getElementById('t1').value += val;
}
function clearInput() {
    document.getElementById('t1').value = '';
}
function calculate() {
    try {
        document.getElementById('t1').value = eval(document.getElementById('t1').value);
    } catch (e) {
        document.getElementById('t1').value = 'Error';
    }
}
