const TASK_STATUS = {
  isActive: "active",
  isCompleted: "completed",
  isBlocked: "blocked",
};
const BUSINESS_CONTEXT_STATUS = {
  notRead: "not_read",
  activeTask: "active",
  read: "read",
};
let tasksList = [
  {
    title: "Application Setup",
    status: TASK_STATUS.isCompleted,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Paisley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Paisley Novikoff",
          imageUrl: "https://randus.org/photos/w/c3c1989cbcbc1c19.jpg",
        },
        created_at: 1665005008326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
      {
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        content: `Hello!\nMy name is Mckinley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Mckinley Monte",
          imageUrl: "https://randus.org/photos/w/c7d79d04beb4140b.jpg",
        },
        created_at: 1664005008326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
    ],
  },
  {
    title: "Static Book List",
    status: TASK_STATUS.isCompleted,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Mckinley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Mckinley Monte",
          imageUrl: "https://randus.org/photos/w/c7d79d04beb4140b.jpg",
        },
        created_at: 1665995008326,
        status: BUSINESS_CONTEXT_STATUS.notRead,
      },
      {
        title: "Lorem ipsum dolor sit.",
        content: `Hello!\nMy name is Reuben, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Reuben Cramp",
          imageUrl: "https://randus.org/photos/m/c399bd99ff3c1c38.jpg",
        },
        created_at: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.activeTask,
      },
      {
        title: "Lorem ipsum dolor sit amet.",
        content: `Hello!\nMy name is Paisley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Paisley Novikoff",
          imageUrl: "https://randus.org/photos/w/c3c1989cbcbc1c19.jpg",
        },
        created_at: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
    ],
  },
  {
    title: "Administration Panel",
    status: TASK_STATUS.isCompleted,
    businessContext: [
      {
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        content: `Hello!\nMy name is Mckinley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Mckinley Monte",
          imageUrl: "https://randus.org/photos/w/c7d79d04beb4140b.jpg",
        },
        created_at: 1665005008326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Paisley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Paisley Novikoff",
          imageUrl: "https://randus.org/photos/w/c3c1989cbcbc1c19.jpg",
        },
        created_at: 1664005008326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Carson, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Carson Sarracino",
          imageUrl: "https://randus.org/photos/m/f3fdfcc0ff640414.jpg",
        },
        created_at: 1664005008326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
    ],
  },
  {
    title: "Connect Admin with Frontend",
    status: TASK_STATUS.isActive,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Paisley, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Paisley Novikoff",
          imageUrl: "https://randus.org/photos/w/c3c1989cbcbc1c19.jpg",
        },
        created_at: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.notRead,
      },
      {
        title: "Application has been accepted 🎉🙌",
        content: `Hello!\nMy name is Lexi, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Lexi Tuohey",
          imageUrl: "https://randus.org/photos/w/c3cdddc1c3c3c303.jpg",
        },
        created_at: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.activeTask,
      },
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "https://randus.org/photos/w/e3c9dcc09e848484.jpg",
        },
        created_at: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
    ],
  },
  {
    title: "Book Review Feature",
    status: TASK_STATUS.isBlocked,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        created_at: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.notRead,
      },
      {
        title: "Application has been accepted 🎉🙌",
        content: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        created_at: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.activeTask,
      },
      {
        title: "New sprint, tasks and intro information.",
        content: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        created_at: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.read,
      },
    ],
  },
];
export { tasksList, TASK_STATUS, BUSINESS_CONTEXT_STATUS };
