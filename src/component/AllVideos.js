import { useEffect, useState } from "react";
import "./arrVideoCategory";
import "./AllVideos.css";
import arrVideoCategory from "./arrVideoCategory";
import ScrollToTop from "./ScrollToTop"
import Navbar from "./Navbar"

const AllVideos = ({
    scroolActive,
    setScroolActive
}) => {
    const [data, setData] = useState(arrVideoCategory[0].catagoryVideos);
    const [activeId, setActiveId] = useState(0)


    useEffect(() => {
        setScroolActive(true)
        document.getElementById('videolar').classList.add('linkActive')

    }, [scroolActive])

    useEffect(() => {
        for (let i = 0; i < document.getElementsByClassName('sidebar-item').length; i++) {

            activeId == i ? document.getElementById(activeId).classList.add('sidebarActive')
                : document.getElementById(i).classList.remove('sidebarActive')
        }
    }, [activeId])

    return (
        <div id="allVideos">

            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />
            <div className="container main-cont">
                <div className="row">
                    <div className="col-xxl-10 col-xl-12 col-md-12 m-auto ">
                        <div className="container-fluid">

                            <div className="row ">
                                {/* sideBar */}
                                <div id="sidebar" className="col-xl-3 col-md-4 col-sm-4">
                                    <ul>
                                        {arrVideoCategory.map((oItem, oIndex) => {

                                            return <li key={oIndex} className="h5 fw-normal m-1">
                                                <a
                                                    id={oIndex}
                                                    className="rounded p-4 sidebar-item d-flex align-items-center justify-content-between"
                                                    href="#"
                                                    onClick={() => {
                                                        setData(oItem.catagoryVideos);
                                                        setActiveId(oIndex)
                                                    }}
                                                >
                                                    <div className="sidebar-title ">
                                                        {oItem.catagoryTitle}
                                                    </div>
                                                    <div style={{ color: "lightgray" }} className="sidebar-length ">
                                                        {oItem.catagoryVideos.length}
                                                    </div>
                                                </a>
                                            </li>;

                                        })}
                                    </ul>
                                </div>

                                {/* Video Bölümü */}
                                <div className="videos-section col-xl-9 col-md-8 col-sm-12 ">

                                    <div className="row">
                                        {
                                            data.map((oItem, oIndex) => {
                                                return <div key={oIndex} className="video-cont col-md-6 col-sm-12 p-3 ">
                                                    <iframe id="videos-container" src={oItem.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                            })
                                        }
                                    </div></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default AllVideos;
