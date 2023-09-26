import React, {SyntheticEvent, useEffect, useState} from 'react';
import axios from 'axios';
import Wrapper from '../components/Wrapper';
import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';

interface Field {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}


interface CategoryFields {
  [key: string]: Field[];
}


const Create: React.FC = () => {
  const categoryFields: CategoryFields = {
    Category: [
      {label: 'None', placeholder: 'Title', value: '', onChange: (value) => {}},
    ],
    MobilePhone: [
      {
        label: 'MobilePhones',
        placeholder: 'Category',
        value: '',
        onChange: (value) => {},
      },

      {label: '', placeholder: 'Title', value: '', onChange: (value) => {}},
      {
        label: '',
        placeholder: 'Description',
        value: '',
        onChange: (value) => {},
      },
      {
        label: 'BrandNew',
        placeholder: 'Condition',
        value: '',
        onChange: (value) => {},
      },
      {label: 'City', placeholder: 'City', value: '', onChange: (value) => {}},
      {label: 'State', placeholder: 'State', value: '', onChange: (value) => {}},
      {label: 'Country', placeholder: 'Country', value: '', onChange: (value) => {}},
      {label: 'Price', placeholder: 'Price', value: '', onChange: (value) => {}},
      {
        label: 'No',
        placeholder: 'Negotiation',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Brand', value: '', onChange: (value) => {}},
    ],
    Agriculture: [
      {
        label: 'FarmAnimals',
        placeholder: 'Category',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Title', value: '', onChange: (value) => {}},
      {
        label: '',
        placeholder: 'Description',
        value: '',
        onChange: (value) => {},
      },
      {
        label: 'BrandNew',
        placeholder: 'Condition',
        value: '',
        onChange: (value) => {},
      },
      {label: 'City', placeholder: 'City', value: '', onChange: (value) => {}},
      {label: 'State', placeholder: 'State', value: '', onChange: (value) => {}},
      {label: 'Country', placeholder: 'Country', value: '', onChange: (value) => {}},
      {label: 'Price', placeholder: 'Price', value: '', onChange: (value) => {}},
      {
        label: 'No',
        placeholder: 'Negotiation',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Brand', value: '', onChange: (value) => {}},
    ],
    Vehicles: [
      {
        label: 'Cars',
        placeholder: 'Category',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Title', value: '', onChange: (value) => {}},
      {
        label: '',
        placeholder: 'Description',
        value: '',
        onChange: (value) => {},
      },
      {
        label: 'VBrandNew',
        placeholder: 'Condition',
        value: '',
        onChange: (value) => {},
      },
      {label: 'City', placeholder: 'City', value: '', onChange: (value) => {}},
      {label: 'State', placeholder: 'State', value: '', onChange: (value) => {}},
      {label: 'Country', placeholder: 'Country', value: '', onChange: (value) => {}},
      {label: 'Price', placeholder: 'Price', value: '', onChange: (value) => {}},
      {
        label: 'No',
        placeholder: 'Negotiation',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Brand', value: '', onChange: (value) => {}},
    ],
    Fashion: [
      {
        label: 'Clothing',
        placeholder: 'Category',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Title', value: '', onChange: (value) => {}},
      {
        label: '',
        placeholder: 'Description',
        value: '',
        onChange: (value) => {},
      },
      {
        label: 'BrandNew',
        placeholder: 'Condition',
        value: '',
        onChange: (value) => {},
      },
      {label: 'City', placeholder: 'City', value: '', onChange: (value) => {}},
      {label: 'State', placeholder: 'State', value: '', onChange: (value) => {}},
      {label: 'Country', placeholder: 'Country', value: '', onChange: (value) => {}},
      {label: 'Price', placeholder: 'Price', value: '', onChange: (value) => {}},
      {
        label: 'No',
        placeholder: 'Negotiation',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Brand', value: '', onChange: (value) => {}},
    ],
    Electronics: [
      {
        label: 'Laptops',
        placeholder: 'Category',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Title', value: '', onChange: (value) => {}},
      {
        label: '',
        placeholder: 'Description',
        value: '',
        onChange: (value) => {},
      },
      {
        label: 'BrandNew',
        placeholder: 'Condition',
        value: '',
        onChange: (value) => {},
      },
      {label: 'City', placeholder: 'City', value: '', onChange: (value) => {}},
      {label: 'State', placeholder: 'State', value: '', onChange: (value) => {}},
      {label: 'Country', placeholder: 'Country', value: '', onChange: (value) => {}},
      {label: 'Price', placeholder: 'Price', value: '', onChange: (value) => {}},
      {
        label: 'No',
        placeholder: 'Negotiation',
        value: '',
        onChange: (value) => {},
      },
      {label: '', placeholder: 'Brand', value: '', onChange: (value) => {}},
    ],
    // Add more categories and fields as needed
  };
  const [selectedCategory, setSelectedCategory] = useState<string>('Category');

  const [productInput, setProductInput] = useState({
    Category: 'Mobile Phones, Tablets, Smart Watches AND Accessories',
    Title: '',
    Description: '',
    Condition: '',
    City: '',
    State: '',
    Country: '',
    Price: '',
    Brand: '',
    Negotiation: '',
  });
  const [err, setErr] = useState('');
  const [ready, setReady] = useState<File[]>([]);

  const handleInputChange = (field: Field, text: string) => {
    setProductInput({ ...productInput, [field.placeholder]: text });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // resetting the ready array back to empty
    setReady([]);

    const prepare = e.target.files;
    if (prepare) {
      const filesArray: File[] = Array.from(prepare); // Convert the FileList to an array
      setReady(filesArray);
    }
  };



 
console.log(productInput);
const submit = async (e: SyntheticEvent) => {
  e.preventDefault();
    // setIsLoading(true);

    const formData = new FormData();
    formData.append('Category', productInput.Category);
    formData.append('Title', productInput.Title);
    formData.append('Description', productInput.Description);
    formData.append('Itemcondition', productInput.Condition);
    formData.append('City', productInput.City);
    formData.append('State', productInput.State);
    formData.append('Country', productInput.Country);
    formData.append('Price', productInput.Price);
    formData.append('Brand', productInput.Brand);
    formData.append('Negotiation', productInput.Negotiation);

    if (ready.length > 0) {
      ready.forEach((image) => {
        const imageName = image.name;
        const imageType = 'image/jpeg'; // Change this as needed
  
        formData.append('uploaded_images', image, imageName);
      });
    }
    console.log(formData.getAll(`uploaded_images`));
  

    console.log(formData);

    try {
      const response = await axios.post('client/product/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setProductInput({
          Category: '',
          Title: '',
          Description: '',
          Condition: '',
          City: '',
          State: '',
          Country: '',
          Price: '',
          Brand: '',
          Negotiation: '',
        });
        setReady([]);
        alert('Post has being Created');
      } else {
        throw setErr(`${JSON.stringify(response.data)}`);
      }
    } catch (error: any) {
      setErr(`${JSON.stringify(error.response.data)}`);
      console.log(`${JSON.stringify(error.response.data)}`);
      // setIsLoading(false);
    }
  };
  const renderInputs = (): JSX.Element[] => {
    const fields = categoryFields[selectedCategory];
    return fields.map((field, index) => (
      <div key={index}>
        {field.label === 'MobilePhones' ? (
          <div className="form-floating">
          <select
            value={productInput.Category}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Category: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Mobile Phones" value="Mobile Phones" />
            <option label="Tablets" value="Tablets" />
            <option label="Smart Watches" value="Smart Watches" />
            <option label="Accessories" value="Accessories" />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'FarmAnimals' ? (
          <div className="form-floating">
          <select
            value={productInput.Category}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Category: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Farm Animals" value="Farm Animals" />
            <option label="Farm Equipment" value="Farm Equipment" />
            <option label="Feeds" value="Feeds" />
            <option label="Seeds" value="Seeds" />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'Cars' ? (
          <div className="form-floating">
          <select
            value={productInput.Category}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Category: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Cars" value="Cars" />
            <option label="Buses" value="Buses" />
            <option label="Trucks" value="Trucks" />
            <option
              label="Vehicle Parts AND Accessories"
              value="Vehicle Parts AND Accessories"
            />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'Clothing' ? (
          <div className="form-floating">
          <select
            value={productInput.Category}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Category: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Clothing" value="Clothing" />
            <option label="Bags" value="Bags" />
            <option label="Shoes" value="Shoes" />
            <option label="Jewellery" value="Jewellery" />
            <option
              label="Wedding Wear AND Accessories"
              value="Wedding Wear AND Accessories"
            />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'Laptops' ? (
          <div className="form-floating">

          <select
            value={productInput.Category}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Category: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option
              label="Laptops and Computer"
              value="Laptops and Computer"
            />
            <option label="Video Games" value="Video Games" />
            <option
              label="Networking Products"
              value="Networking Products"
            />
            <option
              label="Photo and Video Cameras"
              value="Photo and Video Cameras"
            />
            <option
              label="Laptops and Computer Accessories"
              value="Laptops and Computer Accessories"
            />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'BrandNew' ? (
          <div className="form-floating">
          <select
            value={productInput.Condition}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Condition: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Brand New" value="Brand New" />
            <option label="Used" value="Used" />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'VBrandNew' ? (
          <div className="form-floating">
          <select
            value={productInput.Condition}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Condition: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="Brand New" value="Brand New" />
            <option label="Foreign Used" value="Foreign Used" />
            <option label="Nigeria Used" value="Nigeria Used" />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'No' ? (
          <div className="form-floating">
          <select
            value={productInput.Negotiation}
            className="form-control" 
            id="floatingInput4"
            onChange={(event) =>
              setProductInput({...productInput, Negotiation: event.target.value })
            }
            >
            <option label="Select" value="" />
            <option label="No" value="No" />
            <option label="Yes" value="Yes" />
          </select>
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'None' ? (
          <div>{''}</div>
        ) : field.label === 'Price' ? (
          <div className="form-floating">
          <input
            key={index}
            className="form-control"
            id="floatingInput4"
            placeholder={field.placeholder}
            type="number"
          onChange={(e) => handleInputChange(field, e.target.value)} required
          />
           <label htmlFor="floatingInput4">{field.placeholder}</label>
           </div>                             
        ) : (
          <div className="form-floating">
          <input
            key={index}
            className="form-control"
            id="floatingInput4"
            placeholder={field.placeholder}
            onChange={(e) => handleInputChange(field, e.target.value)} required
          />
          <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        )}
      </div>
    ));
  };

  return (
    <Wrapper>
    <form onSubmit={submit} encType="multipart/form-data" style={{marginBottom: '100px'}}>
      <div>{err}</div>
      <div className="form-floating">
        <select
          value={selectedCategory} // Updated value attribute
          className="form-control"
          id="floatingInput4"
          onChange={(e) => setSelectedCategory(e.target.value)} // Updated onChange handler
        >
          {Object.keys(categoryFields).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label htmlFor="floatingInput4">Select Category</label>
      </div>
      <div className="row">
        {renderInputs()}
      </div>
      <div><input type="file" accept="image/*" name="uploaded_images" id="contained-button-file" onChange= {handleImage} multiple /></div>
      <div className="row">
        {ready.length > 0 ? (
          ready.map((item, index) => (
            <div key={index} className="product-container" style={{ width: '120px', margin: '5px' }}>
              <img src={URL.createObjectURL(item)} alt={`Image ${index}`} className="product-image"/>
            </div>
          ))
        ) : (
          <p>No images selected.</p>
        )}
      </div>
      <div>
      <Button color="primary" variant="text" className="w-100 btn btn-lg" type="submit" style={{float: 'right', boxShadow: '0 0 0.475rem 0 rgb(170, 170, 170)', marginTop: '20px'}}>Post</Button>
      </div>
    </form>
  </Wrapper>
  
  );
};
export default Create;
