import Card from "./Card";
import SideBars from "./SideBars";

const Main = ({ todos, acbtn, activeSidebar, setActiveSidebar }) => {
  return (
    <div className="flex w-full justify-between lg:flex-row sm:h-auto h-full flex-col-reverse xl:gap-[205px] lg:gap-[60px] gap-5">
      <SideBars
        todos={todos}
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
      <Card todos={todos} activeSidebar={activeSidebar} acbtn={acbtn} />
    </div>
  );
};

export default Main;
