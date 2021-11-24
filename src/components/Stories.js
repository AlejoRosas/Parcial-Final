import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "Elpepe" },
    { id: 2, image: "/images/ahsan1.jpg", name: "Ete Sech" },
    { id: 3, image: "/images/babar1.jpg", name: "Juan" },
    { id: 4, image: "/images/fawad1.jpg", name: "Este" },
    { id: 5, image: "/images/feroz1.jpg", name: "Fierrote" },
    { id: 6, image: "/images/0.jfif", name: "Stemen" },
    { id: 7, image: "/images/imrankhan1.jpg", name: "Aquilesbrinco" },
    { id: 8, image: "/images/imrankhan3.jpg", name: "Elvio lao" },
    { id: 9, image: "/images/imrankhanpost.jpg", name: "Elza pato" },
    { id: 10, image: "/images/feroz1.jpg", name: "Fierrote" },
    { id: 11, image: "/images/0.jfif", name: "Stemen" },
    { id: 12, image: "/images/imrankhan1.jpg", name: "Aquilesbrinco" },
    { id: 13, image: "/images/imrankhan3.jpg", name: "Elvio lao" },
    { id: 14, image: "/images/imrankhanpost.jpg", name: "Elza pato" },
  ]);
  return (
    <div className="stories scrollbar-hide">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
