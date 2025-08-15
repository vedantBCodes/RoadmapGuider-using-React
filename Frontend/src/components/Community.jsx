import React from "react";

const communityMembers = [
  {
    name: "Omkar Pandagale",
    country: "India",
    image: "Images/vishalVerma.png",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia culpa doloribus laboriosam asperiores, facilis placeat est ea excepturi tempora ad perspiciatis alias tenetur voluptas consequuntur, quia veniam adipisci reiciendis, deleniti autem odit beatae iusto. Dicta, quia!.",
  },
  {
    name: "Shraddha P",
    country: "India",
    image: "Images/Kenia.png",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia culpa doloribus laboriosam asperiores, facilis placeat est ea excepturi tempora ad perspiciatis alias tenetur voluptas consequuntur, quia veniam adipisci reiciendis, deleniti autem odit beatae iusto. Dicta, quia!.",
  },
  {
    name: "Chetan Teli",
    country: "India",
    image: "Images/ryanLee.png",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia culpa doloribus laboriosam asperiores, facilis placeat est ea excepturi tempora ad perspiciatis alias tenetur voluptas consequuntur, quia veniam adipisci reiciendis, deleniti autem odit beatae iusto. Dicta, quia!",
  },
];

const Community = () => {
  return (
    <div className="RoadmapGuiderCommunity">
      <p className="text-center display-5">From the RoadmapGuider community</p>
      <p className="text-center h4">
        10+ people have already joined our community
      </p>
      <br />
      <div className="row justify-content-center">
        {communityMembers.map((member, idx) => (
          <div className="col-3" key={idx}>
            <div>
              <img src={member.image} alt={member.name} className="img-fluid"/>
            </div>
            <br />
            <p className="text-center h3">{member.name}</p>
            <p className="text-center h5">{member.country}</p>
            <center>
              <hr style={{ width: "200px", border: "1px solid black" }} />
            </center>
            <p style={{ textAlign: "center" , fontSize:'17px' }} className="communityText">
              {member.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;