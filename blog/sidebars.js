/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Project Review",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Project Review",
        description: "A retrospective analysis for my last job",
        slug: "/category/ProjectReview"
      },
      items: [
        "ProjectReview/front-end-core",
        "ProjectReview/front-end-related",
        "ProjectReview/cms",
        "ProjectReview/deploy",
        "ProjectReview/back-end",
      ],
    },
    "AWS",
    {
      type: "category",
      label: "Compute Networking",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Computer Networking",
        description: "A retrospective analysis for my last job",
        slug: "/category/ComputerNetworking"
      },
      items: [
        "ComputerNetworking/basic",
        "ComputerNetworking/extra"
      ],
    },
    {
      type: "category",
      label: "JavaScript",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "JavaScript",
        slug: "/category/JavaScript"
      },
      items: [
        "JavaScript/basic",
        "JavaScript/extra"
      ],
    },
    {
      type: "category",
      label: "UnityLearningNotes(Chinese Version)",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "UnityLearningNotes(Chinese Version)",
        slug: "/category/UnityLearningNotes"
      },
      items: [
        "UnityLearningNotes/Unity-GUI-coding",
        "UnityLearningNotes/Unity-UI",
        "UnityLearningNotes/Unity-interface-and-basic-concept",
      ],
    },
  ],
};

module.exports = sidebars;
