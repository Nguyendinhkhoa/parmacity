import React, { useState, useEffect } from 'react';
import banner11 from '../images/banner11.jpg';
import banner12 from '../images/banner12.jpg';
import NewProduct from './NewProduct';
import productApi from '../../../api/productApi';
import { Link } from 'react-router-dom';
LatestProduct.propTypes = {};
function LatestProduct(props) {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const fecthProduct = async () => {
      const productList = await productApi.getAll({ sortBy: '-created', limit: 6 });
      const arrProduct = productList.results;
      setListProduct(arrProduct);
    };
    fecthProduct();
  }, []);
  return (
    <>
      <div className=" ltn__product-gutter  no-product-ratting pt-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Newest Products</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <Link to="/products">
                        <img src={banner11} alt="Banner" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                      <Link to="/products">
                        <img src={banner12} alt="Banner" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                <NewProduct listProduct={listProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestProduct;
