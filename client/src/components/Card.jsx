import parse from 'html-react-parser';
import { useMutation } from '@apollo/client';
import { ADD_LISTING } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_LISTING } from '../utils/mutations';
function Card({ list, page }) {
const [RemoveListing]=useMutation(REMOVE_LISTING, {
  refetchQueries: [

    QUERY_ME,
    'me'
  ]
})
  const [AddListing] = useMutation(ADD_LISTING, {
    refetchQueries: [

      QUERY_ME,
      'me'
    ]
  })
  async function handleDelete(listingId){
    await RemoveListing({
      variables: {listingId:listingId}
    })
  }
  async function handleClick(list) {
    await AddListing({
      variables: {
        channel: list.channel, description: list.description, priceRange: list.advertising.priceRange,listingId:list.listingId
      }
    })
  }
  console.log(list)
  return (
    <>
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src="img/House3.avif" />
          </div>
          <div class="content">
            <div class="header">{list.channel} <i onClick={() => handleClick(list)} class="bookmark empty icon"></i>
            {page==="listing"? <i onClick={()=>handleDelete(list.listingId)} class="trash icon"></i>:""} 
            </div>
            <div class="meta">
              <a>{list.advertising ? list.advertising.priceRange : 'contact agent for price'}</a>
            </div>
            <div class="description">
              {parse(list.description)}
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              Joined
            </span>
            <span>
              <i class="user icon"></i>
              75
            </span>
          </div>
        </div>
        {/* <div class="card">
    <div class="image">
      <img src="img/House2.jpg"/>
    </div>
    <div class="content">
      <div class="header">Sell</div>
      <div class="meta">
        <span class="date">C</span>
      </div>
      <div class="description">
        Sell your property 
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined 
      </span>
      <span>
        <i class="user icon"></i>
        35 
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="img/House.jpg"/>
    </div>
    <div class="content">
      <div class="header">Rent</div>
      <div class="meta">
        <a>C</a>
      </div>
      <div class="description">
        Get the best Rent prices out there 
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined 
      </span>
      <span>
        <i class="user icon"></i>
        151 
      </span>
    </div>
  </div> */}
      </div>
    </>
  )
}

export default Card