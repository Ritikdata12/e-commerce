import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DealsSection.css";

const deals = [
  {
    title: "Style & innovation from Small Businesses",
    items: [
      { image: "https://m.media-amazon.com/images/I/71KiCOj1sPL._AC_UL320_.jpg", label: "Home decor" },
      { image: "https://m.media-amazon.com/images/I/81etDCFcXTL._AC_UL320_.jpg", label: "Furniture" },
      { image: "https://m.media-amazon.com/images/I/716pIiauYfL._AC_UL320_.jpg", label: "Two wheelers" },
      { image: "https://m.media-amazon.com/images/I/61eBNeukK2L._AC_UY218_.jpg", label: "Large appliances" },
    ],
    link: "#",
  },
  {
    title: "Minimum 50% off | Sports, outdoor & more",
    items: [
      { image: "https://m.media-amazon.com/images/I/61rfcVaDtCL._AC_UL320_.jpg", label: "Sports & fitness" },
      { image: "https://m.media-amazon.com/images/I/51e3vSDRaoL._AC_UL320_.jpg", label: "Automotive" },
      { image: "https://m.media-amazon.com/images/I/61vo4RdhZSL._AC_UL320_.jpg", label: "Tools" },
      { image: "https://m.media-amazon.com/images/I/812GtuHv8RL._AC_UL320_.jpg", label: "Garden & outdoor" },
    ],
    link: "#",
  },
  {
    title: "Festive essentials from Small Businesses",
    items: [
      { image: "https://m.media-amazon.com/images/I/717Gg73NxbL._AC_UL320_.jpg", label: "Ethnic wears" },
      { image: "https://m.media-amazon.com/images/I/71HHjFUPBYL._AC_UL320_.jpg", label: "Lights & lamps" },
      { image: "https://m.media-amazon.com/images/I/812G1UXuqNL._AC_UL320_.jpg", label: "Furnishings" },
      { image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/80f373ab-c25b-43c5-a051-1365e53fa4dc._CR1,0,2399,1256_SX430_QL70_.jpg", label: "Pooja essentials" },
    ],
    link: "#",
  },
  {
    title: "Appliances and more off upto 70%",
    items: [
      { image: "https://m.media-amazon.com/images/I/61aM36RGwgL._AC_UY218_.jpg", label: "Induction" },
      { image: "https://m.media-amazon.com/images/I/515nNlnjmSL._AC_UY218_.jpg", label: "Geyzer" },
      { image: "https://m.media-amazon.com/images/I/41r9dPADQeL._SX300_SY300_QL70_FMwebp_.jpg", label: "Gas stove" },
      { image: "https://m.media-amazon.com/images/I/71PzKUtC2gL._AC_UL320_.jpg", label: "Stainless steel jars" },
    ],
    link: "#",
  },
];

const DealsSection = () => {
  return (
    <div className="mt-5 deals-section">
      <div className="box-cont1">
        {deals.map((deal, index) => (
          <div key={index} className="col-md-3 mb-5 card-box">
            <div className="deal-card p-3 border">
              <h5 className="deal-title">{deal.title}</h5>
              <div className=" box-section">
                {deal.items.map((item, idx) => (
                  <div key={idx} className="col-6 mb-2 ">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="img-fluid mb-1 deal-img"
                    />
                    <p className="deal-label">{item.label}</p>
                  </div>
                ))}
              </div>
              <a href={deal.link} className="deal-link">See all offers</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
