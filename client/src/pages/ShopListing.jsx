import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/cards/ProductCard';
import { filter } from '../utils/data';
import { useState } from 'react';

const Container=styled.div`
  height:100%;
  width:100%;
  border:1px solid red;
  display:flex;
  align-items:center;
  justify-content:center;
  background:${({theme})=> theme.bg};

  @media (max-width:768px){
    flex-direction:column;
  }
`;
const Filters=styled.div`
  width:230px;
  // overflow-y:scroll;
  padding:20px 16px;
`;
const Menu=styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`;
const FilterSection=styled.div`
  display:flex;
  flex-direction:column;
  gap:16px;
  padding:12px;
`;
const Title=styled.div`
  font-size:20px;
  font-weight:500;
`;
const Products=styled.div`

`;
const CardWrapper=styled.div``;
const SelectableItem=styled.div``;
const Item=styled.div``;
const Slider=styled.div``;
// const CircularProgress=styled.div``;

function ShopListing() {
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L", "XL"]); // Default selected sizes
  const [selectedCategories, setSelectedCategories] = useState([
    "Men",
    "Women",
    "Kids",
    "Bags",
  ]); // Default selected categories
  return (
    <Container>
      {/* {loading ? (
        <CircularProgress />
      ) : ( */}
        <>
          <Filters>
            <Menu>
              {filter.map((filters) => (
                <FilterSection>
                  <Title>{filters.name}</Title>
                  {filters.value === "price" ? (
                    <>
                      <Slider
                        aria-label="Price"
                        defaultValue={priceRange}
                        min={0}
                        max={1000}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: 0, label: "0" },
                          { value: 1000, label: "1000" },
                        ]}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                      />
                    </>
                  ) : filters.value === "size" ? (
                    <Item>
                      {filters.items.map((item) => (
                        <SelectableItem
                          key={item}
                          selected={selectedSizes.includes(item)}
                          onClick={() =>
                            setSelectedSizes((prevSizes) =>
                              prevSizes.includes(item)
                                ? prevSizes.filter(
                                    (category) => category !== item
                                  )
                                : [...prevSizes, item]
                            )
                          }
                        >
                          {item}
                        </SelectableItem>
                      ))}
                    </Item>
                  ) : filters.value === "category" ? (
                    <Item>
                      {filters.items.map((item) => (
                        <SelectableItem
                          key={item}
                          selected={selectedCategories.includes(item)}
                          onClick={() =>
                            setSelectedCategories((prevCategories) =>
                              prevCategories.includes(item)
                                ? prevCategories.filter(
                                    (category) => category !== item
                                  )
                                : [...prevCategories, item]
                            )
                          }
                        >
                          {item}
                        </SelectableItem>
                      ))}
                    </Item>
                  ) : null}
                </FilterSection>
              ))}
            </Menu>
          </Filters>
          <Products>
            <CardWrapper>
              {/* {products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}<ProductCard/>
            </CardWrapper>
          </Products>
        </>
      {/* )} */}
    </Container>
  )
}

export default ShopListing;
