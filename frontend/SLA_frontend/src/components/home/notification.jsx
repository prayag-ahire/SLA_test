import React from "react";

const Notification = ({ notifications }) => {
    return (
        <div className="w-full h-full overflow-y-auto bg-gray-100 border border-gray-300 shadow-lg p-4">
            {notifications.length === 0 ? (
                <p className="text-gray-500">No notifications</p>
            ) : (
                <ul className="list-none p-0 m-0">
                    {notifications.map((notification, index) => (
                        <li key={index} className="py-2 border-b border-gray-300 last:border-b-0">
                            {notification}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notification;