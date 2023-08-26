import React, { useState } from "react";
import "../components/styles/home.css";
import SelectOptions from "../components/home/post/SelectOptions";
import MenuOption from "../components/home/leftbar/MenuOption";
import { Avatar, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    content: "Hello Monalisa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    created_at: "2023-08-26 12:25 PM",
    updated_at: "2023-08-26 12:25 PM",
    likes: 1112,
    dislikes: 21,
    user_id: 1,
    User: {
      name: "Kashif Rezwi",
    },
  },
  {
    id: 2,
    content: "Holla Monoliso",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    created_at: "2023-08-26 12:25 PM",
    updated_at: "2023-08-26 12:25 PM",
    likes: 31,
    dislikes: 11,
    user_id: 1,
    User: {
      name: "Kashif Rezwi",
    },
  },
  {
    id: 3,
    content: "Helllo Monalisha",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    created_at: "2023-08-26 12:25 PM",
    updated_at: "2023-08-26 12:25 PM",
    likes: 1233,
    dislikes: 122,
    user_id: 1,
    User: {
      name: "Kashif Rezwi",
    },
  },
  {
    id: 4,
    content: "Hey Monaliza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    created_at: "2023-08-26 12:25 PM",
    updated_at: "2023-08-26 12:25 PM",
    likes: 12,
    dislikes: 31,
    user_id: 1,
    User: {
      name: "Kashif Rezwi",
    },
  },
];

const menu = [{ title: "Home" }, { title: "Analytics" }];
function Home() {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [user, setUser] = useState({
    name: "Kashif Rezwi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  });
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="left-div">
        <h3>Social Media App</h3>
        <div className="select-Menus">
          {menu.map((item, idx) => {
            const { title } = item;
            return (
              <MenuOption
                key={idx}
                title={title}
                handleChange={() => setSelectedMenu(title)}
                selectedMenu={selectedMenu}
              />
            );
          })}
        </div>
      </div>
      <div className="content-div">
        {data.map((item, idx) => {
          const {
            content,
            image,
            created_at,
            updated_at,
            likes,
            dislikes,
            User,
          } = item;
          return (
            <div className="post" key={idx}>
              <div>
                <h3>{User.name}</h3>
                <p>{created_at}</p>
              </div>

              <div>
                {image && <img src={image} alt="post" />}
                <p>{content}</p>
              </div>

              <div className="select-options" key={idx}>
                <SelectOptions idx={idx} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="right-div">
        <h3>Wellcome</h3>
        {false ? (
          <div className="user-section">
            <Avatar
              sx={{ bgcolor: blue[500] }}
              alt={user?.name}
              src={user?.image}
            />
            <div>
              <h4>{user?.name}</h4>
              <p>online</p>
            </div>
          </div>
        ) : (
          <div className="sign-in-options">
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button variant="outlined" onClick={() => navigate("/register")}>
              Create an Account
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
