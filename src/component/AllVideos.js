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

    // setData(arrVideoCategory[0].catagoryVideos)
   
    useEffect(() => {
        document.getElementById('header').style.cssText = "position:fixed; top:0"
        document.getElementById('videolar').innerHTML = "Tüm Videolar";
        document.getElementById('videolar').classList.remove('nav-link');
        document.getElementById('videolar').classList.add('allVideos'); 
    }, [data])
    useEffect(() => {
       setScroolActive(true)
    }, [scroolActive])

    return (
        <>

            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />

            <div className="container-fluid">
                <div className="w-100 ">
                    <div id="sidebar" className="row pt-4" style={{backgroundColor: "var(--main-color)"}}>
                        <div className="sticky-top sidebar col-sm-3">
                            <ul>
                                {arrVideoCategory.map((oItem, oIndex) => {

                                    return <li key={oIndex} className="h5 fw-normal m-1 rounded ">
                                        <a
                                            id={oIndex}
                                            className="p-3 sidebar-item "
                                            href="#"
                                            onClick={() => {
                                                setData(oItem.catagoryVideos);
                                            }}
                                        >
                                            <div className="d-flex align-items-center justify-content-between ps-2 pe-4">
                                                <div className="sidebar-title ">
                                                    {oItem.catagoryTitle}
                                                </div>
                                                <div className="sidebar-length text-black-50 ">
                                                    {oItem.catagoryVideos.length}
                                                </div>
                                            </div>
                                        </a>
                                    </li>;

                                })}
                            </ul>
                        </div>
                        {/* sağdaki videolar bölümüm */}
                        <div className="videos-section col-sm-9  p-4">
                            <div className="row">
                                {
                                    data.map((oItem, oIndex) => {
                                        return <div key={oIndex} className="col-sm-4 ">
                                            <iframe width={360} height={203} src={oItem.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};
export default AllVideos;
