import Card from "./Card";
import SideBars from "./SideBars";

const Main = ({ todos, acbtn, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-end justify-between xl:gap-[205px] lg:gap-[60px] sm:gap-[40px] gap-[20px]">
      <SideBars
        todos={todos}
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
      <Card todos={todos} activeSidebar={activeSidebar} />
    </div>
  );
};

export default Main;
