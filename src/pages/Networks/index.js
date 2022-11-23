import { useState, useEffect } from "react";

import "./networks.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

import { toast } from "react-toastify";

export default function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data().linkedin);
          setInstagram(snapshot.data().instagram);
          setGithub(snapshot.data().github);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      instagram: instagram,
      github: github,
    })
      .then(() => {
        console.log("Link registrado com sucesso!");
        toast.success("Registrado com sucesso! 👔");
      })
      .catch((error) => {
        console.log("Erro ao registrar!" + error);
        toast.error("Ops... Erro ao salvar o link ☹");
      });
  }

  return (
    <div className="admin-container">
      <Header />

      <h1 className="title-social">Suas redes sociais</h1>
      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do linkedin</label>
        <Input
          placeholder="Digite a url do linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <label className="label">Link do instagram</label>
        <Input
          placeholder="Digite a url do instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="label">Link do github</label>
        <Input
          placeholder="Digite a url do github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  );
}
