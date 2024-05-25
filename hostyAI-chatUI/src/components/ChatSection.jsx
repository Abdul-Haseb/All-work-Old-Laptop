import { useState } from "react";
import { BotChatIcon, SendeSvg } from "./icons";

const ChatSection = ({ handleMobileSideBar }) => {
  const [userMessage, setUserMessage] = useState("");

  const handleInput = (e) => setUserMessage(e.target.value);
  console.log(userMessage);
  return (
    <div className="bg-[#002423] w-full text-white h-screen px-2 md:px-14 lg:px-16 xl:px-20 py-6">
      <div
        onClick={handleMobileSideBar}
        className="absolute top-2 left-2 z-20 md:hidden"
      >
        Mobile
      </div>
      <div
        id="chatBody"
        className="overflow-y-auto"
        style={{
          height: "calc(100vh - 100px)",
        }}
      >
        <div className="flex gap-4 overflow-x-auto box-border bg-[#aaf0ec25] p-4 break-words whitespace-break-spaces items-start rounded-lg">
          <span>
            <BotChatIcon />
          </span>
          <p className="break-words max-w-[830px]">
            {userMessage} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iusto nam odio quia porro officia alias qui corrupti, vel
            facilis similique autem aliquid id labore, natus quos? Aliquid rerum
            excepturi deleniti. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Obcaecati itaque dignissimos fugit provident
            quaerat quam consectetur natus. Obcaecati, ea quae? Exercitationem
            dolor quibusdam obcaecati repudiandae fugit ipsum quaerat temporibus
            quae.
          </p>
        </div>
      </div>
      {/* Chat Footer  */}
      <div className="relative px-2 md:px-4 mt-3">
        <textarea
          id="userInput"
          onChange={handleInput}
          value={userMessage}
          className="w-full pl-4 pr-16 break-words whitespace-break-spaces py-2 outline-none bg-[#001C1B] resize-none rounded-lg"
          placeholder="Type Here..."
          style={{
            paddingTop: "18px",
            lineHeight: "80%",
          }}
        ></textarea>
        <button className="absolute right-5 top-1">
          <SendeSvg />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
