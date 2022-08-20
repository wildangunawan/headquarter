import { Menu } from "types/menu";
import {
  MdPerson,
  MdHome,
  MdSchool,
  MdSupportAgent,
  MdLayers,
  MdList,
  MdQueryStats,
  MdNotifications,
  MdForum,
  MdFeedback,
  MdEvent,
  MdGroups,
  MdPlaylistAddCheck,
  MdComment,
  MdSettings,
  MdEmail,
  MdPolicy,
  MdTask,
  MdHelpCenter,
  MdEdit
} from "react-icons/md";
import { IoMdAirplane, IoMdStats } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { IoNewspaper } from "react-icons/io5";
import { FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";

/**
 * Variable below consists routes that's shown in the sidebar menu
 * 
 * How to write a new one? Follow the interface above.
 * Required items:
 *  - name
 * 
 * Required if dropdown/category == false:
 *  - layout
 *  - path
 * 
 * Required if dropdown/category == true:
 *  - items (which consist of another Menu type object)
 */
const routes: Menu[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    icon: MdHome,
    path: "/dashboard",
  },

  // Membership
  {
    name: "Membership",
    dropdown: true,
    items: [
      {
        name: "ATC",
        dropdown: true,
        items: [
          {
            name: "Create a booking",
            layout: "/admin",
            icon: MdEvent,
            path: "/atc-booking",
          },
          {
            name: "Send a feedback",
            layout: "/admin",
            path: "/atc-feedback",
            icon: MdFeedback,
          },
          {
            name: "FSS roster",
            layout: "/admin",
            path: "/profile",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Pilot",
        dropdown: true,
        items: [
          {
            name: "Pilot Resource Center",
            layout: "/admin",
            icon: IoMdAirplane,
            path: "https://www.vatsim.net/pilot-resource-centre",
          },
        ],
      },
      {
        name: "Membership",
        dropdown: true,
        items: [
          {
            name: "Change my email",
            layout: "/admin",
            icon: MdEdit,
            path: "https://cert.vatsim.net/vatsimnet/newmail.php",
          },
          {
            name: "Email subscription",
            layout: "/admin",
            icon: MdEmail,
            path: "/my/email-subscription",
          },
          {
            name: "Membership help",
            layout: "/admin",
            icon: MdHelpCenter,
            path: "https://www.vatsim.net/members/member-help",
          },
          {
            name: "My data",
            layout: "/admin",
            icon: IoMdAirplane,
            path: "/my/data",
          },
        ],
      },
      {
        name: "HQ Changelog",
        layout: "/admin",
        icon: MdList,
        path: "/datatables",
      },
      {
        name: "My Profile",
        layout: "/admin",
        path: "/my/profile",
        icon: MdPerson,
      },
      {
        name: "My Stats",
        layout: "/auth",
        path: "/sign-in",
        icon: MdQueryStats,
      },
      {
        name: "Notifications",
        layout: "/admin",
        path: "/notifications",
        icon: MdNotifications,
      },
      {
        name: "VATSIM Forum",
        layout: "/auth",
        path: "/sign-in",
        icon: MdForum,
      },
      {
        name: "Staff List",
        layout: "/auth",
        path: "/sign-in",
        icon: MdGroups,
      },
    ],
  },

  // vACC Staff
  {
    name: "vACC Staff",
    dropdown: true,
    items: [
      {
        name: "ATC",
        dropdown: true,
        items: [
          {
            name: "Feedback List",
            layout: "/admin",
            icon: MdComment,
            path: "/datatables",
          },
          {
            name: "Leave of Absence (LOA)",
            layout: "/admin",
            icon: MdList,
            path: "/profile",
          },
        ],
      },
      {
        name: "General",
        dropdown: true,
        items: [
          {
            name: "Add News",
            layout: "/admin",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Add Event",
            layout: "/admin",
            path: "/profile",
            icon: MdEvent,
          },
          {
            name: "CharSceCtor",
            layout: "/auth",
            path: "/sign-in",
            icon: MdList,
          },
          {
            name: "Staff List",
            layout: "/admin",
            icon: MdPerson,
            path: "/datatables",
          },
          {
            name: "System Log",
            layout: "/admin",
            path: "/system/log",
            icon: MdList,
          },
          {
            name: "Quarterly Report",
            layout: "/auth",
            path: "/sign-in",
            icon: TbReportAnalytics,
          },
          {
            name: "vACC Settings",
            layout: "/auth",
            path: "/sign-in",
            icon: MdSettings,
          },
        ],
      },
      {
        name: "Membership",
        dropdown: true,
        items: [
          {
            name: "Email members",
            layout: "/admin",
            icon: MdEmail,
            path: "/datatables",
          },
          {
            name: "Visitors",
            layout: "/auth",
            path: "/sign-in",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Policies",
        layout: "/admin",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "/admin",
        icon: MdTask,
        path: "/datatables",
      },
    ],
  },

  // Division Staff
  {
    name: "Division Staff",
    dropdown: true,
    items: [
      {
        name: "ATC",
        dropdown: true,
        items: [
          {
            name: "Feedback List",
            layout: "/admin",
            icon: MdComment,
            path: "/datatables",
          },
          {
            name: "Statistics",
            layout: "/admin",
            icon: IoMdStats,
            path: "/profile",
          },
        ],
      },
      {
        name: "General",
        dropdown: true,
        items: [
          {
            name: "Add News",
            layout: "/admin",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Add Event",
            layout: "/admin",
            path: "/profile",
            icon: MdEvent,
          },
          {
            name: "CharSceCtor",
            layout: "/auth",
            path: "/sign-in",
            icon: MdList,
          },
          {
            name: "Staff List",
            layout: "/admin",
            icon: MdPerson,
            path: "/datatables",
          },
          {
            name: "System Log",
            layout: "/admin",
            path: "/system/log",
            icon: MdList,
          },
        ],
      },
      {
        name: "Membership",
        dropdown: true,
        items: [
          {
            name: "Email members",
            layout: "/admin",
            icon: MdEmail,
            path: "/datatables",
          },
          {
            name: "Visitors",
            layout: "/auth",
            path: "/sign-in",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Policies",
        layout: "/admin",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "/admin",
        icon: MdTask,
        path: "/datatables",
      },
    ],
  },

  // Regional Staff
  {
    name: "Regional Staff",
    dropdown: true,
    items: [
      {
        name: "ATC",
        dropdown: true,
        items: [
          {
            name: "Feedback List",
            layout: "/admin",
            icon: MdComment,
            path: "/datatables",
          },
          {
            name: "Statistics",
            layout: "/admin",
            icon: IoMdStats,
            path: "/profile",
          },
        ],
      },
      {
        name: "General",
        dropdown: true,
        items: [
          {
            name: "Add News",
            layout: "/admin",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Staff List",
            layout: "/admin",
            icon: MdPerson,
            path: "/datatables",
          },
          {
            name: "System Log",
            layout: "/admin",
            path: "/system/log",
            icon: MdList,
          },
        ],
      },
      {
        name: "Membership",
        dropdown: true,
        items: [
          {
            name: "Email members",
            layout: "/admin",
            icon: MdEmail,
            path: "/datatables",
          }
        ],
      },
      {
        name: "Policies",
        layout: "/admin",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "/admin",
        icon: MdTask,
        path: "/datatables",
      },
    ],
  },

  // Training
  {
    name: "Training Center",
    dropdown: true,
    items: [
      {
        name: "Request to be an ATC",
        layout: "/admin",
        icon: MdSchool,
        path: "/training/request",
      },
      {
        name: "My Training",
        layout: "/admin",
        icon: MdSchool,
        path: "/training",
      },
      {
        name: "Solo and Endorsement",
        layout: "/admin",
        icon: MdPlaylistAddCheck,
        path: "/training/solo-and-endorsement",
      },
      {
        name: "Instructors/Mentors and Examiner",
        layout: "/admin",
        icon: MdGroups,
        path: "/training/mentor-and-examiner",
      },
      {
        name: "Staff Center",
        layout: "/admin",
        icon: FaClipboardList,
        path: "/training/staff-center",
      },
      {
        name: "Mentor Center",
        layout: "/admin",
        icon: FaChalkboardTeacher,
        path: "/training/mentor-center",
      },
    ],
  },

  // Support center
  {
    name: "Support Center",
    layout: "/admin",
    icon: MdSupportAgent,
    path: "/support",
  },

  // List of divisions and vACCs
  {
    name: "Divisions/vACCs",
    layout: "/admin",
    path: "/system/division-and-vacc",
    icon: MdLayers,
  },
];

export default routes;
