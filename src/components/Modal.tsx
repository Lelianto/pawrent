import { FC } from "react";

interface IModal {
  setShowModal: (status: boolean) => void;
  firstField: string;
  secondField: string;
  thirdField: string;
  submitTitle: string;
}
const Modal: FC<IModal> = ({
  setShowModal,
  firstField = "Nama Forum",
  secondField = "Deskripsi Forum",
  thirdField = "Logo Forum",
  submitTitle = "Buat Forum",
}) => {
  return (
    <div className="flex justify-center items-center bg-zinc-300/50 bg-opacity-100 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto w-1/2">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-2xl font-semibold">{submitTitle}</h3>
            <div className="flex flex-col justify-center h-8">
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setShowModal(false)}
              >
                <div className="relative text-white opacity-7 h-6 w-6 text-xl block bg-red-600 py-0 rounded-full">
                  <div className="absolute left-0 right-0 top-[2px] text-sm">
                    &#x2715;
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="rounded px-4 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                {firstField}
              </label>
              <input className="mb-4 shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                {secondField}
              </label>
              <textarea
                rows={6}
                className="mb-4 shadow appearance-none border rounded w-full py-2 px-1 text-black"
              />
              <label className="block text-black text-sm font-bold mb-1">
                {thirdField}
              </label>
              <input
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
            <button
              className="text-white bg-green-500 active:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              {submitTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
