import StyledVideoContent from "./styled-video-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import VideoItem from "@components/screens/common/video-item";

const VideoContent = ({ t, videoData, leftMenuMobile }) => {
  return (
    <StyledVideoContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          backBtnName={t("Home")}
          backBtnUrl="/"
          leftMenuMobile={leftMenuMobile}
        />
        <div className="wrapper">
          <div className="video-items">
            {videoData.data.map((item, index) => (
              <VideoItem
                key={index}
                data={item}
                isMain={false}
              />
            ))}
          </div>
        </div>
      </StyledWrapperContent>
    </StyledVideoContent>
  );
};

export default VideoContent;
