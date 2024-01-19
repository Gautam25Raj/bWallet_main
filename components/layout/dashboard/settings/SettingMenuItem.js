const SettingMenuItem = ({ label, index, length, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`border-b-2 p-4 transition-all 
    ${isActive ? "animate-slide font-bold text-white" : "text-gray-400"}
    ${index < length - 1 ? "border-gray-900/40" : "border-transparent"}`}
  >
    {label}
  </button>
);

export default SettingMenuItem;
