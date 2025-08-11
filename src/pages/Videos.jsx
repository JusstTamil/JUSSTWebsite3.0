import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Videos = () => {
    return (
        <React.Fragment>
            <div className="bg-myBlack">
                <Navbar />
                <VideosLander />
                <VideoList />
                <Footer />
            </div>
        </React.Fragment>
    );
};

const VideosLander = () => {
    return (
        <React.Fragment>
            <div className="wrapper md:h-44 h-auto flex justify-around items-center flex-col md:flex-row gap-7 p-5">
                <div className="left">
                    <a
                        href="https://jusstblogs.wordpress.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        <img
                            src="JUSSTChannelProfile.jpg"
                            alt="Our Logo"
                            className="w-32 rounded-full"
                        />
                    </a>
                </div>
                <div className="right text-center flex flex-col gap-3">
                    <h1 className="text-4xl font-bold text-myWhite">
                        JUSST Tamil
                    </h1>
                    <h2 className="text-xl font-medium text-myWhite">
                        Learn complex concepts, made easy with our Video Lectures
                        <br />
                        Explanations that make learning easy and joyful ; )
                    </h2>
                </div>
                <a
                    href="https://www.youtube.com/@jusst1523"
                    className="bg-sky-600 font-bold px-5 py-3 rounded-xl hover:underline text-white"
                >
                    Go to Channel
                </a>
            </div>
        </React.Fragment>
    );
};

const VideoList = () => {
    const [videoList, setVideoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getStoredVideos = () => {
        const saved = localStorage.getItem("videos");
        if (!saved) return null;
        try {
            const { videos, timestamp } = JSON.parse(saved);
            if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
                return videos;
            }
            return null;
        } catch {
            return null;
        }
    };

    useEffect(() => {
        const cachedvideos = getStoredVideos();
        if (cachedvideos) {
            setVideoList(cachedvideos);
            setLoading(false);
        } else {
            fetch(import.meta.env.VITE_GET_CHANNEL_VIDEOS_API_URL)
                .then((response) => {
                    if (!response.ok) {
                        setLoading(false);
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setLoading(false);
                    setVideoList(data.items);
                    localStorage.setItem(
                        "videos",
                        JSON.stringify({
                            videos: data.items,
                            timestamp: Date.now(),
                        })
                    );
                })
                .catch((error) => {
                    setError(error);
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                });
        }
    }, []);

    if (loading) {
        return (
            <div className="w-5/6 bg-blue-900 min-h-screen flex justify-center items-center mx-auto m-5">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <React.Fragment>
            <div className="blogListWrapper flex flex-row flex-wrap w-5/6 mx-auto gap-10 justify-around items-center p-5 mb-5">
                {videoList.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </React.Fragment>
    );
};

const VideoCard = ({ video }) => {
    let vidTitle = video.snippet.title;
    let upload = new Date(video.snippet.publishedAt);

    
    const day = upload.getDate().toString().padStart(2, '0');       // "11"
    const month = (upload.getMonth() + 1).toString().padStart(2, '0'); // "08"
    const year = upload.getFullYear();                              // 2025

    const uploadDate = `${day}/${month}/${year}`;

    let videoId = video.snippet.resourceId.videoId
    let imageUrl = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
    let videoUrl = `https://www.youtube.com/watch?v=${videoId}`

    let vidTitleArray = vidTitle.split(" | ");
    let title = vidTitleArray[0];
    let creator = vidTitleArray[vidTitleArray.length - 1];
    let batch = vidTitleArray[1];
    let subject = vidTitleArray[2];
    return (
        <React.Fragment>
            <div
                className={`w-full min-h-[25rem] md:w-96 border-2 md:h-[30rem] bg-black rounded-lg overflow-hidden ${
                    uploadDate ? "border-blue-500" : "border-yellow-500"
                } hover:bg-gray-900`}
            >
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-evenly items-center h-full w-full"
                >
                    <div className="img-wrapper overflow-hidden rounded-lg rounded-b-none w-full h-1/2 -translate-y-8 md:-translate-y-9">
                        <img
                            src={imageUrl}
                            alt="Video Thumbnail"
                            className="w-full"
                        />
                    </div>
                    <div className="text-wrapper flex flex-col justify-evenly gap-3 items-center text-center w-full h-1/2 pb-3">
                        <h4
                            className={`font-semibold text-2xl w-11/12 md:w-5/6 ${
                                uploadDate
                                    ? "text-blue-500"
                                    : "text-yellow-500"
                            }`}
                        >
                            {title}
                        </h4>
                        <p className="">
                            By{" "}
                            <span
                                className={`bg-opacity-45 px-2 py-1 rounded-lg ${
                                    uploadDate
                                        ? "text-blue-50 bg-blue-700"
                                        : "text-yellow-50 bg-yellow-700"
                                }`}
                            >
                                {creator}
                            </span>
                        </p>
                        <p className="">Part of {batch}</p>
                        <p
                            className={`bg-opacity-45 px-2 py-1 rounded-lg ${
                                uploadDate
                                    ? "text-blue-50 bg-blue-700"
                                    : "text-yellow-50 bg-yellow-700"
                            }`}
                        >
                            {subject == "Chem"
                                ? "Chemistry"
                                : subject}
                        </p>
                        {uploadDate ? (
                            <p className="">Uploaded on {uploadDate}</p>
                        ) : (
                            <p className="text-yellow-50 bg-yellow-700 bg-opacity-45 px-2 py-1 rounded-lg font-medium">
                                Upcoming Video. Tune In
                            </p>
                        )}
                    </div>
                </a>
            </div>
        </React.Fragment>
    );
};

export default Videos;
