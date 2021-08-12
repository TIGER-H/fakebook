import { Featured } from "../../components/video/featured/Featured";
import { VideoList } from "../../components/video/list/VideoList";
import { VideoTopBar } from "../../components/video/topbar/VideoTopBar";
import "./video.scss";
export const Video = () => {
  return (
    <div className="video">
      <VideoTopBar />
      <Featured />
      <VideoList />
      <VideoList />
      <VideoList />
      <VideoList />
      <VideoList />
    </div>
  );
};
