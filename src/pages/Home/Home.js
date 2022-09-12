import React, { Fragment, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Introduce'
import { useSelector } from 'react-redux'
import ListCourses from '../../components/ListCourse/ListCourse'
import Banner from '../../components/Carousel/Carousel'

export default function Home() {
    // const { isLoading } = useSelector(state => state.ListMovieReducer);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    return (
        <Fragment>
            <Header />
            <Banner />
            <ListCourses />
            <Introduce />
            <Footer />
        </Fragment>
    )
}
