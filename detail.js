
for (let i = 0; i < 3; i++) {
    document
        .querySelectorAll('.tab-button')[i]
        .addEventListener('click', function () {
            for (let j = 0; j < 3; j++) {
                document
                    .querySelectorAll('.tab-content')[j]
                    .classList
                    .remove('show');
            }
            document
                .querySelectorAll('.tab-content')[i]
                .classList
                .add('show');
        })
}
