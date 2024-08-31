import { EmbedField } from "@prismicio/client";
import clsx from "clsx";

type VideoPlayerProps = {
    htmlContent: string | EmbedField | null;
    className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ htmlContent, className }) => {
    if (!htmlContent) {
        return <p>No video yet</p>;
    }

    return (
        <div
            className={clsx("videoContainer h-auto lg:h-[60%]", className)}
            dangerouslySetInnerHTML={{ __html: typeof htmlContent === 'string' ? htmlContent : '' }}
        />
    );
};

export default VideoPlayer;
