import React from "react";

import type { Props as Friend } from "./index";

export type FriendsItem = Friend & {
  showOnHomepage: boolean;
};

const FRIENDS: FriendsItem[] = [
    {
        url: "https://m.bilibili.com/space/51461285?share_medium=iphone&share_plat=ios&share_session_id=D86ED645-9EE1-49B8-AA54-1A1B542BD821&share_source=WEIXIN&share_tag=s_i&timestamp=1656830821&unique_k=W2zfz9W",
        handle: "",
        name: "doublefengshan",
        github: "https://www.youtube.com/channel/UCJhJnXLVE_Zq_BpdZrRKH0g",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLSzzpb4PkosyMmyo6O82F4QfwThXCcKnDenBmoh=s176-c-k-c0x00ffffff-no-rj",
        content: (
          <>
            A video blogger on electronic equipment tesing and music<br/>
            Machine Learning, Go, python, php
          </>
        ),
        tag: "View my Bilibili",
        showOnHomepage: true,
    },
    {
    url: "https://whiothes.github.io/",
    handle: "whiothes",
    name: "Shang Zhou",
    github: "https://github.com/Whiothes",
    avatar: "https://avatars.githubusercontent.com/u/9921780?v=4",
    content: (
      <>
        - 7+ years of software development in the Linux environment <br />
        - Network programmer dealing with application protocols, and want to gain a deeper understanding of linux kernel and network architecture <br/>
        - kernel style, emacser, vimer <br/>
        - Proficient: C and tool chains such as gcc, gdb, objdump, tcpdump, git, docker etc. Competent: asm, Python, shell. Developing Proficiency: lua, lisp, SQL Database.
      </>
        ),
    tag: "View my Blog",
    showOnHomepage: true,
  },
  {
    url: "http://106.75.250.152/",
    handle: "guowei-gong",
    name: "GongGuoWei",
    github: "https://github.com/guowei-gong",
    avatar: "https://avatars.githubusercontent.com/u/62499904?v=4",
    content: (
      <>
        I am a gopher from China. I like open source and help others.
        <br />
        🌱 I’m currently learning Operating System & Kubernetes & Go, and want
        to learn everything interesting.
        <br />
        🤔 I want to make a go-kratos demo project. I call it yuumi.
        <br />
        ❤️ I like going 🏊‍♂️, sleeping in 🛌 and watching 📺 ACGN.
        <br />
        💬 Be free to ask me about anything here.
        <br />
      </>
      ),
    tag: "View my Blog",
    showOnHomepage: true,
    },
    {
        url: "http://blog.malanore.me/",
        handle: "malanore-z",
        name: "Malanore Z",
        github: "https://github.com/malanore-z",
        avatar: "https://avatars.githubusercontent.com/u/25092792?v=4",
        content: (
          <>
            Machine Learning, ACMer<br/>
            C/C++, python, Java
          </>
        ),
        tag: "View my Blog",
        showOnHomepage: true,
    },
];

export default FRIENDS;
