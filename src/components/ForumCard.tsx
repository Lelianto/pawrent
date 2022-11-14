import { useRouter } from "next/router";
import { FC } from "react";

export interface IForumCard {
  name?: string;
  description?: string;
  backgroundImage?: string;
}

const ForumCard: FC<IForumCard> = ({
  name = "Komunitas Pecinta Anjing",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  backgroundImage = "url('/pawrent-1.jpeg')",
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/forum-by-id")}
      className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg hover:shadow-xl cursor-pointer"
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `${backgroundImage}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border border-slate-100 lg:border-l-0 lg:border-slate-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/personal.webp"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">
              Si Paling Pecinta Hewan
            </p>
            <p className="text-gray-600">14 Nov 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
