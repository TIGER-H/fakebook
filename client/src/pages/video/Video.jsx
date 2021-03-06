import { Featured } from "../../components/video/featured/Featured";
import { VideoList } from "../../components/video/list/VideoList";
import { VideoTopBar } from "../../components/video/topbar/VideoTopBar";
import "./video.scss";
export const Video = () => {
  return (
    <div className="video">
      <VideoTopBar />
      <Featured type="movie" />
      <VideoList type="now_playing" />
      <VideoList type="popular"/>
      {/* <VideoList />
      <VideoList />
      <VideoList /> */}
    </div>
  );
};
