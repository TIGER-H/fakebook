import "./loading.css";

export const Loading = ({ type }) => {
  const COUNT = 8;
  const TopSkeleton = () => {
    <div className="topSk">
      <div className="topSkMiddle"></div>
      <div className="topSkMiddle"></div>
      <div className="topSkUser"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
      <div className="topSkIcon"></div>
    </div>;
  };
  const RightBarSkeleton = () => (
    <div className="rightSk">
      <div className="rightSkItem">
        <div className="rightSkAvatar"></div>
        <div className="rightSkUsername"></div>
      </div>
    </div>
  );
  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
    </div>
  );
  const Balls = () => (
    <div className="ballsLoading">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="loadingText">Loading...</span>
    </div>
  );

  switch (type) {
    case "balls":
      return <Balls />;
    case "menusk":
      return Array(COUNT).fill(<MenuSkeleton />);
    case "rightSk":
      return Array(COUNT).fill(<RightBarSkeleton />);
  }
};
