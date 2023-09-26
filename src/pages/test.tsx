import React, { SyntheticEvent, useState } from 'react';
import Wrapper from '../components/Wrapper';
import axios from 'axios';
import Swal from 'sweetalert2';
import CurrencyFormat from 'react-currency-format';
import { Navigate } from 'react-router-dom';

interface Field {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

interface CategoryFields {
  [key: string]: Field[];
}
const Create = () => {
const categoryFields: CategoryFields = {
  Category: [
    { label: 'None', placeholder: 'Title', value: '', onChangeText: () => {} },
  ],
  MobilePhone: [
    {
      label: 'MobilePhones',
      placeholder: 'Category',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Title', value: '', onChangeText: () => {} },
    {
      label: '',
      placeholder: 'Description',
      value: '',
      onChangeText: () => {},
    },
    {
      label: 'BrandNew',
      placeholder: 'Condition',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'City', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'State', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Country', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Price', value: '', onChangeText: () => {} },
    {
      label: 'No',
      placeholder: 'Negotiation',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Brand', value: '', onChangeText: () => {} },
  ],
  Agriculture: [
    {
      label: 'FarmAnimals',
      placeholder: 'Category',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Title', value: '', onChangeText: () => {} },
    {
      label: '',
      placeholder: 'Description',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'City', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'State', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Country', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Price', value: '', onChangeText: () => {} },
  ],
  Vehicles: [
    {
      label: 'Cars',
      placeholder: 'Category',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Title', value: '', onChangeText: () => {} },
    {
      label: '',
      placeholder: 'Description',
      value: '',
      onChangeText: () => {},
    },
    {
      label: 'VBrandNew',
      placeholder: 'Condition',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'City', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'State', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Country', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Price', value: '', onChangeText: () => {} },
    {
      label: 'No',
      placeholder: 'Negotiation',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Brand', value: '', onChangeText: () => {} },
  ],
  Fashion: [
    {
      label: 'Clothing',
      placeholder: 'Category',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Title', value: '', onChangeText: () => {} },
    {
      label: '',
      placeholder: 'Description',
      value: '',
      onChangeText: () => {},
    },
    {
      label: 'BrandNew',
      placeholder: 'Condition',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'City', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'State', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Country', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Price', value: '', onChangeText: () => {} },
    {
      label: 'No',
      placeholder: 'Negotiation',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Brand', value: '', onChangeText: () => {} },
  ],
  Electronics: [
    {
      label: 'Laptops',
      placeholder: 'Category',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Title', value: '', onChangeText: () => {} },
    {
      label: '',
      placeholder: 'Description',
      value: '',
      onChangeText: () => {},
    },
    {
      label: 'BrandNew',
      placeholder: 'Condition',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'City', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'State', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Country', value: '', onChangeText: () => {} },
    { label: '', placeholder: 'Price', value: '', onChangeText: () => {} },
    {
      label: 'No',
      placeholder: 'Negotiation',
      value: '',
      onChangeText: () => {},
    },
    { label: '', placeholder: 'Brand', value: '', onChangeText: () => {} },
  ],
  // Add more categories and fields as needed
};

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
const [redirect, setRedirect] = useState(false);

const handleInput = (e: any) => {
  e.persist();
  setProductInput({ ...productInput, [e.target.name]: e.target.value });
};

let ready: any[] = [];

const handleImage = (e: any) => {
  // resetting the ready array back to empty
  ready = [];
  let prepare = e.target.files;
  for (let i = 0; i < prepare.length; i++) {
    ready.push(prepare[i]);
  }
};

const submit = async (e: SyntheticEvent) => {
  e.preventDefault();

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

  for (let i = 0; i < ready.length; i++) {
    formData.append('image[]', ready[i]);
  }
  console.log(formData.getAll('image[]'));

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
      } else {
        throw setErr(`${JSON.stringify(response.data)}`);
      }
    } catch (error: any) {
      setErr(`${JSON.stringify(error.response.data)}`);
      console.log(`${JSON.stringify(error.response.data)}`);
      // setIsLoading(false);
    }
};

if (redirect) {
  return <Navigate to={'/'} />;
}

const renderInputs = (): JSX.Element[] => {
  const fields = categoryFields[productInput.Category];
  if (!fields) {
    return [];
  }
  return fields.map((field, index) => (
    <div key={index}>
      {field.label === 'MobilePhones' ||
        field.label === 'FarmAnimals' ||
        field.label === 'Cars' ||
        field.label === 'Clothing' ||
        field.label === 'Laptops' ? (
          <div className="form-floating">
            <select
              value={productInput.Category}
              className="form-control"
              id="floatingInput4"
              onChange={(e) =>
                setProductInput({ ...productInput, Category: e.target.value })
              }
            >
              <option value="">Select</option>
              {field.label === 'MobilePhones' ? (
                <>
                  <option value="Mobile Phones">Mobile Phones</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Smart Watches">Smart Watches</option>
                  <option value="Accessories">Accessories</option>
                </>
              ) : field.label === 'FarmAnimals' ? (
                <>
                  <option value="Farm Animals">Farm Animals</option>
                  <option value="Farm Equipment">Farm Equipment</option>
                  <option value="Feeds">Feeds</option>
                  <option value="Seeds">Seeds</option>
                </>
              ) : field.label === 'Cars' ? (
                <>
                  <option value="Cars">Cars</option>
                  <option value="Buses">Buses</option>
                  <option value="Trucks">Trucks</option>
                  <option value="Vehicle Parts AND Accessories">
                    Vehicle Parts AND Accessories
                  </option>
                </>
              ) : field.label === 'Clothing' ? (
                <>
                  <option value="Clothing">Clothing</option>
                  <option value="Bags">Bags</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Wedding Wear AND Accessories">
                    Wedding Wear AND Accessories
                  </option>
                </>
              ) : field.label === 'Laptops' ? (
                <>
                  <option value="Laptops and Computer">Laptops and Computer</option>
                  <option value="Video Games">Video Games</option>
                  <option value="Networking Products">Networking Products</option>
                  <option value="Photo and Video Cameras">
                    Photo and Video Cameras
                  </option>
                  <option value="Laptops and Computer Accessories">
                    Laptops and Computer Accessories
                  </option>
                </>
              ) : null}
            </select>
            <label htmlFor="floatingInput4">{field.placeholder}</label>
          </div>
        ) : field.label === 'BrandNew' ||
          field.label === 'VBrandNew' ||
          field.label === 'No' ? (
            <div className="form-floating">
              <select
                value={field.label}
                className="form-control"
                id={`floatingInput${index}`} // Use a unique ID for each input
                onChange={(e) =>
                  setProductInput({ ...productInput, [field.label]: e.target.value })
                }
              >
                <option value="">Select</option>
                {field.label === 'BrandNew' ? (
                  <>
                    <option value="Brand New">Brand New</option>
                    <option value="Used">Used</option>
                  </>
                ) : field.label === 'VBrandNew' ? (
                  <>
                    <option value="Brand New">Brand New</option>
                    <option value="Foreign Used">Foreign Used</option>
                    <option value="Nigeria Used">Nigeria Used</option>
                  </>
                ) : field.label === 'No' ? (
                  <>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </>
                ) : null}
              </select>
              <label htmlFor={`floatingInput${index}`}>{field.placeholder}</label>
            </div>
          ) : field.label === 'None' ? (
            <span>{''}</span>
          ) : (
            <div className="form-floating">
              <input
                key={index}
                type="text"
                className="form-control"
                id={`floatingInput${index}`} // Use a unique ID for each input
                name={field.placeholder}
                placeholder={field.placeholder}
                onChange={(e) => handleInput(e)}
              />
              <label htmlFor={`floatingInput${index}`}>{field.placeholder}</label>
            </div>
          )}
    </div>
  ));
};

return (
  <Wrapper>
    <form onSubmit={submit} encType="multipart/form-data">
      <div>{err}</div>
      <div className="form-floating">
        <select
          value={productInput.Category}
          className="form-control"
          id="floatingInput4"
          onChange={(e) => setProductInput({ ...productInput, Category: e.target.value })}
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
      <div>
        <input type="file" accept="image/*" name="image[]" id="contained-button-file" onChange={handleImage} multiple />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </Wrapper>
);
};

export default Create;
