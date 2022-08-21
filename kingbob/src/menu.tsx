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
  MdEdit,
} from "react-icons/md";
import { IoMdAirplane, IoMdStats } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { IoNewspaper } from "react-icons/io5";
import { FaChalkboardTeacher, FaClipboardList, FaQuestionCircle } from "react-icons/fa";

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
    layout: "",
    icon: MdHome,
    path: "/",
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
            layout: "",
            icon: MdEvent,
            path: "/atc/booking",
          },
          {
            name: "Send a feedback",
            layout: "",
            path: "/atc/feedback",
            icon: MdFeedback,
          },
          {
            name: "FSS roster",
            layout: "",
            path: "/atc/fss",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Membership",
        dropdown: true,
        items: [
          {
            name: "Change my email",
            external: true,
            icon: MdEdit,
            link: "https://my.vatsim.net/user/email",
          },
          {
            name: "Email subscription",
            layout: "",
            icon: MdEmail,
            path: "/my/email-subscription",
          },
          {
            name: "Membership help",
            external: true,
            icon: MdHelpCenter,
            link: "https://my.vatsim.net/membership-support",
          },
          {
            name: "My data",
            layout: "",
            icon: IoMdAirplane,
            path: "/my/data",
          },
        ],
      },
      {
        name: "Pilot Resource Center",
        external: true,
        icon: IoMdAirplane,
        link: "https://my.vatsim.net/pilots/train",
      },
      {
        name: "HQ Changelog",
        external: true,
        icon: MdList,
        link: "https://github.com/wildangunawan/headquarter/CHANGELOG.md",
      },
      {
        name: "My Profile",
        layout: "",
        path: "/my/profile",
        icon: MdPerson,
      },
      {
        name: "My Stats",
        external: true,
        link: "https://stats.vatsim.net/stats/1300014",
        icon: MdQueryStats,
      },
      {
        name: "Notifications",
        layout: "",
        path: "/notifications",
        icon: MdNotifications,
      },
      {
        name: "VATSIM Forum",
        external: true,
        link: "https://forums.vatsim.net/",
        icon: MdForum,
      },
      {
        name: "Staff List",
        layout: "",
        path: "/staff/list",
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
            layout: "",
            icon: MdComment,
            path: "/staff/atc/feedback-list",
          },
          {
            name: "Leave of Absence (LOA)",
            layout: "",
            icon: MdList,
            path: "/staff/atc/leave-of-absence",
          },
        ],
      },
      {
        name: "General",
        dropdown: true,
        items: [
          {
            name: "Add News",
            layout: "",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Add Event",
            layout: "",
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
            layout: "",
            icon: MdPerson,
            path: "/staff/list",
          },
          {
            name: "System Log",
            layout: "",
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
            layout: "",
            path: "/staff/vacc/settings",
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
            layout: "",
            icon: MdEmail,
            path: "/staff/membership/email-members",
          },
          {
            name: "Visitors",
            layout: "",
            path: "/staff/membership/visitor",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Policies",
        layout: "",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "",
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
            layout: "",
            icon: MdComment,
            path: "/staff/atc/feedback-list",
          },
          {
            name: "Statistics",
            layout: "",
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
            layout: "",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Add Event",
            layout: "",
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
            layout: "",
            icon: MdPerson,
            path: "/staff/list",
          },
          {
            name: "System Log",
            layout: "",
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
            layout: "",
            icon: MdEmail,
            path: "/staff/membership/email-members",
          },
          {
            name: "Visitors",
            layout: "",
            path: "/staff/membership/visitor",
            icon: MdGroups,
          },
        ],
      },
      {
        name: "Policies",
        layout: "",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "",
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
            layout: "",
            icon: MdComment,
            path: "/staff/atc/feedback-list",
          },
          {
            name: "Statistics",
            layout: "",
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
            layout: "",
            icon: IoNewspaper,
            path: "/news/add",
          },
          {
            name: "Staff List",
            layout: "",
            icon: MdPerson,
            path: "/staff/list",
          },
          {
            name: "System Log",
            layout: "",
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
            layout: "",
            icon: MdEmail,
            path: "/staff/membership/email-members",
          }
        ],
      },
      {
        name: "Policies",
        layout: "",
        icon: MdPolicy,
        path: "/datatables",
      },
      {
        name: "Tasks",
        layout: "",
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
        layout: "",
        icon: MdSchool,
        path: "/training/request",
      },
      {
        name: "My Training",
        layout: "",
        icon: MdSchool,
        path: "/training",
      },
      {
        name: "Solo and Endorsement",
        layout: "",
        icon: MdPlaylistAddCheck,
        path: "/training/solo-and-endorsement",
      },
      {
        name: "Instructors/Mentors and Examiner",
        layout: "",
        icon: MdGroups,
        path: "/training/mentor-and-examiner",
      },
      {
        name: "Staff Center",
        layout: "",
        icon: FaClipboardList,
        path: "/training/staff-center",
      },
      {
        name: "Mentor Center",
        layout: "",
        icon: FaChalkboardTeacher,
        path: "/training/mentor-center",
      },
    ],
  },

  // Support center
  {
    name: "Support Center",
    layout: "",
    icon: MdSupportAgent,
    path: "/support",
  },

  // List of divisions and vACCs
  {
    name: "Divisions/vACCs",
    layout: "",
    path: "/system/division-and-vacc",
    icon: MdLayers,
  },

  // List of divisions and vACCs
  {
    name: "Frequently Asked Questions",
    layout: "",
    path: "/support/faq",
    icon: FaQuestionCircle,
  },
];

export default routes;
