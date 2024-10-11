 
import "./user.css";

const User = ({data}) => {

    const {email , name , gender ,dob, location,picture} = data
  return (
    <div className="user_container">
      <div className="user_details">
        <div className="col_one col">
          <div className="Name">{`${name.title} ${name.first} ${name.last}`}</div>
          <div className="label">Email</div>
          <div className="email">{email}</div>
          <div className="label">Address</div>
          <div>{`${location.city}, ${location.country} `}</div>
        </div>
        <div className="col_two col">
          <div className="label">Gender</div>
          <div>{gender}</div>
        </div>
        <div className="col_three col">
          <div className="label">Age</div>
          <div>{dob.age}</div>
        </div>
      </div>
      <div className="user_image"><img src={picture.thumbnail} alt="" /></div>
    </div>
  );
};

export default User;
