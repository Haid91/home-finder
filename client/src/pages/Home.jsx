import { useQuery } from '@apollo/client';
import Card from "../components/Card"
import { useState, useEffect } from 'react';
// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';
import searchProperties from '../utils/api'

const Home = () => {
  
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
const [propertyData, setPropertyData] = useState ([])
const [type, setType]=useState(localStorage.getItem('type')||'')
useEffect (async ()=>{

const listings=await searchProperties(type, 'sydney')


console.log (listings)
},[])
  return (
    <main>
{console.log (type)}
      <div className="row justify-center">
        <div className="col-12 col-md-4 my-3">
          {}
          <Card />
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Home;
