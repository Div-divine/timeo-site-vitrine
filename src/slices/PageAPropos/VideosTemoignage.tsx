
type VideoItem = {
    video: {
        html: string; // This is the HTML that contains the video embed code
    };
};

export default function VideoTemoignage({ videos }: { videos: VideoItem[] }) {
    return (
        <div className="mx-3 md:mx-[15%] lg:mx-[21%] block sm:flex flex-wrap justify-between ">
            {videos.map((item, index) => (
                <div key={index} className="video-container my-4 w-[80%] sm:w-[30%] mx-auto">
                    {/* Use dangerouslySetInnerHTML to render the HTML directly */}
                    <div
                        className="oembed-container video-temoignage"
                        dangerouslySetInnerHTML={{ __html: item.video.html }}
                    />
                </div>
            ))}
        </div>
    );
}
