
import { useState } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Discovering a new hobby', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Safety is rule #1', body: 'lorem ipsum...', author: 'taskmaster', id: 2 },
        { title: 'Leading your target', body: 'lorem ipsum...', author: 'marksman', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;