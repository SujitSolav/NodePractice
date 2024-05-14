
const fs=require('fs');

fs.writeFileSync('sample.txt' ,'This is sample file which is created ...', (req,res)=>{
    console.log('File created Succesfully');
});

fs.appendFileSync('sample.txt', '\nthis is appended line two')
    console.log('appended succesfully');

fs.readFile('sample.txt', 'utf-8', (err, data)=>{
    console.log('readed Succesfully :' , data);
});