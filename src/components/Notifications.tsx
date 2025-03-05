import { X } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

const notifications: Notification[] = [
  { id: 1, message: "Jury graded your work", timestamp: dayjs().toISOString() },
  { id: 2, message: "Jury graded your work", timestamp: dayjs().subtract(1, "minute").toISOString() },
  { id: 3, message: "Jury graded your work", timestamp: dayjs().subtract(24, "hour").toISOString() },
  { id: 4, message: "Jury graded your work", timestamp: "2024-12-24T12:00:00.000Z" },
];

const NotificationModal = ({ onClose }: { onClose: () => void }) => {
  const getTimeLabel = (timestamp: string) => {
    const now = dayjs();
    const time = dayjs(timestamp);

    if (time.isSame(now, "day")) return "Today";
    if (time.isSame(now.subtract(1, "day"), "day")) return "Yesterday";
    return time.format("DD.MM.YYYY");
  };

  const groupedNotifications = notifications.reduce<{ [key: string]: Notification[] }>((acc, item) => {
    const label = getTimeLabel(item.timestamp);
    if (!acc[label]) acc[label] = [];
    acc[label].push(item);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Notification</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {Object.entries(groupedNotifications).map(([label, items]) => (
            <div key={label}>
              <h3 className="text-gray-500 text-sm font-medium mb-2">{label}</h3>
              <div className="space-y-2">
                {items.map((notif) => (
                  <div key={notif.id} className="flex items-center bg-gray-100 rounded-lg p-3 shadow-sm">
                    <div className="bg-blue-200 p-1 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full text-xl">
                      <i>i</i>
                    </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="font-semibold text-gray-900">{notif.message}</p>
                      <p className="text-xs text-gray-500">{dayjs(notif.timestamp).fromNow()}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">⋮</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
