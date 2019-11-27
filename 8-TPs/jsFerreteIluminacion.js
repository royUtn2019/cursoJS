/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
    se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de 
    ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    const precio = 35
    let descuento = 0;
    let marca = document.getElementById('Marca').value;
    let cantidad = 0;
alert(marca);

    switch(marca){

        case 'ArgentinaLuz' :
            
            cantidad = parseInt(document.getElementById('Cantidad').value);
            if (cantidad = 5){
                descuento = 0.4;
                let total = (precio*cantidad)*descuento;
                document.getElementById('precioDescuento').value = total;
            }
            if (cantidad = 4){
                descuento = 0.25;
                let total = (precio*cantidad)*descuento;
                document.getElementById('precioDescuento').value = total;
            }
            if (cantidad = 3){
                descuento = 0.15;
                let total = (precio*cantidad)*descuento;
                document.getElementById('precioDescuento').value = total;
            }

        case 'FelipeLamparas' :
                 cantidad = parseInt(document.getElementById('Cantidad').value);
                if (cantidad == 5){
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad == 4){
                    descuento = 0.25;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad == 3){
                    descuento = 0.10;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                else{
                    descuento == 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }

        case 3 :
                //let cantidad = parseInt(document.getElementById('Cantidad').value);
                descuento = 0.3;
                if (cantidad = 5){
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 4){
                    descuento = 0.20;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 3){
                    descuento = 0.05;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                else{
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }

        case 4 :
                //let cantidad = parseInt(document.getElementById('Cantidad').value);
                if (cantidad = 5){
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 4){
                    descuento = 0.20;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 3){
                    descuento = 0.05;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                else{
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
        case 5 :
                //let cantidad = parseInt(document.getElementById('Cantidad').value);
                if (cantidad = 3){
                    descuento = 0.05;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 4){
                    descuento = 0.20;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                if (cantidad = 5){
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                else{
                    descuento = 0.3;
                    let total = (precio*cantidad)*descuento;
                    document.getElementById('precioDescuento').value = total;
                }
                


        default:
            descuento = 0.5;
            //let cantidad = parseInt(document.getElementById('Cantidad').value);
            if (cantidad >= 6){

                let total = (precio*cantidad)*descuento;
                    //let desc = total*0.5
                document.getElementById('precioDescuento').value = total;
            }
    }

     
     
}
