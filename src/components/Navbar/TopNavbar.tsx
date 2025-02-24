const TopNavbar: React.FC = () => {
  return (
    <div className="flex flex-row m-3">
      <h1 className="p-2 text-5xl">Todos</h1>
      <input
        type="search"
        className="block border border-gray-300 rounded-lg"
        placeholder="Search task....."
      />
    </div>
  );
};

export default TopNavbar;
