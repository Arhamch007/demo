document.addEventListener('DOMContentLoaded', function () {

    async function productfetch(url) {
        const data = await fetch(url);
        // console.log(data);
        const response = await data.json();

        const producted = document.querySelector('.products');
        // const title=document.getElementById('product-price').getAttribute("h5");
        // alert(title);






        for (let i = 0; i < response.length; i++) {

            // For Star RAtigns.


            const ratings = response[i].rating.rate;
            let percentagerounded = Math.round(ratings);
            let htmlstar = `&#xf005`;
            var star = ``;
            for (let x = 1; x <= percentagerounded; x++) { star += htmlstar; }


            // Cookies
            // let productdata = `<a class="btn btn-outline-dark btn-square btn " id="button_'+i+'" href="" ><i class="fa fa-shopping-cart"></i></a></div>`
            // var t = document.getElementById("button_'+i+'");
            // // console.log(t);
            // // window.onload = "addtocart()";
            // $(document).ready(function () {

            //     t.addEventListener('click', addtocart(), true);
            //     function addtocart() {
            //         var getimage = document.getElementById("image").getAttribute("src");
            //         var gettitle = document.getElementById("product-name").innerText
            //         var getprice = document.getElementById("product-price").innerText;
            //         var merge = "Image src" + getimage + "Tile" + gettitle + "Price" + getprice;
            //         console.log(merge);
            //     }
            // });



            // window.onload="addtocart()";
            // t.addEventListener('click',function addtocart(){
            //     var getimage = document.getElementById("image-'+i'").getAttribute("src");
            // var gettitle = document.getElementById("product-name-'+i'").innerText
            // var getprice = document.getElementById("product-price-'+i'").innerText;
            // var merge= "Image src"+getimage+"Tile"+gettitle+"Price"+getprice;
            //     alert($(this).attr(getimage));
            //     alert($(this).attr(gettitle));
            //     alert($(this).attr(getprice))    });







            // window.onload = "addtocart()"
            // button2.addEventListener("click",function addtocart() {
            //     var getimage=document.getElementById("image").getAttribute("src"); 
            //         var gettitle=document.getElementById("product-name").innerText
            //         var getprice=document.getElementById("product-price").innerText; 
            //         var merge= "Image src"+getimage+"Tile"+gettitle+"Price"+getprice;        
            //      document.cookie="Product-data="+merge+"; max-age="+60*60*24*10;}) 





            // Store Data in LOCAL STORAGE

            // console.log(localstorage);

            // console.log(`${response[i].title}` + " + " + `${response[i].id}`);

            // let cart=document.querySelectorAll('.cart');




            //    cart.addEventListener("click",showdata());



            const html = `      
            <div class="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div class="product-item bg-light mb-4">
                            <div class="product-img position-relative overflow-hidden">
                                <img class="img-fluid w-100 image" id="image" src="${response[i].image}" alt="">
                                <div class="product-action">
                                <div class="button1">
                                    <a class="btn btn-outline-dark btn-square btn cart" onclick="showdata(this)" data-id=${response[i].id} value=${response[i].id} data-img=${response[i].image} data-title=${response[i].title}><i class="fa fa-shopping-cart"></i></a>
                                    <a class="btn btn-outline-dark btn-square" href="" ><i class="far fa-heart"></i></a>
                                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                            </div>
                            <div class="text-center py-4">
                                <a  class="h6 text-decoration-none text-truncate product-name" id="product-name" href="shopdetail.html?product_id=${response[i].id}">${response[i].title}</a>
                                <div class="d-flex align-items-center justify-content-center mt-2" >
                                    <h5 id="product-price" class="product-price">${response[i].price}</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div class="d-flex align-items-center justify-content-center mb-1">
                                    <div id="stars" ></div>
                                </div>
                                <small>(${response[i].rating.count})</small>
                            </div>

                            <div class="d-flex align-items-center justify-content-center mb-1 fa">
                            ${star}
                            </div>
                                
                            </div>
                        </div>
                    </div>`;

            producted.insertAdjacentHTML('afterbegin', html)

        }





    };
    productfetch('https://fakestoreapi.com/products');


})

// For Storing new value in array all time

// const localstoragecontent=JSON.parse(localStorage.getItem('dataofproduct'));
// function  showdata(data){
//     // console.log(data.getAttribute("data-id"));
//     var idd= data.getAttribute("data-id");
//     var titlee= data.getAttribute("data-title");
//     var quantity;
//     // console.log(titlee);

//     var dataofproduct;
//     if(localstoragecontent===null){
//         dataofproduct=[];
//     }else{
//         dataofproduct = JSON.parse(localstoragecontent);
//     }

//     var o={'title':titlee , 'Id':idd}
//     dataofproduct.push(o);
//     localStorage.setItem('productdata',JSON.stringify(dataofproduct))


//    }

// for storing all new and old data

function showdata(data) {
    var idd = data.getAttribute("data-id");
    var titlee = data.getAttribute("data-title");
    var new_data = { 'title': titlee, 'Id': idd };

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]')
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data))

    let cart=document.getElementsByClassName('cart')

    for(let y =0 ; y < cart.length; y++){
        let insbtns= cart[y];
        insbtns.addEventListener('click', ()=>{
            console.log('button worked');
            localitem(qtyobject);
        })
    }

    const qtyobject={
        quantity:1
    }

    const quantitytotal=[];

    function localitem(qtyobject){
        let cartquantity= JSON.parse(localStorage.getItem('QTY'))
        if(cartquantity === null){
            quantitytotal.push(qtyobject)
            localStorage.setItem('QTY', JSON.stringify(quantitytotal))
        }else{
            cartquantity.map(item =>{

                if(qtyobject.quantity === item.quantity){
                    qtyobject.quantity = item.quantity +=1
                }else{
                    quantitytotal.push(item)
                }
                quantitytotal.push(item)

            })
            
        }
    }

    localStorage.setItem('QTY', JSON.stringify(quantitytotal))

}
