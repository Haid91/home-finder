import { useQuery } from '@apollo/client';
import Card from "../components/Card"
import { useState, useEffect } from 'react';
// import ProfileList from '../components/ProfileList';
import Navbar from '../components/Navbar'
import { QUERY_ME } from '../utils/queries';
import searchProperties from '../utils/api'



const Listing = () => {
  
  const { loading, data } = useQuery(QUERY_ME);
  const myListings = data?.me.listings || [];
  console.log (myListings, "mylistings")
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
        
          
          {myListings.length>0?myListings.map((list)=>{
            return <div className="col-12 col-md-4 my-3"> <Card list={list} page="listing" /></div>
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

export default Listing;
