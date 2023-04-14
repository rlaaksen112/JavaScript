for (let i = 0; i < 3; i++) {
    document
        .querySelectorAll('.tab-button')[i]
        .addEventListener('click', function () {
            for (let j = 0; j < 3; j++) {
                document
                    .querySelectorAll('.tab-content')[j]
                    .classList
                    .remove('show');
                document
                    .querySelectorAll('.tab-button')[j]
                    .style
                    .borderTop = '';
                document
                    .querySelectorAll('.tab-button')[j]
                    .style
                    .borderLeft = '';
            }
            document
                .querySelectorAll('.tab-content')[i]
                .classList
                .add('show');
            document
                .querySelectorAll('.tab-button')[i]
                .style
                .borderTop = '2px solid rgb(156, 145, 45)';
            document
                .querySelectorAll('.tab-button')[i]
                .style
                .borderLeft = '1px solid wheat';
        })
    let product = {
        name: [
            '버스', '중형차', '소형차'
        ],
        price: [1000, 2000, 3000]
    };
    for (let i = 0; i < 3; i++) {
        document
            .querySelectorAll('.detail h2')[i]
            .innerHTML = product
            .name[i];
        document
            .querySelectorAll('.detail p')[i]
            .innerHTML = '가격 : ' + product
            .price[i];
    }
}
let select11 = document.querySelectorAll('.select_car')[0];     /* 두번쨰 셀렉트창 */
let select2 = document.querySelectorAll('.select_car')[1];
select11.addEventListener('input', function () {
    let select1 = document
        .querySelectorAll('.select_car')[0]
        .value;
    if ((select1 == '버스') || (select1 == '소형차') || (select1 == '중형차')) {
        select2
            .classList
            .remove('form_hide');
    }
})
let product_new = '<div>테스트</div>';      

document.querySelector('.tab-content').insertAdjacentHTML('beforeend',product_new);