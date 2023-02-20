import React from "react";
import NavBar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import "../styles/Blog.css";
import {data} from "../mockData/index"

const Blog = ():JSX.Element  => {

  return (
    <div className="app--section">
      <div>
        <NavBar />
        <section>
          <div className="app--blocks">
            {
                data.map((ele)=>{
                    return(
                        <Card date={ele.date} 
                        readingTime={ele.readingTime} 
                        title={ele.title}
                        description={ele.description} 
                        claps={ele.claps} 
                        liked={ele.liked} 
                        image={ele.image}
                        />
                    )
                })
            }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
