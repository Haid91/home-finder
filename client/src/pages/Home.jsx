import { useQuery } from '@apollo/client';
import Card from "../components/Card"
import { useState, useEffect } from 'react';
// import ProfileList from '../components/ProfileList';
import Navbar from '../components/Navbar'

import searchProperties from '../utils/api'


const Home = () => {
  
 
const [propertyData, setPropertyData] = useState ([])
const [type, setType]=useState(localStorage.getItem('type')||'')
const [listings, setlistings]=useState([])

  async function handleChange(event){
    setType(event.target.value)
    const data=await searchProperties(event.target.value, 'Sydney')
    setlistings(data)
  }
  useEffect(async()=>{
    const data=await searchProperties('buy', 'Sydney')
    setlistings(data)
  },[] )
  return (
    <>
    <Navbar type={type} handleChange={handleChange} />
    
    <main>
{console.log (type)}
      <div className="row justify-center">
        
          {console.log(listings[0],'listings')}
          {listings.length>0?listings.map((list)=>{
            return <div className="col-12 col-md-4 my-3"> <Card list={list} page="home" /></div>
          }):'no search found'}
          
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )} */}
        
      </div>
    </main>
    </>
  );
};

export default Home;
