//import section
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Homescreen = () => {
  //usesatate to store search result and imput data
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
//api call section
  useEffect(() => {
    //empty condition checking
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    
    const apiUrl = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setResults(data.hits))
      .catch(error => console.error('Error fetching search results:', error));

  }, [query]);
  //input change handling

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    //data output
    <div >
      <div className="flex p-2  justify-between gap-2 bg-red-700 items-center border-b border-gray-300 flex-wrap">
    <div className="flex items-center gap-1">
      <img src="https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png" className="w-10 h-10" alt="Logo" />
      <h2 className="font-bold text-2xl text-black-600">Search Hacker News</h2>
    </div>

    

    <div class="relative w-96 mr-10">
       
      
      <form>   
       <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
       
        value={query}
        onChange={handleInputChange} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
       </div>
       </form>

        
        
       </div>
    
    


    
    <div className="flex flex-end ">
    <img
      src="https://c0.klipartz.com/pngpicture/224/890/gratis-png-logo-iconos-de-computadora-icono-de-hacker-de-sombrero-blanco.png"
      className="w-10 h-10" 
      alt=""
    />
    
       
    </div>
    </div>
    <div className=" p-2 h-screen bg-gray-50">

    
      <ul className='text-left'>
        {results.map(result => (
            <Link to={`/post/${result.objectID}`}>
          <li key={result.objectID} className='border border-gray-500 hover:bg-amber-600 text-left mt-3 p-4 rounded-md decoration-2 bg-amber-500 ' >
           
            
           
        
         
            {result.title}
           
          </li>
          </Link>
        ))}
        {results.length === 0 && <li className='h-30 text-center text-2xl mt-3 p-4  rounded-full bg-orange-500 ' >No results found.</li>}
      </ul>
      </div>
      </div>
    

  );
};

export default  Homescreen;