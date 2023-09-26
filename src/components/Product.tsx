import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Product} from "../models/Products";
import '../style.css'; // Import your CSS file here
import { Link } from 'react-router-dom';
import Loading from './Loading';


export default function Products() {
  const [mobileProducts, setMobileProducts] = useState<Product[]>([]);
  const [TabletProducts, setTabletProducts] = useState<Product[]>([]);
  const [AccessoriesProducts, setAccessoriesProducts] = useState<Product[]>([]);
  const [CarsProducts, setCarsProducts] = useState<Product[]>([]);
  const [BusProducts, setBusProducts] = useState<Product[]>([]);
  const [TrucksProducts, setTrucksProducts] = useState<Product[]>([]);
  const [ClothingProducts, setClothingProducts] = useState<Product[]>([]);
  const [WatchesProducts, setWatchesProducts] = useState<Product[]>([]);
  const [BagsProducts, setBagsProducts] = useState<Product[]>([]);
  const [ShoesProducts, setShoesProducts] = useState<Product[]>([]);
  const [JewelleryProducts, setJewelleryProducts] = useState<Product[]>([]);
  const [LaptopsComputerProducts, setLaptopsComputerProducts] = useState<Product[]>([]);
  const [NetworkingProducts, setNetworkingProducts] = useState<Product[]>([]);
  const [CamerasProducts, setCamerasProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch mobile products
    axios
      .get<Product[]>(`client/product?category=Mobile`)
      .then((res) => {setMobileProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch accessories products
    axios
      .get<Product[]>('client/product?category=Accessories')
      .then((res) => {setAccessoriesProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch car products
    axios
      .get<Product[]>('client/product?category=Cars')
      .then((res) => {setCarsProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch tablet products
    axios
      .get<Product[]>('client/product?category=Tablets')
      .then((res) => {setTabletProducts(res.data);
        setLoading(false);})
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch vehicle products
    axios
      .get<Product[]>('client/product?category=Buses')
      .then((res) => {setBusProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch Trucks products
    axios
      .get<Product[]>('client/product?category=Trucks')
      .then((res) => {setTrucksProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch vehicle products
    axios
      .get<Product[]>('client/product?category=Clothing')
      .then((res) => {setClothingProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch Watches products
    axios
      .get<Product[]>('client/product?category=Watches')
      .then((res) => {setWatchesProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch Bags products
    axios
      .get<Product[]>('client/product?category=Bags')
      .then((res) => {setBagsProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch Shoes products
    axios
      .get<Product[]>('client/product?category=Shoes')
      .then((res) => {setShoesProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch Jewellery products
    axios
      .get<Product[]>('client/product?category=Jewellery')
      .then((res) => {setJewelleryProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch Laptops Computer products
    axios
      .get<Product[]>('client/product?category=Computer')
      .then((res) => {setLaptopsComputerProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    // Fetch Networking products
    axios
      .get<Product[]>('client/product?category=Networking')
      .then((res) => {setNetworkingProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // Fetch Cameras products
    axios
      .get<Product[]>('client/product?category=Cameras')
      .then((res) => {setCamerasProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const sections = [
    {
      title: 'Mobile Phone',
      data: mobileProducts.slice(0, 6),
    },
    {
      title: 'Cars',
      data: CarsProducts.slice(0, 6),
    },
    {
      title: 'Laptops & Computer',
      data: LaptopsComputerProducts.slice(0, 6),
    },
    {
      title: 'Tablets',
      data: NetworkingProducts.slice(0, 6),
    },
    {
      title: 'Clothing',
      data: ClothingProducts.slice(0, 6),
    },
    {
      title: 'Tablets',
      data: TabletProducts.slice(0, 6),
    },
    {
      title: 'Watches',
      data: WatchesProducts.slice(0, 6),
    },
    {
      title: 'Shoes',
      data: ShoesProducts.slice(0, 6),
    },
    {
      title: 'Bags',
      data: BagsProducts.slice(0, 6),
    },
    {
      title: 'Jewellery',
      data: JewelleryProducts.slice(0, 6),
    },
    {
      title: 'Cameras',
      data: CamerasProducts.slice(0, 6),
    },
    {
      title: 'Bus',
      data: BusProducts.slice(0, 6),
    },
    {
      title: 'Trucks',
      data: TrucksProducts.slice(0, 6),
    },
    {
      title: 'Accessories',
      data: AccessoriesProducts.slice(0, 6),
    },
  ];

  if (loading) {
    return <Loading />; // You can replace this with your loading component
  }

  return (
    <div>
       {sections.map((section, index) => (
  <div key={index} className="section-container">
  
    <div  className="product-card">
    <span className="names">{section.title}</span>
      <div className="row">
        {section.data && section.data.map((product) => (
          <div key={product.id} className="product-container" style={{ width: '140px', margin: '5px' }}>
            <div  className="product-card1">
            <Link to={`/${product.Category}`}>
              <img
                src={product.images[0]?.image}
                alt={product.Category}
                className="product-image"
              /><br/><br/>
              <h5 style={{ fontSize: '12px', fontWeight: 'bold', color: 'black'}}>{product.Title.slice(0, 19)}</h5>
                <h6 style={{ fontSize: '12px', color: 'black'}}>{'₦'}{product.Price}</h6>
                </Link>
                </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))}
    </div>
  );
              }
