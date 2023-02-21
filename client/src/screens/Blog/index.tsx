import { useState,useEffect } from "react";
import { Card,Footer,NavBar } from "../../Components";
import { GET_BLOG_DATA } from "../../constants/apiEndPoints";
import { BlogData } from "../../types";
import makeRequest from "../../utils/makeRequest";
import "./Blog.css";


const Blog = ():JSX.Element  => {

  const [data,setData] = useState([])

  useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((response) => {
        setData(response);
      })
      .catch((e) => {
        // setError(e.message);
      });
  }, []);

  console.log(data);
  
    return data ? (  
    <div className="app--section">
      <div>
        <NavBar />
        <section>
          {
          
            <div className="app--blocks" data-testid='blog-card'>
              {
                  data.map((ele,index)=>{
                      return(
                        
                          <Card blogData={ele}
                          />
                      )
                  })
              }
            </div>
          }
        </section>
      </div>
      <Footer />
    </div>
    ) : (
       <h1>loading</h1>
    )
};

export default Blog;
