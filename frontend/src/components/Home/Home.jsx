import React from 'react'
// import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Home({ islogin, logout, category,
    publisher, book, totalpage, backPage,
    nextPage, setPage, page, sortType, setSortType,
    setRangeType, title, setTitle, setBranch, branch, 
    setSearchText, author, setIDBranch, branchClick, history,
    searchTextSubmit, addToCart }) {
    return (
        <div>
        <header id="header">
            <Header/>
        </header>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Home