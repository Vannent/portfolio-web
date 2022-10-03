import Image from "next/image";
import React, { FC } from "react";
import { useStateContext } from "../../context/StateContext";

const Resources: FC = () => {
  const { resourcesRef } = useStateContext();
  const resourcesList = [
    {
      id: 0,
      name: "",
      pic: "https://www.skillfinder.com.au/media/wysiwyg/the-odin-project-logo-skill-finder-partners-page.png",
      link: "https://www.theodinproject.com/",
      width: "250",
    },
    {
      id: 1,
      name: "",
      pic: "https://d33wubrfki0l68.cloudfront.net/78278bdf3a25d3e5558190b140cca9cbe86471e8/05e51/img/misuse-6.png",
      link: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjZhvfInaH4AhW7kI4IHVv1COkQFnoECCgQAQ&url=https%3A%2F%2Fwww.freecodecamp.org%2F&usg=AOvVaw2O9Sbs3zh9NHmRpWZrEZt-",
      width: "250",
    },
    {
      id: 2,
      name: "",
      pic: "https://cdn.shopify.com/s/files/1/0254/8832/6765/files/CS50_White_Transparent.png?123",
      link: "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0",
      width: "150",
    },
    {
      id: 3,
      name: "",
      pic: "https://file-uploads.teachablecdn.com/40dce6a0c9e94390b88ab7a8376abae1/e0adfd181e324fb5b83aad70cad97dda",
      link: "https://www.youtube.com/c/JavaScriptMastery",
      width: "100",
    },
    {
      id: 4,
      name: "",
      pic: "https://webdevsimplified.com/images/logo.png",
      link: "https://www.youtube.com/c/WebDevSimplified",
      width: "100",
    },
    {
      id: 5,
      name: "",
      pic: "https://global.discourse-cdn.com/standard10/uploads/codewithmosh/original/1X/a7bec93b7cd9c89e170f656d61ad5a80d32e8128.png",
      link: "https://www.youtube.com/c/programmingwithmosh",
      width: "100",
    },
    {
      id: 6,
      name: "",
      pic: "https://uploads-ssl.webflow.com/60de536f6804e72f6cd1529b/626f20a5e8a3b1578f0dccbd_Tech%20Fleet%20Logo_Final_White%201.png",
      link: "https://techfleet.org/",
      width: "100",
    },
    {
      id: 7,
      name: "",
      pic: "https://softr-prod.imgix.net/applications/d337eafb-ee5f-442e-a9d5-e04974d9c119/assets/6d8cb477-d007-4807-8a1e-9aaaa4ef6e27.png",
      link: "https://www.tribaja.co/",
      width: "150",
    },
  ];
  return (
    <div
      id="resources"
      ref={resourcesRef}
      className="md:flex hidden items-center justify-center"
    >
      <div className="h-full w-full mx-3 md:mx-10 lg:mx-32 xl:mx-72 flex items-center justify-center">
        <div className=" flex items-center justify-center flex-wrap h-3/5">
          {resourcesList.map((resource) => (
            <div
              className="w-[300px] h-[100px] flex flex-wrap items-center justify-center"
              key={resource.id}
            >
              <a href={resource.link} target="blank" className="">
                <img src={resource.pic} width={resource.width} />
                {resource.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
