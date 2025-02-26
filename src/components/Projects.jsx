import React from 'react';
import "./projects.css";
import { useContext } from 'react';
import { ContextLanguage } from '../context/LanguageContexts';
const projectsData = [
  {
    id: 1,
    title: "Workintech",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aTscBQhc8FOHuUPW2qMar3teAtt1oMq7545BlZgGOMt-ot5AlnOBVy8vUOrFKTsjR0oQvPdx6m1ZrvgBEjW7~R1MCEcVMy~XuWc-QkIiyl-xE9efxNeo2MiLnD-GdjWmFimxNFkbhQzQ411ZS1uX-IE~I-N22vC9ChWJi-rj1CpAiXIRqIgVrDl1fmuIXPdPOq8CuiFyVAG0mY6kRA3f4mN07QrsDrbCXeYejmsqIspL0oEvRTkqxbeD7xC9bP7o2Gp4yBI1r8MRaElRcdxz0mfB5YwnMXnMOqY0-BYNqVyQQcvNx94PcabJDi3Uu~fOdn0WsXZ56jrJOvZW84e6sQ__",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Random Jokes",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://s3-alpha-sig.figma.com/img/64b8/0612/2ad18b91bc83b5e0c2524ee319ac4a12?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rdkQcKglL1bUbOWGBJqYUiX-A8VKHLyLKOK05G3DEVSdXmN7gWWUByz9PfydVU8rSK2SNH-c-Rxivcs6LD87TaznPi15XREZE8d-3vV2vMZdugTVTbLOCYOr3mHR1R0tpnl2vrK-vjDc3NMoYIlTgnmoL7LKUWooo1gSC-k8U9Ho02TsCdyhTV7jCnG0ywDmpnJpZJna9Kyv9KkU1xbUbkFB-ITjnJs73Tt30yUrzd4BOgdnUfPjZ9Y-UHHi8nDo8AoNhNpl11HGhQzCn~GJbm6GjbHy89taZn4N3FBxcEWgYMyjF69SnCi019Io4HUmVplbhklFyYZqLwUiSqaAEA__",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Journey",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t69aN2-FL2J2vFFKtZVXV5B-1LjBchrQYojhI9ryI2NhGYSLoBP0dbel5on0MsI2Zao0iZst0TaKxU0cceRYzFgKklq7Mxa~cDIvaUAMcH5-MHq6KIWfuzvI~tnc1hp9Yr5PXISijcwnBTvy8RN~TbCC65gYOfz2EMUlbmLEu8Xjt8E35UZcy3GA49QzqfKYxceg9Za1NufHDaZAy-wBan2EJTAHcngjZAj804JhvLIXTPE1WJB92arMAdzqu6A8A6fyd0kBgp5j9Xd7RYaiLJp~jppPmp9LghFQzp~yqiNdF6AKH9hKlgx4XlqjAC5FmUr60pViuk79th1bCJueOw__",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {

  const {content } = useContext(ContextLanguage);



  return (
    <div className='projects'>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <img src={project.image} alt={project.title} className="projects-image" />
            <h3 className="projects-name">{project.title}</h3>
            <p className="projects-description">{project.description}</p>
            <div className="projects-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="projects-tag">{tag}</span>
              ))}
            </div>
            <div className="projects-links">
              <a href={project.github} className="projects-link">Github</a>
              <a href={project.live} className="projects-link">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;