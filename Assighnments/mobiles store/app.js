const div=document.querySelector('div')

const phones = [
    {
        brand: 'Samsung',
        img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Xiomi',
        img:"https://mobilemall.pk/public_html/images/product/product_1615284648Xiaomi-Redmi-Note10.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img:"https://phoneaqua.com/products/zero-10.webp",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pro-pakistan-priceoye-kxibd.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel'
    },
    {
        brand: 'Iphone',
        img:"https://images.priceoye.pk/apple-iphone-14-pro-max-pakistan-priceoye-4hr9p.jpg",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel'
    },
    {
        brand: 'Oppo',
        img:"https://propakistani.pk/price/wp-content/uploads/2019/03/oppo-f11-price.jpg",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Vivo',
        img:"https://mpip.pk/uploads/202205/pP50mn41FQ-vivo-y20-2021%20(1).jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel'
    },

]
for (let i=0; i<phones.length; i++){
div.innerHTML+=`<div class="main">  <h3> ${phones[i].brand}</h3>  
 img src="${phones[i].img}"<br>
 <h4>model:${phones[i].model}</h4><br>
 <h4>Ram:${phones[i].ram}</h4><br>
 <h4>Rom:${phones[i].rom}</h4><br>
 <h4>Camera:${phones[i].camera}</h4>


</div>           `



}










