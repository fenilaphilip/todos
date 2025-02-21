const TopNavbar: React.FC = () => {
  return (
    <div className="flex flex-row">
      <h1 className="text-4xl">Todos</h1>
      <input className="m-2" type="text" placeholder="Search task" />
    </div>
  );
};

export default TopNavbar;
