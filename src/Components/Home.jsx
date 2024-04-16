import React from "react"
import Thumbnail1 from "../assets/thumbnail.jpeg"


export default function Home(){
    return(
        <div className="home-container flex flex-row px-3">
            <div className="sidebar flex flex-col w-1/6 overflow-y-auto">
                <div className="w-auto categories-list flex flex-col">
                    <div className="flex flex-row gap-3 font-bold bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <h4>Home</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <h4>Subscriptions</h4>
                    </div>
                    <hr className="border-b my-2 border-gray-300"></hr>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h4>Library</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h4>History</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <h4>Your Videos</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        <h4>Watch Later</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                        <h4>Liked Videos</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <h4>Show More</h4>
                    </div>
                </div>
                <hr className="border-b my-2 border-gray-300"></hr>
                <div className="subscriptions flex flex-col mt-1">
                    <h3 className="pl-3 ">Subscriptions</h3>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 mt-1 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 1</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 2</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 3</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 4</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 5</h4>
                    </div>
                    <div className="flex flex-row gap-3 hover:bg-gray-300 cursor-pointer w-auto rounded-xl pl-3 py-3 content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h4>Channel 6</h4>
                    </div>
                </div>
            </div>
            <div className="home flex flex-col pl-6 px-3 w-5/6 relative">
                <div className="categories-up flex flex-row mt-2 gap-4 overflow-x-auto">
                    <div className="bg-black text-white cursor-pointer rounded-xl w-fit flex justify-center items-center py-2 px-2 text-center">
                        <span className="w-max">All</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Javascript</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Typescript</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Programming</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Weight Lifting</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Bowling</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Hiking</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 text-center"  >
                        <span className="w-max">Places</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Next.js</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center"  >
                        <span className="w-max">Functional Programming</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">CSS</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Coding</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Fun Videos</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Mixes</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Premier League</span>
                    </div>
                    <div className="bg-gray-200 cursor-pointer rounded-xl w-fit flex justify-center items-center px-2 py-2 text-center" >
                        <span className="w-max">Live</span>
                    </div>
                </div>
                <div className="videos-list mt-1 grid grid-cols-3 overflow-y-auto gap-4 pr-4">
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <img src={Thumbnail1} className="w-82" alt="" />
                        <div className="mt-4 video-text flex flex-row gap-3 items-start justify-start">
                            <div className="bg-red-200 rounded-full py-1 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="bold">Learn React in 40 minutes</h3>
                                <span className="font-thin">Channel 1</span>
                                <div className="flex flex-row gap-1 font-thin">
                                    <span>223k views</span>
                                    <span>1 year ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}