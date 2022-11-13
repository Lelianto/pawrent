import React, { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import ThreadCard from "../components/ThreadCard";

const ForumById = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout title="Pawrent">
      <div className="px-4 my-8">
        <div className="border border-gray rounded-lg">
          <div className="p-4">
            <div
              className="w-full h-80 relative rounded-md"
              style={{
                backgroundImage: `url('/pawrent-2.jpeg')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-white/80 p-2 px-4 italic font-bold rounded-md max-w-fit absolute bottom-4 left-4">
                Komunitas Pecinta Anjing
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
              </div>
            </div>
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
            <div className="text-sm font-bold">Deskripsi Forum</div>
            <div className="text-sm">
              Korgi Pembroke Wales adalah salah satu ras anjing yang bertubuh
              pendek dari Pembrokeshire, suatu kota di barat Wales. Anjing ini
              memiliki dua lapis bulu dengan panjang sedang, yaitu lapisan atas
              yang lebih kasar dan lapisan bawah yang berbulu lembut. Welsh
              Corgi Cardigan adalah anjing kecil yang lincah, aktif, dan pintar
              dengan temperamen yang stabil. Sifatnya yang mudah bergaul
              menjadikannya cocok sebagai sahabat atau anjing keluarga.
            </div>
          </div>
          <div className="border border-gray w-full" />
          <div className="p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={() => setShowModal(true)}
            >
              Buat Thread/Pertanyaan Baru
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2">
              <div>
                <ThreadCard />
              </div>
              <div>
                <ThreadCard title="Diskusi Terbuka Soal Corgi" />
              </div>
              <div>
                <ThreadCard title="Mau Beli Corgi, Apa aja yang perlu diperhatikan?" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <Modal
            setShowModal={setShowModal}
            firstField="Judul Thread/Pertanyaan"
            secondField="Deskripsi Thread/Pertanyaan"
            thirdField="Gambar Thread"
            submitTitle="Buat Thread"
          />
        </>
      ) : null}
    </Layout>
  );
};

export default ForumById;
