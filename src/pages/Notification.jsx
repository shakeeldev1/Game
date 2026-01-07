import React from "react"
import { FaBell, FaShieldAlt, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "Withdrawal Reminder",
    description:
      "Before requesting a withdrawal, please confirm that your wallet verification is complete. Ensure the ID card and account number provided are correct and valid. Incorrect details may cause withdrawal failure.",
    date: "2024-05-01 17:10:25",
    icon: <FaExclamationTriangle />,
    type: "warning"
  },
  {
    id: 2,
    title: "Official Website Notice",
    description:
      "Always access our platform using the official link: https://pakgame.net. Never share personal information or perform transactions with third parties claiming to represent PAKGame. We do not conduct private chats or calls. Please inform other members to stay safe from scams.",
    date: "2023-08-28 12:10:46",
    icon: <FaShieldAlt />,
    type: "security"
  },
  {
    id: 3,
    title: "Safe Recharge Guidelines",
    description:
      "All official recharge methods are available only through the Recharge section on the PAKGame website. Avoid trusting payment requests from external or unofficial sources.",
    date: "2023-05-05 11:15:25",
    icon: <FaInfoCircle />,
    type: "info"
  },
  {
    id: 4,
    title: "Authorized Customer Support",
    description:
      "Important notice to all members: PAKGame customer support is available only via LiveChat, Discord, and our official app or website. Any other platform claiming to represent us is unauthorized. Never share personal or banking details outside official channels.",
    date: "2023-05-05 11:15:25",
    icon: <FaShieldAlt />,
    type: "security"
  },
  {
    id: 5,
    title: "Website Security Information",
    description:
      "PAKGame uses advanced security standards including encryption and authentication. You can confirm a secure connection by checking the padlock icon in your browser’s address bar, ensuring your data is protected.",
    date: "2023-05-05 11:15:25",
    icon: <FaShieldAlt />,
    type: "security"
  },
  {
    id: 6,
    title: "Account Protection Tips",
    description:
      "Keep your account safe by using a strong password, verifying the official website URL, avoiding suspicious links, enabling two-factor authentication (2FA), and keeping your device software updated at all times.",
    date: "2023-05-05 11:15:25",
    icon: <FaShieldAlt />,
    type: "security"
  },
];

export default function Notification() {
  const getIconColor = (type) => {
    switch (type) {
      case 'warning': return 'text-yellow-400';
      case 'security': return 'text-green-400';
      case 'info': return 'text-cyan-400';
      default: return 'text-fuchsia-400';
    }
  };

  const getGradient = (type) => {
    switch (type) {
      case 'warning': return 'from-yellow-400/20 to-orange-500/20 border-yellow-500/30';
      case 'security': return 'from-green-400/20 to-emerald-500/20 border-green-500/30';
      case 'info': return 'from-cyan-400/20 to-blue-500/20 border-cyan-500/30';
      default: return 'from-fuchsia-400/20 to-purple-500/20 border-fuchsia-500/30';
    }
  };

  return (
    <div className="min-h-screen p-4 pb-24">
      <h1 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-cyan-500">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`bg-[#1a1033]/80 backdrop-blur-xl shadow-lg text-gray-200 p-5 rounded-2xl flex gap-4 border ${getGradient(item.type)} hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 left-0 w-24 h-24 ${getIconColor(item.type).replace('text', 'bg')}/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2`}></div>

            <div className={`text-2xl h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#0f0720]/50 border border-white/10 ${getIconColor(item.type)}`}>
              {item.icon}
            </div>

            <div className="relative z-10 w-full">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-base md:text-lg text-white">{item.title}</h3>
                <span className="text-[10px] text-gray-500 whitespace-nowrap bg-black/20 px-2 py-1 rounded-full">{item.date.split(" ")[0]}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
