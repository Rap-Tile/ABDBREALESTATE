// assets.js

// all your imports and exports


import logo from './logo.svg'
import abdb_logo from './abdb_logo.png'
import abdb_building from './abdb_building.webp'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import logo3 from './logo3.png'
import dholera_1 from './dholera_1.png'
import dholera_2 from './dholera_2.png'
import dholera_3 from './dholera_3.png'
import dholera_4 from './dholera_4.png'
import dholera_5 from './dholera_5.png'
import dholera_6 from './dholera_6.png'
import dholera_7 from './dholera_7.png'
// import dholera_brochure from './dholera_brochure.pdf'
// import abdb_pearl_video1 from './abdb_pearl_video1.mp4'
// import abdb_pearl_video2 from './abdb_pearl_video2.mp4'


export const assets = {
    logo,
    abdb_logo,
    abdb_building,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    project_img_5,
    project_img_6,
    left_arrow,
    right_arrow,
    logo3,
    dholera_1,
    dholera_2,
    dholera_3,
    dholera_4,
    dholera_5,
    dholera_6,
    dholera_7,
    // dholera_brochure,
    // abdb_pearl_video1,
    // abdb_pearl_video2

}

export const projectsData = [
  {
    id: 'dholera-green',
    title: 'Dholera Greenfield Project',
    description: `India’s first greenfield smart city development... 
    Details for ABDB PEARL

Total area of project  :- 29,000 sq. Yard
Total Number of Plots - 165
Number of available plots :-37
Club house area  ;- no
Internal Road size :- 40 ft
Dholera airport distance :-12-13 km 
Abcd Building distance  :- 4km
Railway station :- 5 Km
Circle rate :- 2,000/-
Village name :- Kasindra 
Connecting Road width  :- 60 ft
Nearby hospital , market , school distance  :-4 to 5 km

:  agar Pearl 1 me amenities  ki baat hai to hum isme 

1) Society boundary wall
2) Plots demarcation 
3) security 24x7
4) Electricity 
5) Metal roads 
6) Children play area ( gardens )`,
    images: [
      dholera_1, dholera_2, dholera_3,
      dholera_4, dholera_5, dholera_6, dholera_7
    ],
    videos: ["/videos/abdb_pearl_video1.mp4",
      "/videos/abdb_peral_video2.mp4"
    ],  
    pdfs: [
      {
        name: 'Project Brochure',
        url: '/pdfs/dholera-brochure.pdf'
      }
    ],
    price: '₹16,00,000 onwards',
    location: 'Dholera, Gujarat',
    contact: {
      name: 'Mr. Gopal Bhardwaj',
      phone: '+91-9211313566',
      email: 'Gopal@abdbrealtech.com'
    }
  },
  {
    id: 'vista-verde-1',
    title: "Vista Verde",
    description: 'Luxury urban living in San Francisco',
    images: [assets.project_img_2],
    videos: [],
    pdfs: [],
    price: "$2,50,000",
    location: "San Francisco",
    contact: {
      name: 'Mr. Gopal Bhardwaj',
      phone: '+91-9211313566',
      email: 'Gopal@abdbrealtech.com'
    }
  },
  {
    id: 'vista-verde-2',
    title: "Vista Verde",
    description: 'Luxury urban living in San Francisco',
    images: [assets.project_img_3],
    videos: [],
    pdfs: [],
    price: "$2,50,000",
    location: "San Francisco",
    contact: {
      name: 'Mr. Gopal Bhardwaj',
      phone: '+91-9211313566',
      email: 'Gopal@abdbrealtech.com'
    }
  },
  {
    id: 'vista-verde-3',
    title: "Vista Verde",
    description: 'Luxury urban living in San Francisco',
    images: [assets.project_img_4],
    videos: [],
    pdfs: [],
    price: "$2,50,000",
    location: "San Francisco",
    contact: {
      name: 'Mr. Gopal Bhardwaj',
      phone: '+91-9211313566',
      email: 'Gopal@abdbrealtech.com'
    }
  },
  {
    id: 'vista-verde-4',
    title: "Vista Verde",
    description: 'Luxury urban living in San Francisco',
    images: [assets.project_img_5],
    videos: [],
    pdfs: [],
    price: "$2,50,000",
    location: "San Francisco",
    contact: {
      name: 'Mr. Gopal Bhardwaj',
      phone: '+91-9211313566',
      email: 'Gopal@abdbrealtech.com'
    }
  }
];


  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];