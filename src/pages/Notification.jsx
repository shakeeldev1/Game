import React from "react"
import { FaBell } from "react-icons/fa";

 const notifications = [
  {
    id: 1,
    title: "Withdrawal Reminder",
    description:
      "Before requesting a withdrawal, please confirm that your wallet verification is complete. Ensure the ID card and account number provided are correct and valid. Incorrect details may cause withdrawal failure.",
    date: "2024-05-01 17:10:25",
    icon: <FaBell />,
  },
  {
    id: 2,
    title: "Official Website Notice",
    description:
      "Always access our platform using the official link: https://pakgame.net. Never share personal information or perform transactions with third parties claiming to represent PAKGame. We do not conduct private chats or calls. Please inform other members to stay safe from scams.",
    date: "2023-08-28 12:10:46",
    icon: <FaBell />,
  },
  {
    id: 3,
    title: "Safe Recharge Guidelines",
    description:
      "All official recharge methods are available only through the Recharge section on the PAKGame website. Avoid trusting payment requests from external or unofficial sources.",
    date: "2023-05-05 11:15:25",
    icon: <FaBell />,
  },
  {
    id: 4,
    title: "Authorized Customer Support",
    description:
      "Important notice to all members: PAKGame customer support is available only via LiveChat, Discord, and our official app or website. Any other platform claiming to represent us is unauthorized. Never share personal or banking details outside official channels.",
    date: "2023-05-05 11:15:25",
    icon: <FaBell />,
  },
  {
    id: 5,
    title: "Website Security Information",
    description:
      "PAKGame uses advanced security standards including encryption and authentication. You can confirm a secure connection by checking the padlock icon in your browser’s address bar, ensuring your data is protected.",
    date: "2023-05-05 11:15:25",
    icon: <FaBell />,
  },
  {
    id: 6,
    title: "Account Protection Tips",
    description:
      "Keep your account safe by using a strong password, verifying the official website URL, avoiding suspicious links, enabling two-factor authentication (2FA), and keeping your device software updated at all times.",
    date: "2023-05-05 11:15:25",
    icon: <FaBell />,
  },
];
export default function Notification() {
  return (
    <div className="space-y-4 p-3">
      {notifications.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md shadow-gray-300 text-black p-5 rounded-xl flex gap-4 border-l-3 border-gradient-to-tr from-blue-500 to-purple-600"
        >
          <div className="text-2xl bg-white/20 p-3 h-10 w-10 flex items-center justify-center rounded-full">
            {item.icon}
          </div>

          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm opacity-95 mt-1">{item.description}</p>
            <span className="text-xs opacity-80 block mt-2">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
