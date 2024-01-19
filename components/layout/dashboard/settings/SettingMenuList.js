import SettingMenuItem from "./SettingMenuItem";

const SettingMenuList = ({ tabs, activeTab, setActiveTab }) => {
  const length = tabs.length;
  console.log(length);

  return (
    <div className="relative flex w-48 flex-col border-r-2 border-gray-200">
      {tabs.map((tab, index) => (
        <SettingMenuItem
          key={tab.value}
          index={index}
          label={tab.label}
          lenght={length}
          isActive={activeTab === tab.value}
          onClick={() => setActiveTab(tab.value)}
        />
      ))}

      <div
        className={`absolute right-0 top-0 h-1/2 w-0.5 transform bg-white transition-all duration-500 ${
          activeTab === "general" ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>
    </div>
  );
};

export default SettingMenuList;
