const TASK_STATUS = {
  isActive: "active",
  isCompleted: "completed",
  isBlocked: "blocked",
};
const BUSINESS_CONTEXT_STATUS = {
  isActive: "active",
  isSeen: "read",
  isNotSeen: "not_seen",
};
const tasksList = [
  {
    title: "Application Setup",
    status: TASK_STATUS.isActive,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        createdAt: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.isActive,
      },
      {
        title: "Application has been accepted 🎉🙌",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.isNotSeen,
      },
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.isSeen,
      },
    ],
  },
  {
    title: "Static Book List",
    status: TASK_STATUS.isBlocked,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        createdAt: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.isActive,
      },
      {
        title: "Application has been accepted 🎉🙌",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.isNotSeen,
      },
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.isSeen,
      },
    ],
  },
  {
    title: "Administration Panel",
    status: TASK_STATUS.isBlocked,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        createdAt: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.isActive,
      },
      {
        title: "Application has been accepted 🎉🙌",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.isNotSeen,
      },
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.isSeen,
      },
    ],
  },
  {
    title: "Connect Admin with Frontend",
    status: TASK_STATUS.isBlocked,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        createdAt: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.isActive,
      },
      {
        title: "Application has been accepted 🎉🙌",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.isNotSeen,
      },
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.isSeen,
      },
    ],
  },
  {
    title: "Book Review Feature",
    status: TASK_STATUS.isBlocked,
    businessContext: [
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Olga, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Olga Nelson",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        createdAt: 1666005008326,
        status: BUSINESS_CONTEXT_STATUS.isActive,
      },
      {
        title: "Application has been accepted 🎉🙌",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666005000326,
        status: BUSINESS_CONTEXT_STATUS.isNotSeen,
      },
      {
        title: "New sprint, tasks and intro information.",
        description:
          "Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on...",
        message: `Hello!\nMy name is Kirsten, and I'm super happy to announce that your application to join Coders Family has been accepted! 🎉🙌\n\nYou really impressed us during the interview process, and we'd like to offer you a project with {COMPANY}. We've been working with {COMPANY} for quite some time, and it's important for us to keep them satisfied with our services — hence why we believe you'll be a great fit for this job.\n\nHere's the project overview:\nYou'll be responsible for building a database and page for recording and displaying book ratings. We'd like to work in two week-long sprints, we've already given you a head start and prepared your tasks to deliver in your first sprint.`,
        author: {
          name: "Kirsten Aniston",
          imageUrl: "../assets/mEZ3PoFGs_k.png",
        },
        date: 1666004000326,
        status: BUSINESS_CONTEXT_STATUS.isSeen,
      },
    ],
  },
];
export { tasksList, TASK_STATUS, BUSINESS_CONTEXT_STATUS };
