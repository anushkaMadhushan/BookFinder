import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("");
    const booksPerPage = 10;
    const apiKey = ''; // Add your Google Books API key here

    // Fetch default popular books
    const fetchDefaultBooks = () => {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=new+books&key=${apiKey}&maxResults=40&orderBy=newest`;
        axios.get(apiUrl)
            .then(res => setData(res.data.items))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchDefaultBooks();
    }, []);

    // Search for books
    const searchBook = () => {
        if (search.trim()) {
            const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=40&orderBy=newest`;
            axios.get(apiUrl)
                .then(res => setData(res.data.items))
                .catch(err => console.error(err));
            setCurrentPage(1);
        }
    };


    const handleKeyPress = (evt) => {
        if (evt.key === "Enter") {
            searchBook();
        }
    };

    // Sort books
    const sortBooks = (books) => {
        if (sortOption === "title") {
            return [...books].sort((a, b) =>
                a.volumeInfo.title.localeCompare(b.volumeInfo.title)
            );
        } else if (sortOption === "price") {
            return [...books].sort((a, b) => {
                const priceA = a.saleInfo.listPrice?.amount || 0;
                const priceB = b.saleInfo.listPrice?.amount || 0;
                return priceA - priceB;
            });
        } else if (sortOption === "publishedDate") {
            return [...books].sort((a, b) =>
                new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate)
            );
        }
        return books;
    };

    // Pagination 
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = sortBooks(bookData).slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="header">
                <div className="row1">
                    <h1>The only thing you absolutely have to know<br /> is the location of the library.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={searchBook}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="sorting">
                <label>Sort by:</label>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">None</option>
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                    <option value="publishedDate">Published Date</option>
                </select>
            </div>

            <div className="container">
                <Card book={currentBooks} />
            </div>

            <div className="pagination">
                {[...Array(Math.ceil(bookData.length / booksPerPage)).keys()].map(page => (
                    <button
                        key={page + 1}
                        className={currentPage === page + 1 ? "active" : ""}
                        onClick={() => paginate(page + 1)}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Main;
