var list_a = [];
var totaal_list_a = 0;
var list_b = [];
var totaal_list_b = "";
var list_c = [];
var list_d = [];

function a(a,b , c ,d){
    list_a.push(a);
    list_b.push(b);
    list_c.push(c);
    list_d.push(d);

    totaal_list_a += list_a[list_a.length -1];
    totaal_list_b += list_b[list_b.length -1];

    console.log(totaal_list_a);
    console.log(totaal_list_b);
    //console.log(list_c[0]);
    //console.log(list_d[0]);
}