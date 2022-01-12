import axios from "axios"

const baseUrl = 'http://localhost:5000';

const actions = {
  getProducts: async (filter) => {
    let req;
    if (filter) {
      req = await axios.get(`${baseUrl}/products?tradeName=${filter}`);
      if (req.data.length === 0){
        req = await axios.get(`${baseUrl}/products?genericName=${filter}`)
      }
    }
    else  req = await axios.get(`${baseUrl}/products`);

    const res = await req.data;
    return res;
  },
  getProduct: async (name) => {
    console.log("name", name)
    const req = await axios.get(`${baseUrl}/products?genericName=${name}`);
    const res = await req.data;
    console.log(res[0]);
    return res[0];
  },
  getData: async (qtr, year) => {
    if (qtr && year) {
      const req = await axios.get(`${baseUrl}/table?year=${year}`);
      const res = await req.data[0];
      
      const filter = qtr.split(' ')
      const data = res.data.filter(item => item.quarter === parseInt(filter))[0];
      
      return data;
    }
  }
}

export default actions;