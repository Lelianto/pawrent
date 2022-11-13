import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import ForumCard from "../components/ForumCard";
import Modal from "../components/Modal";

const ForumPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout title="Pawrent">
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
              <div>
                <ForumCard />
              </div>
              <div>
                <ForumCard />
              </div>
              <div>
                <ForumCard />
              </div>
              <div>
                <ForumCard />
              </div>
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
    </Layout>
  );
};

export default ForumPage;
