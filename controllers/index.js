
console.log('hello');

var arrProduct = [
    { id: 1, name: 'iphone x', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
    { id: 2, name: 'iphone xs', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
    { id: 3, name: 'iphone xs max', price: 3000, img: 'https://picsum.photos/id/3/200/200' },
]

function renderProduct() {

    console.log('Mình vừa viết hàm này devA');
    console.log('Dev B vừa mới sửa đoạn code này nha!');
    var content = '';
    for (var i = 0; i < arrProduct.length; i++) {
        let product = arrProduct[i];
        content += `
            <div class="col-4 mt-2">
                <div class="card">
                    <img src="${product.img}"/>
                    <div class="card-body">
                        <p>${product.price}</p>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.querySelector('#arrProduct').innerHTML = content;
}

renderProduct();