import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumb_Search from './Breadcrumb_Search'
import Text_Search from './Text_Search'
import Input_Search from './Input_Search'
import Categories_Search from './Categories_Search'
import Footer_Search from './Footer_Search'
import TopScroll from '../TopScroll/TopScroll'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFn } from '../../store/search/search.action'
import DataView_Search from './DataView_Search'



const Search = () => {
  const [inputText, setInputText] = useState("");
  const [activeCategory, setactiveCategory] = useState("All");

  
  const handleChangeActiveCategory = (param) => {
    setactiveCategory(param);
  }
  
  const dispatch = useDispatch();
  dispatch(getDataFn());

  const handleInputChange = (data) => {
    setInputText(data)
  }
  
  const data = useSelector((store) => store.Search);

    const [filteredPosts, setFilteredPosts] = useState([]);

    const handleSearch = (query) => {
      // Split the search query into words
      const searchWords = query.trim().split(/\s+/);

      // Filter the blog posts based on the search words

      // console.log("13312",query.toString().length);
      if (Array.isArray(data.resourceData) && query.toString().length > 0) {

        let sortedData = data.resourceData;
        if(activeCategory != "All" ){
          let temp = data.resourceData?.filter((el) => (el.attributes.category).toString().toLowerCase() == activeCategory.toString().toLowerCase());
          sortedData = temp;
        }
        else{
          sortedData = data.resourceData;
        }

        const filtered = sortedData?.filter((post) =>
          searchWords.every((word) =>
            post.attributes.heading.toLowerCase().includes(word.toLowerCase())
          )
        );
        console.log("filter", filtered);
        setFilteredPosts(filtered);
      } else {
        // Handle the case where data is not an array (e.g., show an error message or handle it as needed)
        setFilteredPosts([]);
      }
      // setFilteredPosts(filtered);

  };


  React.useEffect(() => {
    const getData = setTimeout(() => {
      handleSearch(inputText);
     
    }, 2000)

    return () => clearTimeout(getData)
  }, [inputText])

  React.useEffect(() => {
      handleSearch(inputText);
     
  }, [activeCategory])

  return (
    <>
        <Box>
            <Navbar/>
            <Breadcrumb_Search/>
            <Text_Search/>
            <Input_Search handleInputChange={handleInputChange} inputText={inputText}/>
            <Categories_Search handleChangeActiveCategory={handleChangeActiveCategory} activeCategory={activeCategory}/>
            <DataView_Search data={filteredPosts}/>
            <Footer_Search/>
            <TopScroll/>
        </Box>
    </>
  )
}

export default Search