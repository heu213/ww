/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './sidebar.scss';
import { Menu } from 'antd';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    async function fetchDataCategories() {
      const data = await axios.get('http://localhost:5000/categories/all');
      // eslint-disable-next-line no-console
      console.log(data.data.data);
      // eslint-disable-next-line no-underscore-dangle
      setCategories(data.data.data);
    }
    fetchDataCategories();
  }, []);
  const onClickCategory = (e) => {
    const currentLocation = window.location;
    const params = new URLSearchParams(currentLocation.search) || '';
    params.delete('category');
    params.append('category', e.key);
    navigate({
      pathname: currentLocation.pathname,
      search: `?${params}`,
    });
  };
  useEffect(() => {
    async function fetchDataBrands() {
      const data = await axios.get('http://localhost:5000/brands/all');
      // eslint-disable-next-line no-console
      console.log(data.data.data);
      // eslint-disable-next-line no-underscore-dangle
      setBrands(data.data.data);
    }
    fetchDataBrands();
  }, []);
  const onClickBrand = (e) => {
    const currentLocation = window.location;
    const params = new URLSearchParams(currentLocation.search) || '';
    params.delete('brand');
    params.append('brand', e.key);
    navigate({
      pathname: currentLocation.pathname,
      search: `?${params}`,
    });
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const itemsCategory = [
    getItem(
      'Danh mục',
      'category',
      null,
      categories?.map((item) => getItem(item.name, item._id)),
    ),
  ];

  const itemsBrand = [
    getItem(
      'Hãng',
      'brand',
      null,
      brands?.map((item) => getItem(item.name, item._id)),
    ),
  ];

  return (
    <div className="h-full w-divlogo overflow-x-hidden overflow-y-scroll">
      <Menu
        onClick={onClickCategory}
        style={{
          width: '100%',
          fontWeight: 'bold',
        }}
        defaultOpenKeys={['category']}
        mode="inline"
        items={itemsCategory}
      />
      <Menu
        onClick={onClickBrand}
        style={{
          width: '100%',
          fontWeight: 'bold',
        }}
        defaultOpenKeys={['brand']}
        mode="inline"
        items={itemsBrand}
      />
    </div>
  );
};
export default Sidebar;
