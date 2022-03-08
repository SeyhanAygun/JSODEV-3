document.getElementById("listeZekat").addEventListener("change",zekatHesaplama);

function zekatHesaplama(){
    let liste=document.getElementById("listeZekat");
    let secilenYılZekat=liste.options[listeZekat.selectedIndex].value;

    let sonuc=500/secilenYılZekat;
    document.getElementById("sonuc").innerHTML="Seçtiğiniz Yıl Vereceğiniz Zekat Miktarı  "+sonuc.toFixed(2)+"";
}