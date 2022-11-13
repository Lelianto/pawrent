import { useRouter } from "next/router";
import { FC } from "react";

interface IThreadCard {
  title?: string;
  question?: string;
}

const ThreadCard: FC<IThreadCard> = ({
  title = "Bagaimana cara merawat Anjing Ras yang baik?",
  question = "Izin nanya ke para pawrent di sini, gimana ya cara rawat anjing corgi yang baru berumur 2 bulan? khawatir banget nih, thx.",
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/thread-by-id")}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 cursor-pointer">{title}</div>
        <div className="flex items-center my-4">
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
        <p className="text-gray-700 text-base">{question}</p>
      </div>
    </div>
  );
};

export default ThreadCard;
