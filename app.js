const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;


async function start() {
    console.log('Спроба підключення до Монго ДБ і запуск сервера')
    try {
        console.log('підключення до бази даних Монго ДБ')
        let mongoUrl = config.get('mongoUrl');
        console.log('mongo url: ', mongoUrl);
        let parameters = { useNewUrlParser: true };
        console.log('connect to mongo with parameters: ', parameters);

        await mongoose.connect(mongoUrl, parameters)

        app.listen(PORT, () => console.log(`Програма була запущена...`, PORT));
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()



//const B = 9
// A = B || 8;

console.log('App start!');
