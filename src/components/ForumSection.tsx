import { useState } from "react";
import ForumCard from "./ForumCard";
import Modal from "./Modal";
import { IForumCard } from "./ForumCard";

export const forums: IForumCard[] = [
  {
    name: "Komunitas Pecinta Anjing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    backgroundImage: "url('/pawrent-1.jpeg')",
  },
  {
    name: "Forum Jual Beli Anjing",
    description:
      "Defining routes by using predefined paths is not always enough for complex applications. Defining routes by using predefined paths is not always enough for complex applications.",
    backgroundImage: "url('/pawrent-3.webp')",
  },
  {
    name: "Tim Diskusi Alaskan Malamut",
    description:
      "Lorem ipsum dolor sit amet, Defining routes by using predefined paths is not always enough for complex applications! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    backgroundImage: "url('/pawrent-3.webp')",
  },
  {
    name: "Komunitas Pawrent Alaskan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    backgroundImage: "url('/pawrent-1.jpeg')",
  },
];

const ForumSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="px-20 py-8">
        <div className="border border-gray rounded-lg p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => setShowModal(true)}
          >
            Buat Forum
          </button>
          <div className="border border-gray w-full" />
          <div className="mt-4">
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              {forums.map((forum) => (
                <div>
                  <ForumCard {...forum} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal
            setShowModal={setShowModal}
            firstField="Nama Forum"
            secondField="Deskripsi Forum"
            thirdField="Logo Forum"
            submitTitle="Buat Forum"
          />
        </>
      ) : null}
    </>
  );
};

export default ForumSection;
