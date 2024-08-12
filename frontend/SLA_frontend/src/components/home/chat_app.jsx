import Chat from "../chatcom/chat";
import Sidebar from "../chatcom/sidebar";

export const Message = () => {
  return (
    <div className="grid grid-cols-3 h-full w-full">
      <div className="col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="col-span-2 h-full">
        <Chat />
      </div>
    </div>
  );
};
