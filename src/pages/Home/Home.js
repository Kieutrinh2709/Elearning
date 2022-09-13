import React, { Fragment, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Introduce from '../../components/Introduce/Introduce'
import { useSelector } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'
import CourseList from '../../components/ListCourse/CourseList'
import News from '../../components/News/News'

export default function Home() {
    // const { isLoading } = useSelector(state => state.ListMovieReducer);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    return (
        <Fragment>
            <Header />
            <Carousel />
            <CourseList />
            <News/>
            <Introduce />
            <Footer />
        </Fragment>
    )
}
