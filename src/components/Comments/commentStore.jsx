// commentStore.js
import create from "zustand";

export const useCommentStore = create((set) => ({
  comments: [
    {
      id: 1,
      author: "Hamza",
      time: "1 day ago",
      text: "harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum nobis.",
      avatar: require("../../assets/images/boy1.png"),
    },
    {
      id: 2,
      author: "Mohammed",
      time: "12 hrs ago",
      text: "Sure, Thanks",
      avatar: require("../../assets/images/men2.png"),
    },
  ],
  addComment: (text) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          id: state.comments.length + 1,
          author: "You",
          time: "Just now",
          text: text,
          avatar: require("../../assets/images/emptylady.png"), // default avatar path
        },
      ],
    })),
}));
