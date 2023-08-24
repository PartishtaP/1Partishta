function closeCreateProfile() {
    document.getElementById('createP').style.display = 'none';
}

function createProfile(){
    document.getElementById('createP').style.display = 'block';
}

function closeMarkForm() {
    document.getElementById('entrMarks').style.display = 'none';
}

function createMarkForm(){
    document.getElementById('entrMarks').style.display = 'block';
}

function handleSubmit(){
        var seat=String(document.getElementById('inSeat').value);
        var name=String(document.getElementById('inName').value);
        var branch=String(document.getElementById('inBranch').value);
        var year=String(document.getElementById('inYear').value);
        console.log(seat,branch,year,name)
        document.getElementById('name').innerHTML=name;
        document.getElementById('seat').innerHTML=seat;
        document.getElementById('branch').innerHTML=branch;
        document.getElementById('year').innerHTML=year;
        document.getElementById('createP').style.display = 'none';
        return false;
}

function handleChange(input){
    if(input < 0){
        alert("Min value 0");
        input.value=0;
    }
    if(input > 20){
        alert("Max value is 20");
        input.value=25;
    }
}


function calculate(){
    //IP input
    var ip1=parseInt(document.getElementById('ip1').value);
    var ip2=parseInt(document.getElementById('ip2').value);
    
    var ipu=ip1+ip2/2;
    var totip=ipu;
    //ADSA INPUT
    var adsau1=parseInt(document.getElementById('adsau1').value);
    var adsa2 = parseInt(document.getElementById('adsau2').value);
   
    var adsau=adsau1+adsau2/2;
    var totadsa=adsau;
    //SE INPUT
    var seu1=parseInt(document.getElementById('seu1').value);
    var seu2=parseInt(document.getElementById('seu2').value);
    
    var seu=seu1+seu2/2;
    var totse=seu;
    //PCE-II input
    var pceu1=parseInt(document.getElementById('pceu1').value);
    var pceu2=parseInt(document.getElementById('pceu2').value);
    
    var pceu=pceu1+pceu2/2;
    var totpce=pceu;
    //CNS
    var cnsu1=parseInt(document.getElementById('cnsu1').value);
    var cnsu2=parseInt(document.getElementById('cnsu2').value);
   
    var cnsu=cnsu1+cnsu2/2;
    var totcns=cnsu;
    //EEB
    var eebu1=parseInt(document.getElementById('eebu1').value);
    var eebu2=parseInt(document.getElementById('eebu2').value);
   
    var eebu=eebu1+eebu2/2;
    var toteeb=eebu;
    //IP
    document.getElementById('ut1ip').innerHTML=ip1;
    document.getElementById('ut2ip').innerHTML=ip2;
    document.getElementById('ipavg').innerHTML=ipu;
   
    document.getElementById('iptotal').innerHTML=totip;
    //ADSA
    document.getElementById('ut1adsa').innerHTML=adsau1;
    document.getElementById('ut2adsa').innerHTML=adsau2;
    document.getElementById('adsaavg').innerHTML=adsau;
   
    document.getElementById('adsatotal').innerHTML=totadsa;
    //SE
    document.getElementById('ut1se').innerHTML=seu1;
    document.getElementById('ut2se').innerHTML=seu2;
    document.getElementById('seavg').innerHTML=seu;
 
    document.getElementById('setotal').innerHTML=totse;
    //PCE
    document.getElementById('ut1pce').innerHTML=pceu1;
    document.getElementById('ut2pce').innerHTML=pceu2;
    document.getElementById('pceavg').innerHTML=pceu;
    
    document.getElementById('pcetotal').innerHTML=totpce;
    //CNS
    document.getElementById('ut1cns').innerHTML=cnsu1;
    document.getElementById('ut2cns').innerHTML=cnsu2;
    document.getElementById('cnsavg').innerHTML=cnsu;
    document.getElementById('cnstotal').innerHTML=totcns;

    //EEB
    document.getElementById('ut1eeb').innerHTML=eebu1;
    document.getElementById('ut2eeb').innerHTML=eebu2;
    document.getElementById('eebavg').innerHTML=eebu;
    document.getElementById('eebtotal').innerHTML=toteeb;

    var total=(totip+totadsa+totse+totpce+totcns+toteeb)/6;
    document.getElementById('total').innerHTML=total;
    document.getElementById('entrMarks').style.display = 'none';
    return false;
}