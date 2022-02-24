import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SlideInProduct from '../Product/components/Slide';
import Product from '../Product/components/Product';
import './search.css';
import Loading from '../Loading'
import EmptySearch from './EmptySearch';

function Search(props) {
  const listSearch = useSelector((state) => state.Search.results);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    setLoading(1);
    setTimeout(() => {
      setLoading(0);
    }, 1000);
  }, [listSearch]);
  return (
    <div>
      {loading===1 ? (
        <Loading/>
      ) : (
        <>
          <SlideInProduct page="Search Results" />
          <div class="container " id="search-results">
            <h2>Search Results</h2>
            <hr></hr>
            <div className="row">
              {listSearch && listSearch.length > 0
                ? listSearch.map((product, index) => {
                    return <Product product={product} key={index} />;
                  })
                : <EmptySearch/>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
