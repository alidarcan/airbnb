/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location == "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="card-photo"
        src={`/images/${props.coverImg}`}
        alt="katie"
      />
      <div className="card--info">
        <div className="card--rating">
          <img className="card--star" src="/images/star.png" alt="star" />
          <p className="card--rating-number">{props.stats.rating}</p>
          <p className="card--count">({props.stats.reviewCount}) • </p>
          <p className="card--country">{props.location}</p>
        </div>
        <p className="card--text">{props.title}</p>
        <p className="card--text">
          <span className="card--price">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
