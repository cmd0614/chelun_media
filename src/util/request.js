import axios from 'axios';
export default {
  get(url){
    return new Promise(resolve=>{
      axios.get(url).then(res => {
        resolve(res.data)
      })
    })
  }
}