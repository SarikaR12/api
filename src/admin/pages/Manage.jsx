import React, { useEffect, useRef, useState } from 'react'
import { add_product, delete_product, get_product, put_product } from '../../Constant'
import { Delete_api, Post_api, get_api, update_api } from '../../api/Api'
import { FormControlLabel, Switch } from '@mui/material'

const Manage = () => {
  const [product, setproduct] = useState([])
  const [list, setlist] = useState({})
  const [view, setview] = useState({})
  const [model, setmodel] = useState("none");



  // get product
  let getProduct = async () => {
    try {
      let result = await get_api(get_product)
      console.log(result);
      setproduct(result.data)
      if (!product) {
        console.log("wrong");
      }

    } catch (error) {
      console.log(error, "error");
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  // post product

  let handle = (e) => {
    setlist({ ...list, [e.target.name]: e.target.value })
  }

  let addproduct = async () => {
    try {
      let res = await Post_api(add_product, list)
      console.log(res.data);
      setproduct([...product, res.data])

    } catch (error) {
      console.log(error, "error");
    }
  }
  // delete

  let remove = async (id) => {
    try {
      let res = await Delete_api(delete_product, id)
      setproduct(product.filter((val) => val.id != id))
    } catch (error) {
      console.log(error, "error");
    }
  }

  //update

  let viewupdate = (val) => {
    setmodel("block");
    console.log(val);
    setview(val);
  }
  let close = () => {
    setmodel("none")
  }
  let viewhandle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }

  let save = async (val) => {
    try {
      let res = await update_api(put_product, view)
      console.log(res);
      setproduct(product.map((val) => val.id == res.data.id ? { ...view } : val))
    } catch (error) {
      console.log(error, "error");
    }
  }



  return (
    <div>
      <h1>manage</h1>
      <div className="data">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <table border="1px" cellPadding="10px" cellSpacing="1px">
                <thead>
                  <>
                    <tr>
                      <th>name</th>
                      <th>price</th>
                      <th>desc</th>
                      <th>delete</th>
                      <th>update</th>
                    </tr>
                  </>
                </thead>
                <tbody>
                  {
                    product.map((val, ind) => {
                      return (
                        <React.Fragment key={ind}>
                          <tr>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.desc}</td>
                            <td><FormControlLabel control={<Switch defaultChecked />} /></td>
                            <td><button onClick={() => remove(val.id)}>delete</button></td>
                            <td><button onClick={() => viewupdate(val)} >update</button></td>
                          </tr>
                        </React.Fragment>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="data-table">
                name : <input type="text" name='name' onChange={handle} />
                price : <input type="num" name='price' onChange={handle} />
                desc : <input type="text" name='desc' onChange={handle} />
                <button onClick={addproduct}>add</button>
              </div>
              <div className="model my-2" style={{ display: `${model}`, position: "fixed", top: "0" }}>
                <span onClick={close}><i class="fa-regular fa-circle-xmark"></i></span>
                <label className='mb-3'>name :<input type="text" name='name' value={view.name} onChange={viewhandle} /></label>
                <label className='mb-3'>Price :<input type="number" name='price' value={view.price} onChange={viewhandle} /></label>
                <label className='mb-3'>Descrtion :<input type="text" name='desc' value={view.desc} onChange={viewhandle} /></label>
                <button onClick={save}>save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage;
