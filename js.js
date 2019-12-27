window.onload = function(){
    var oul = document.getElementById('ul1');
    var oli = oul.getElementsByTagName('li');
    var ool = document.getElementById('ol');
    var ooli = ool.getElementsByTagName('li');

for(var i=0; i<oli.length;i++){
    oli[i].index = i;
    oli[i].onclick = function(){
        for(var i = 0;i<oli.length;i++){
            oli[i].className = '';
            ooli[i].style.display = 'none';
        }
        this.className = 'active';
        ooli[this.index].style.display = 'block'
    }
}

}
