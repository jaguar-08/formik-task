import React, { useState } from 'react';
// import Link from 'react-router-dom';
import { Link,Routes,Route } from 'react-router-dom';
import AuthorList from './AuthorList';
import EditBook from './EditBook';
import EditAuthor from './EditAuthor';
import Author from './Author';
import Book from './Book';
import DashBoard from './DashBoard';
// import Home from './Home';


const Sidebar = () => {
    const [id,setId]=useState(0)
    return (
        <div className="container-fluid p-0">

            <div className="col-12">
                <div className="row">
                    <div className="col-lg-2 d-none d-lg-block col-sm-12 sidebar num  p-0">
                        <hr />

                        
                       
                        <hr />
                        <Link to="/addbook" className="book nav-link ms-5 px-2">
                            <i className="fa-solid fa-file-pen icon"></i> Add book
                        </Link>
                        <hr />
                        <Link to="/addauthor" className="author ms-5 nav-link px-1">
                            <i className="fa-solid fa-user-pen icon"></i> Add Author
                        </Link>
                        <hr />

                    </div>
                </div>
                </div>
            <Routes>
                {/* route path */}
                {/* <Route path='/' element={<Home/> } /> */}
                <Route path="/" element={<DashBoard setId={setId} />} />
                <Route path="/booklist" element={<DashBoard setId={setId} />} />
                <Route path="/addbook" element={<Book />} />
                <Route path="/addauthor" element={<Author />} />
                <Route path="/authorlist" element={<AuthorList setId={setId} />} />
                <Route path="/editbook/:id" element={<EditBook id={id} />} />
                <Route path="/editauthor/:id" element={<EditAuthor id={id} />} />
            </Routes>
        </div>
    );
};

export default Sidebar;