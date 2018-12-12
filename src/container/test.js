import axios from 'axios';

axios.get('/data').then(res=>{
    if(res.status=='OK'&&res.data.code==200){
        console.log(res.data.data.results);
    }
});