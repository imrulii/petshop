import React, { useState } from "react";
// import next image
import Image from "next/image";
// import images
import Pet1Img from "../public/img/pets/1.png";
import Pet2Img from "../public/img/pets/2.png";
import Pet3Img from "../public/img/pets/3.png";
import Pet4Img from "../public/img/pets/4.png";
import Pet5Img from "../public/img/pets/5.png";
import Pet6Img from "../public/img/pets/6.png";
import Pet7Img from "../public/img/pets/7.png";
import Pet8Img from "../public/img/pets/8.png";
import Pet9Img from "../public/img/pets/9.png";
import Pet10Img from "../public/img/pets/10.png";
import Pet11Img from "../public/img/pets/11.png";
import Pet12Img from "../public/img/pets/12.png";
import Badge from "../public/img/pets/badge.svg";

const pets = [
  {
    id: 1,
    category: "Cat",
    name: "Kyba",
    image: Pet1Img,
  },
  {
    id: 2,
    category: "Bird",
    name: "Rotty",
    image: Pet2Img,
  },
  {
    id: 3,
    category: "Fox",
    name: "Fexxie",
    image: Pet3Img,
  },
  {
    id: 4,
    category: "Cat",
    name: "Kirra",
    image: Pet4Img,
  },
  {
    id: 5,
    category: "Hamster",
    name: "Dinno",
    image: Pet5Img,
  },
  {
    id: 6,
    category: "Parrot",
    name: "Paco",
    image: Pet6Img,
  },
  {
    id: 7,
    category: "Parrot",
    name: "Pavo",
    image: Pet7Img,
  },
  {
    id: 8,
    category: "Cat",
    name: "Ynna",
    image: Pet8Img,
  },
  {
    id: 9,
    category: "Lion",
    name: "Hena",
    image: Pet9Img,
  },
  {
    id: 10,
    category: "Bird",
    name: "Dimmy",
    image: Pet10Img,
  },
  {
    id: 11,
    category: "Dog",
    name: "Jasper",
    image: Pet11Img,
  },
  {
    id: 12,
    category: "Hamster",
    name: "Syu",
    image: Pet12Img,
  },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10]);
  const [petIndex, setPetIndex] = useState(10);
  

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => {
      return pet.id === id;
    });
    setPetDetails(pet);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* badge */}
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
          <Image src={Badge} width={230} height={227} alt="" />
        </div>
        {/* pets */}
        <div className="flex-1 flex flex-col lg:flex-row ">
          {/* pet details */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              {/* category */}
              <div className="text-[32px] capitalize">
                {petDetails.category}
              </div>
              {/* name */}
              <div className="uppercase text-[17px] mg-1">
                ({petDetails.name})
              </div>
              {/* image */}
              <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full">
                <Image src={petDetails.image} width={150} height={150} alt="" />
              </div>
            </div>
          </div>
          {/* pet list */}
          <div className="realtive lg:w-[60%] flex-1 flex items-center ">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {pets.map((pet, index) => {
                return (
                  <div
                    onClick={() =>{
                      getPetDetails(pet.id);
                      setPetIndex(index);
                      }}
                    className="cursor-pointer relative"
                    key={index}
                  >
                    {/* overlay */}
                    <div className={`w-full h-full absolute rounded-full ${petIndex === index ? 'border-2 border-white' : 'bg-black/40' }`}></div>
                    <Image
                      src={pet.image}
                      width={95}
                      height={95}
                      alt=""
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
