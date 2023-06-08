const str = '123456';

const sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
const sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if(sum1 ===sum2) {
   console.log('Да');
} else {
   console.log('Нет');
}
